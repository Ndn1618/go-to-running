// Choosing elements
var elTemperatureForm = document.querySelector('.temperature-form');
var elTemperatureInput = document.querySelector('.temperature-input');
var elRainCheckbox = document.querySelector('.rain-checkbox');
var elExcersiseHallCheckbox = document.querySelector('.excersise-hall-checkbox');
var elResult = document.querySelector('.result');

elTemperatureForm.addEventListener('change', function (evt) {
  evt.preventDefault();

  var temperature = parseFloat(elTemperatureInput.value.trim(), 10);
  var isRainSwitch = elRainCheckbox.checked;
  var isHallAviable = elExcersiseHallCheckbox.checked;

  if (!isNaN(temperature)) {
    if (temperature > 30) {
      elResult.textContent = `YO'Q`;
    } else if (temperature >= 5 && temperature <= 30) {
      elResult.textContent = 'HA';
    } else if (temperature >= 5 && isRainSwitch) {
      elResult.textContent = 'HA';
    }
    else if (temperature >= 5) {
      elResult.textContent = 'HA';
    }
    else if (temperature < 5 && isRainSwitch) {
      elResult.textContent = `YO'Q`;
    } else if (temperature < 5) {
      elResult.textContent = `YO'Q`;
    } else {
      elResult.textContent = 'Anglamadim';
    }
  } else {
    elResult.textContent = '';
    alert('Haroratni raqamda kiriting!');
  }
});
