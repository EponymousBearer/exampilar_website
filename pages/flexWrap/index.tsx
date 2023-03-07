import "./index.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="wrapper">
      <div>
        <h1>Flex Wrap</h1>
      </div>
      <button>
        <Link href={"/flexWrap/logosWraped"}>Logos Wrapped</Link>
      </button>
      <button>
        <Link href={"/flexWrap/resTeamProfiles"}>
          Responsive Team Profile
        </Link>
      </button>
    </div>
  );
}
