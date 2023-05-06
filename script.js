const calculateBtn = document.getElementById('calculateBtn');
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const weight = weightInput.value;
  const height = heightInput.value;

  const bmi = weight / (height * height);

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});
