import './index.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper">
      <button><Link href={"/flexWrap/logosWrapped"}>Tabs Spaced Out</Link></button>
      <button><Link href={"/flexWrap/responsiveTeamProfile"}>Card With Previous And Next Link</Link></button>
      Adnan
    </div>
  );
}
