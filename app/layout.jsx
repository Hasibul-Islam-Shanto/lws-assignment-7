import "./globals.css";
export const metadata = {
  title: "Lws-Assignment-Seven",
  description:
    "Lws-Assignment-Seven is about route interception and internalization of data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
