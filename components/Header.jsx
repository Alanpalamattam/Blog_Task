import Link from "next/link";
import Image from "next/image";
import menyImg from "@/public/assets/meny.jpeg";
import SearchBar from "./Searchbar";
import { Globe } from "lucide-react";
export default function Header({ onSearch }) {
  const navigation = [
    { name: "Hotel", href: "/" },
    { name: "Flight", href: "/" },
    { name: "Train", href: "/about" },
    { name: "Travel", href: "/contact" },
    { name: "Car Rental", href: "/rental" },
  ];

  return (
    <header
      className="h-[550px] z-50 w-full  border-b border-gray-200 relative box-border overflow-hidden"
      style={{
        backgroundImage: "url('assets/main-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <div className=" max-w-[1200px] flex flex-row justify-between items-center ">
        <div className="flex h-16 items-center px-[7px]">
          <Link href="/" className="flex items-center mr-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-lg font-bold text-white">H</span>
            </div>
            <span className="text-[15px] font-extrabold text-white">
              Horizone
            </span>
          </Link>

           
          <nav className="flex items-center space-x-6 mt-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[12px] font-semibold text-white transition-colors hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
        <div className="flex items-center gap-4.5 mr-4">
          <div className="flex items-center gap-1.5">
            <Globe className=" bg-white p-0.5 pl-1 pr-1 w-[25px] rounded-[50%]" />
            <div className=" text-[13px] font-semibold text-white">EN</div>
          </div>
          <div className="text-[13px] text-white font-semibold">Log In</div>
          <div className="bg-white text-[14px] p-2.5 pl-5 pr-5 rounded-[7px]">
            Sign Up
          </div>
        </div>
      </div>
      <div className="absolute bottom-[60px] w-[350px] left-4.5">
        <span className="bg-white/20  text-white text-[13px]  p-2.5 rounded-2xl">
          Destination
        </span>
        <h1 className="text-white text-xl mt-4 font-semibold">
          Exploring the Wonders of Hiking
        </h1>
        <p className="text-white text-[15px] mt-2.5">
          An iconic landmarks,this post unveils the secrets that make this
          destination a travelers paradise.
        </p>
      </div>
      <div className="absolute bottom-20 flex flex-col right-5">
        <div className="flex items-center gap-2">
          <Image
            src={menyImg}
            alt="Menu Icon"
            width={26}
            height={26}
            className="rounded-full"
          />
          <h2 className="text-white text-[12px] font-semibold">
            Theodore Reginald
          </h2>
        </div>
        <div className="text-white text-[10px] font-semibold mt-2.5">
          24 Jan 2024 . 10 min read
        </div>
      </div>
    </header>
  );
}
