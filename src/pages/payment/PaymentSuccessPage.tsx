import CircleWithIcon from "@/components/circlewithicon";
import CustomButton from "@/components/custombutton";
import CustomText from "@/components/ui/text";
import { IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <CircleWithIcon
        Icon={IconCheck}
        size={120}
        color="green"
        iconSize={64}
      ></CircleWithIcon>
      <CustomText className="mt-10">Thank You !</CustomText>
      <CustomText className="mt-10">Payment done successfully !</CustomText>
      <CustomText className="mt-10">
        You will be redirected to the home page shortly or click here to return
        to home page
      </CustomText>
      <CustomButton title="Home" onClick={goHome} color="green"></CustomButton>
    </div>
  );
}

export default PaymentSuccessPage;
