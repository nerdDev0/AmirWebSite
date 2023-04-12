import "./ServicesCard.css";

export default function ServicesCard({icon="Amir",head,description}) {
  return (
   
      <section className="container-servicesCard">
        <div className="servicesCard-logo">{icon}</div>
        <h2 className="servicesCard-header">{head}</h2>
        <p className="servicesCard-des">{description}</p>
      </section>
   
  );
}
