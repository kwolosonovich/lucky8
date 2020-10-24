import { set } from 'lodash';
import React, {useState} from 'react';
import Answers from "./Answers";
import './EightBall.css'
import GetRandom from './GetRandom'


let EightBall = () => {

  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");


  let shake = () => {
    const { msg, color } = GetRandom(Answers);
    setMsg(msg)
    setColor(color)
  };

    return (
      <section className="stage">
        <figure
          className="ball"
          style={{ backgroundColor: color }}
        >
          <span className="shadow"></span>
          <span className="text">
            <h1 style={{ color: color }}>{msg}</h1>
            <button onClick={() => shake()}>
              Shake
            </button>
          </span>
        </figure>
      </section>
    );

}


export default EightBall;