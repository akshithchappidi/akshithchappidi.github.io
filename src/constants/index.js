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
    python,
    docker,
    meta,
    starbucks,
    tesla,
    Boeing,
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
      title: "Cloud Application Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Quant Analyst",
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
      name: "python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Engineering Virtual Intern",
      company_name: "Goldman Sachs",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Conducted in-depth research on password security as an intern at Goldman Sachs, with a specific focus on hash functions.",
        "Gained practical experience and expertise in various hash algorithms and their critical role in password encryption.",
        "Developed the ability to decipher passwords, enhancing my proficiency in cybersecurity measures.",
        "Expanded my understanding of cybersecurity in the digital era through hands-on work and practical engagement with password encryption techniques.",
      ],
    },
    {
      title: "Software Developement Intern",
      company_name: "Boeing",
      icon: Boeing,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Created Fast API endpoints for Python libraries, enhancing their accessibility.",
        "Leveraged Docker to seamlessly deploy and utilize the libraries across various environments.",
        "Boosted utility by streamlining access, ensuring smooth operations across diverse setups.",
        "Took a proactive role in optimizing the software development lifecycle.",
        "Crafted comprehensive test scripts to ensure thorough and efficient testing.",
        "Accelerated the CI/CD pipeline by automating testing and deployment processes.",
        "Resulted in faster software releases, improving overall efficiency and productivity.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I will updated the testimonals soon.",
      name: "XYZ",
      designation: "CFO",
      company: "ABC",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I will updated the testimonals soon.",
      name: "XYZ",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I will updated the testimonals soon.",
      name: "XYZ",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "College Predictor",
      description:
        "Created a project that estimates the college a student can apply to based on their performance in engineering entrance exams, Helped students make informed decisions about their college applications.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Smart Cash",
      description:
        "Developed Smart Cash Android app for streamlined cash management, providing users with an intuitive interface and real-time expense tracking. Implemented robust security measures and efficient budgeting features to enhance financial planning.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
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
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
