import React, {useState} from 'react';
import Answers from "./Answers";
import './EightBall.css'
import GetRandom from './GetRandom'


let EightBall = (props) => {

  const [msg, setMsg] = useState("Think of a Question.");

  let shake = () => {
    const { msg } = GetRandom(Answers);
    setMsg(msg)
  };

    return (
      <section className="stage">
        <figure className="ball">
          <span className="shadow"></span>
          <span className="text">
              <h1>{msg}</h1> 
              <button onClick={() => shake()}>Shake</button>
          </span>
        </figure>
      </section>
    );

}


export default EightBall;