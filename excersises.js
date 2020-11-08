// Choosing elements
var elTemperatureForm = document.querySelector('.temperature-form');
var elTemperatureInput = document.querySelector('.temperature-input');
var elRainCheckbox = document.querySelector('.rain-checkbox');
var elExcersiseHallCheckbox = document.querySelector('.excersise-hall-checkbox');
var elResult = document.querySelector('.result');

elTemperatureForm.addEventListener('change', function (evt) {
  evt.preventDefault();

  var temperature = elTemperatureInput.value.trim();
  var isRainSwitch = elRainCheckbox.checked;
  var isHallOpen = elExcersiseHallCheckbox.checked;
  var goodTemperature = temperature >= 5 && temperature <= 30;

  if (temperature !== '') {
    temperature = parseFloat(temperature, 10);
    if (!isNaN(temperature)) {
      if (goodTemperature && !isRainSwitch) {
        elResult.textContent = 'HA';
      } else if (goodTemperature && isRainSwitch && isHallOpen) {
        elResult.textContent = 'HA';
      } else {
        elResult.textContent = `YO'Q`;
      }
    } else {
      elResult.textContent = '';
      alert('Haroratni raqamda kiriting!');
    }
  } else {
    elResult.textContent = '';
    alert('Haroratni kiriting!');
  }

  elTemperatureInput.value = temperature;
});
