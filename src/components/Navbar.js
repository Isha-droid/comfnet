import Link from 'next/link';

export default function Navbar ()
{
        return (
                <nav className="bg-white shadow-md border-b border-gray-300">
                        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                                <div className="flex items-center">
                                        <h1 className="text-xl font-bold text-blue-600">COMFNET</h1>
                                </div>
                                <ul className="flex space-x-6 text-slate-700 border border-slate-600 rounded-3xl px-7 py-2">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/privacy_policies">Privacy Policy</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded">Contact us</button>
                        </div>
                </nav>
        );
}
