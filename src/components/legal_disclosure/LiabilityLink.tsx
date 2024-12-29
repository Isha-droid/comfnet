import React from "react";

const LiabilityForLinks = () => {
  return (
    <div className="bg-white text-gray-800 p-12 rounded-lg shadow-md  mx-auto max-w-[70%] text-justify">
      <h2 className="text-2xl font-bold mb-4">Liability for Links</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Our offer contains links to external third-party websites over whose
          content we have no influence.
        </li>
        <li>
          We therefore cannot accept any liability for this external content.
        </li>
        <li>
          The providers of linked websites are responsible for ensuring their
          content complies with applicable laws and regulations.
        </li>
        <li className="font-semibold">
          The respective provider or operator of the pages is always
          responsible for the content of the linked pages.
        </li>
        <li>
          The linked pages were checked for possible legal violations at the
          time of linking. Illegal content was not recognizable at the time of
          linking.
        </li>
        <li className="font-semibold">
          However, we appreciate any feedback regarding potential violations
          and will investigate promptly.
        </li>
        <li>
          Permanent control of the content of the linked pages is not
          reasonable without concrete evidence of a legal violation.
        </li>
        <li>
          If we become aware of any legal violations, we will remove such links
          immediately.
        </li>
      </ul>
    </div>
  );
};

export default LiabilityForLinks;
