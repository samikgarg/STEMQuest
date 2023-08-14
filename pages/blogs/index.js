import Head from 'next/head';
import styles from '../../styles/blogs.module.css';
import Footer from "../../components/Copyright";
import Navbar from "../../components/Navbar";
import Link from 'next/link';

export default function Blogs({ data }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs | STEMQuest Dicovery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore the latest blogs and articles from STEMQuest Discovery on interdisciplinary topics related to Artificial Intelligence." />

        <link rel="shortcut icon" href="/logo-icon.png" />
      </Head>

      <h1 className={styles.hiddenTitle}>STEMQuest Discovery: Blogs</h1>

      <nav>
          <Navbar page = {4}/>
      </nav>
      
      <div className={styles.contentDiv}>
        {data.map((blog, index) => (
          <Link href={{ pathname: '/blogs/[id]', query: { id: blog.id } }} style={{ textDecoration: 'none' }}>
              <div className={index % 2 === 0 ? styles.oddSection : styles.evenSection}>
                  <h2>{blog.title}</h2>
              </div>
          </Link>
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
  
}

export async function getServerSideProps() {
    const { blogs } = await import('/data/blogs.json');
    return {
      props: {
        data: blogs,
      },
    };
  }
