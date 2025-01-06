import Contact from "../../components/freequote/Contact";
import MyMap from "./Map";

export default function LegalDisclosureLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <section className="w-full mx-auto bg-white">
            {children}  
            <Contact />
            <MyMap/>
        </section>
    );
}