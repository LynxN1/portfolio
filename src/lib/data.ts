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

import minestar_img from "@/assets/works/MinestarLauncher/Screenshot.png";
import minestar_img2 from "@/assets/works/MinestarLauncher/Screenshot2.png";
import minestar_video from "@/assets/works/MinestarLauncher/video.mp4";

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
    assets: [
      {
        type: "img",
        src: neoarmory_img,
      },
      {
        type: "img",
        src: neoarmory_img2,
      },
      {
        type: "img",
        src: neoarmory_img3,
      },
    ],
  },
  {
    name: "Elite Emperors",
    assets: [
      {
        type: "img",
        src: emperors_img,
      },
      {
        type: "img",
        src: emperors_img2,
      },
      {
        type: "img",
        src: emperors_img3,
      },
    ],
  },
  {
    name: "Rolling Bones",
    assets: [
      {
        type: "img",
        src: rollingbones_img,
      },
      {
        type: "img",
        src: rollingbones_img2,
      },
      {
        type: "img",
        src: rollingbones_img3,
      },
    ],
  },
  {
    name: "UKIYO Lootbox",
    assets: [
      {
        type: "img",
        src: lootbox_img,
      },
    ],
  },
  {
    name: "Ember Host",
    assets: [
      {
        type: "img",
        src: ember_img,
      },
    ],
  },
  {
    name: "Minestar Launcher",
    assets: [
      {
        type: "img",
        src: minestar_img,
      },
      {
        type: "img",
        src: minestar_img2,
      },
      {
        type: "video",
        src: minestar_video,
      },
    ],
  },
];

export const STRINGS = {
  en: {
    name: "Vladyslav Skrynnyk",
    home_section: "Home",
    about_me_section: "About me",
    resume_section: "Resume",
    works_section: "Works",
  },
  uk: {
    name: "Владислав Скринник",
    home_section: "Головна",
    about_me_section: "Про мене",
    resume_section: "Резюме",
    works_section: "Роботи",
  },
};
