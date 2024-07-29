import {
  backgroundRemove,
  imageResize,
  imageRestore,
  objectRecolor,
  objectRemove
} from "@/components/homepage/FeaturesImages";

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
    icon: "/assets/bg-remove-icon.png"
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
  },
  {
    title: "Contact",
    id: "contact"
  }
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/free.png",
    price: 0,
    credits: 10,
    inclusions: [
      { label: "10 Free Credits", isIncluded: true },
      { label: "Basic Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: false },
      { label: "Priority Updates", isIncluded: false }
    ]
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/pro-icon.png",
    price: 39,
    credits: 100,
    inclusions: [
      { label: "100 Credits", isIncluded: true },
      { label: "Full Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: true },
      { label: "Priority Updates", isIncluded: false }
    ]
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/premium-icon.png",
    price: 199,
    credits: 1000,
    inclusions: [
      { label: "1000 Credits", isIncluded: true },
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
    icon: "/assets/image-down.png"
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "/assets/file-x-2.png"
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "/assets/atom.png"
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: { remove: { prompt: "", removeShadow: true, multiple: true } },
    icon: "/assets/eraser.png"
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: { recolor: { prompt: "", to: "", multiple: true } },
    icon: "/assets/paint-roller.png"
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

export const features = [
  {
    heading: "Image Restore",
    description:
      "Breathe new life into old and damaged photographs. Our state-of-the-art restoration tool uses advanced AI algorithms to meticulously repair scratches, tears, and color fading. Whether it's a treasured family photo or a historic image, we'll help you preserve your memories for future generations.",
    keyPoints: [
      "AI-powered restoration",
      "Remove scratches, tears, and stains",
      "Enhance colors and details",
      "Restore faded photographs"
    ],
    image: imageRestore,
    imageSide: "left"
  },
  {
    heading: "Image Resize",
    description:
      "Resize your images without compromising on quality. Our tool intelligently resizes images to fit your needs, whether it's for social media, websites, or print. Enjoy high-quality results every time.",
    keyPoints: [
      "Maintain image quality",
      "Custom dimensions for web, social media, and print",
      "Batch resizing for multiple images",
      "Aspect ratio control"
    ],
    image: imageResize,
    imageSide: "right"
  },
  {
    heading: "Object Remover",
    description:
      "Effortlessly remove unwanted objects from your photos. Our object remover tool uses seamless background filling technology to ensure that the area previously occupied by the object blends perfectly with its surroundings.",
    keyPoints: [
      "Remove any object with a few clicks",
      "Seamless background filling",
      "Preserve image quality",
      "Ideal for removing people, logos, or any distractions"
    ],
    image: objectRemove,
    imageSide: "left"
  },
  {
    heading: "Object Recolor",
    description:
      "Change the color of any object in your photo with precision. Whether you're looking to change the color of clothes, vehicles, or other objects, our recolor tool provides accurate and realistic color transformations.",
    keyPoints: [
      "Precise color change",
      "Realistic color blending",
      "Supports a wide range of colors",
      "Easy-to-use interface"
    ],
    image: objectRecolor,
    imageSide: "right"
  },
  {
    heading: "Background Remover",
    description:
      "Instantly remove backgrounds from images to create transparent or new backgrounds. Perfect for product photos, professional headshots, and creative projects, our background remover tool simplifies the process of isolating subjects from their backgrounds.",
    keyPoints: [
      "One-click background removal",
      "High-quality transparent backgrounds",
      "Replace backgrounds with custom images",
      "Supports complex edges like hair and fur"
    ],
    image: backgroundRemove,
    imageSide: "left"
  }
];

export { SideBar, navLinks };
