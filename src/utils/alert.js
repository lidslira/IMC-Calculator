/* import {useState} from 'react';
import {Alert} from 'react-native';

export const alert = (imc, height, weight) => {

  const formValid = height > 0 && weight > 0;
  if (!formValid) {
    return Alert.alert('Insira valores válidos!');
  }
  if (imc < 18.5) {
    setInfo('abaixo do peso');
  } else if (imc > 18.5 && imc <= 24.9) {
    setInfo('com o peso normal');
  } else if (imc > 24.9 && imc <= 30.5) {
    setInfo('acima do peso');
  } else {
    setInfo('com obesidade');
  }
  return Alert.alert(`Seu imc é: ${imc}`, `Você está ${info}`);
}; */
