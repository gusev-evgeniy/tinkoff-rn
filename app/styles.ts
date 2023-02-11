import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  background-color: #ededed;
  border-radius: 10%;
  padding: 5%;
  margin-bottom: 5%;
  width: 100%;
`;

export const StyledButton = styled.TouchableHighlight<{
  baseColor: string;
}>`
  border-radius: 10%;
  padding: 5%;
  margin-bottom: 5%;
  width: 100%;
  background-color: ${({ baseColor }) => baseColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;
