import Image from "next/image";
import panaversePic from "../app/panaversePic.jpeg";

export default function Page() {
  return (
    <>
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
          <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900 drop-shadow-xl shadow-inner shadow-slate-800">
            Learn More
          </button>
          <div>
            <button className="mx-10 m-2 mb-5 p-2 rounded-xl ring ring-blue-900 ring-offset-2 ring-offset-black bg-white shadow-lg shadow-slate-900">
              Contact Us
            </button>
            <button className="mx-10 m-2 mb-5 p-2 rounded-xl ring ring-blue-900 ring-offset-2 ring-offset-black bg-white shadow-lg shadow-slate-900">
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-auto bg-gradient-to-r from-blue-500 via-blue-900 to-blue-500 flex justify-center">
        <button className="mr-10 ring-2 ring-white px-2 p-3 m-7 rounded-full bg-blue-500 shadow-xl shadow-black text-white">
          Meet Us
        </button>
        <button className="mr-10 ring-2 ring-white px-2 p-3 m-7 rounded-full bg-blue-500 shadow-xl shadow-black text-white">
          Join Us
        </button>
      </div>
      <div>
        <div className="flex">
          <div className="quote">
            <p>
              “The success combination in business is: Do what you do better...
              and: do more of what you do.”
            </p>
            <span>- David J. Schwartz</span>
          </div>
          <div className="quote">
            <p>“Give out what you most want to come back.”</p>
            <span>- Robin Sharma</span>
          </div>
          <div className="quote">
            <p>
              “You don't have to be great at something to start, but you have to
              start to be great at something.”
            </p>
            <span>- Zig Ziglar</span>
          </div>
          <div className="quote">
            <p>
              <h1>Hello</h1>
              “Nothing to say!”
            </p>
            <span>- Adnan</span>
          </div>
        </div>
      </div>
    </>
  );
}
