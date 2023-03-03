// import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import MyImage from "../images/4.jpg";

const InvalidPage = () => {
  return (
    <div className=" relative min-h-screen max-h-screen overflow-hidden  flex flex-col  text-white justify-center items-center top-0 right-0 bottom-0 left-0  bg-teal-500 ">
      <Image
        className="absolute bg-cover rounded-2xl mr-10 scale-150  "
        src={MyImage}
        height={1800}
        width={1200}
        alt="thread image"
      />
      <div className="absolute flex flex-col items-center ">
        <h1 className="p-0 text-24 scale-75 uppercase font-extrabold">404</h1>

        <h5 className="text-lg absolute bottom-28  ">
          page not found. Go to{" "}
          <Link
            href="/"
            className="font-extrabold underline hover:cursor-pointer  "
          >
            Homepage
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default InvalidPage;
