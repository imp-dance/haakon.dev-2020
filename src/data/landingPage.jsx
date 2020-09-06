import React from "react";
import ExternalLink from "../components/core/links/ExternalLink";

const landingPageData = {
  header: {
    title: "Hi, my name is Håkon Underbakke.",
    text: (
      <>
        <p>I'm a Norwegian frontend developer currently working for Idean.</p>
        <p>
          I have been doing web development professionally for the last 4 years.
          These days, I mostly work with React and Typescript.
        </p>
      </>
    ),
  },
  experienceTable: {
    work: [
      {
        title: "Idean Norway (Capgemini Norge AS)",
        date: "2020 - Present",
        position: "Front End Developer",
        text: (
          <>
            <p>
              I started working as a frontend developer for Idean in April of
              2020. Since then I've been able to take part in a couple of
              projects, namely the CityforCity initiative - as well as an
              internal Equinor project.
            </p>
            <p>
              Working at Idean has been my first official web developer
              position, and has allowed me to work with larger teams of other
              developers and designers, which has greatly accelerated my growth
              and learning.
            </p>
            <p>
              I have worked using the scrum framework at a project at Equinor,
              which has been a great experience.
            </p>
          </>
        ),
        url: "https://idean.com",
      },
      {
        title: "LIGL AS",
        date: "2016 - 2020",
        position: "Legal Tech Developer | Web Developer | IT-Consultant",
        text: (
          <>
            <p>
              I worked for LIGL AS for 4 years, from August 2016 - April 2020.
            </p>
            <p>
              During my time at LIGL I worked with a great range of tasks
              ranging from office IT-support to web development and legal tech
              development.
            </p>
            <p>
              While working at LIGL, I learned how to use ContractExpress Author
              to automate legal documents. I also designed a website that
              interacts with these documents, complete with a login system,
              rating system, backend statistics, rating and sorting, and much
              more. This website came in many iterations, but the final version
              which is still up today is called{" "}
              <ExternalLink to="https://ida.ligl.no">Ida by LIGL</ExternalLink>.
              .
            </p>
            <p>
              Other than these projects, I've also developed and designed their
              website, <ExternalLink to="https://ligl.no">ligl.no</ExternalLink>
              . I mostly made this in PHP, as the project was started before I
              really had much experience with Javascript frameworks.
            </p>
          </>
        ),
        url: "https://ligl.no/en",
      },
    ],
    projects: [
      {
        title: "Ida by LIGL",
        date: "2019",
        shortText: "Released first major version of Ida by LIGL.",
        text: (
          <p>
            Ida by LIGL was a project I worked on at LIGL and that I still
            maintain today. Ida is a tool for anyone to generate top quality
            legal documents. I worked on both the document automation part
            (using ContractExpress Author) as well as our web portal for free
            users.
          </p>
        ),
        url: "https://ida.ligl.no",
      },
      {
        title: "Eirik Underbakke Portfolio",
        date: "2015",
        shortText:
          "Developed website & backend system based on his own design.",
        text: (
          <p>
            This was my first project using a modern Javascript framework, made
            in 2015. It was my first and only project using AngularJS. Designed
            by my brother, Eirik Underbakke.
          </p>
        ),
        url: "https://eirik.underbakke.net",
      },
      {
        title: "Ryfylke Bok & IT",
        date: "2015",
        shortText:
          "Developed & designed their website in-house while working summer job.",
        text: (
          <p>
            I was working for Ryfylke Bok & IT initially as summer-help. I
            worked the cash register, as well as a little bit in the
            IT-department. Since their website was quite outdated, I offered to
            build them a new one. They have kept my design ever since.
          </p>
        ),
        url: "https://bok-it.no",
      },
    ],
  },
  toolsAndTechnologies: [
    {
      title: "JS",
      items: ["ES6", "Typescript", "React", "Node", "Electron", "jQuery"],
    },
    {
      title: "CSS",
      items: ["SASS", "styled-components", "Animations", "Responsive design"],
    },
    {
      title: "HTML",
      items: ["HTML5", "ARIA", "SEO"],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "VSCode",
        "VSTS / Azure DevOps Services",
        "Webpack",
        "Babel",
      ],
    },
    {
      title: "Other",
      items: [
        "ContractExpress Author",
        "Batch",
        "Bash/Shell",
        "Logic Pro X",
        "Adobe Photoshop",
      ],
    },
  ],
  linksAndReferences: [
    {
      title: "Github",
      url: "https://github.com/imp-dance",
      context: "Projects & Work",
    },
    {
      title: "Codepen",
      url: "https://codepen.io/schart",
      context: "Doodles & Sketches",
    },
    {
      title: "Linkedin",
      url: "https://linkedin.com/in/hakonunderbakke",
      context: "Experience & Connections",
    },
  ],
};
export default landingPageData;
