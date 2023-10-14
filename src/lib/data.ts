import ember_img from "@/assets/works/EmberHost/Screenshot.png";

import emperors_img from "@/assets/works/Emperors/Screenshot.png";
import emperors_img2 from "@/assets/works/Emperors/Screenshot2.png";
import emperors_img3 from "@/assets/works/Emperors/Screenshot3.png";

import lootbox_img from "@/assets/works/Lootbox/Screenshot.png";

import neoarmory_img from "@/assets/works/NeoArmory/Screenshot.png";
import neoarmory_img2 from "@/assets/works/NeoArmory/Screenshot2.png";
import neoarmory_img3 from "@/assets/works/NeoArmory/Screenshot3.png";

import rollingbones_img from "@/assets/works/RollingBones/Screenshot.png";
import rollingbones_img2 from "@/assets/works/RollingBones/Screenshot2.png";
import rollingbones_img3 from "@/assets/works/RollingBones/Screenshot3.png";

export const SECTIONS = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About Me",
  },
  {
    id: "resume",
    name: "Resume",
  },
  {
    id: "works",
    name: "Works",
  },
];

export const WORKS = [
  {
    name: "Neo Armory",
    main_img: neoarmory_img,
    other_imgs: [neoarmory_img2, neoarmory_img3],
  },
  {
    name: "Elite Emperors",
    main_img: emperors_img,
    other_imgs: [emperors_img2, emperors_img3],
  },
  {
    name: "Rolling Bones",
    main_img: rollingbones_img,
    other_imgs: [rollingbones_img2, rollingbones_img3],
  },
  {
    name: "UKIYO Lootbox",
    main_img: lootbox_img,
    other_imgs: [],
  },
  {
    name: "Ember Host",
    main_img: ember_img,
    other_imgs: [],
  },
];

export const STRINGS = {
  en: {
    name: "Vladyslav Skrynnyk",
  },
  uk: {
    name: "Владислав Скринник",
  },
};
