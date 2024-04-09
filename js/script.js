// Copyright (c) 2024 hames.al-sharoa All rights reserved
//
// Created by: hames.al-sharoa
// Created on: apr 2024
// This file contains the JS functions for index.html

function calculateVolume() {

  const length = parseFloat(document.getElementById('length').value);

  const width = parseFloat(document.getElementById('width').value);

  const height = parseFloat(document.getElementById('height').value);



  // Calculate the volume using the formula: V = (L x W x H) / 3

  const volume = (length * width * height) / 3;



  // Display the result

  document.getElementById('result').textContent = `Volume is: ${volume.toFixed(2)} mm³`;

}