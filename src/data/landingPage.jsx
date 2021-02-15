import React from "react";
import { CodePen, Github, Linkedin } from "../assets/Icons";
import ExternalLink from "../components/core/links/ExternalLink";
import Link from "../components/core/links/Link";

const landingPageData = {
  header: {
    title: "Hi, my name is Håkon Underbakke.",
    text: (
      <>
        <p>
          I'm a Norwegian frontend developer currently doing contract work for
          my own company, <strong>Ryfylke React AS</strong>.
        </p>
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
        title: "Ryfylke React AS",
        date: "2021 - now",
        position: "CEO / Front End Consultant",
        slug: "/ryfylkereact",
        text: (
          <>
            <p>
              After 9 months at Idean, because of life circumstances, I've
              decided to leave and start my own company. I'm soon going to move
              out of the city, and needed to find a more long-term remote
              option, beyond the current pandemic.
            </p>
            <p>
              Although I initially looked into full-time remote positions, I
              soon got a proposal to do contract work for a Norwegian
              telecommunications company, which serves as a perfect springboard
              to start my own company.
            </p>
            <p>
              As of now, I'm the only employee at my company. Down the line I
              might look into hiring more people, but for now this serves me
              well.
            </p>
          </>
        ),
        url: "https://ryfylke.dev",
      },
      {
        title: "Idean Norway (Capgemini Norge AS)",
        date: "2020 - 2021",
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
        title: "NDLA IT-game",
        date: "2021",
        shortText:
          "Developed a network-simulation game for IT-students on the Norwegian Digital Learning Arena.",
        slug: "/ndla",
        text: (
          <>
            <p>
              This was a short project to create a network-simulation game to be
              used in IT-education on the Norwegian Digital Learning Arena. The
              objective of the game is to connect various nodes through switches
              to the network, and to map the correct networks to the correct
              devices. The design of the game was made by a Senior Visual
              Designer at Idean, and I worked on implementing the design myself.
            </p>
            <p>
              The game is made in React.JS with Typescript and
              styled-components.
            </p>
            <img
              src="https://haakon.dev/ndla.png"
              alt="Screenshot of the NDLA project."
            />
          </>
        ),
      },
      {
        title: "Haystack",
        date: "2021",
        shortText: "Developed POC for data visualisation and anti-fraud tool.",
        slug: "/haystack",
        text: (
          <>
            <p>
              I was hired as a consultant from Idean to work on developing the
              frontend for the proof of concept for a data-visualisation and
              anti-fraud software.
            </p>
            <p>
              The website was developed using React.JS with TypeScript and
              styled-components. For the graphs, we used Linkurious' Ogma
              library. For the charts, we used Nivo.
            </p>
            <p>
              The proof of concept is running on JSON-data, but the project
              structure is set up for a future handover for further development.
              Some of the working features include:
            </p>
            <ul>
              <li>Geo/map-mode that plots all nodes with coordinates.</li>
              <li>Creating charts based on node-data.</li>
              <li>Expand nodes to show relations.</li>
              <li>Adding pulses to the nodes.</li>
              <li>Shortest-path algorhythm between nodes.</li>
              <li>
                Adding filters based on node-types, with conditions based on the
                type properties.
              </li>
              <li>Hiding individual nodes.</li>
              <li>Graph fullscreen-mode (for map and main graph).</li>
            </ul>
            <img
              src="https://haakon.dev/haystack.png"
              alt="Screenshot of the Haystack project."
            />
            <p>
              While I'm not a visual-designer, I also made the logo draft that's
              featured in the screenshot above using{" "}
              <a
                href="https://logomaker.thehoth.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                logomaker
              </a>
              .
            </p>
            <p>
              I worked on this project for a total of around 4 weeks - building
              the entire front end in that time-span. I also helped demo the POC
              to multiple clients and partners.
            </p>
          </>
        ),
      },
      {
        title: "Equinor projects",
        date: "2020",
        shortText: "Worked on two separate projects at Equinor.",
        slug: "/equinor",
        text: (
          <>
            <p>
              While working as a consultant for Idean, I worked on two separate
              Equinor projects. I'll keep the descriptions a bit vauge, and with
              no screenshots - since these are both internal projects.
            </p>
            <p>
              On the first project, related to internal technology development
              and documenting tool, I was hired as a replacement for a previous
              frontender from Idean. There I worked for three months, helping
              clean up various bugs and also developing a few new components -
              including an animated expandable search-field. We used the SCRUM
              methodology with a team of between 10-20 developers, mostly from
              India. The project was setup using <strong>React.JS</strong>,{" "}
              <strong>TypeScript</strong>, <strong>styled-components</strong>{" "}
              and <strong>Formik</strong> + <strong>Yup</strong> for handling
              forms and validation.
            </p>
            <p>
              On the second project, related to internal documentation for the
              various plants Equinor owns, I worked "pro-bono" in-between other
              projects. I mostly developed new generic components like a
              Table-component and an Accordion-component. The stack on this
              project was quite similar, with <strong>React</strong> and{" "}
              <strong>TypeScript</strong> - but this project notably used{" "}
              <strong>LESS</strong> for styling and the code-structure was more
              class/object-oriented.
            </p>
          </>
        ),
      },
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
              Ida by LIGL is a project that I worked on for several years while
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
            <img
              src="https://haakon.dev/bokit.png"
              alt="Screenshot of Ryfylke Bok & IT's website."
            />
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
        "Data visualisation",
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
