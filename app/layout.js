import Header from "../components/header/Header";

export const metadata = {
  title: "React - The Road To Enterprise",
  description: "By Thomas Findlay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
