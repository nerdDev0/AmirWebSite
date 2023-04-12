import "./Services.css";
import ServicesCard from "./ServicesCard/ServicesCard";
import {
  BiBaseball,
  BiBookAlt,
  BiCycling,
  BiVideo,
  BiWorld,
  BiTachometer,
} from "react-icons/bi";
let BaseballIcon = <BiBaseball />,
  BookAltIcon = <BiBookAlt />,
  CyclingIcon = <BiCycling />,
  VideoIcon = <BiVideo />,
  WorldIcon = <BiWorld />,
  TachometerIcon = <BiTachometer />;

export default function Services() {
  let valueServicesCard = [
    {
      id:1,
      icon: BaseballIcon,
      head: "طراحی ",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      id:2,
      icon: BookAltIcon,
      head: "برنامه نویسی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      id:3,
      icon: CyclingIcon,
      head: "ارسال رایکان",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      id:4,
      icon: VideoIcon,
      head: "در لحضه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      id:5,
      icon: WorldIcon,
      head: "بیست وچهار ساعته",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      id:6,
      icon: TachometerIcon,
      head: "جدید",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
  ];

  return (
    <div className="Services-align">
      <section className="Services-container">
        <section className="Services-header">
          <span>خدمات</span>
          <h2>خدمات ما را برسی کنید</h2>
        </section>

        <section className="Services--container-servicesCard">
         {valueServicesCard.map((item)=>(
          <ServicesCard key={item.id}  {...item}/>
         ))}
        </section>
      </section>
    </div>
  );
}
