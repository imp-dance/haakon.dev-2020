import React from "react";
import { CodePen, Github, Linkedin } from "../assets/Icons";
import ExternalLink from "../components/core/links/ExternalLink";
import Link from "../components/core/links/Link";

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
        slug: "/idean",
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
              We usually have <i>frontend friday</i> every week, where me and
              the other frontenders discuss and share news and interesting
              things related to frontend that we've picked up over the week. We
              also sometimes do presentations for eachother on various subjects,
              to teach and reflect.
            </p>
            <p>
              One of my projects at Idean has been developing the frontend for
              the <Link to="#/cityforcity">City for City</Link> initiative. The
              websites were developed using Gatsby and Strapi, and were
              published October 2020.
            </p>
            <p>
              I've also been involved in an internal project at Equinor, which
              was my first large-scale Typescript+React project. I worked on
              developing and implementing a few new features, as well as fixing
              bugs and testing. We used the agile SCRUM methodology, which I
              really enjoyed working with.
            </p>
          </>
        ),
        url: "https://idean.com",
      },
      {
        title: "LIGL AS",
        date: "2016 - 2020",
        position: "Legal Tech Developer | Web Developer | IT-Consultant",
        slug: "/ligl",
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
              <Link to="#/ida">Ida by LIGL</Link>. .
            </p>
            <p>
              I have also developed and designed their website,{" "}
              <ExternalLink to="https://ligl.no">ligl.no</ExternalLink>. This
              project was started prior to me having much experience with
              Javascript frameworks, so it was made using PHP, HTML, CSS and
              jQuery.
            </p>
            <img
              src="https://haakon.dev/ligl.png"
              alt="Screenshot of ligl.no website"
            />
          </>
        ),
        url: "https://ligl.no/?lang=en",
      },
    ],
    projects: [
      {
        title: "City for City",
        date: "2020",
        shortText: "Developed frontend & implemented CMS system",
        slug: "/cityforcity",
        text: (
          <>
            <p>
              CityforCity was started on a voluntary basis at Idean Bergen. The
              initiative was a website where small local businesses that had
              been affected by and/or made concrete changes to their operation
              because of the covid pandemic are promoted to their local
              community.
            </p>
            <p>
              The original websites for Bergen, Stavanger and Oslo were all
              built and hosted at Squarespace, but this soon showed itself to be
              very limiting when the ambitions of the project grew. Squarespace
              was generally bad at handling articles and categorisation and it
              was difficult to implement more complex features. Because of this,
              we decided to develop our own custom system.
            </p>
            <p>
              My role in this project was sketching out and developing the new
              system. I decided to go for GatsbyJS for static rendering, and
              Strapi as a CMS system. After setting up the core functionality, I
              developed the frontend design based on an Adobe XD sketch created
              by a UX designer at Idean.
            </p>
            <ExternalLink to="https://stavangerforstavanger.no">
              <img
                src="https://haakon.dev/city.png"
                alt="Screenshot of cityforcity website"
              />
            </ExternalLink>
          </>
        ),
        url: "https://about.cityforcity.com",
      },
      {
        title: "Ida by LIGL",
        date: "2019",
        shortText: "Released first major version of Ida by LIGL.",
        slug: "/ida",
        text: (
          <>
            <p>
              Ida by LIGL was a project I worked on for several years while
              employed at LIGL AS.
            </p>
            <p>
              Ida is a tool for anyone to generate top quality legal documents.
              I worked on both the document automation part (using
              ContractExpress Author) as well as developing and designing our
              web portal for free users (Ida by LIGL)
            </p>
            <p>
              Ida by LIGL is made using React and SCSS on the frontend, and PHP
              on the backend.
            </p>
            <p>
              I was (and am) the only developer that's worked on this project,
              and it was a great learning experience for me regarding the
              importance of writing maintainable code bases, as well as
              developing my skills with React, accessibility, user experience
              and design.
            </p>
            <p>
              You can read a bit more about Ida in{" "}
              <Link to="/#/article/imat-ida-by-ligl-a-react-powered-pwa">
                this article
              </Link>{" "}
              that I've written about the project.
            </p>
            <img
              src="https://ligl.no/dev8/_admin/uploads/63133-Screenshot%202019-12-16%20at%2000.02.44.png"
              alt="Screenshot of Ida by LIGL"
            />
          </>
        ),
        url: "https://ida.ligl.no",
      },
      {
        title: "Eirik Underbakke Portfolio",
        date: "2015",
        shortText:
          "Developed website & backend system based on his own design.",
        slug: "/eirik",
        text: (
          <>
            <p>
              This was my first project using a modern Javascript framework,
              made in 2015. Although I'm not a fan of AngularJS, it was
              definitely an interesting and important project for me.
            </p>
            <p>Designed by my brother, Eirik Underbakke.</p>
            <img
              src="https://haakon.dev/eirik.png"
              alt="Screenshot of website"
            />
          </>
        ),
        url: "https://eirik.underbakke.net",
      },
      {
        title: "Ryfylke Bok & IT",
        date: "2015",
        shortText:
          "Developed & designed their website in-house while working summer job.",
        slug: "/bokit",
        text: (
          <>
            <p>
              I was working for Ryfylke Bok & IT initially as summer-help. I
              worked the cash register, as well as a little bit in the
              IT-department.
            </p>
            <p>
              {" "}
              Since their current website was quite outdated, I offered to build
              them a new one. It was made with just PHP, HTML, CSS and jQuery.
              This was my first website that I've made for a professional
              client.
            </p>
          </>
        ),
        url: "https://bok-it.no",
      },
    ],
  },
  toolsAndTechnologies: [
    {
      title: "JS",
      items: [
        "ES6",
        "Typescript",
        "React",
        "Redux",
        "Node",
        "Electron",
        "jQuery",
      ],
    },
    {
      title: "CSS",
      items: ["SCSS", "styled-components", "Animations", "Responsive design"],
    },
    {
      title: "HTML",
      items: ["HTML5", "ARIA", "SEO", "Accessibility"],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "VSCode",
        "VSTS / Azure DevOps Services",
        "Webpack",
        "Babel",
        "NPM",
      ],
    },
    {
      title: "Other",
      items: [
        "SQL",
        "Firebase",
        "ContractExpress Author",
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
      icon: <Github />,
    },
    {
      title: "Codepen",
      url: "https://codepen.io/schart",
      context: "Doodles & Sketches",
      icon: <CodePen />,
    },
    {
      title: "Linkedin",
      url: "https://linkedin.com/in/hakonunderbakke",
      context: "Experience & Connections",
      icon: <Linkedin />,
    },
  ],
};
export default landingPageData;
