import { House, ImageDown, Atom, Eraser, PaintRoller, FileX2, CreditCard, UserRound, LucideIcon } from "lucide-react";

interface SideBarLinks {
  title: string;
  href: string;
  icon: LucideIcon;
}

const SideBar: SideBarLinks[] = [
  {
    title: "Home",
    href: "/",
    icon: House
  },
  {
    title: "Image Restore",
    href: "image-restore",
    icon: ImageDown
  },
  {
    title: "Generate Fill",
    href: "generate-fill",
    icon: Atom
  },
  {
    title: "Object Remove",
    href: "object-remove",
    icon: Eraser
  },
  {
    title: "Object Recolor",
    href: "object-recolor",
    icon: PaintRoller
  },
  {
    title: "Background Remove",
    href: "background-remove",
    icon: FileX2
  },
  {
    title: "Profile",
    href: "profile",
    icon: UserRound
  },
  {
    title: "Buy Credits",
    href: "credits",
    icon: CreditCard
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
];

export { SideBar, navLinks };
