// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="mt-20 hidden xl:flex xl:max-w-none">
      <div className="w-1/4 h-auto rounded-full overflow-hidden ">
        <Image
          src={"/Subject.png"}
          width={800}
          height={700}
          alt=""
          className="translate-z-0 w-full h-full bg-transparent bottom-0 right-12"
          //className="translate-z-0 w-2/3 h-auto bg-transparent absolute bottom-0 right-12"
        />
      </div>
    </div>
  );
};

export default Avatar;
