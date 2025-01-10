import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import PaymentMethodsList from "./PaymentMethodsList";

const AddPaymentMethod: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "1",
      cardHolderName: "John Doe",
      cardType: "Visa",
      last4Digits: "3456",
      expirationDate: "12/25",
    },
  ]);

  const handleAddPayment = (paymentData: {
    cardHolderName: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  }) => {
    const newMethod = {
      id: `${paymentMethods.length + 1}`,
      cardHolderName: paymentData.cardHolderName,
      cardType: "Visa", // Placeholder for card type
      last4Digits: paymentData.cardNumber.slice(-4),
      expirationDate: paymentData.expirationDate,
    };
    setPaymentMethods([...paymentMethods, newMethod]);
  };

  const handleDeletePayment = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <PaymentForm onAddPayment={handleAddPayment} />
      <PaymentMethodsList
        paymentMethods={paymentMethods}
        onDelete={handleDeletePayment}
      />
    </div>
  );
};

export default AddPaymentMethod;
