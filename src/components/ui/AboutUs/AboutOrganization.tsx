import { IconHeart, IconWorld, IconTarget } from "@tabler/icons-react";

const AboutOrganization: React.FC = () => {
  const items = [
    {
      title: "Our Mission",
      description:
        "To empower individuals and communities by providing essential resources and support, creating lasting change through compassion, collaboration, and innovation.",
      icon: <IconHeart className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Our Vision",
      description:
        "To create a world where every person has access to the resources, opportunities, and support they need to thrive. We envision a future of equality, opportunity, and prosperity.",
      icon: <IconWorld className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Our Values",
      description:
        "We believe in integrity, transparency, and accountability. We strive to act with empathy, respect, and a commitment to making a positive, sustainable impact.",
      icon: <IconTarget className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          About our Organization
        </h2>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Section */}
          <div>
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start mb-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mr-4">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/path-to-first-image.jpg"
              alt="Building Image"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <img
              src="/path-to-second-image.jpg"
              alt="Donation Center"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganization;
