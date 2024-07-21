import Markdown from 'markdown-to-jsx'
import styles from '../styles/Portfolio.module.css'

function Portfolio() {
    return <div className={styles.grid}>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src='/portfolio/chat.gif' alt='AI Chatbot' width={1280} height={720} />
            </div>
            <div className={styles.info}>
                <h3>AI Chatbot</h3>
                <h4>Open domain AI powered conversational chatbot</h4>
                <Markdown options={{forceBlock: true}}>
                    Ongoing learning and building of an open domain AI chatbot.
                    Designed and built a lot of the architecture of the high level model.
                    Continuing to prove with cutting-edge research and development in the NLP space.
                </Markdown>
                <a href={`https://github.com/pinnouse/amadeus`}>Newest Model (built with performers)</a>
                <a href={`https://github.com/pinnouse/ReinaChat`}>Older Model</a>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src='/portfolio/lodestone.png' alt='Lodestone Home Page' width={1280} height={720} />
            </div>
            <div className={styles.info}>
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
        <div className={styles.card}>
            <div className={styles.image}>
                <img src='/portfolio/oslyn.gif' alt='Oslyn Project Home Page' width={1280} height={720} />
            </div>
            <div className={styles.info}>
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
        <div className={styles.card}>
            <div className={styles.image}>
                <img src='/portfolio/ztb.gif' alt='ZeroTwo-Bot Home Page' width={1280} height={720} />
            </div>
            <div className={styles.info}>
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
                <a href={`https://zerotwo.bot`}>Home Page (design deprecated)</a>
            </div>
        </div>
    </div>
}

export default Portfolio
