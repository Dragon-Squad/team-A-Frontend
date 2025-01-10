import React, { useState } from "react";

interface PaymentFormProps {
  onAddPayment: (paymentData: {
    cardHolderName: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  }) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onAddPayment }) => {
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.cardHolderName &&
      formData.cardNumber &&
      formData.expirationDate &&
      formData.cvv
    ) {
      onAddPayment(formData);
      setFormData({
        cardHolderName: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      });
    }
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Add Payment Method
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Card Holder Name
          </label>
          <input
            type="text"
            name="cardHolderName"
            placeholder="John Doe"
            value={formData.cardHolderName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              placeholder="MM/YY"
              value={formData.expirationDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Add Payment Method
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
