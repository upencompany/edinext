import Image from "next/image";

/** JPEGs retain native pixels and embed efficiently in the printed PDF. */
export const mockupScenes = ["card-thermos", "stationery", "devices", "badge", "notebook", "tote", "mug", "rollup", "signage"] as const;
export type MockupScene = (typeof mockupScenes)[number];

export function Mockup({ scene }: { scene: MockupScene }) {
  return (
    <Image
      src={`/press-kit/mockups/edinext-mockup-${scene}.jpg`}
      alt=""
      width={1672}
      height={941}
      unoptimized
      loading="eager"
      className="h-full w-full object-cover"
    />
  );
}
