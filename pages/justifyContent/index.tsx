import "./index.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="wrapper">
      <h1>
        Justify Content
      </h1>
      <h3>justify-start</h3>
      <div className="menu flex justify-start">
        <a href="#" className="active">
          Profile
        </a>
        <a href="#">Notifications</a>
        <a href="#">Payments</a>
        <a href="#">Settings</a>
      </div>
      <h3>justify-end</h3>
      <div className="menu flex justify-end">
        <a href="#" className="active">
          Profile
        </a>
        <a href="#">Notifications</a>
        <a href="#">Payments</a>
        <a href="#">Settings</a>
      </div>
      <h3>justify-center</h3>
      <div className="menu flex justify-center">
        <a href="#" className="active">
          Profile
        </a>
        <a href="#">Notifications</a>
        <a href="#">Payments</a>
        <a href="#">Settings</a>
      </div>
      <h3>justify-between</h3>
      <div className="menu flex justify-between">
        <a href="#" className="active">
          Profile
        </a>
        <a href="#">Notifications</a>
        <a href="#">Payments</a>
        <a href="#">Settings</a>
      </div>
      <h3>justify-around</h3>
      <div className="menu flex justify-around">
        <a href="#" className="active">
          Profile
        </a>
        <a href="#">Notifications</a>
        <a href="#">Payments</a>
        <a href="#">Settings</a>
      </div>
      <h3>justify-evenly</h3>
      <div className="menu flex justify-evenly">
        <a href="#" className="active">
          Profile
        </a>
        <a href="#">Notifications</a>
        <a href="#">Payments</a>
        <a href="#">Settings</a>
      </div>
      <div className="menu flex justify-evenly">
        <button>
          <Link href={"/justifyContent/tabsSpacedOut"}>Tabs Spaced Out</Link>
        </button>
        <button>
          <Link href={"/justifyContent/cardLinks"}>
            Card With Previous And Next Link
          </Link>
        </button>
        <button>
          <Link href={"/justifyContent/teamProfiles"}>Team Profiles</Link>
        </button>
      </div>
    </div>
  );
}
