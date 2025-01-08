import { Link } from "react-router-dom";

const HeaderSection: React.FC = () => {
  return (
    <header className="bg-white py-12 pt-40">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          <span>Home</span> <span className="mx-2">›</span>{" "}
          <span>Contact Us</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Every Act of Kindness Counts
        </h1>

        {/* Supporting Text */}
        <p className="mt-4 text-lg text-gray-700">
          Have questions or want to get involved? Reach out to us and learn how
          you can make a difference. Whether it's through donations,
          volunteering, or spreading awareness, every act of kindness brings us
          closer to creating a better world. Let’s work together to support
          those in need—your kindness matters!
        </p>

        {/* Sign-In Link */}
        <p className="mt-8 text-lg font-semibold text-black">
          <Link to="/signin" className="text-orange-600 hover:underline">
            Sign In
          </Link>{" "}
          or...
        </p>
      </div>
    </header>
  );
};

export default HeaderSection;
