import "./ContactUsCard.css";

export default function ContactUsCard({icon="Amir",head,description}) {
  return (
    <div className="ContactUsCard-Container">
      <div className="ContactUsCard-icon">{icon}</div>
      <div className="ContactUsCard-text">
        <h4>{head}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
