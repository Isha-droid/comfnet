'use client';
import Contact from "../../components/legal_disclosure/Contact";
import { useState } from "react";

const PrivacyPolicy=() =>
{
        const [ activeTab, setActiveTab ]=useState( "introduction" );

        const content={
                introduction: (
                        <div>
                                <h3 className="text-2xl font-bold">Introduction</h3>
                                <p>
                                        Welcome to ComfNet Solutions! If you continue to browse this website you are
                                        fully agreeing to the practices set out in the following terms and conditions.
                                </p>
                                <ul className="list-disc pl-5">
                                        <li>The terms "we" or "us" refer to ComfNet Solutions.</li>
                                        <li>The term "you" refers to the user/browser of the website.</li>
                                        <li>This policy is effective from 16 July 2018 and is subject to updates.</li>
                                </ul>
                        </div>
                ),
                usage: (
                        <div>
                                <h3 className="text-2xl font-bold">How we may use your information</h3>
                                <ul className="list-disc pl-5">
                                        <li>Provision, operation, and maintenance of our website</li>
                                        <li>To improve, personalize, and expand our website</li>
                                        <li>Development of new products, features, and services</li>
                                        <li>Send you necessary emails</li>
                                        <li>Find and prevent fraud</li>
                                </ul>
                        </div>
                ),
                non_personal: (
                        <div>
                                <h3 className="text-2xl font-bold">Non-Personal Information</h3>
                                <p>
                                        We may collect non-personal information from users when they interact with our
                                        website (www.comfnet.de). Non-personal information may include the user's IP
                                        address, browser name, the type of device used to access the website, the time
                                        spent on the web page, and the hyperlinks clicked on by the user.
                                </p>
                                <p>
                                        Cookies may store information such as browser software, operating system, date
                                        and time of access to our website, Internet Protocol address, etc. It is the
                                        individual's choice to allow or block the cookies while visiting a website.
                                </p>
                        </div>
                ),
                security: (
                        <div>
                                <h3 className="text-2xl font-bold">Security</h3>
                                <p>We take the security of your data seriously. Measures are in place to prevent unauthorized access.</p>
                        </div>
                ),
        };

        return (
                <div className="min-h-screen bg-white text-blue-700">
                        {/* Header */ }
                        <header className="py-4">
                                <div className="container mx-auto flex justify-between items-center">
                                        <h1 className="text-xl font-bold">ComfNet Privacy Policy</h1>
                                        <nav>
                                                <ul className="flex gap-4">
                                                        <li><a href="/" className="hover:underline">Home</a></li>
                                                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                                                </ul>
                                        </nav>
                                </div>
                        </header>

                        {/* Main Content */ }
                        <div className="container mx-auto px-4 py-8">
                                <h2 className="text-4xl font-bold mb-4">Privacy Policy</h2>
                                <p className="mb-8 text-gray-700">
                                        Details on how user data is collected, used, and safeguarded.
                                </p>

                                {/* Sidebar and Content Section */ }
                                <div className="flex gap-4">
                                        {/* Sidebar */ }
                                        <div className="w-1/4 pr-4 border-r-2 border-gray-700">
                                                <ul className="space-y-4">
                                                        { [ "introduction", "usage", "non_personal", "security" ].map( ( tab ) => (
                                                                <li key={ tab }>
                                                                        <button
                                                                                className={ `w-full text-left p-2 relative group ${ activeTab===tab
                                                                                        ? "text-blue-700"
                                                                                        :"text-gray-400 hover:text-gray-800"
                                                                                        }` }
                                                                                onClick={ () => setActiveTab( tab ) }
                                                                        >
                                                                                <span
                                                                                        className={ `absolute left-0 top-0 h-full w-1 ${ activeTab===tab
                                                                                                ? "bg-blue-700"
                                                                                                :"bg-transparent group-hover:bg-gray-800"
                                                                                                }` }
                                                                                ></span>
                                                                                { tab==="introduction"&&"Introduction" }
                                                                                { tab==="usage"&&"How we may use your information" }
                                                                                { tab==="security"&&"Security" }
                                                                                { tab==="non_personal"&&"Non Personal Information" }
                                                                        </button>
                                                                </li>
                                                        ) ) }
                                                </ul>
                                        </div>

                                        {/* Content Area */ }
                                        <div className="w-3/4 p-6 rounded-lg text-gray-800">
                                                { content[ activeTab ] }
                                        </div>
                                </div>
                        </div>

                        <Contact />
                </div>
        );
};

export default PrivacyPolicy;
