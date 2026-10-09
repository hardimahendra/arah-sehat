import "./globals.css";
export const metadata = {
  title: "Arah Sehat — pemeriksaan terencana",
  description: "Pemeriksaan kesehatan terencana, demo antarmuka.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
