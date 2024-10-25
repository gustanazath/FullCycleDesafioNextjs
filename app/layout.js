export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <main>{children}</main>
      </body>
    </html>
  );
}
