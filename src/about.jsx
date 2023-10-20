import './styles/App.css'
import * as React from "react";

function AboutPage() {

  return (
    <>
      <div className="offer">
        <div className="offer_wrapper">
          <div className="offer_text">
            <h1>Вместе с нами металлургия<br />становится безупречной!</h1>
            <div className="offer_list">
              <div className="el">
                <img src="./img/offer1.png" alt="offer_img" />
                <div className="el_text">Повышение качества продукции</div>
              </div>
              <div className="el">
                <img src="./img/offer2.png" alt="offer_img" />
                <div className="el_text">Внедрение экологически чистых технологий</div>
              </div>
              <div className="el">
                <img src="./img/offer3.png" alt="offer_img" />
                <div className="el_text">Увеличение производственных мощностей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="title">Производство и добыча сырья</div>
        <div className="main_item">
          <div className="about">
            <div className="text_about">Исходным продуктом для работы металлургического комбината является сырье, т.е. руда металлического происхождения. Это могут быть различные виды руды, включая железную, никелевую, алюминиевую и другие.</div>
            <div className="img_about"></div>
          </div>
          <div className="about2">
            <div className="text_about">Сырье поступает на комбинат в необработанном виде и проходит ряд технологических процессов, включающих дробление, обогащение, плавку и отливку, с целью получения конечной металлической продукции.</div>
            <div className="img_about2"></div>
          </div>
          <div className="text_about_down">Исходный продукт для работы металлургического комбината является основой для дальнейшей обработки и создания конечной продукции, которая будет использоваться в различных сферах человеческой жизни.</div>
        </div>
      </div>
    </>
  )

}

export default AboutPage
