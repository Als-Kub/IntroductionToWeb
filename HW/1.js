const tempC = parseFloat(prompt("Введите температуру в градусах Цельсия"));
function convToF(temp) {
return (9/5 * temp + 32).toFixed(1);
}
alert(`Температура в градусах Цельсия: ${tempC}, температура в градусах Фарингейта: ${convToF(tempC)}`)