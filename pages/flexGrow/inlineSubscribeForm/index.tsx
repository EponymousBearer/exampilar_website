import "./index.css";

export default function Page() {
  return (
    <div className="wrapper">
      <div className="container flex">
        <input
          type="email"
          className="flex-grow"
          placeholder="Email Address"
        ></input>
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
}
