// link
import Link from "next/link";

// icons
import {
  RiGithubFill,
  RiLinkedinFill,
  RiSlackFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiSlackFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiWhatsappFill />
      </Link>
    </div>
  );
};

export default Socials;
