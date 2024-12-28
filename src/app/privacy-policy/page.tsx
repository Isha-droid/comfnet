// pages/index.jsx
import PrivacyPolicy from "../../components/privacy-policy/PrivacyPolicy";
import ContactUs from "../../components/privacy-policy/ContactForm";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <PrivacyPolicy />
      <ContactUs />
    </main>
  );
}
