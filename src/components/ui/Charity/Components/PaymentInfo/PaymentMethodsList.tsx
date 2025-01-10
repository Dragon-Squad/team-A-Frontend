import React from "react";
import { IconCreditCard, IconTrash } from "@tabler/icons-react";

interface PaymentMethod {
  id: string;
  cardHolderName: string;
  cardType: string;
  last4Digits: string;
  expirationDate: string;
}

interface PaymentMethodsListProps {
  paymentMethods: PaymentMethod[];
  onDelete: (id: string) => void;
}

const PaymentMethodsList: React.FC<PaymentMethodsListProps> = ({
  paymentMethods,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Saved Payment Methods
      </h3>
      <ul className="space-y-4">
        {paymentMethods.map((method) => (
          <li
            key={method.id}
            className="flex justify-between items-center border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center space-x-4">
              <IconCreditCard size={24} className="text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {method.cardType} ending in {method.last4Digits}
                </p>
                <p className="text-xs text-gray-500">
                  Exp: {method.expirationDate}
                </p>
              </div>
            </div>
            <button
              onClick={() => onDelete(method.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              <IconTrash size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethodsList;
