import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from "../components/Copyright";
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic';


export default function Home() {

  const NewsletterForm = dynamic(() => import('../components/NewsletterForm'), { ssr: false });

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | STEMQuest Dicovery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logo-icon.png" />
      </Head>

      <nav>
          <Navbar page = {0}/>
      </nav>

      <br /><br /><br /><br />


      <div className={styles.evenSection} style={{ backgroundColor: '#040548' }}>
        <img src="/logo-color2.png" alt="logo" style={{ width: '100vw', height: 'auto' }} className={styles.topImage}/>
      </div>


      <div className={styles.oddSection}>
        <h1>Our Mission</h1>
        <p className={styles.content}>
          Under the banner of 'Our Mission' at STEMQuest Discovery, our ambition is to bridge the gap between access and opportunity in the field of STEM. We are driven by a passionate belief that every individual, regardless of their background or socioeconomic status, should have the chance to explore, learn and excel in STEM disciplines. Our goal is to ignite curiosity, inspire learning, and foster self-confidence in these subjects. We strive to create an inclusive, engaging environment that makes STEM accessible, comprehensible, and enjoyable, thereby nurturing the innovators and problem-solvers of tomorrow. This, we believe, is our path to a brighter, more equitable future, powered by knowledge, curiosity, and the shared passion for STEM. 
        </p>
      </div>

      <div className={styles.evenSection}>
        <h1>Our Apps</h1>
        <div className={styles.content}>
          <img src="/apps/beginning/img3.png" alt="icon" className={styles.app_image_reverse}/>
          <img src="/apps/beginning/icon.png" alt="icon" className={styles.app_icon_reverse}/>
          <img src="/apps/shapex/img2.png" alt="icon" className={styles.app_image}/>
          <img src="/apps/shapex/icon.png" alt="icon" className={styles.app_icon}/>
          <p>
          Explore the exciting world of STEM with our diverse range of Android apps, designed exclusively to inspire curiosity and foster learning in Science, Technology, Engineering, and Mathematics. These apps, free for all, are our initiative to democratize STEM education, ensuring every aspiring mind, privileged or underprivileged, has access to quality learning resources. Dive in and discover the joy of STEM learning today! 
          </p>
          <br />
          <button className={styles.buttonStyleReverse} onClick={() => window.location.href = '/apps'} type="button">Check Out Our Apps</button>
        </div>
      </div>

      <div className={styles.oddSection}>
        <h1>Our Blogs</h1>
        <div className={styles.content}>
          <p>
          Our latest blogs on Artificial Intelligence are a treasure trove of knowledge waiting to be explored. Dive into the mesmerising world of AI as we guide you through complex concepts, fascinating insights, and cutting-edge advancements. These free-to-read blogs are specially written to fuel your curiosity and enhance your understanding of this rapidly-evolving field. Whether you're a seasoned tech enthusiast or an eager beginner, our blogs are tailored to make AI accessible and engaging. Don't wait to discover the future – visit our AI blog series now and take the first step on your journey into the extraordinary realm of Artificial Intelligence!
          </p>
          <br />
          <button className={styles.buttonStyle} onClick={() => window.location.href = '/blogs'} type="button">Check Out Our Blogs</button>
        </div>
      </div>

      <div className={styles.evenSection}>
        <NewsletterForm />
      </div>

      <footer>
        <Footer />
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
  
}
