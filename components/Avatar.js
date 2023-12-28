// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <div className="w-1/3 h-auto rounded-full overflow-hidden ">
        <Image
          src={"/Subject.png"}
          width={737}
          height={678}
          alt=""
          className="translate-z-0 w-full h-full bg-transparent bottom-0 right-12"
          //className="translate-z-0 w-2/3 h-auto bg-transparent absolute bottom-0 right-12"
        />
      </div>
    </div>
  );
};

export default Avatar;
