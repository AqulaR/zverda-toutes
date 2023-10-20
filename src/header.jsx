import './styles/App.css'
import * as React from "react";
import { NavLink } from "react-router-dom";

function HeaderComponent() {

  return (
    <>
      <header>
        <div className="header_footer_wrapper">
          <NavLink to="/" ><img className="logo_header" src="./img/logo.png" alt="логотип" /></NavLink>
          <div className="navigation">
            {/* <a href="#">О компании</a> */}
            {/* <a href="#">Деятельность</a> */}
            {/* <a href="#">Покупателям</a> */}
            {/* <a href="#">Поставщикам</a> */}
            {/* <a href="#">Инвесторам</a> */}
            {/* <link to="/about">О компании</link> */}
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
          <div className="information">
            <div className="mail_adress">
              metal_228@list.ru
            </div>
            <div className="telephone_number">
              +7 (952)750 28 12
            </div>
          </div>
          <div className="burger_menu">
            <div className="burger-part"></div>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
          </div>
        </div>
      </header>
    </>
  )

}

export default HeaderComponent
