import "./index.css";

export default function Page() {
  return (
    <div className="wrapper">
      <h2>Top Clients</h2>
      <div className="logos flex justify-around flex-wrap">
        <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png" />
        <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_300/v1628614672/logos/circleai_dm9slt.png" />
        <img src="https://res.cloudinary.com/thirus/image/upload/v1628617465/logos/onpoint_bikaaj.png" />
        <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_180/v1628617514/logos/Thirus_Logo_Tentative_twhvic.png" />
      </div>
    </div>
  );
}
