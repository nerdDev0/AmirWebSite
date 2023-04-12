import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio-align">
      <div className="Portfolio-container">
        <div className="Portfolio-text">
          <span className="Portfolio-des">نمونه کارها</span>
          <h2 className="Portfolio-header">نمونه کارها ما را بررسی کنید</h2>
        </div>

        <section className="Portfolio-nav">
          <ul>
            <li className="por-nav-item1">
              <a href="">همه</a>
            </li>
            <li className="por-nav-item">
              <a href="">برنامه</a>
            </li>
            <li className="por-nav-item">
              <a href="">محصول</a>
            </li>
            <li className="por-nav-item">
              <a href="">اینترنت</a>
            </li>
          </ul>
        </section>
        <section className="Portfolio-content">
          <section className="Portfolio-col1">
            <img
              src="./pictures-Portfolio/1.jpg"
              alt=""
              className="Portfolio-content_V_item"
              loading="lazy"
            />
            <img
              src="./pictures-Portfolio/6v.jpg"
              alt=""
              className="Portfolio-content_H_item"
              loading="lazy"
            />
            <img
              src="./pictures-Portfolio/2.jpg"
              alt=""
              className="Portfolio-content_V_item"
              loading="lazy"
            />
          </section>

          <section className="Portfolio-col2">
            <img
              src="./pictures-Portfolio/7.jpg"
              alt=""
              className="Portfolio-content_V_item"
              loading="lazy"
            />
            <img
              src="./pictures-Portfolio/8.jpg"
              alt=""
              className="Portfolio-content_V_item"
              loading="lazy"
            />
            <img
              src="./pictures-Portfolio/9.jpg"
              alt=""
              className="Portfolio-content_V_item"
              loading="lazy"
            />
            <img
              src="./pictures-Portfolio/5.jpg"
              alt=""
              className="Portfolio-content_V_item"
              loading="lazy"
            />
          </section>
          <section className="Portfolio-col3">
            <img
              src="./pictures-Portfolio/3v.jpg"
              alt=""
              className="Portfolio-content_H_item"
              loading="lazy"
            />
            <img
              src="./pictures-Portfolio/4v.jpg"
              alt=""
              className="Portfolio-content_H_item"
              loading="lazy"
            />
          </section>
        </section>
      </div>
    </div>
  );
}
