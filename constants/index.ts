const SideBar = [
  {
    title: "Home",
    href: "",
    icon: "/assets/house.png"
  },
  {
    title: "Image Restore",
    href: "tools/add/restore",
    icon: "/assets/image-down.png"
  },
  {
    title: "Image Resize",
    href: "tools/add/fill",
    icon: "/assets/atom.png"
  },
  {
    title: "Object Remove",
    href: "tools/add/remove",
    icon: "/assets/eraser.png"
  },
  {
    title: "Object Recolor",
    href: "tools/add/recolor",
    icon: "/assets/paint-roller.png"
  },
  {
    title: "Background Remove",
    href: "tools/add/removeBackground",
    icon: "/assets/file-x-2.png"
  },
  {
    title: "Profile",
    href: "profile",
    icon: "/assets/user-round.png"
  }
];

const navLinks = [
  {
    title: "Home",
    id: "home"
  },
  {
    title: "Features",
    id: "features"
  },
  {
    title: "Pricing",
    id: "pricing"
  },
  {
    title: "About",
    id: "about"
  }
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      { label: "20 Free Credits", isIncluded: true },
      { label: "Basic Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: false },
      { label: "Priority Updates", isIncluded: false }
    ]
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      { label: "120 Credits", isIncluded: true },
      { label: "Full Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: true },
      { label: "Priority Updates", isIncluded: false }
    ]
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      { label: "2000 Credits", isIncluded: true },
      { label: "Full Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: true },
      { label: "Priority Updates", isIncluded: true }
    ]
  }
];

export const toolType = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "assets/image-down.png"
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "assets/file-x-2.png"
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "assets/atom.png"
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: { remove: { prompt: "", removeShadow: true, multiple: true } },
    icon: "assets/eraser.png"
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: { recolor: { prompt: "", to: "", multiple: true } },
    icon: "assets/paint-roller.png"
  }
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778
  }
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: ""
};

export const creditFee = -1;

export { SideBar, navLinks };
