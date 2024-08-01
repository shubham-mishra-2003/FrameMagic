import {
  BackgroundRemove,
  ImageResize,
  ImageRestore,
  ObjectRecolor,
  ObjectRemove
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
    title: "About",
    id: "about"
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
    title: "Contact",
    id: "contact"
  }
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/free.png",
    price: "Free",
    credits: 5,
    inclusions: [
      { label: "5 Free Credits", isIncluded: true },
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
    credits: 50,
    inclusions: [
      { label: "50 Credits", isIncluded: true },
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
    credits: 500,
    inclusions: [
      { label: "500 Credits", isIncluded: true },
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
    title: "Image Resize",
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

export const AboutUs = [
  "We are three B.Tech CSE students who love to create perfect and groundbreaking things.",
  "We started out with a common goal: to use tech to build tools that can change how we work with digital images. Our know-how and focus on top-notch work help us to do better than people expect and to build strong bonds with those who use our tools. Everything we make - from fixing up images and filling in parts to taking out objects changing their colors, and getting rid of backgrounds - shows how much we care about doing great work and always trying to make things perfect.",
  "We love what we do, and this pushes us to keep testing what's possible. We think there is something special about changing a picture making it come alive, and improving it beyond what you had imagine. We have made our tools easy to use so anyone can get amazing results even if they do not know much about tech. Come along with us on this thrilling adventure as we team up to do great work. We are here to help turn your creative ideas into reality, one picture at a time.",
  "Do not hesitate to get in touch and find out how we can work together to reach your goals and make something special."
];

export const privacyPolicy = [
  "Welcome to FrameMagic. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application, which includes AI tools for image edits such as background remover, object remover, object recolor, image resize, restore images, and more. When you create an account, log in, or use our services, we collect personal information such as your name, email address, password (securely stored via Clerk), and user images, along with usage data like IP address, browser type, and device type. This information helps us operate, maintain, and improve our application, communicate with you, and ensure the security of our services. User images and edits are processed and stored using Cloudinary, and all other data is stored securely in MongoDB.",
  "We do not sell, trade, or transfer your personal information to outside parties without your consent, except to trusted service providers like Clerk for authentication, Cloudinary for image processing, and MongoDB for database storage, all of whom assist us in operating our application and ensuring its security. We implement a variety of security measures, including encryption and secure servers, to protect your data. You have rights regarding your personal information, such as access, rectification, and deletion, depending on your location. Our application may contain links to third-party websites, and we encourage you to review their privacy policies. We may update our Privacy Policy periodically, and changes will be posted on this page. If you have any questions, please contact us at connectandteam@gmail.com. By using our application, you acknowledge that you have read and understood this Privacy Policy."
];

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
    image: ImageRestore,
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
    image: ImageResize,
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
    image: ObjectRemove,
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
    image: ObjectRecolor,
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
    image: BackgroundRemove,
    imageSide: "left"
  }
];

export { SideBar, navLinks };
