import React from 'react';
import Answers from './Answers'
import './EightBall.css'


let EightBall = () => {

    return (
      <div>
        <section className="stage">
          <figure className="ball">
            <span className="shadow"></span>
            <span className="eight"></span>
          </figure>
        </section>
      </div>
    );

}


export default EightBall;