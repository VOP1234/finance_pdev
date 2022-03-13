import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color: "primary" | "secondary" | "attention";
  onPress: () => void;
}

export function Button({ title, color, onPress, ...rest }: Props) {
  return (
    <Container color={color} onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
