let GetRandom = (Answers) => {

  const random = Math.floor(Math.random() * Answers.length);

  return Answers[random];

};

export default GetRandom