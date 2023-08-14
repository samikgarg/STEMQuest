import stylesnav from '../styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = ({page = 0}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={stylesnav.navbar}>
            <div className={stylesnav.logoContainer}>
                <Link href="/">
                    <Image src="/logo-text.png" alt="logo" width={400} height={70} />
                </Link>
            </div>
            {isOpen ? (
                <div className={stylesnav.menuContainer}>
                    <Link href="/" className={page == 0 ? stylesnav.active : stylesnav.navlink}>
                        Home
                    </Link>
                    <Link href="/apps" className={page == 1 ? stylesnav.active : stylesnav.navlink}>
                        Apps
                    </Link>
                    <Link href="/blogs" className={page == 4 ? stylesnav.active : stylesnav.navlink}>
                        Blogs
                    </Link>
                    <Link href="/about-us" className={page == 2 ? stylesnav.active : stylesnav.navlink}>
                        About Us
                    </Link>
                    <Link href="/contact-us" className={page == 3 ? stylesnav.active : stylesnav.navlink}>
                        Contact Us
                    </Link>
                </div>
            ) : null }
            <button className={stylesnav.hamburger} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
        </div>
    )
}

export default Navbar;
