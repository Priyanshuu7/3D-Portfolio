import {
  carrent,
  jobit,
  tripguide,
  clinispots,
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



const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "Clinispots",
    icon: clinispots,
    iconBg: "#383E56",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed reusable UI components with React.js to improve code maintainability and efficiency.",
      "Utilized Git for version control, managing branches, and collaborating effectively with other team members.",
      "Optimized web application performance by minimizing bundle size and improving rendering speed using React best practices.",
      "Resolved merge conflicts and conducted code reviews in Git to maintain code quality and consistency across the project.",
    ],
  },
];

const projects = [
  {
    name: "Yelp Camp",
    description:
      "Yelpcamp is a website that allows users to create and review campgrounds. Users must have an account to create or review a campground. using Node.js, Express, MongoDB, Bootstrap, and Passport.js.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "red-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Priyanshuu7/YelpCamp",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {  experiences, projects };
