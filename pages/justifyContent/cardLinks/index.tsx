import "./index.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="card">
      <h1>Card Link</h1>
      <p>
        Here is an example of card links. You can see other examples of justify
        content below.
      </p>
      <div className="links flex justify-between">
        <button>
          <Link href={"/justifyContent/teamProfiles"}>Team Profiles</Link>
        </button>
        <button>
          <Link href={"/justifyContent/tabsSpacedOut"}>Tabs Spaced Out</Link>
        </button>
      </div>
    </div>
  );
}
