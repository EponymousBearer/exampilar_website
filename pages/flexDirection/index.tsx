import './index.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper">
      <button><Link href={"/flexDirection/alternatingListProfile"}>Alternating List of Profile</Link></button>
      <button><Link href={"/flexDirection/testimonialCard"}>Testimonial Card</Link></button>
      <button><Link href={"/flexDirection/welcomeScreen"}>Welcome Screen</Link></button>
      Adnan
    </div>
  );
}
