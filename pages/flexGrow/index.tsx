import './index.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper">
      <button><Link href={"/flexGrow/inlineSubscribeForm"}>Inline Subscribe Form</Link></button>
      <button><Link href={"/flexGrow/stickyFooter"}>Sticky Footer</Link></button>
      <button><Link href={"/flexGrow/cardWithHeaderFooter"}>Card With Header and Footer</Link></button>
      <button><Link href={"/flexGrow/tabsHoverEffect"}>Tabs Hover Effect</Link></button>
      <button><Link href={"/flexGrow/varWidthResButton"}>Variable Width Responsive Buttons</Link></button>
      Adnan
    </div>
  );
}
