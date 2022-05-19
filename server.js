const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/units', (req, res) => {
  res.jsonp({
    "distance": ["km", "mile"],
    "temperature": ["celcius", "farenheit"]
  })
})

// Fonctions conversions distances

function convertMileToKm(value) {
  const mile = value;
  const km = 0.621;

  return mile * km;
}

function convertKmToMile(value) {
  const km = value;
  const mile = 1.609;

  return km * mile;
}

function convertMileToMile(value) {
  const mile = value;

  return mile;
}

function convertKmToKm(value) {
  const km = value;

  return km;
}

// Fonctions conversions temperatures

function convertFarenheitToCelcius(value) {
  const farenheit = value;
  const celcius = (farenheit - 32) * 5/9;

  return celcius;
}

function convertCelciusToFarenheit(value) {
  const celcius = value;
  const farenheit = (celcius * 9/5) + 32;

  return farenheit;
}

function convertCelciusToCelcius(value) {
  const celcius = value;

  return celcius;
}

function convertFarenheitToFarenheit(value) {
  const farenheit = value;

  return farenheit;
}


app.post('/convert/distance', (req, res) => {

  const unit = req.body.unit;
  const convertTo = req.body.convertTo;
  const value = req.body.value;
  let result;

  if (unit == "km" && convertTo == "mile") {
    result = convertKmToMile(value);
  } 
  if (unit == "mile" && convertTo == "km") {
    result = convertMileToKm(value);
  } 
  if (unit == "mile" && convertTo == "mile") {
    result = convertMileToMile(value);
  } 
  if (unit == "km" && convertTo == "km") {
    result = convertKmToKm(value);
  }

  res.json({ "result": result })
})


app.post('/convert/temperature', (req, res) => {

  const unit = req.body.unit;
  const convertTo = req.body.convertTo;
  const value = req.body.value;
  let result;

  if (unit == "farenheit" && convertTo == "celcius") {
    result = convertFarenheitToCelcius(value);
  } 
  if (unit == "celcius" && convertTo == "farenheit") {
    result = convertCelciusToFarenheit(value);
  } 
  if (unit == "celcius" && convertTo == "celcius") {
    result = convertCelciusToCelcius(value);
  } 
  if (unit == "farenheit" && convertTo == "farenheit") {
    result = convertFarenheitToFarenheit(value);
  }

  
  res.json({ "result": result })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})