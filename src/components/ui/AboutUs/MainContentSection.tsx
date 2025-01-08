const MainContentSection: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 py-16 bg-white w-full px-6">
      {/* Image Section */}
      <img
        src="/path-to-image.jpg" // Replace with the actual path to the image
        alt="Team working together"
        className="rounded-lg shadow-lg"
      />

      {/* Text Content Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-black">
          Make a Difference, <br /> Support Those in Need.
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Every contribution, no matter how small, has the power to create
          lasting change. By supporting those in need, you help provide
          essential resources like food, shelter, healthcare, and education to
          individuals and communities facing significant challenges. Your
          generosity can transform lives.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Together, we can make a real difference. When we unite to support
          those in need, we build stronger, more resilient communities and
          foster a sense of hope and solidarity. By coming together, we can
          provide the tools and opportunities for people to thrive and overcome
          adversity.
        </p>
        <div className="flex items-center">
          {/* Author Info */}
          <div>
            <p className="text-gray-500 text-lg">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
