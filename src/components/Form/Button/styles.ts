import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface ContainerProps {
  color: "primary" | "secondary" | "attention";
}

let theColor;

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  ${({ theme, color }) =>
    color === "primary"
      ? "background-color:" + theme.colors.primary
      : "background-color:" + theme.colors.secondary}

  padding: 18px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: #fff;
`;
