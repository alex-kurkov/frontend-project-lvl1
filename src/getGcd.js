export default (firstNum, secondNum) => {
  let devisor = Math.min(firstNum, secondNum);
  while (devisor > 1) {
    if ((firstNum % devisor === 0) && (secondNum % devisor === 0)) return devisor;
    devisor -= 1;
  }
  return devisor;
};
