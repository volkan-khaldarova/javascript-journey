# Module 01: Strict Temperature Converter

> A robust, fault-tolerant utility module for temperature scale conversions.

## 📝 Overview
This module expands upon basic mathematical conversion exercises by introducing enterprise-grade software engineering principles. It provides pure functions to convert temperatures across Kelvin, Celsius, and Fahrenheit scales, alongside the historical Newton scale.

## ✨ Engineering Features
* **Strict Type Validation:** Prevents `NaN` propagation by rejecting non-numeric inputs.
* **Guard Clauses (Business Logic):** Incorporates physics rules by actively preventing calculations that fall below Absolute Zero (`0 K` or `-273.15 °C`).
* **Floating-Point Precision:** Implements `.toFixed(2)` to handle JavaScript's inherent decimal calculation inaccuracies.
* **Pure Functions:** Ensures deterministic outputs without side effects, making the module fully testable.

## 🚀 Usage

Since this is a CommonJS module, you can require and utilize it in any Node.js environment:

```javascript
const { 
    convertKelvinToCelsius, 
    convertCelsiusToFahrenheit,
    convertCelsiusToNewton
} = require('./temperatureConverter');

try {
    const currentKelvin = 293;
    const celsius = convertKelvinToCelsius(currentKelvin);
    const fahrenheit = convertCelsiusToFahrenheit(celsius);
    
    console.log(`Temp: ${celsius}°C | ${fahrenheit}°F`);
} catch (error) {
    console.error(`System Error: ${error.message}`);
}
