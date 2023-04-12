import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Tip from "./Components/tip/Tip";
import Portfolio from "./Components/Portfolio/Portfolio";
import Counts from "./Components/Counts/Counts";
import Tip2 from "./Components/tip2/Tip2";
import Team from "./Components/Team/Team";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  return (
    <div className="bac-body">
      <Header />
      <About />
      <Products />
      <Services />
      <Tip />
      <Portfolio/>
      <Counts/>
      <Tip2 />
      <Team/>
     <ContactUs/>
    </div>
  );
}

export default App;
