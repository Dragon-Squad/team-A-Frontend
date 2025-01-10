import React from "react";
import AddPaymentMethod from "../Components/PaymentInfo/AddPaymentMethod";
const ConfigurePaymentPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Configure Payment Information
      </h1>
      <AddPaymentMethod />
    </div>
  );
};

export default ConfigurePaymentPage;
