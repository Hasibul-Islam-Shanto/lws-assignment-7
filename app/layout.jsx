import "./globals.css";
export const metadata = {
  title: "LWS Xstream - Video Streaming",
  description:
    "LWS Xstream is a video streaming platform that allows you to watch videos online for free. Our platform is easy to use and has a simple interface that makes it easy to find and watch videos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-colorBg text-white font-exo container mx-auto px-4 py-4">
        {children}
      </body>
    </html>
  );
}
