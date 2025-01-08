import React from "react";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/ui/footer";
import HeaderSection from "@/components/ui/ContactUsPage/HeaderSection";
import ContactForm from "@/components/ui/ContactUsPage/ContactForm";
import FAQSection from "@/components/ui/ContactUsPage/FAQSection";
const ContactUsPage: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <HeaderSection />
      <ContactForm />
      <FAQSection />
      <Footer />
    </>
  );
};

export default ContactUsPage;
