import './styles/footer.css'
import * as React from "react";
import { NavLink } from "react-router-dom";

function FooterComponent() {

  return (
    <>
      <footer>
        <div className="footer_wrapper">
          <NavLink to="/" ><img className="logo_header" src="./img/logo.png" alt="логотип" /></NavLink>
          <div className="navigation_footer">
            {/* <a href="#">О компании</a> */}
            {/* <a href="#">Деятельность</a> */}
            {/* <a href="#">Покупателям</a> */}
            {/* <a href="#">Поставщикам</a> */}
            {/* <a href="#">Инвесторам</a> */}
            <NavLink to="/about" >
              О компании
            </NavLink>
            <NavLink to="/activity" >
              Деятельность
            </NavLink>
            <NavLink to="/documents" >
              Документы
            </NavLink>
          </div>
          <div className="information_footer">
            <div className="mail_adress">
              metal_228@list.ru
            </div>
            <div className="telephone_number">
              +7 (952)750 28 12
            </div>
          </div>
        </div>
      </footer>
    </>
  )

}

export default FooterComponent
