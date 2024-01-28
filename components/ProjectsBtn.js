// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="mb-5 xl:mb-10 relative w-[100px] h-[100px] flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={80}
          height={84}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[80px] max-h-[88px]"
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2
        transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
