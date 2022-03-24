import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../../components/Form/Button";
import { paymentTypes } from "../../../utils/paymentTypes";

import {
  Container,
  Header,
  Title,
  Category,
  IconPayment,
  Name,
  Separator,
  Footer,
} from "./styles";

interface PaymentTypes {
  key: string;
  name: string;
}

interface Props {
  closePaymentTypeCreateModal: () => void;
}

export function PaymentTypesCreate({ closePaymentTypeCreateModal }: Props) {
  return (
    <Container>
      <Header>
        <Title>Tipos de Pagamentos</Title>
      </Header>

      <FlatList
        data={paymentTypes}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category onPress={() => {}}>
            <IconPayment name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button
          title="Criar nova categoria"
          color="secondary"
          onPress={closePaymentTypeCreateModal}
        />
      </Footer>
    </Container>
  );
}
