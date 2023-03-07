import "./index.css";

export default function Page() {
  return (
    <div>
      <div className="container flex items-start">
        <div>
          <h2>Visit to the Eiffel Tower</h2>
          <p>
            There's no better start to your Paris tour than visiting the iconic
            Eiffel Tower. This is a must visit tourist spot in the whole of
            France.
          </p>
        </div>
        <span className="flex-shrink-0">10:00 AM</span>
      </div>
      <div className="container flex items-start">
        <div>
          <h2>Lunch at New Jawad</h2>
          <p>
            It is an Indian restaurant close to the Eiffel Tower. Enjoy
            delicious Indian traditional food and South Asian food.
          </p>
        </div>
        <span className="flex-shrink-0">1:00 PM</span>
      </div>
    </div>
  );
}
