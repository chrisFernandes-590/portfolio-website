import type { ColorVariant } from "@/components/icons/SiteIcons";
import type { IconType } from "react-icons";
import { BsCodeSlash, BsController } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";

export interface HobbiesType {
  name: string;
  icon?: IconType;
  iconColor?: ColorVariant;
  description?: string;
}

export const hobbies: HobbiesType[] = [
  {
    name: "Coding",
    icon: BsCodeSlash,
    iconColor: "blue",
    description:
      "Building software, exploring new technologies, & solving problems.",
  },
  {
    name: "Gaming",
    icon: BsController,
    iconColor: "purple",
    description:
      "Story-driven games, competitive multiplayer, and indie titles.",
  },
  {
    name: "Music",
    icon: FaMusic,
    iconColor: "red",
    description: "Listening to music while studying, coding, and relaxing.",
  },
];
