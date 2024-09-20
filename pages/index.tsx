import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GitHubCard from "../components/githubCard";
import styles from "../styles/Home.module.css";

import Markdown from 'markdown-to-jsx'
import portfolioStyles from '../styles/Portfolio.module.css'

function Portfolio() {
    return <div className={portfolioStyles.grid}>
        <div className={portfolioStyles.card}>
            <div className={portfolioStyles.image}>
                <img src='/portfolio/oslyn.gif' alt='Oslyn Project Home Page' width={1280} height={720} />
            </div>
            <div className={portfolioStyles.info}>
                <h3>Oslyn</h3>
                <h4>Digital AI powered musician companion</h4>
                <Markdown options={{forceBlock: true}}>
                    Became a lead developer in a lot of the backend and AI functionality, eventually pushing the project as the **AI team lead**.
                    Worked together with a small group of passionate developers; mentoring, growing, and inspiring one another.
                </Markdown>
                <Markdown options={{forceBlock: true}}>
                    Utilized AWS services such as: **Amplify**, **Lambda**, **SageMaker**, **S3**, **EC2**, **DynamoDB**.
                </Markdown>
                <a href={`https://oslyn.io`}>Oslyn Website</a>
            </div>
        </div>
        <div className={portfolioStyles.card}>
            <div className={portfolioStyles.image}>
                <img src='/portfolio/lodestone.png' alt='Lodestone Home Page' width={1280} height={720} />
            </div>
            <div className={portfolioStyles.info}>
                <h3>Lodestone</h3>
                <h4>General game server management tool</h4>
                <Markdown options={{forceBlock: true}}>
                    Server managing tool designed with security in mind.
                    Built with rust and using deno to sandbox custom scripts, this project is a large undertaking to create a usable, open-source tool.
                </Markdown>
                <Markdown options={{forceBlock: true}}>
                    Not only is it extremely functional, it is also beautifully designed (with UX in mind): altogether being a product you *want* to use, not just *need* to.
                </Markdown>
                <a href={`https://github.com/Lodestone-Team/lodestone`}>Lodestone Repository</a>
            </div>
        </div>
        <div className={portfolioStyles.card}>
            <div className={portfolioStyles.image}>
                <img src='/portfolio/ztb.gif' alt='ZeroTwo-Bot Home Page' width={1280} height={720} />
            </div>
            <div className={portfolioStyles.info}>
                <h3>ZeroTwo-Bot (project bought out)</h3>
                <h4>Discord bot serving millions of users</h4>
                <Markdown options={{forceBlock: true}}>
                    Worked as a web developer for a Discord bot serving millions of users (50+ million as of now!).
                    Produced the home landing page, store page, and web dashboard.
                    Gained experience with enterprise-level CI/CD: **kubernetes**, **docker**, **JetBrains TeamCity**, **GitHub Projects**, **Apache Cassandra**.
                </Markdown>
                <Markdown options={{forceBlock: true}}>
                    As of 2023, the project was successfully bought out by Joyn.gg and the web apps have been newly rewritten.
                </Markdown>
                <a href={`https://web.archive.org/web/20220514032315/https://zerotwo.bot/`}>Archived Home Page</a>
            </div>
        </div>
        <div className={portfolioStyles.card}>
            <div className={portfolioStyles.image}>
                <img src='/portfolio/chat.gif' alt='AI Chatbot' width={1280} height={720} />
            </div>
            <div className={portfolioStyles.info}>
                <h3>AI Chatbot</h3>
                <h4>Open domain AI powered conversational chatbot</h4>
                <Markdown options={{forceBlock: true}}>
                    Ongoing learning and building of an open domain AI chatbot.
                    Before the advent of large language models I would design and build a lot of the architecture of my own language models.
                    Continuing to prove with cutting-edge research and development in the NLP space.
                </Markdown>
                <a href={`https://github.com/pinnouse/amadeus`}>Newest Model (built with performers)</a>
                <a href={`https://github.com/pinnouse/ReinaChat`}>Older Model</a>
            </div>
        </div>
    </div>
}


