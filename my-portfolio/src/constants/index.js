import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nextjs,
  git,
  figma,
  carrent,
  Saeculum,
  Ordex,
  bootstrap,
  hirex,
  chat
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Next js Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Saeculum Solutions Pvt Ltd",
    icon: Saeculum,
    iconBg: "#383E56",
    date: "April 2023 - February 2024",
    points: [
      "Developing and maintaining web applications using React.js,Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Devloper",
    company_name: "Ordex Technology Solution",
    icon: Ordex,
    iconBg: "#383E56",
    date: "Augest 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];



const projects = [
  {
    name: "Real-Time Chat App",
    description:
      "Full-stack real-time chat app using MERN with features like live messaging, group chat, and user profiles customization. The app is built with React for the frontend, Node.js and Express for the backend, and MongoDB for data storage. It utilizes Socket.io for real-time communication, ensuring instant message delivery and updates.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "purple-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "orange-text-gradient",
      },
      {
        name: "zustand",
        color: "",
      }
    ],
    image: chat,
    source_code_link: "https://github.com/PrakharATripathi/chat_app/tree/main",
    live_link:"https://chattlink.vercel.app/login"
  },
  {
    name: "Hirez Talent App",
    description:
      "HireZ is a modern web application developed using React.js and Tailwind CSS, designed to streamline the hiring process. This project incorporates a small Google AI feature, Gemini, enhancing the user experience with intelligent interactions and insights. The application showcases a sleek and responsive UI, demonstrating advanced frontend development skills and the integration of cutting-edge AI technology.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Generative AI",
        color: "purple-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "orange-text-gradient",
      }
    ],
    image: hirex,
    source_code_link: "https://github.com/PrakharATripathi",
    live_link:"https://hirex-coral.vercel.app/"
  },
    {
    name: "Shopping App",
    description:
      "Web-based platform that allows users to search, Product, and manage Product  from  providers. shopping app built with React.js and enhanced with the sleek aesthetics of Tailwind CSS. Elevate your online shopping journey with a blend of powerful functionality and a modern design that caters to your every need.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "orange-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/PrakharATripathi/React-Project/tree/main/orderify",
    live_link:"https://orderifyapp.netlify.app/"
  }
];

export { services, technologies, experiences, projects };
