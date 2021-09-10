import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e0ffff;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: black;
  margin-bottom: 30px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

export const HeightInput = styled.TextInput`
  background-color: white;
  width: 300px;
  height: 45px;
  margin-bottom: 20px;
  align-items: center;
`;

export const WeightInput = styled.TextInput`
  background-color: white;
  width: 300px;
  height: 45px;
  margin-bottom: 20px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: black;
  margin-top: 20px;
  border-radius: 6px;
  padding: 15px;
`;
