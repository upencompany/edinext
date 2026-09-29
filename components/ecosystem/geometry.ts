import { actors, families } from "@/content/ecosystem";
import { solutions } from "@/content/solutions";
import type { ActorId, FamilyId } from "@/content/types";

/**
 * Radial layout shared by the hero figure and the interactive explorer.
 * Applications sit on the outer ring, grouped by area; the six groups of
 * people sit on the inner ring. Each curve is a real relationship taken
 * from `solution.actors` — nothing decorative.
 */
export const SIZE = 640;
export const C = SIZE / 2;
export const R_APP = 228;
export const R_ACTOR = 96;
export const R_ARC = 206;

const toRad = (deg: number) => (deg * Math.PI) / 180;
const polar = (r: number, deg: number) => ({ x: C + r * Math.cos(toRad(deg)), y: C + r * Math.sin(toRad(deg)) });
const round = (n: number) => Math.round(n * 10) / 10;

export interface AppNode {
  slug: string;
  name: string;
  family: FamilyId;
  angle: number;
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor: "start" | "end" | "middle";
  actors: ActorId[];
  hasPage: boolean;
}

export interface ActorNode {
  id: ActorId;
  angle: number;
  x: number;
  y: number;
}

export interface Link {
  app: string;
  actor: ActorId;
  d: string;
  length: number;
}

export interface FamilyArc {
  id: FamilyId;
  index: string;
  d: string;
  lx: number;
  ly: number;
}

function build() {
  const order = families.map((f) => f.id);
  const grouped = order.map((id) => solutions.filter((s) => s.family === id));
  const slots = solutions.length + order.length; // one empty slot between areas
  const step = 360 / slots;
  let cursor = -90 + step / 2;

  const apps: AppNode[] = [];
  const arcs: FamilyArc[] = [];

  grouped.forEach((group, gi) => {
    const start = cursor;
    group.forEach((s) => {
      const p = polar(R_APP, cursor);
      const l = polar(R_APP + 14, cursor);
      const cos = Math.cos(toRad(cursor));
      apps.push({
        slug: s.slug,
        name: s.name,
        family: s.family,
        angle: cursor,
        x: round(p.x),
        y: round(p.y),
        lx: round(l.x),
        ly: round(l.y + 4),
        anchor: Math.abs(cos) < 0.15 ? "middle" : cos > 0 ? "start" : "end",
        actors: s.actors,
        hasPage: s.hasPage,
      });
      cursor += step;
    });
    const end = cursor - step;
    const a = polar(R_ARC, start - step * 0.3);
    const b = polar(R_ARC, end + step * 0.3);
    const large = end - start + step * 0.6 > 180 ? 1 : 0;
    const mid = polar(R_ARC - 16, (start + end) / 2);
    arcs.push({
      id: order[gi],
      index: families[gi].index,
      d: `M${round(a.x)} ${round(a.y)} A${R_ARC} ${R_ARC} 0 ${large} 1 ${round(b.x)} ${round(b.y)}`,
      lx: round(mid.x),
      ly: round(mid.y + 3.5),
    });
    cursor += step; // gap
  });

  const actorNodes: ActorNode[] = actors.map((a, i) => {
    const angle = -90 + 30 + i * 60;
    const p = polar(R_ACTOR, angle);
    return { id: a.id, angle, x: round(p.x), y: round(p.y) };
  });

  const links: Link[] = [];
  for (const app of apps) {
    const start = polar(R_APP - 5, app.angle);
    for (const actorId of app.actors) {
      const actor = actorNodes.find((a) => a.id === actorId)!;
      const mx = (start.x + actor.x) / 2;
      const my = (start.y + actor.y) / 2;
      const cx = C + (mx - C) * 0.28;
      const cy = C + (my - C) * 0.28;
      const length = Math.hypot(start.x - cx, start.y - cy) + Math.hypot(actor.x - cx, actor.y - cy);
      links.push({
        app: app.slug,
        actor: actorId,
        d: `M${round(start.x)} ${round(start.y)} Q${round(cx)} ${round(cy)} ${actor.x} ${actor.y}`,
        length: Math.ceil(length),
      });
    }
  }

  return { apps, arcs, actorNodes, links };
}

export const layout = build();
