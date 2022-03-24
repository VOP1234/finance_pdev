import React, { useState } from "react";
import { Modal } from "react-native";
import { PaymentTypesCreate } from "./PaymentTypesCreate";
import {
  Container,
  Header,
  Title,
  Name,
  Footer,
  ContainerButton,
  ContainerButtonText,
  ConfigurationsType,
  Separator,
  IconCategory,
} from "./styles";

interface Category {
  key: string;
  name: string;
  icon: string;
  color: string;
}

interface Props {
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function Configuration({ closeSelectCategory, setCategory }: Props) {
  const [paymentTypeModalOpen, setPaymentTypeModalOpen] = useState(false);

  function handleOpenPaymentTypeCreateModal() {
    setPaymentTypeModalOpen(true);
  }

  function handleClosePaymentTypeCreateModal() {
    setPaymentTypeModalOpen(false);
  }
  return (
    <Container>
      <Header>
        <Title>Configurações</Title>
      </Header>

      <Separator />
      <ConfigurationsType onPress={handleOpenPaymentTypeCreateModal}>
        <IconCategory name="credit-card" />
        <Name>Formas de pagamento</Name>
      </ConfigurationsType>
      <Separator />

      <Modal visible={paymentTypeModalOpen}>
        <PaymentTypesCreate
          closePaymentTypeCreateModal={handleClosePaymentTypeCreateModal}
        />
      </Modal>
    </Container>
  );
}
