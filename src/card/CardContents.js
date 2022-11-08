import "./card.css";
const CardContents = (props) => {
  const profiles = [
    {
      id: 0,
      name: "Example Card 1",
      profile:
        "Sed ut perspiciat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab",
      picture:
        "https://image.shutterstock.com/mosaic_250/2780032/1714666150/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg",
      showCard: true
    },
    {
      id: 1,
      name: "Example Card 2",
      profile:
        "Sed ut perspiciat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab",
      picture:
        "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
      showCard: false
    },
    {
      id: 2,
      name: "Example Card 3",
      profile:
        "Sed ut perspiciat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab",
      picture:
        "https://image.shutterstock.com/image-photo/portrait-smiling-african-american-student-260nw-1194497215.jpg",
      showCard: false
    }
  ];

  return (
    <div>
      {profiles.map((profile) => {
        if (profile.id === props.currentProfile) {
          return (
            <div key={profile.id} className="card">
              <h2>{profile.name}</h2>
              <p>{profile.profile}</p>
              <img
                className="profile-img"
                src={profile.picture}
                alt="profile headshot"
              />
            </div>
          );
        }
      })}
    </div>
  );
};
export default CardContents;
