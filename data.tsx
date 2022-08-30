import { IProject, ISkills } from "./type";

export const skills: ISkills[] = [
  {
    title: "HTML",
    image: "/assets/skills/html.png",
  },
  {
    title: "CSS",
    image: "/assets/skills/css.png",
  },
  {
    title: "Javascript",
    image: "/assets/skills/javascript.png",
  },
  {
    title: "React JS",
    image: "/assets/skills/react.png",
  },
  {
    title: "Next JS",
    image: "/assets/skills/nextjs.png",
  },
  {
    title: " Typescript",
    image: "/assets/skills/Typescript.png",
  },
  {
    title: "Tailwind",
    image: "/assets/skills/tailwind.png",
  },
  {
    title: "Github",
    image: "/assets/skills/github1.png",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "the app shows my portfolio",
    deployed_url: "",
    github_url: "https://github.com/Nevomartini",
    image_path: "/assets/projects/portfolio.png",
    category: ["next"],
    key_techs: ["Next", "TailwindCSS", "Typescript", "Framer Motion"],
  },
  {
    id: 2,
    name: "Modern Bank App",
    description: "the app shows my portfolio",
    deployed_url: "https://hoobank2.netlify.app",
    github_url: "https://github.com/Nevomartini/bank_app",
    image_path: "/assets/projects/bank.png",
    category: ["react"],
    key_techs: ["react", "TailwindCSS"],
  },
  {
    id: 3,
    name: "Admin Dashboard",
    description: "the app shows my portfolio",
    deployed_url: "https://openbank1.netlify.app/",
    github_url: "https://github.com/Nevomartini/dashboard",
    image_path: "/assets/projects/dashboard.png",
    category: ["react"],
    key_techs: ["react", "TailwindCSS"],
  },
];
