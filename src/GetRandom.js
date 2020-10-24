import Answers from './Answers'

let GetRandom = (Answers) => {

  const random = Math.floor(Math.random() * Answers.length);

  return Answers[random];

};

export default GetRandom