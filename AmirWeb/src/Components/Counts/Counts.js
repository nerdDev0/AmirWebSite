import "./Counts.css";
import CountsCart from "./CountsCart/CountsCart";
import {AiOutlineClear,AiOutlineSmile,AiOutlineBank,AiOutlineRest} from "react-icons/ai"
let clearIcon=<AiOutlineClear/>,smileIcon=<AiOutlineSmile/>,bankIcon=<AiOutlineBank/>,restIcon=<AiOutlineRest/>

export default function Counts() {
  let valueCountsCart=[
    {id:1,icon:clearIcon,count:69,description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ "},
    {id:2,icon:smileIcon,count:57,description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ "},
    {id:3,icon:bankIcon,count:92,description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ "},
    {id:4,icon:restIcon,count:39,description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ "}

  ]
  return (
    <section className="Counts-container">
      <section className="Counts-right">
        <img loading="lazy" src="./pictures/countsPic.jpg" alt="" />
      </section>
      <section className="Counts-left">
        <section className="Counts-header">
          <h2 className="Counts-head">
            شایسته ترین لذت را به هر حال ارائه می دهد
          </h2>
          <p className="Counts-des">
            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من
            به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد
            مقصر است
          </p>
        </section>
        <section className="Counts-carts">
          
         {valueCountsCart.map((itemCountsCart)=>(
          <CountsCart key={itemCountsCart.id} {...itemCountsCart}/>
         ))}
        </section>
      </section>
    </section>
  );
}
