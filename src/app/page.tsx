import Image from "next/image";
import Link from "next/link";
import exampilarlogo from "../app/exampilarlogo.png";

export default function Page2() {
  return (
    <div>
      <div className="flex justify-center bg-green-100">
        <div className="mx-4 order-last self-center">
          <Image
            src={exampilarlogo}
            height={150}
            width={150}
            alt="music"
          ></Image>
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-green-700">
            Welcome To Exampilar
          </h1>
          <h2 className="m-3 text-3xl font-semibold text-green-500">
            Tailwind CSS Example Website
          </h2>
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-100 via-green-500 to-green-100">
        <div className="flex align-middle justify-between">
          <button>
            <Link href="/displayFlex">Quotes</Link>
          </button>
          <button>
            <Link href={"/justifyContent"}>Justify Content</Link>
          </button>
          <button>
            <Link href={"/flexShrink"}>Flex Shrink</Link>
          </button>
          <button>
            <Link href={"/flexGrow"}>Flex Grow</Link>
          </button>
        </div>
        <div className="flex mx-3 align-middle justify-around">
          <button>
            <Link href={"/flexWrap"}>Flex Wrap</Link>
          </button>
          <button>
            <Link href={"/flexDirection"}>Flex Direction</Link>
          </button>
          <button>
            <Link href={"/alignItems"}>Align Items</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
