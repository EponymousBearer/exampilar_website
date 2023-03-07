import "./index.css";

export default function Page() {
  return (
    <div className="profile flex items-center">
      <img
        className="flex-shrink-0 profile-img"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
        alt=""
      />
      <div>
        <h3>Matt Cooper</h3>
        <p>
          A front end web developer from New York, USA. Currently working as a
          freelancer. Drop a mail or say hello 👋
        </p>
      </div>
    </div>
  );
}