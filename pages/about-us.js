import Head from 'next/head';
import styles from '../styles/about.module.css';
import Footer from "../components/Copyright";
import Navbar from "../components/Navbar";

//comment

export default function Home() {
  
    return (
      <div className={styles.container}>
        <Head>
          <title>About Us | STEMQuest Dicovery</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Learn more about STEMQuest Discovery's founder, Samik Garg, and his mission to democratize STEM learning." />
          <link rel="shortcut icon" href="/logo-icon.png" />
        </Head>

        <h1 className={styles.hiddenTitle}>STEMQuest Discovery: About Us</h1>
  
        <nav>
          <Navbar page = {2}/>
        </nav>

        <div className={styles.content}>
          <h2 className={styles.heading}> Meet the Founder - Samik Garg</h2>
          <div className={styles.description}>
          <img src="me.png" alt="Picture of Samik Garg, founder of STEMQuest Discovery" className={styles.image}/>
          <q>
          I am Samik Garg, the passionate force behind STEMQuest Discovery. My journey in the realms of Science, Technology, Engineering, and Mathematics has ignited an intense desire within me to share this passion with others. Fuelled by insatiable curiosity and a love for problem-solving, I have embarked on a mission to democratize STEM learning. As the founder of STEMQuest Discovery, my commitment lies in fostering curiosity, enhancing understanding, and promoting innovation among learners from all walks of life. My vision is a world where every individual, regardless of their circumstances, has the opportunity to uncover the exhilarating potential and joy of STEM.
          </q>
          </div>
        </div>

        <footer>
            <Footer />
        </footer>
      </div>
    )
}