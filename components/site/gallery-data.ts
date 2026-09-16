export type GalleryCategory =
  | "Whitetail Deer"
  | "Turkey"
  | "Waterfowl"
  | "Elk"
  | "Predators & Furbearers";

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  categories: GalleryCategory[];
};

export const galleryCategories: GalleryCategory[] = [
  "Whitetail Deer",
  "Turkey",
  "Waterfowl",
  "Elk",
  "Predators & Furbearers",
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/mount-02.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer shoulder mount with tall antlers",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-01.jpeg",
    width: 2060,
    height: 1679,
    alt: "Wild turkey mount with fanned tail perched on a branch",
    categories: ["Turkey"],
  },
  {
    src: "/images/gallery/mount-03.jpeg",
    width: 1800,
    height: 2400,
    alt: "Wood duck mounted in flight on a driftwood base",
    categories: ["Waterfowl"],
  },
  {
    src: "/images/gallery/mount-07.jpeg",
    width: 640,
    height: 1136,
    alt: "Elk shoulder mount with sweeping antlers",
    categories: ["Elk"],
  },
  {
    src: "/images/gallery/mount-18.jpeg",
    width: 1800,
    height: 2400,
    alt: "Bobcat full-body mount perched on a rock",
    categories: ["Predators & Furbearers"],
  },
  {
    src: "/images/gallery/mount-05.jpeg",
    width: 1800,
    height: 2400,
    alt: "Pair of geese mounted in flight",
    categories: ["Waterfowl"],
  },
  {
    src: "/images/gallery/mount-13.jpeg",
    width: 1314,
    height: 1212,
    alt: "Black bear full-body mount in a walking pose",
    categories: ["Predators & Furbearers"],
  },
  {
    src: "/images/gallery/mount-12.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer mount displayed atop a bourbon barrel habitat base",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-06.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer shoulder mount, close portrait",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-17.jpeg",
    width: 1800,
    height: 2400,
    alt: "Wild turkey mount with fanned tail against a barnwood backdrop",
    categories: ["Turkey"],
  },
  {
    src: "/images/gallery/mount-19.png",
    width: 1086,
    height: 1448,
    alt: "Two whitetail deer shoulder mounts displayed together",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-08.jpeg",
    width: 1512,
    height: 2016,
    alt: "Whitetail deer shoulder mount from a dramatic low angle",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-11.jpeg",
    width: 1800,
    height: 2400,
    alt: "Beaver mount displayed in a trapping habitat scene",
    categories: ["Predators & Furbearers"],
  },
  {
    src: "/images/gallery/mount-15.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer mount with cattails on a barrel habitat base",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-20.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer shoulder mount with a tall rack",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-10.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer head mounted with a vintage canvas rucksack",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-16.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer head portrait mount",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-21.jpeg",
    width: 1800,
    height: 2400,
    alt: "Whitetail deer shoulder mount with a symmetric rack",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-14.jpeg",
    width: 1512,
    height: 2016,
    alt: "Whitetail deer head portrait mount with hunt tag",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-09.jpeg",
    width: 1800,
    height: 2400,
    alt: "Detail of freshly capped whitetail deer antlers",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-04.png",
    width: 1086,
    height: 1448,
    alt: "Showcase of custom deer, elk, and waterfowl mounts",
    categories: ["Whitetail Deer", "Elk", "Waterfowl"],
  },
  {
    src: "/images/gallery/mount-22.jpeg",
    width: 3024,
    height: 4032,
    alt: "Elk shoulder mount displayed outdoors near a rustic fence",
    categories: ["Elk"],
  },
  {
    src: "/images/gallery/mount-24.jpeg",
    width: 3024,
    height: 4032,
    alt: "Whitetail deer mount on a barrel base under a blue sky",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-28.png",
    width: 2048,
    height: 2048,
    alt: "Wild turkey mount in full strut",
    categories: ["Turkey"],
  },
  {
    src: "/images/gallery/mount-25.jpeg",
    width: 2544,
    height: 4018,
    alt: "Whitetail deer mount with a tall rack on a barrel base",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-27.png",
    width: 2048,
    height: 2048,
    alt: "Wild turkey mount with fanned tail, detail view",
    categories: ["Turkey"],
  },
  {
    src: "/images/gallery/mount-23.jpeg",
    width: 1792,
    height: 3018,
    alt: "Whitetail deer mount on a barrel base in a winter setting",
    categories: ["Whitetail Deer"],
  },
  {
    src: "/images/gallery/mount-26.png",
    width: 1125,
    height: 1500,
    alt: "Wild turkey mount in full strut perched outdoors",
    categories: ["Turkey"],
  },
];
