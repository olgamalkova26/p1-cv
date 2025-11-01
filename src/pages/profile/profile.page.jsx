const ProfilePage = ({ personalInfo }) => (
  <main className="profile-page">
    <div className="profile-wrapper">
      <img
        className="profile-photo"
        src={personalInfo.photoSrc}
        alt={personalInfo.name}
      />
      <div className="profile-content">
        <h2>{personalInfo.name}</h2>
        <p className="profile-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim ab
          reprehenderit molestiae omnis quisquam incidunt ducimus, illo non cum
          quia eum perferendis doloremque accusamus quibusdam nostrum,
          voluptate, delectus consequuntur.
        </p>
      </div>
    </div>
  </main>
);

export default ProfilePage;
