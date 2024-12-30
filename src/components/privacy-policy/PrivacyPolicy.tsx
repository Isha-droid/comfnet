// components/PrivacyPolicy.tsx

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-black">
      <header className="text-center py-8 bg-gray-100">
        <h1 className="text-4xl text-blue-700 font-bold">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Details on how user data is collected, used, and safeguarded, adhering to GDPR and other privacy regulations
        </p>
      </header>

      <section className="flex justify-center gap-4 py-6">
        <div className="border border-gray-300 rounded-lg p-4 text-center w-80 bg-white shadow-md">
          <h2 className="text-xl text-blue-700">Data Collection</h2>
          <p className="text-gray-500">Types of data collected from users.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 text-center w-80 bg-white shadow-md">
          <h2 className="text-xl text-blue-700">Purpose and Usage</h2>
          <p className="text-gray-500">Reasons for data collection and how it’s used.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 text-center w-80 bg-white shadow-md">
          <h2 className="text-xl text-blue-700">User Rights</h2>
          <p className="text-gray-500">Information on how users can control or request deletion of their personal information.</p>
        </div>
      </section>

      <section className="flex mx-8 my-12">
        <aside className="w-1/4 border-r border-gray-300 pr-4">
          <ul>
            <li className="py-2 text-blue-700 font-bold">Introduction</li>
            <li className="py-2 text-blue-700 font-bold">How we may use your information</li>
            <li className="py-2 text-blue-700 font-bold">Non Personal information</li>
            <li className="py-2 text-blue-700 font-bold">Security</li>
          </ul>
        </aside>

        <main className="w-3/4 pl-8">
          <h2 className="text-2xl mb-4 text-black">Introduction</h2>
          <p className="mb-4">
            Welcome to ComfNet Solutions! If you continue to browse this website you are fully agreeing to the practices set out in the following terms and conditions.
          </p>
          <ul className="mt-4 pl-6 list-disc">
            <li className="mb-2">The terms “we or us” refer to the owner of ComfNet Solutions.</li>
            <li className="mb-2">The term “you” refers to the user/browser of the website www.comfnet.de.</li>
            <li className="mb-2">This policy sets out the basis on which we collect personal data from you and how we may use it.</li>
            <li className="mb-2">We may change this privacy policy from time to time which will be reflected on this page. You may also be notified by email.</li>
            <li className="mb-2">This policy is effective from 16 July 2018.</li>
          </ul>
        </main>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
