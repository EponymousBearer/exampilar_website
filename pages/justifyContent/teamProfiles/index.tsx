import "./index.css";
import ms_hira from "../teamProfiles/ms_hira.jpeg";

export default function Page() {
  return (
    <div className="container flex justify-around">
      <div className="team-profile">
      <img
          src="https://media.licdn.com/dms/image/C4D03AQFuhdYPmkC0sA/profile-displayphoto-shrink_800_800/0/1562700934047?e=2147483647&v=beta&t=Bwruo2OggLTrCos4804rppZq0UbhmXmPlr5LxDobq74"
          className="team-img"
        />
        <h3>Hira Khan</h3>
        <p>Director at PIAIC</p>
      </div>
      <div className="team-profile">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQE1Hzv61ccMVw/profile-displayphoto-shrink_800_800/0/1556048207367?e=2147483647&v=beta&t=KjDz0Y-aELrRyRuqh_mj8oCSwUimyoK66DqheBx8aMk"
          className="team-img"
        />
        <h3>Daniyal Nagori</h3>
        <p>SDL at Panacloud</p>
      </div>
      <div className="team-profile">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQExPLCpwZM5sA/profile-displayphoto-shrink_800_800/0/1661721927217?e=2147483647&v=beta&t=-OLyW4C1MlTrwlUUz61b90qYQVlvMMK0kCf-l0dJZeE"
          className="team-img"
        />
        <h3>Hamzah Syed</h3>
        <p>JAMStack developer</p>
      </div>
      <div className="team-profile">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_800_800/0/1638368405154?e=2147483647&v=beta&t=Y2ESnL7WajFCydNTJL3gcxKbO-5jF6Y0Ci0ZlN47M4E"
          className="team-img"
        />
        <h3>Zia Khan</h3>
        <p>CEO Panacloud</p>
      </div>
    </div>
  );
}
