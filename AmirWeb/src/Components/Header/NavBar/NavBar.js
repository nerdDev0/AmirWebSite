import "./NavBar.css"



 function NavBar() {
  
   
 

  return (
    <div>
         <nav className="navbar">
        <section className="btn--logo">
            <a className="btn-start">شروع</a>
            <a href="#" className="logo">Amir</a>
        </section>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a className="home" href="#home">خانه</a></li>
            <li><a href="#about">درباره ما</a></li>
            <li><a href="#careers">خدمات</a></li>
            <li><a href="#projects">نمونه کارها</a></li>
            <li><a href="#team">تیم</a></li>
            <li><a href="#list">لیست</a></li>
            <li><a href="#callwe">تماس باما</a> </li>
        </ul>
        <a href="#" className="logo2">Amir</a>
    </nav>
    </div>
  )
}
export default NavBar;