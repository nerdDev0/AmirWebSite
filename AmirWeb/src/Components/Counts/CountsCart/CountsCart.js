import "./CountsCart.css";

export default function CountsCart({icon="Amir",count,description}) {
 
  return (
    <section className="CountsCart-container">
      <section className="icon--count">
        <section className="CountsCart-icon">
        {icon}
        </section>
        <p className="CountsCart-count">{count}</p>
      </section>
      <p className="CountsCart-text">{description}</p>
    </section>
  );
}
