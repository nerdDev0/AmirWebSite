import "./ContactUs.css";
import ContactUsCard from "./ContactUsCard/ContactUsCard";
import {
  AiOutlineMobile,
  AiOutlineEnvironment,
  AiOutlineMail,
} from "react-icons/ai";
let MobileIcon = <AiOutlineMobile />,
  mapIcon = <AiOutlineEnvironment />,
  MailIcon = <AiOutlineMail />;
export default function ContactUs() {
  let valueContactUsCard = [
    { id: 1, icon: mapIcon, head: "مکان", description: "تهران خیابان آزادی" },
    {
      id: 2,
      icon: MailIcon,
      head: "ایمیل",
      description: "a.ho3.ahm@gmail.com",
    },
    { id: 3, icon: MobileIcon, head: "شماره تماس", description: "09300000000" },
  ];
  return (
    <div className="align-ContactUs">
      <div className="ContactUs-container">
        <div className="ContactUs-header">
          <p className="ContactUs-des">تماس با ما</p>
          <h2 className="ContactUs-head">با ما تماس بگیرید</h2>
        </div>

        <div className="ContactUs-content">
          <div className="ContactUs-info">
            {valueContactUsCard.map((ContactUsItem) => (
              <ContactUsCard key={ContactUsItem.id} {...ContactUsItem} />
            ))}
          </div>
          <div className="ContactUs-inputs">
            <div className="name--email">
              <input
                className="ContactUs-input--name"
                type="text"
                placeholder="نام"
              />
              <input
                className="ContactUs-input--email"
                type="email"
                placeholder="ایمیل"
              />
            </div>
            <input
              className="ContactUs-input--des"
              type="text"
              placeholder="عنوان"
            />
            <textarea
              className="ContactUs-input--text"
              cols="30"
              rows="6"
              placeholder="پیام"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
