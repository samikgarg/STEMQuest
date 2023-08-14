import { useState } from 'react';
import stylesnav from '../styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = ({ page = 0 }) => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <div className={stylesnav.navbar}>
            <div>
                <Link href="/">
                    <Image className={stylesnav.imgLogo} src="/logo-text.png" alt="logo" width={400} height={70} />
                </Link>
            </div>

            <div className={stylesnav.links}>
                <Link href="/" className={page == 0 ? stylesnav.active : stylesnav.navlink}>Home</Link>
                <Link href="/apps" className={page == 1 ? stylesnav.active : stylesnav.navlink}>Apps</Link>
                <Link href="/blogs" className={page == 4 ? stylesnav.active : stylesnav.navlink}>Blogs</Link>
                <Link href="/about-us" className={page == 2 ? stylesnav.active : stylesnav.navlink}>About Us</Link>
                <Link href="/contact-us" className={page == 3 ? stylesnav.active : stylesnav.navlink}>Contact Us</Link>
            </div>

            <div className={stylesnav.hamburger} onClick={() => setShowMobileNav(!showMobileNav)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {showMobileNav && 
                <div className={stylesnav.mobileNav}>
                    <Link href="/" className={page == 0 ? stylesnav.active : stylesnav.navlink}>Home</Link>
                    <Link href="/apps" className={page == 1 ? stylesnav.active : stylesnav.navlink}>Apps</Link>
                    <Link href="/blogs" className={page == 4 ? stylesnav.active : stylesnav.navlink}>Blogs</Link>
                    <Link href="/about-us" className={page == 2 ? stylesnav.active : stylesnav.navlink}>About Us</Link>
                    <Link href="/contact-us" className={page == 3 ? stylesnav.active : stylesnav.navlink}>Contact Us</Link>
                </div>
            }
        </div>
    )
}

export default Navbar;
