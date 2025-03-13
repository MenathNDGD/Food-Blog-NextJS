import Link from "next/link";
import Image from "next/image";

import classes from "./MainHeader.module.css";

import Logo from "@/assets/logo-full.png";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLinks from "./NavLinks";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={Logo} alt="Logo" width={200} height={50} priority />
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinks href={"/meals"}>Browse Meals</NavLinks>
            </li>
            <li>
              <NavLinks href={"/community"}>Foodies Community</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
