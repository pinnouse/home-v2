import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GitHubCard from "../components/githubCard";
import Portfolio from "../components/portfolio";
import styles from "../styles/Home.module.css";

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
          src="/pfp.png"
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
          I&apos;m a passionate developer with a drive to realize great
          solutions. Currently, I am pursuing a{" "}
          <b>double degree in Computer Science and Mathematics</b>, in my 4th
          year at the University of Toronto. I am interested in pursuing
          continued studies, <b>researching</b> deep learning and transformers
          further.
          <br />
          <br />
          Outside of studies, I play guitar, piano, and alto saxophone. I also
          have an interest in modern Japanese culture (from music and food to
          games and anime). Apart from a bunch of hobbies, I like to stay
          educated on maintaining a <b>good physique</b> and{" "}
          <b>mental health</b>.
        </p>

        <h2 className={styles.subtitle}>Large Projects</h2>
        <p className={styles.description}>
          A list of projects I&apos;ve done that I think best showcase my
          skillset and passion!
        </p>
        <Portfolio />

        <h2 className={styles.subtitle}>Work Experience</h2>
        <ul>
          <li>
            Royal Bank of Canada (2021 &ndash; 2022) &mdash; Technical System
            Analyst
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
            University of Toronto (2020 &ndash; 2021) &mdash; Teaching Assistant
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

      <footer className={styles.footer}>© 2022 Nicholas Wong</footer>
    </div>
  );
};

export default Home;
