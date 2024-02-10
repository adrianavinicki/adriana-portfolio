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
    <div className="mt-0 flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/adrianavinicki"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/adrianavinicki99/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://soyhenry.slack.com/archives/D03E9TF9JNS"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiSlackFill />
      </Link>
      <Link
        href={"https://wa.me/5491158239019"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappFill />
      </Link>
    </div>
  );
};

export default Socials;
