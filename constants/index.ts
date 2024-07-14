import {
  House,
  ImageDown,
  Atom,
  Eraser,
  PaintRoller,
  FileX2,
  CreditCard,
  UserRound,
  LucideIcon
} from "lucide-react";

interface SideBarLinks {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const SideBar: SideBarLinks[] = [
  {
    title: "Home",
    href: "dashboard",
    icon: House
  },
  {
    title: "Image Restore",
    href: "dashboard/tools/add/restore",
    icon: ImageDown
  },
  {
    title: "Generate Fill",
    href: "dashboard/tools/add/fill",
    icon: Atom
  },
  {
    title: "Object Remove",
    href: "dashboard/tools/add/remove",
    icon: Eraser
  },
  {
    title: "Object Recolor",
    href: "dashboard/tools/add/recolor",
    icon: PaintRoller
  },
  {
    title: "Background Remove",
    href: "dashboard/tools/add/removeBackground",
    icon: FileX2
  },
  {
    title: "Profile",
    href: "dashboard/profile",
    icon: UserRound
  },
  {
    title: "Buy Credits",
    href: "dashboard/credits",
    icon: CreditCard
  }
];

export const navLinks = [
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
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const toolType = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;