document.getElementById("convertCtoF").addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsius");
    const celsius = parseFloat(celsiusInput.value);
  
    if (isNaN(celsius)) {
      alert("Please enter a valid temperature in Celsius.");
      return;
    }
  
    const fahrenheit = (celsius * 9 / 5) + 32;
  
    const resultElement = document.getElementById("resultCtoF");
    resultElement.textContent = `${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
  });
  
  document.getElementById("convertFtoC").addEventListener("click", function () {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const fahrenheit = parseFloat(fahrenheitInput.value);
  
    if (isNaN(fahrenheit)) {
      alert("Please enter a valid temperature in Fahrenheit.");
      return;
    }
  
    const celsius = (fahrenheit - 32) * 5 / 9;
  
    const resultElement = document.getElementById("resultFtoC");
    resultElement.textContent = `${fahrenheit} Fahrenheit is ${celsius.toFixed(2)} Celsius`;
  });