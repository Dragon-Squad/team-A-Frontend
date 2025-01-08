const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold">Share love, donate hope.</h2>
          <p className="mt-4 text-sm text-gray-300">
            Spread kindness by sharing love, giving generously, and inspiring
            hope for a brighter future.
          </p>
          <div className="mt-6 space-y-4 text-sm">
            <p>
              <span className="block font-semibold">69 Huynh Tan Phat,</span>
              Ho Chi Minh, 70000
            </p>
            <p className="flex items-center gap-2">
              <span className="text-primary-orange">📞</span> +696-696-6969
            </p>
            <p className="flex items-center gap-2">
              <span className="text-primary-orange">✉️</span>{" "}
              charitanB@email.com
            </p>
            <p className="flex items-center gap-2">
              <span className="text-primary-orange">⏰</span> Mon-Fri: 8:00am -
              6:00pm
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-primary-orange"
            >
              🅕
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-primary-orange"
            >
              🅧
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-primary-orange"
            >
              🅘
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First Name"
                  className="form-input w-full mt-1 bg-gray-100 text-gray-700 font-medium border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  className="form-input w-full mt-1 bg-gray-100 text-gray-700 font-medium border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="form-input w-full mt-1 bg-gray-100 text-gray-700 font-medium border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input w-full mt-1 bg-gray-100 text-gray-700 font-medium border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="form-input w-full mt-1 bg-gray-100 text-gray-700 font-medium border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="form-input w-full mt-1 bg-gray-100 text-gray-700 font-medium border border-gray-300 rounded-md h-32 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
