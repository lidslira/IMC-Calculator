import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import * as S from './styles';

const Home = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [info, setInfo] = useState('');

  const calculateImc = () => {
    const formValid = height > 0 && weight > 0;
    if (!formValid) {
      return Alert.alert('Insira valores válidos!');
    }
    const imc = (weight / (height * height)).toFixed(2);

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
  };

  return (
    <S.Container>
      <S.Title> Cálculo do IMC </S.Title>
      <S.Text> Altura (em metros): </S.Text>
      <S.HeightInput
        placeholder="ex: 1.68"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <S.Text> Peso (em kg): </S.Text>
      <S.WeightInput
        placeholder="ex: 56"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <S.Button onPress={() => calculateImc()}>
        <S.ButtonText> Calcular </S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Home;
