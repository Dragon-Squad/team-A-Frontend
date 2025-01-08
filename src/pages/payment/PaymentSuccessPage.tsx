import CircleWithIcon from "@/components/circlewithicon";
import CustomButton from "@/components/custombutton";

import { IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      {/* Success Icon */}
      <CircleWithIcon
        Icon={IconCheck}
        size={120}
        color="#10B981" // Tailwind green-500 color
        iconSize={64}
        className="shadow-lg"
      />

      {/* Thank You Message */}
      <h1 className="mt-10 text-4xl font-bold text-gray-800">Thank You!</h1>

      {/* Success Description */}
      <p className="mt-6 text-lg text-gray-600">
        Your payment was processed successfully!
      </p>
      <p className="mt-4 text-sm text-gray-500">
        You will be redirected to the home page shortly, or click the button
        below to return to the home page.
      </p>

      {/* Home Button */}
      <CustomButton
        title="Go Home"
        onClick={goHome}
        color="#10B981" // Same green color as success icon
        className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg"
      />
    </div>
  );
}

export default PaymentSuccessPage;
