import './index.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper">
      <button><Link href={"/justifyContent/tabsSpacedOut"}>Tabs Spaced Out</Link></button>
      <button><Link href={"/justifyContent/cardLinks"}>Card With Previous And Next Link</Link></button>
      <button><Link href={"/justifyContent/teamProfiles"}>Team Profiles</Link></button>
      Adnan
    </div>
  );
}
