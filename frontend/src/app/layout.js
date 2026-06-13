import { Footer } from "@/components/landing/Footer";
import "./globals.css";
import { Nav } from "@/components/landing/Nav";

export const metadata = {
  title: "HireMind AI — Land your dream job with AI",
  description:
    "AI-powered resume analysis, ATS optimization, and personalized interview preparation. Upload your resume, paste a JD, and get instant insights.",
  openGraph: {
    title: "HireMind AI — Land your dream job with AI",
    description:
      "AI-powered resume analysis, ATS optimization, and personalized interview prep.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </head>
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
