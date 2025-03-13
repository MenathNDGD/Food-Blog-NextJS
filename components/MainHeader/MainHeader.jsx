"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import classes from "./MainHeader.module.css";

import Logo from "@/assets/logo-full.png";
import MainHeaderBackground from "./MainHeaderBackground";

const MainHeader = () => {
  const path = usePathname();

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
              <Link
                href={"/meals"}
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href={"/community"}
                className={path === "/community" ? classes.active : undefined}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
