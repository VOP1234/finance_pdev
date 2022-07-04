import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
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
