import Footer from "../../components/Copyright";
import Navbar from "../../components/Navbar";
import Head from 'next/head';
import styles from '../../styles/blog.module.css';

export default function Blogs({ data }) {
  console.log("Here")
  console.log(data)  
  return (
            <div className={styles.container}>
                <Head>
                    <title>Blogs</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="shortcut icon" href="/logo-icon.png" />
                </Head>

                <nav>
                    <Navbar page = {-1}/>
                </nav>

                <br /><br /><br /><br />

                <div className={styles.description}>
                    <div className={styles.heading}>
                        <h1>{data.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: data.text }} />
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
}



export async function getStaticPaths() {
    const data = await import('/data/blogs.json');
    const blogs = data.blogs;
  
    const allPaths = blogs.map((blog) => {
      return {
        params: {
          blog: blog.id + ""
        },
      };
    });
  
    return {
      paths: allPaths, 
      fallback: false,
    };
  }
  
  
  export async function getStaticProps({ params }) {
    const { blogs } = await import('/data/blogs.json');
    const blog = blogs.find((blog) => blog.id.toString() === params.blog);
  
    if (!blog) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { data: blog },
    };
  }
  