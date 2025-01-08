import { Disclosure } from "@headlessui/react";
import { IconPlus, IconX } from "@tabler/icons-react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What charities can I give to?",
      answer:
        "You can support a variety of impactful charities through our platform, including those focused on clean water, education, healthcare, hunger relief, climate change, and more. Each charity is carefully vetted to ensure transparency and impact.",
    },
    {
      question: "Is there a minimum/maximum amount I can donate?",
      answer:
        "There is no minimum donation amount—you can give as little or as much as you’d like. Some campaigns may have specific goals, but every contribution helps create meaningful change.",
    },
    {
      question: "Can I give to more than one charity?",
      answer:
        "Absolutely! You can support as many charities or causes as you like. Simply select the organizations or campaigns that resonate with you most.",
    },
    {
      question: "When will my charity receive my donation?",
      answer:
        "Donations are processed immediately, and funds are transferred to the respective charities within 1-2 business days. You will receive a confirmation once your donation has been successfully processed.",
    },
    {
      question: "Will my chosen charity receive all my donation?",
      answer:
        "Yes, your chosen charity will receive your entire donation amount, minus any applicable processing fees charged by payment providers. We strive to ensure maximum transparency and efficiency.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl text-gray-700">
            Have questions? We’ve got answers! If you need further assistance,
            feel free to contact us—we’re here to help!
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div
                  className={`rounded-lg shadow-md ${
                    open ? "bg-orange-50" : "bg-white"
                  } border border-gray-300`}
                >
                  <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 text-left text-base font-semibold text-gray-900">
                    {faq.question}
                    {open ? (
                      <IconX className="w-6 h-6 text-orange-600" />
                    ) : (
                      <IconPlus className="w-6 h-6 text-orange-600" />
                    )}
                  </Disclosure.Button>
                  {open && (
                    <Disclosure.Panel className="px-4 py-2 text-sm text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  )}
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
