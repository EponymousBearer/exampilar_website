import "./index.css";

export default function Page() {
  return (
    <div className="container flex flex-wrap">
      <button type="button" className="flex-grow">
        Like
      </button>
      <button type="button" className="flex-grow">
        Share
      </button>
      <button type="button" className="flex-grow-[2]">
        Leave a Comment
      </button>
    </div>
  );
}
