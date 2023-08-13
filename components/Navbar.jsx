import stylesnav from '../styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = ({page = 0}) =>
{
    return (
        <div className={stylesnav.navbar}>
            <div>
                    {/*<Link href="/">
                        <Image src="/logo-icon.png" alt="logo" width={40} height={40} />
                    </Link>
                    &nbsp;&nbsp;&nbsp;*/}
                    <Link href="/">
                        <Image src="/logo-text.png" alt="logo" width={400} height={70} />
                    </Link>
            </div>
            <div>
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
        </div>
    )
}

export default Navbar;