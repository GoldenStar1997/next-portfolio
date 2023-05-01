
const store = {
  about: {
    firstName: "Hennadii",
    lastName: "Yepifanov",
    bithday: "08.29.1993",
    address: "kyiv Ukraine",
    email: "hennadiiyepifanov@gmail.com",
    github: "https://github.com/Hennadii1993/",
    serviceLists: [
      "Website Development",
      "E-commerce Development",
      "User Experience Design",
      "Back-end Development",
      "E-mail Marketing",
    ],
    personSkill: ["Developer", "Freelancer"],
    skills: {
      programming: [
        { name: "JavaScript", value: "95" },
        { name: "React", value: "80" },
        { name: "Laravel", value: "80" },
        { name: "Python", value: "75" },
      ],
      language: [
        { name: "English", value: "80" },
        { name: "Ukrainian", value: "100" },
      ],
    },
    education: [
      {
        year: "2007 - 2012",
        unv: "Vinnytsia National Technical University",
        degree: ""
      },
      {
        year: "2012 - 2016",
        unv: "Donetsk National Technical University",
        degree: "Bachelor Degree"
      },
    ],
    working: [
      {
        year: "03/2016 - 11/2021",
        company: "Sfdevelop, Cherkasy Oblast, Ukraine",
        deg: "Senior Software Engineer",
      },
      {
        year: "06/2015 - 09/2016",
        company: "Delphi Software, Kyiv, Ukraine",
        deg: "Full Stack Developer"
      },
      {
        year: "04/2013 - 02/2014",
        company: "ITPromotion LLC - Software Solutions",
        deg: "Software Developer"
      },
    ],
    partnersLogos: [
      "img/partners/1.png",
      "img/partners/2.png",
      "img/partners/3.png",
      "img/partners/4.png",
    ],
  },
  portfolio: [
    {
      img: "item1",
      tit: "keyacuraofreno.com",
      url: "https://www.keyacuraofreno.com",
      laf: ["Bootstrap", "Redux", "React", "Redux", "Boomerang", "jQuery"],
      des: "One of the requirements for the website was to have a responsive and user-friendly interface for users to search for cars. I used Bootstrap to build a grid system that would adjust to different screen sizes and allow for easy laIt of search filters and results. Additionally, I used jQuery UI to create a dropdown menu for users to select different search criteria such as make, model, year, and price range. To enhance the user experience, I implemented a live search feature that would update the search results as the user typed in their search query. To achieve this, I used React and Redux to manage the state of the search results and filter criteria. I also used Slick to create a carousel that would display images of the cars in the search results, making it easier for users to browse and select the cars they were interested in. Lastly, I used Boomerang to track user behavior and analyze website performance, enabling I to make data-driven decisions and optimizations to improve the website's functionality and user experience.",
      ctg: "web",
    },
    {
      img: "item2",
      tit: "BEMEsupply",
      url: "https://bemedsupply.com",
      laf: ["WooCommerce", "WordPress", "Jetpack(wp-plugin)", "PHP", "MySQL"],
      des: "I leveraged PHP to create custom functionality such as a coupon code system and integration with a third-party payment gateway for secure online payments. To ensure the website's performance, I used MySQL to manage the database and optimize queries to reduce page load times.",
      ctg: "web",
    },

    {
      img: "item3",
      tit: "TUMI",
      url: "https://tumi.in",
      laf: ["Vue.js", "Nuxt.js"],
      des: "In the process of developing this web site, I collaborated a powerful team and I used Vue.js and Nuxt.js that allowed users to search for and ordered and sold products. By using Nuxt.js's server-side rendering capabilities and Vue.js's reactive data binding, I was able to create a fast and responsive application that provided a seamless user experience. However, one of the challenges I faced was integrating the application with third-party APIs and ensuring that all data was properly synchronized. To address this, I used Vuex, Vue.js's state management library, to manage application state and facilitate communication between components.",
      ctg: "web",
    },
    {
      img: "item4",
      tit: "LANET",
      url: "https://www.lanet.ua",
      laf: ["Zone.js", "Angulars", "TypeScript", "Hammer.js"],
      des: "One of the challenges I faced in building the web application was managing the user's interaction with the application's interface. I needed to ensure that the application was responsive and interactive, and that users could easily navigate between different pages and interact with various elements on the screen",
      ctg: "web",
    },
    {
      img: "item5",
      tit: "stansberryresearch.com",
      url: "https://stansberryresearch.com",
      laf: ["Angular", "Zone.js", "Meteor", "TypeScript", "Node.js"],
      des: "For this project, I used TypeScript to develop a web application that allowed users to review on projects and assignments in real-time. By using TypeScript's strong typing and object-oriented programming features, I was able to write maintainable and scalable code that could easily be extended in the future. However, one of the challenges I faced was ensuring that the application was accessible and easy to use for users with different levels of technical proficiency. To address this, I conducted user testing and incorporated feedback from the client and end-users into the design and functionality of the application.",
      ctg: "web",
    },
    {
      img: "item6",
      tit: "KIFDom",
      url: "https://www.kifdom.com",
      laf: ["PHP", "jQuery", "bootstrap"],
      des: "I built the website with ensuring that it had a consistent and modern design that would work well across different devices and browsers. To achieve this, I used Bootstrap, a popular front-end framework that allowed I to build a responsive and mobile-friendly website with reusable components and a grid system.",
      ctg: "web",
    },
    {
      img: "item7",
      tit: "MEMORYBOX",
      url: "https://mymemoryboxes.co.uk",
      laf: ["PHP", "MySQL", "WordPress", "Swiper", "jQuery"],
      des: "One of the challenges I faced in building the website was creating a dynamic and engaging user interface that would keep visitors on the site and encourage them to explore its content. To achieve this, I used WordPress, a popular content management system (CMS) that allowed I to build a customizable and scalable website with a range of features and plugins. To handle the website's front-end functionality and user interactions, I used jQuery, a fast and lightweight JavaScript library that provided a range of features such as DOM manipulation, event handling, and Ajax requests. I used jQuery to create custom plugins and scripts that enhanced the website's usability and responsiveness, such as dropdown menus, form validations, and lazy loading.",
      ctg: "web",
    },
    {
      img: "item8",
      tit: "HONDA-motor",
      url: "https://honda-motor.id",
      laf: ["Tailwind CSS", "PHP", "MySQL", "WordPress"],
      des: "For the client in the e-commerce industry, I used Tailwind CSS to build a responsive and visually appealing website that allowed customers to easily browse and purchase products. By leveraging the flexibility of Tailwind's utility classes, I was able to customize the website's design to match the client's branding guidelines. One of the challenges I faced was ensuring that the website was accessible to users with disabilities. However, by following best practices for accessibility and using the appropriate ARIA attributes, I was able to create a website that met the client's accessibility requirements.",
      ctg: "web",
    },
    {
      img: "item9",
      tit: "STUDYSERTECO",
      url: "https://studyserteco.odoo.com",
      laf: ["Python", "PostgreSQL", "Odoo"],
      des: "In this project, I built a machine learning model using Python and scikit-learn for a client in the e-learning system. I analyzed the client's data to identify factors that contribute to patient readmissions and built a predictive model using logistic regression. This demonstrates my skills in machine learning and data analysis, which may be valuable to clients in industries such as e-learning, finance, and marketing.",
      ctg: "web",
    },
  ],
  feedback:[
    {
      tit: "Web Development",
      txt: "Achieved 95% User Satisfaction and successful Launch by Custom Software Development for HighProfile Client",
      dat: ""
    },
    {
      tit: "Web Development",
      txt: "Gained widespread adoption and received recognition from industry, resulting in professional visibility", 
      dat: ""
    },
  ]
};

export default store;
