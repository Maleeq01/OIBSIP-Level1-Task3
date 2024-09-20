function convertTemperature() {
  const tempInput = document.getElementById("temperatureInput").value;
  const inputUnit = document.getElementById("inputUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(tempInput) || tempInput === "") {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let convertedTemp;
  let resultUnit;

  // Convert based on the input unit
  if (inputUnit === "Celsius") {
    convertedTemp = (tempInput * 9) / 5 + 32;
    resultUnit = "Fahrenheit";
  } else if (inputUnit === "Fahrenheit") {
    convertedTemp = ((tempInput - 32) * 5) / 9;
    resultUnit = "Celsius";
  } else if (inputUnit === "Kelvin") {
    convertedTemp = parseFloat(tempInput) - 273.15;
    resultUnit = "Celsius";
  }

  resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(
    2
  )} ${resultUnit}`;
}
