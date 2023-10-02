class Temperature {
  constructor() {
    this.celsius = 0;
    this.fahrenheit = 32;
  }

  // Getter for Celsius temperature
  get celsiusTemp() {
    return this.celsius;
  }

  // Setter for Celsius temperature
  set celsiusTemp(value) {
    if (this.isValidTemperature(value)) {
      this.celsius = value;
      this.fahrenheit = this.convertCelsiusToFahrenheit(value);
    } else {
      console.error("Invalid temperature value. Temperature not updated.");
    }
  }

  // Getter for Fahrenheit temperature
  get fahrenheitTemp() {
    return this.fahrenheit;
  }

  // Setter for Fahrenheit temperature
  set fahrenheitTemp(value) {
    if (this.isValidTemperature(value)) {
      this.fahrenheit = value;
      this.celsius = this.convertFahrenheitToCelsius(value);
    } else {
      console.error("Invalid temperature value. Temperature not updated.");
    }
  }

  // Method to check if a temperature value is numeric
  isValidTemperature(value) {
    return typeof value === "number" && !isNaN(value);
  }

  // Method to convert Celsius to Fahrenheit
  convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Method to convert Fahrenheit to Celsius
  convertFahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
}

// Example usage:
const temperature = new Temperature();

console.log(`Celsius: ${temperature.celsiusTemp}°C`);
console.log(`Fahrenheit: ${temperature.fahrenheitTemp}°F`);

temperature.celsiusTemp = 25; // Set temperature in Celsius
console.log(`Celsius: ${temperature.celsiusTemp}°C`);
console.log(`Fahrenheit: ${temperature.fahrenheitTemp}°F`);

temperature.fahrenheitTemp = 77; // Set temperature in Fahrenheit
console.log(`Celsius: ${temperature.celsiusTemp}°C`);
console.log(`Fahrenheit: ${temperature.fahrenheitTemp}°F`);

temperature.celsiusTemp = "invalid"; // Try to set an invalid temperature
