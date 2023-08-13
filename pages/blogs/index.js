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
        <link rel="shortcut icon" href="/logo-icon.png" />
      </Head>

      <nav>
          <Navbar page = {4}/>
      </nav>

      <br /><br /><br /><br /><br /><br />
      
      {data.map((blog, index) => (
        <Link href={{ pathname: '/blogs/[id]', query: { id: blog.id } }} style={{ textDecoration: 'none' }}>
            <div className={index % 2 === 0 ? styles.oddSection : styles.evenSection}>
                <h1>{blog.title}</h1>
            </div>
        </Link>
    ))}

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
