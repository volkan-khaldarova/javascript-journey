/**
 * @fileoverview Utility functions for strict temperature conversions.
 */

/**
 * @brief Converts Kelvin to Celsius.
 * @description Validates input to ensure it is a valid number and does not fall below absolute zero (0 K).
 * @param {number} kelvin - The temperature value in Kelvin.
 * @returns {number} The calculated temperature in Celsius, up to 2 decimal places.
 * @complexity O(1)
 * @security Validates input type to prevent NaN propagation.
 */
const convertKelvinToCelsius = (kelvin) => {
    if (typeof kelvin !== 'number' || Number.isNaN(kelvin)) {
        throw new TypeError('The value must be a valid number.');
    }

    if (kelvin < 0) {
        throw new Error('Kelvin cannot be below zero degrees (Absolute Zero).');
    }

    return Number((kelvin - 273.15).toFixed(2));
};

/**
 * @brief Converts Celsius to Fahrenheit.
 * @description Validates input and prevents calculations below absolute zero (-273.15 C).
 * @param {number} celsius - The temperature value in Celsius.
 * @returns {number} The calculated temperature in Fahrenheit, up to 2 decimal places.
 * @complexity O(1)
 */
const convertCelsiusToFahrenheit = (celsius) => {
    if (typeof celsius !== 'number' || Number.isNaN(celsius)) {
        throw new TypeError('The value must be a valid number.');
    }

    if (celsius < -273.15) {
        throw new Error('Celsius cannot be below absolute zero (-273.15 C).');
    }

    return Number(((celsius * 1.8) + 32).toFixed(2));
};

/**
 * @brief Converts Celsius to the Newton scale.
 * @description Validates input and applies the Newton conversion formula safely.
 * @param {number} celsius - The temperature value in Celsius.
 * @returns {number} The calculated temperature in Newton, up to 2 decimal places.
 * @complexity O(1)
 */
const convertCelsiusToNewton = (celsius) => {
    if (typeof celsius !== 'number' || Number.isNaN(celsius)) {
        throw new TypeError('The value must be a valid number.');
    }

    if (celsius < -273.15) {
        throw new Error('Celsius cannot be below absolute zero (-273.15 C).');
    }

    return Number((celsius * (33 / 100)).toFixed(2));
};


module.exports = {
    convertKelvinToCelsius,
    convertCelsiusToFahrenheit,
    convertCelsiusToNewton
};