/**
 * @fileoverview Unit tests for temperature conversion utilities.
 * @description Translates Rust's strict safety checks into Jest expectations.
 */

const {
    convertKelvinToCelsius,
    convertCelsiusToFahrenheit,
    convertCelsiusToNewton
} = require('./temperatureConverter.js'); // Path to your logic file

describe('Temperature Conversion Module', () => {

    // -------------------------------------------------------------------------
    // Kelvin to Celsius Tests
    // -------------------------------------------------------------------------
    describe('convertKelvinToCelsius', () => {
        test('should convert 273.15 K to 0.0 C', () => {
            expect(convertKelvinToCelsius(273.15)).toBe(0);
        });

        test('should throw an error for values below absolute zero (0 K)', () => {
            expect(() => convertKelvinToCelsius(-10.0))
                .toThrow('Kelvin cannot be below zero degrees (Absolute Zero).');
        });

        test('should throw a TypeError for non-numeric inputs', () => {
            expect(() => convertKelvinToCelsius('273.15'))
                .toThrow('The value must be a valid number.');
        });
    });

    // -------------------------------------------------------------------------
    // Celsius to Fahrenheit Tests
    // -------------------------------------------------------------------------
    describe('convertCelsiusToFahrenheit', () => {
        test('should convert 0.0 C to 32.0 F', () => {
            expect(convertCelsiusToFahrenheit(0)).toBe(32);
        });

        test('should throw an error for values below absolute zero (-273.15 C)', () => {
            expect(() => convertCelsiusToFahrenheit(-300.0))
                .toThrow('Celsius cannot be below absolute zero (-273.15 C).');
        });
    });

    // -------------------------------------------------------------------------
    // Celsius to Newton Tests
    // -------------------------------------------------------------------------
    describe('convertCelsiusToNewton', () => {
        test('should convert 100.0 C to 33.0 N', () => {
            expect(convertCelsiusToNewton(100)).toBe(33);
        });

        test('should throw an error for values below absolute zero (-273.15 C)', () => {
            expect(() => convertCelsiusToNewton(-274.0))
                .toThrow('Celsius cannot be below absolute zero (-273.15 C).');
        });
    });
});