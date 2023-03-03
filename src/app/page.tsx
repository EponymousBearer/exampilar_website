import Image from "next/image";
import Link from "next/link";
import panaversePic from "../app/panaversePic.jpeg";

export default function Page2() {
  return (
    <div>
      <div className="flex justify-center bg-gray-300">
        <div className="mx-4 order-last self-center">
          <Image
            src={panaversePic}
            height={150}
            width={150}
            alt="music"
          ></Image>
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700">
            Welcome To Panaverse Dao
          </h1>
          <h2 className="text-3xl font-semibold text-blue-300">
            A community of Metaverse and Web 3.0 Development
          </h2>
        </div>
      </div>
      <div className="align-middle justify-center mt-auto bg-gradient-to-r from-blue-500 via-blue-900 to-blue-500">
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
  );
}
