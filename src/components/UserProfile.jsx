import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="avatar"></div>
      <h2>Jacques Gluke</h2>
      <p>@jgluke</p>
      <p>Ocho Rios, Jamaica</p>
      <div className="stats">
        <div>
          <p>Followers</p>
          <h3>5603</h3>
        </div>
        <div>
          <p>Views</p>
          <h3>4827</h3>
        </div>
        <div>
          <p>Likes</p>
          <h3>1308</h3>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
