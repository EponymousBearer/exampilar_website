import './index.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper">
      <h1>Flex Shrink</h1>
      <button><Link href={"/flexShrink/itinerary"}>Itinerary</Link></button>
      <button><Link href={"/flexShrink/profileCard_Large"}>Profile Card (Large)</Link></button>
    </div>
  );
}
