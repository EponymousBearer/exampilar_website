import "./index.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="wrapper">
      <h1>Flex Direction</h1>
      <button>
        <Link href={"/flexDirection/alternatingListProfile"}>
          Alternating List of Profile
        </Link>
      </button>
      <button>
        <Link href={"/flexDirection/testimonialCard"}>Testimonial Card</Link>
      </button>
      <button>
        <Link href={"/flexDirection/welcomeScreen"}>Welcome Screen</Link>
      </button>
    </div>
  );
}
