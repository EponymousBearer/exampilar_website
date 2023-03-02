import './index.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper">
      <button><Link href={"/flexWrap/resTeamProfiles"}>Itinerary</Link></button>
      <button><Link href={"/flexWrap/logosWraped"}>Logos Wraped</Link></button>
      Adnan
    </div>
  );
}
