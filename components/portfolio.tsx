import Image from 'next/image'
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
                <a href={`https://a.mada.moe`}>Current Production Model</a>
                <a href={`https://github.com/pinnouse/ReinaChat`}>Older Model</a>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src='/portfolio/oslyn.gif' alt='ZeroTwo-Bot Home Page' width={1280} height={720} />
            </div>
            <div className={styles.info}>
                <h3>Oslyn</h3>
                <h4>Digital AI powered musician companion</h4>
                <Markdown options={{forceBlock: true}}>
                    Was a lead developer in a lot of the backend and AI functionality, eventually pushing the project as the AI team lead.
                    Worked together with a small group of passionate developers; mentoring, growing, and inspiring one another.
                </Markdown>
                <a href={`https://oslyn.io`}>Oslyn Website</a>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src='/portfolio/ztb.gif' alt='ZeroTwo-Bot Home Page' width={1280} height={720} />
            </div>
            <div className={styles.info}>
                <h3>ZeroTwo-Bot</h3>
                <h4>Discord bot serving millions of users</h4>
                <Markdown options={{forceBlock: true}}>
                    Work as a web developer for a Discord bot serving millions of users (50+ million as of now!).
                    Produced the home landing page, store page, and other designs to be used on the web.
                </Markdown>
                <a href={`https://zerotwo.bot`}>Home Page</a>
                <a href={`https://store.zerotwo.bot`}>Store Page</a>
            </div>
        </div>
    </div>
}

export default Portfolio