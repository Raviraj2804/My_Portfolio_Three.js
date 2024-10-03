import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    // company_name: "Starbucks",
    icon: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    //  company_name: "Tesla",
    icon: "https://w7.pngwing.com/pngs/410/100/png-transparent-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-text.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    // company_name: "Shopify",
    icon: "https://img.lovepik.com/element/45012/4671.png_860.png",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    // company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VISUALISATIONS-OF-SORTING-ALGORITHMS",
    description:
      "This project is focused on visualizing various sorting algorithms in an interactive and educational way. The goal is to help users better understand the inner workings of popular sorting algorithms such as Bubble Sort, Merge Sort, Quick Sort, and Insertion Sort by visually representing each step of the sorting process.It serves as both an educational tool and a way to analyze the time complexity and efficiency of different sorting techniques.",
    tags: [
      {
        name: "Sorting Algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "Algorithm Visualization",
        color: "green-text-gradient",
      },
      {
        name: "Data Structures",
        color: "pink-text-gradient",
      },

      {
        name: "Web Development",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript (or the specific language used)",
        color: "pink-text-gradient",
      },
      {
        name: "Animation",
        color: "blue-text-gradient",
      },

    ],
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20200622003313/Screenshot-from-2020-06-22-00-28-06.png",
    source_code_link: "https://github.com/Raviraj2804/VISUALISATIONS-OF-SORTING-ALGORITHMS",
  },
  {
    name: "Netflix Clone",
    description:
      "This project involves creating a static replica of the Netflix homepage using HTML and CSS. The goal is to mimic the visual layout and design elements of Netflix, including its distinctive navigation bar, content sections, and responsive grid layout. The project focuses on utilizing HTML for structuring the content and CSS for styling and layout, capturing the look and feel of Netflix's user interface. Key features include a responsive design that adapts to various screen sizes, a grid-based layout for showcasing content, and the use of modern CSS techniques to achieve a polished and visually appealing result. This project demonstrates proficiency in HTML and CSS and an eye for detail in replicating complex web designs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      },
      {
        name: "Flexbox",
        color: "green-text-gradient",
      },
      {
        name: "Media Queries",
        color: "pink-text-gradient",
      },
      {
        name: "UI Design",
        color: "green-text-gradient",
      },
      {
        name: "Frontend Development",
        color: "pink-text-gradient",
      },
    ],
    image: "https://screenshots.codesandbox.io/3x3np/5.png",
    source_code_link: "https://github.com/Raviraj2804/NETFLIX-CLONE",
  },
  {
    name: "Personal Portfolio",
    description:
      "My personal portfolio serves as a showcase of my skills, projects, and achievements in web development. Designed with a focus on user experience, it includes sections for my projects, skills, and contact information. This project highlights my proficiency in web design and development while demonstrating my ability to create a professional online presence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Router ",
        color: "green-text-gradient",
      },
      {
        name: "Animation Libraries",
        color: "pink-text-gradient",
      },


    ],
    image: "https://w7.pngwing.com/pngs/449/539/png-transparent-career-portfolio-artist-s-portfolio-portfolio-miscellaneous-angle-kitchen.png",
    source_code_link: "https://github.com/Raviraj2804/My-Portfolio",
  },


];

export { services, technologies, experiences, testimonials, projects };