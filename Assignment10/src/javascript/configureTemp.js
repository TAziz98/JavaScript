
var configure = {
    CelsiusKelvin:(celsius)=>celsius+273.15,
    CelsiusFahrenheit:(celsius)=>celsius*9/5+32,
    KelvinCelsius:(kelvin)=>kelvin-273.15,
    KelvinFahrenheit:(kelvin)=>kelvin*9/5-459.67,
    FahrenheitKelvin:(fahrenheit)=> (fahrenheit + 459.67) * 5/9,
    FahrenheitCelsius:(fahrenheit)=>(fahrenheit - 32) * 5/9
};

module.exports= configure;
 