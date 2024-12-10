import "./globals.css";

// Update for viewport export
export const viewport="width=device-width, initial-scale=1";

export const metadata={
        title: "Create Next App | Your Project Name",
        description: "Learn how to build modern web apps with this starter template.",
        keywords: [
                "Next.js",
                "React",
                "Web Development",
                "JavaScript",
                "SEO-friendly",
        ],
        author: "Your Name or Company Name",
        charset: "UTF-8",
        robots: "index, follow", // For search engine indexing
};

export default function RootLayout ( { children } )
{
        return (
                <html lang="en">
                        <head>
                                <meta name="description" content={ metadata.description } />
                                <meta name="keywords" content={ metadata.keywords.join( ", " ) } />
                                <meta name="author" content={ metadata.author } />
                                <meta charSet={ metadata.charset } />
                                <meta name="robots" content={ metadata.robots } />
                                <title>{ metadata.title }</title>
                        </head>
                        <body className="antialiased">{ children }</body>
                </html>
        );
}