const repositories = [
  {
    title: "Hugging Face Tokenizers",
    description:
      "Collection of tokenizers used in natural language processing (NLP) applications. Navigating a large project used by many researchers and enterprises, I contributed to the developer experience (DX) of the tokenizers.",
    url: "huggingface/tokenizers",
  },
  {
    title: "Nuxt/Auth",
    description:
      "Authentication module for the NUXT webapp framework. My main contribution was to head the Discord integration for authentication.",
    url: "nuxt-community/auth-module",
  },
  {
    title: "Ani-SS",
    description:
      "Building an interface for WebGL shaders to behave on browsers. This project was inspired by bloc97's [Anime4K project](https://github.com/bloc97/Anime4K) that were intelligently crafted shaders to enhance or recover visual quality of a video or image.",
    url: "pinnouse/ani-ss",
  },
  {
    title: "ZeroTwo Bot",
    description:
      "My first large project. I learned the most from this project: developing software, deploying/hosting an application on the cloud, maintaining and scaling, interacting with APIs, and security/authentication. This project has given me lots of opportunity to explore technology and also expose me to a lot of great projects and developers.",
    url: "pinnouse/ZeroTwoBot",
  },
  {
    title: "Lodestone",
    description:
      "Open source project to manage Minecraft servers with the goal of bringing security and ease of use to the everyday player that wanted to start a server.",
    url: "lodestone-team/lodestone",
  },
  {
    title: "Amadeus",
    description:
      "NLP AI chatbot based on Google's [performers](https://ai.googleblog.com/2020/10/rethinking-attention-with-performers.html) (transformers with the attention mechanism performing linearly). My attempt at reaching for the stars with lots of training data and a whole machine learning pipeline to bring the project to life.",
    url: "pinnouse/amadeus",
  },
  {
    title: "AWE (A WebAssembly Emulator)",
    description:
      "A project to bring emulators to the world wide web. With the advent of web assembly, software and technology has never been so accessible. In this project, I aim to use the computer skills I have learned to bring game console emulators to your web browser!",
    url: "pinnouse/awe",
  },
  {
    title: "Ruumi",
    description:
      "A service where you can watch shows together with friends. No more countdowns to sync up the timing, just join the room and enjoy together.",
    url: "pinnouse/ruumi",
  },
  {
    title: "Macaron",
    description:
      "[Macaron](https://devpost.com/software/macaron) is a hackathon project that sought to reduce the clutter of noise in today's media, and bring it down to bite-sized bits. This project won the hackathon's \"The Perfect Pitch\" award.",
    url: "the-macaron/macaron",
  },
  {
    title: "Bento",
    description:
      "[Bento](https://devpost.com/software/bento-rnqv4c) is a hackathon submission to Hack the North 2020++. In this project, we aimed to create a solution for teachers to navigate the online setting as they would their classroom.",
    url: "pinnouse/bento",
  },
  {
    title: "Solid Dots (*nix Dotfiles)",
    description:
      "A repository containing my riced configurations of Linux. Finding my way around and learning the ins and outs of Unix-like systems has been a fun treat and grow very comfortable with the terminal.",
    url: "pinnouse/SolidDots",
  },
  {
    title: "Competitive",
    description: "This repository contains my work in competitive programming.",
    url: "pinnouse/Competitive",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicholas Wong</title>
        <meta name="description" content="Nicholas Wong home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.leftBar}>
        <img
          className={styles.profile}
          src="/PXL_headshot.jpg"
          alt="Profile Picture"
          width={260}
          height={260}
        />
        <h1>Nicholas Wong</h1>
        <p>Bringing ideas to life one line at a time.</p>
        <a className={styles.link} href="mailto:niwong@proton.me">
          📧 niwong@proton.me
        </a>
        <a className={styles.link} href="https://github.com/pinnouse">
          <img
            src="/GitHub-Mark-64px.png"
            alt="GitHub Logo"
            width={16}
            height={16}
          />
          <span>/pinnouse</span>
        </a>
        <a className={styles.link} href="https://twitter.com/pinnouse">
          <img
            // src="/Twitter_Logo_Blue.png"
            src="/logo.svg"
            alt="Twitter Logo"
            width={16}
            height={16}
          />
          <span>@pinnouse</span>
        </a>
        <a className={styles.link} href="https://www.linkedin.com/in/nwong33/">
          <img
            src="/LI-In-Bug.png"
            alt="LinkedIn Logo"
            width={16}
            height={16}
          />
          <span>/nwong33</span>
        </a>
        {/* <a className={styles.link}> */}
        {/*   <img src="/f9bb9c4af2b9c32a2c5ee0014661546d.png" alt="Discord Logo" width={16} height={16} /> */}
        {/*   <span>pinnouse</span> */}
        {/* </a> */}
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>

        <h2 className={styles.subtitle}>About Myself</h2>
        <p className={styles.description}>
          Hi there 👋! I&apos;m Nicholas, but you can call me <b>Nick</b>.
          I&apos;m a passionate developer with a drive to realize great solutions.
          I have an <b>Honours Bachelor of Science (HBSc) in Computer Science and Mathematics</b> from the University of Toronto.
          And I am interested in deep learning with transformers as well as accessible and beautiful software for both users and developers.
          <br />
          <br />
          As a developer I have professional experience in automation software and web development.
          I am also familiar in mobile development, test-driven development, and functional programming.
          <br />
          <br />
          Outside of software I play guitar, piano, and alto saxophone.
          I enjoy listening to all types of music especially jpop and classical.
          I am also trying to learn Japanese whilst improving my Cantonese.
          Apart from a bunch of hobbies I like to stay educated on maintaining a <b>good physique</b> and <b>mental health</b>.
        </p>

        <h2 className={styles.subtitle}>Large Projects</h2>
        <p className={styles.description}>A list of projects that I have been a part of, that I think best showcase my skillset and passion!</p>
        <Portfolio />

        <h2 className={styles.subtitle}>Work Experience</h2>
        <ul>
          <li>
            <b>Rotman Research Institute at Baycrest</b> (2024) &mdash; Research Scholar
            <ul>
              <li>Investigated neural network performance at varying levels of audio impairment</li>
              <li>Prepared environments for piloting experiments with new hardware and sensors</li>
            </ul>
          </li>
          <li>
            <b>Royal Bank of Canada</b> (2021 &ndash; 2022) &mdash; Technical System Analyst
            <ul>
              <li>
                Developed and documented automation tools, saving thousands of
                support hours of work
              </li>
              <li>Presented demonstrations for 500+ users</li>
              <li>
                Led adoption days to introduce and give tutorial on tool usage
              </li>
            </ul>
          </li>
          <li>
            <b>University of Toronto</b> (2020 &ndash; 2021) &mdash; Teaching Assistant
            <ul>
              <li>
                CSC108 &ndash; Lecture assistant, assisting in leading small
                group discussion and support during lecture time
              </li>
            </ul>
          </li>
        </ul>

        <h2 className={styles.subtitle}>Open Source Projects</h2>
        <p className={styles.description}>
          I believe open source projects are vital in benefiting all. The
          following are a list of open source projects I have created or
          contributed to.
        </p>
        <GitHubCard repositories={repositories} />
      </main>

      <footer className={styles.footer}>© 2024 Nicholas Wong</footer>
    </div>
  );
};

export default Home;
