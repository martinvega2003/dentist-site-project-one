import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="md:container md:mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl text-blue-700 font-bold mb-8">Why Choose Our Clinic?</h2>

        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Benefit 1: Transparent Pricing */}
          <div
            className="bg-blue-500 text-white p-6 rounded-br-3xl shadow-lg max-w-xs"
          >
            <div className="text-4xl mb-4">
              <i className="fas fa-wallet"></i> {/* Example icon */}
            </div>
            <h3 className="font-semibold text-xl mb-2">Transparent Pricing</h3>
            <p>No hidden fees, what you see is what you get.</p>
          </div>

          {/* Benefit 2: Insurance Coverage */}
          <div
            className="bg-green-500 text-white p-6 rounded-br-3xl shadow-lg max-w-xs"
          >
            <div className="text-4xl mb-4">
              <i className="fas fa-shield-alt"></i> {/* Example icon */}
            </div>
            <h3 className="font-semibold text-xl mb-2">Insurance Coverage</h3>
            <p>We accept most major insurance providers.</p>
          </div>

          {/* Benefit 3: Quality Care */}
          <div
            className="border-4 border-blue-500 text-blue-500 p-6 bg-white rounded-br-3xl shadow-lg max-w-xs"
          >
            <div className="text-4xl mb-4">
              <i className="fas fa-medkit"></i> {/* Example icon */}
            </div>
            <h3 className="font-semibold text-xl mb-2">Quality Care</h3>
            <p>Our skilled staff provides top-notch services.</p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg shadow-lg">
          <p className="italic text-lg text-gray-700">"Our mission is to provide accessible, high-quality care to all of our patients. We believe in transparent pricing and personalized service."</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

