import Head from 'next/head';
import styles from '../styles/apps.module.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../components/Copyright";
import Navbar from "../components/Navbar";


export default function App({ data })
{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className={styles.container}>
            <Head>
                <title>Apps | STEMQuest Dicovery</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Explore STEMQuest Discovery apps. Engaging, interactive, and educational apps for STEM learning." />
                <link rel="shortcut icon" href="/logo-icon.png" />
            </Head>

            <h1 className={styles.hiddenTitle}>STEMQuest Discovery: Apps</h1>

            <nav>
                <Navbar page = {1}/>
            </nav>
            
            <div className={styles.contentDiv}>
                {data.map((app, index)=>(
                    <div className={index % 2 === 0 ? styles.app : styles.appReverse}>
                        <div className={index % 2 === 0 ? styles.row : styles.rowReverse}>
                            <div className={styles.carousel}>
                            <Slider {...settings}>
                                {app.images.map(image => (
                                <div>
                                    <img src={image} alt={app.name + " screenshot"} className={styles.carouselImage} />
                                </div>
                                ))}
                            </Slider>
                            </div>
                            <div className={styles.description}>
                                <img src={app.icon ? app.icon : ""} alt={app.name + " icon"} className={styles.app_icon}/>
                                <h2 className={styles.h2Style}>{app.name}</h2>
                                {app.description.map((para) => (
                                    <p>{para}</p>
                                ))}
                                <div style={{textAlign: 'center'}}>
                                    <button className={index % 2 === 0 ? styles.buttonStyle : styles.buttonStyleReverse} onClick={() => window.open(app.link, "_blank")} type="button">View on Google Play Store</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export async function getServerSideProps() {
    const { apps } = await import('/data/apps.json');
    return {
      props: {
        data: apps,
      },
    };
  }
  