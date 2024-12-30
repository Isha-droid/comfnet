import Contact from "../../components/freequote/Contact";

export default function LegalDisclosureLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <section className="w-full mx-auto bg-white">
            {children}  
            <Contact />
            <img src="/map.png" alt="location" /> 
        </section>
    );
}