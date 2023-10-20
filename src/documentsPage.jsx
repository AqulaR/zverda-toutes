import './styles/App.css'
import * as React from "react";

function DocumentsPage() {

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
      <div className="Document">
        <div className="docum">
          Документы
        </div>
        <div className="document">
          <div class="bottom-column">
            <a className="bottom-link" href="#ustav">&#8226; Устав образовательной организации</a>
            <a className="bottom-link" href="#sved">&#8226; Свидетельство о государственной аккредитации</a>
            <a className="bottom-link" href="#prav">&#8226; Правила внутреннего распорядка обучающихся</a>
            <a className="bottom-link" href="#prav2">&#8226; Правила внутреннего трудового распорядка</a>
            <a className="bottom-link" href="#koll">&#8226; Коллективный договор</a>
          </div>
        </div>
      </div>
    </>
  )

}

export default DocumentsPage
