"""
Vectorise the official Edinext logo PNG into the grouped master SVG.

One-off tool, kept for reproducibility. Requires: pip install potracer pillow numpy
Usage: python scripts/brand/trace-logo.py EDINEXT_LOGO.png [brand/edinext-logo-master.svg]

Groups in the output: #wordmark (blue letters), #symbol (the brush-stroke X),
#tagline (blue "Innovare Crescere" letters), #tagline-x (the small X).
"""
import sys
import numpy as np
import potrace
from PIL import Image

SRC = sys.argv[1]  # the official raster logo (2000x1000 PNG from the old site)
OUT = sys.argv[2] if len(sys.argv) > 2 else "brand/edinext-logo-master.svg"

BLUE = np.array([0, 118, 185])
GREEN = np.array([129, 183, 54])
BLACK = np.array([30, 30, 30])
WHITE = np.array([255, 255, 255])

im = Image.open(SRC).convert("RGBA")
scale = 2
im = im.resize((im.width * scale, im.height * scale), Image.LANCZOS)
a = np.array(im).astype(float)
alpha = a[..., 3:4] / 255.0
rgb = a[..., :3] * alpha + 255 * (1 - alpha)

palette = np.stack([WHITE, BLUE, GREEN, BLACK])
dist = ((rgb[:, :, None, :] - palette[None, None, :, :]) ** 2).sum(-1)
label = dist.argmin(-1)


def fmt(v):
    return f"{v / scale:.1f}".rstrip("0").rstrip(".")


def trace(mask):
    """Return a list of (cx, cy, d) per closed curve, in source coordinates."""
    bm = potrace.Bitmap(~mask)
    path = bm.trace(turdsize=6, turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY, alphamax=1.0, opticurve=True, opttolerance=0.2)
    out = []
    for curve in path:
        sp = curve.start_point
        xs, ys = [sp.x], [sp.y]
        d = [f"M{fmt(sp.x)} {fmt(sp.y)}"]
        for seg in curve.segments:
            xs.append(seg.end_point.x); ys.append(seg.end_point.y)
            if seg.is_corner:
                d.append(f"L{fmt(seg.c.x)} {fmt(seg.c.y)}L{fmt(seg.end_point.x)} {fmt(seg.end_point.y)}")
            else:
                d.append(f"C{fmt(seg.c1.x)} {fmt(seg.c1.y)} {fmt(seg.c2.x)} {fmt(seg.c2.y)} {fmt(seg.end_point.x)} {fmt(seg.end_point.y)}")
        d.append("Z")
        out.append(((min(xs) + max(xs)) / 2 / scale, (min(ys) + max(ys)) / 2 / scale, "".join(d)))
    return out


def group_of(cx, cy):
    if 900 <= cx <= 1130 and cy > 600:
        return "tagline-x"
    if cy > 660:
        return "tagline"
    if 1410 <= cx <= 1770:
        return "symbol"
    return "wordmark"


groups = {g: {"green": [], "black": [], "blue": []} for g in ["wordmark", "symbol", "tagline", "tagline-x"]}
for layer, idx in [("green", 2), ("black", 3), ("blue", 1)]:
    for cx, cy, d in trace(label == idx):
        # potrace returns the outer border of the inverted bitmap as one huge curve: skip it
        if d.count("C") + d.count("L") < 6 and cx == 1000:
            continue
        groups[group_of(cx, cy)][layer].append(d)

fills = {"green": "#81B736", "black": "#1D1D1B", "blue": "#0076B9"}
parts = []
for g, layers in groups.items():
    inner = "".join(
        f'<path data-layer="{layer}" fill="{fills[layer]}" fill-rule="evenodd" d="{"".join(ds)}"/>' for layer, ds in layers.items() if ds
    )
    parts.append(f'  <g id="{g}">{inner}</g>')

h, w = label.shape
NL = chr(10)
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w // scale} {h // scale}">' + NL + NL.join(parts) + NL + "</svg>" + NL
open(OUT, "w", encoding="utf-8").write(svg)
print("written", OUT, len(svg) // 1024, "KB", {g: {l: len(v) for l, v in L.items()} for g, L in groups.items()})
