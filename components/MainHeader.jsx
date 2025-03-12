import Link from "next/link";
import Image from "next/image";

import classes from "./MainHeader.module.css";

import Logo from "@/assets/logo-full.png";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={Logo} alt="Logo" width={200} height={50} priority />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
