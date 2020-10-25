import { set } from 'lodash';
import React, {useState} from 'react';
import Answers from "./Answers";
import './EightBall.css'
import GetRandom from './GetRandom'


let EightBall = () => {

  const initialMsg =  "Think of a Question.";
  const initialColor = "black"

  const [msg, setMsg] = useState(initialMsg);
  const [color, setColor] = useState(initialColor);


  let shake = () => {
    const { msg, color } = GetRandom(Answers);
    setMsg(msg)
    setColor(color)
  };

  let reset = () => {
    setMsg(initialMsg)
    setColor(initialColor)
  }

    return (
      <section className="stage">
        <figure className="ball" style={{ backgroundColor: color }}>
          <span className="shadow"></span>
          <span className="text">
            <h1 style={{ color: color }}>{msg}</h1>
            <button className="shake" onClick={() => shake()}>
              Shake
            </button>
          </span>
        </figure>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      </section>
    );

}


export default EightBall;