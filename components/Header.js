// next image
import Image from "next/image";

// next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-y-6
        pv-8"
        >
          {/* Nombre */}
          <span
            className="text-white mt-10 text-center md:text-center lg:text-left text-2xl md:text-3xl lg:text-4xl"
            style={{ fontWeight: "bolder" }}
          >
            Adriana Vinicki
          </span>
          {/*</div>*/}
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
