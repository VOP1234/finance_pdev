import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../../components/Form/Button";
import { categories } from "../../../utils/categories";
import {
  Container,
  Header,
  Title,
  Category,
  IconCategory,
  Name,
  Separator,
  Footer,
  NewCategory,
  ContainerButton,
  ContainerButtonText,
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  closeSelectCategory: () => void;
}

export function Configuration({ closeSelectCategory }: Props) {
  return (
    <Container>
      <Header>
        <Title>Adicionar uma Categoria</Title>

        <ContainerButton>
          <ContainerButtonText onPress={closeSelectCategory}>
            x
          </ContainerButtonText>
        </ContainerButton>
      </Header>

      <Footer>
        <Button
          color="secondary"
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  );
}
