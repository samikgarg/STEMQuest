import React from 'react';
import styles from '../styles/contact.module.css';
import stylesnav from '../styles/navbar.module.css';
import Head from 'next/head';
import Footer from "../components/Copyright";
import Navbar from "../components/Navbar";


export default function Form() {

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
          const response = await fetch('/api/contact', {
            method: 'post',
            body: new URLSearchParams(data),
          });
          if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`);
          }
          document.getElementById("form").reset();
          alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
          console.error(err);
          alert("We can't submit the form, try again later?");
        }
      }
    
    return (
        <div className={styles.formContainer}>
            <Head>
                <title>Contact Us</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/logo-icon.png" />
            </Head>
            
            <nav className={stylesnav.navbar}>
                <Navbar page = {3}/>
            </nav>
            
            <form className={styles.form} id="form" onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>What&nbsp;is&nbsp;your&nbsp;Name?</label>
                    <input type="text" id="name" name="name" className={styles.input} />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>What&nbsp;is&nbsp;your&nbsp;Email?</label>
                    <input type="email" id="email" name="email" className={styles.input} />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="details" className={styles.label}>Please&nbsp;provide&nbsp;the&nbsp;details&nbsp;of&nbsp;your&nbsp;request.</label>
                    <textarea id="details" name="details" className={styles.textarea} />
                </div>

                <input type="submit" value="Submit" className={styles.submitButton} />
            </form>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
