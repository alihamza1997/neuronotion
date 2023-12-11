import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <section id="features" className="bg-white benefits-section">
      <div className="py-8 pb-24 px-4 mx-auto max-w-screen-xl sm:pt-4 lg:px-56">
        <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-5xl tracking-tight font-bold text-gray-900">
            Silence the chaos. <br /> Channel the flow state.
          </h2>
          <p className="text-gray-700 sm:text-xl text-gray-900">
            The all-in-one system your brain has been crying out for. Everything in one place, with no distractions.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-4">
          <div className="text-center">
            <div className="mx-auto"> {/* Add mx-auto class here */}
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/quickadd_ben.webp"
                alt="Quick Add Demo"
                width={320} // Set your desired width here
                height={320} // Set your desired height here
              />
            </div>
            <h3 className="mb-0 text-xl font-bold text-black">Quick Add</h3>
            <p className="mb-4 text-gray-700">Capture notes or ideas fast. Without distractions.</p>
          </div>
          {/* Repeat the same structure for other image sections */}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
