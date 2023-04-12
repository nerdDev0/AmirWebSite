import "./ProductCarts.css"



export default function ProductCarts({icon="Amir",head,description}) {
  return (
    <div>
        <section className="ProductCarts-container">
            <section className="ProductCarts-logo">
           {icon}
            </section>
            <section className="ProductCarts-text">
                <h3 className="ProductCarts-text__head">{head}</h3>
                <p className="ProductCarts-text__des">{description}</p>
            </section>
           

        </section>
    </div>
  )
}
