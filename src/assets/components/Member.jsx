import React from "react";

const Member = () => {
  const plans = [
    {
      title: "Monthly",
      price: "XXXX",
      features: [
        "12 Sessions per quarter",
        "Priority booking",
        "Personalized care plan",
      ],
      highlighted: false,
    },
    {
      title: "6-Month",
      price: "XXXX",
      features: [
        "12 Sessions per quarter",
        "Priority booking",
        "Personalized care plan",
      ],
      highlighted: true,
    },
    {
      title: "Yearly",
      price: "XXXX",
      features: [
        "12 Sessions per quarter",
        "Priority booking",
        "Personalized care plan",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 bg-[#F1F0FB]">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-[#4A5568] mb-4">Become a Member</h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-6 rounded"></div>
        <p className="text-[#4A5568] text-lg mb-12">
          Join our wellness community and unlock exclusive benefits designed to support your active lifestyle.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-8 rounded-lg border 
                ${plan.highlighted ? "bg-[#4A5568] text-white shadow-lg" : "bg-white"}
                hover:shadow-md transition-all`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">
                  {plan.price}
                  <span className="text-base font-medium">/month</span>
                </p>
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 py-2 px-6 rounded-full font-semibold 
                  ${plan.highlighted ? "bg-white text-gray-800" : "bg-gray-700 text-white"}
                  hover:bg-pink-500 transition-all`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;