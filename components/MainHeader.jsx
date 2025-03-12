import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo-full.png";

const MainHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" width={200} height={50} className="p-5" />
      </Link>
      <nav className="flex flex-col items-center space-x-5 p-5">
        <ul className="flex items-center space-x-5">
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
