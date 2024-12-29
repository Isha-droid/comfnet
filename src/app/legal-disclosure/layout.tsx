import Contact from "../../components/legal_disclosure/Contact";

export default function LegalDisclosureLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <section className="w-full mx-auto bg-white">
            {children}  
            <Contact />
        </section>
    );
}