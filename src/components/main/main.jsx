import React from 'react'
import './styles.css'

import Image1 from '../../../public/img1.jpg'
import Image2 from '../../../public/img2.jpg'
import Image3 from '../../../public/img3.jpg'
import Image4 from '../../../public/img4.jpg'



function Main(){

    return(
    <body>
      <div className="slider">
        <div className="slides">
             
            <input type="radio" nome="radio-btn" id="radio1"/>
            <input type="radio" nome="radio-btn" id="radio2"/>
            <input type="radio" nome="radio-btn" id="radio3"/>
            <input type="radio" nome="radio-btn" id="radio4"/>



            <div className="slide first">
                <img src={Image1} alt="Imagem 1"/>
            </div>
            <div className="slide">
                <img src={Image2} alt="Imagem 2"/>
            </div>
            <div className="slide">
                <img src={Image3} alt="Imagem 3"/>
            </div>
            <div className="slide">
                <img src={Image4} alt="Imagem 4"/>
            </div>


            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
            </div>

        </div>

        <div className="manual-navigation">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
        </div>
    </div>
    
</body>
    )
}

export default Main