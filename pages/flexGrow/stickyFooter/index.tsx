import "./index.css";

export default function Page() {
  return (
    <div className="container min-h-screen flex flex-col">
      <div className="main flex-grow">
        <h1>Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          perferendis repellat, cum ratione fugit dolorum sequi dolores odit
          commodi cupiditate ab excepturi deserunt laborum saepe, praesentium id
          deleniti aperiam eaque.
        </p>
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna.
        </p>
      </div>
      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  );
}
