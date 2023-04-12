import "./CartHeader.css"

export default function CartHeader({name,icon="Amir"}){



return(
    <div className="cart-header">
<div className="icon-header">{icon}</div>

<p>{name}</p>
    </div>
)
}