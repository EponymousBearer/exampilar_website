import './index.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper">
      <button><Link href={"/alignItems/centerADiv"}>Center A Div</Link></button>
      <button><Link href={"/alignItems/frequentQuestion"}>Frequent Question</Link></button>
      <button><Link href={"/alignItems/iconAndText"}>Icon And Text</Link></button>
      <button><Link href={"/alignItems/profileCard"}>Profile Card</Link></button>
      <button><Link href={"/alignItems/serviceSection"}>Service Section</Link></button>
      Adnan
    </div>
  );
}
