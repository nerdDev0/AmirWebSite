import "./Products.css";
import ProductCarts from "./ProductCarts/ProductCarts";
import { BsClock, BsCupHot, BsTrophyFill, BsController } from "react-icons/bs";
let clockIcon = <BsClock />,
  cupIcon = <BsCupHot />,
  TrophyFillIcon = <BsTrophyFill />,
  ControllerIcon = <BsController />;

export default function Products() {
  let valueProductCarts = [
    {
      id: 1,
      icon: clockIcon,
      head: "تبلیغ سختی است",
      description: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",
    },
    {
      id: 2,
      icon: cupIcon,
      head: "کدام یک از اینهاست",
      description:
        "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند",
    },
    {
      id: 3,
      icon: TrophyFillIcon,
      head: "یا کور شده است",
      description:
        "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند",
    },
    {
      id: 4,
      icon: ControllerIcon,
      head: "حقیقت مبارک",
      description:
        "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند",
    },
  ];
  return (
    <div>
      <section className="Products-container">
        <section className="right-Products">
          <img loading="lazy" src="./pictures/ProductPic.jpg" alt="" />
        </section>
        <section className="left-Products">
          {valueProductCarts.map((itemProductCart) => (
            <ProductCarts key={itemProductCart.id} {...itemProductCart} />
          ))}
        </section>
      </section>
    </div>
  );
}
