import "./index.css";

export default function Page() {
  return (
    <div>
      <p>Hover over the links below 👇</p>
      <ul className="flex">
        <li className="flex-grow hover:flex-grow-[3]">Description</li>
        <li className="flex-grow hover:flex-grow-[3]">Care Instructions</li>
        <li className="flex-grow hover:flex-grow-[3]">Return Policy</li>
      </ul>
    </div>
  );
}
