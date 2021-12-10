import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Form/Button";
import { paymentTypes } from "../../utils/paymentTypes";

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
  key: string
  name: string
}

interface Props {
  paymentType: PaymentTypes
  setPaymentType: (paymentType: PaymentTypes) => void
  closeSelectPaymentType: () => void

}

export function PaymentTypesSelect({
  paymentType,
  setPaymentType,
  closeSelectPaymentType
}: Props) {

  function handlePaymentTypes(paymentType: PaymentTypes) {
    setPaymentType(paymentType)
  }

  return (
    <Container>
      <Header>
        <Title>Tipo de Pagamento</Title>
      </Header>

      <FlatList
        data={paymentTypes}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handlePaymentTypes(item)}
            isActive={paymentType.key === item.key}
          >
            <IconPayment name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button
          title="Selecionar"
          onPress={closeSelectPaymentType}
        />
      </Footer>
    </Container>
  )
}