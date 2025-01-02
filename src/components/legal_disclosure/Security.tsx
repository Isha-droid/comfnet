import React from 'react';

const Security = () => {
        return (
                <div className="bg-blue-700 text-white p-12">
                        <h1 className="font-bold text-3xl mb-4 ml-8">Security</h1>
                        <div className='flex justify-center'>
                                <ul className="list-disc list-inside space-y-2">
                                        <li>
                                                A s service providers, we are liable for our own content on these websites according to § 7 para. 1 of the German Telemedia Act (TMG).
                                        </li>
                                        <li>
                                                However, according to §§ 8 to 10 TMG, service providers are not obligated to monitor submitted or stored information or to search for evidence of illegal activities.
                                        </li>
                                        <li>
                                                <strong>We reserve the right to modify or update this disclaimer at any time.</strong> Legal obligations to remove information or to block the use of information remain unchallenged.
                                        </li>
                                        <li>
                                                In this case, liability is only possible at the time of knowledge about a specific violation of law. <strong>Upon notification of such violations, we will promptly remove or block access to the content.</strong>
                                        </li>
                                </ul>
                        </div>
                </div>
        );
};

export default Security;
