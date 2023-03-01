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
          <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900 drop-shadow-xl shadow-inner shadow-slate-800">
            <Link href="/displayFlex">Quotes</Link>
          </button>
          <div>
            <button className="mx-10 m-2 mb-5 p-2 rounded-xl ring ring-blue-900 ring-offset-2 ring-offset-black bg-white shadow-lg shadow-slate-900">
              <Link href={"/justifyContent"}>Justify Content</Link>
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
        <div className="container flex justify-around flex-wrap">
          <div className="team-profile">
            <img
              src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
              className="team-img"
            />
            <h3>Alexa Kardi</h3>
            <p>Founder and CEO</p>
          </div>
          <div className="team-profile">
            <img
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
              className="team-img"
            />
            <h3>Tavell Monroe</h3>
            <p>Web Developer</p>
          </div>
          <div className="team-profile">
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
              className="team-img"
            />
            <h3>Adale Smith</h3>
            <p>Marketing Specialist</p>
          </div>
          <div className="team-profile">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
              className="team-img"
            />
            <h3>Thomas Mason</h3>
            <p>UX Designer</p>
          </div>
          <div className="wrapper">
            <div className="icon-wrap flex items-stretch">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </span>
              <span className="icon-text">Stretch</span>
            </div>
            <div className="icon-wrap flex items-center">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </span>
              <span className="icon-text">Center</span>
            </div>
            <div className="icon-wrap flex items-start">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </span>
              <span className="icon-text">Start</span>
            </div>
            <div className="icon-wrap flex items-end">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </span>
              <span className="icon-text">End</span>
            </div>
            <div className="icon-wrap flex items-baseline">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </span>
              <span className="icon-text">Baseline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
