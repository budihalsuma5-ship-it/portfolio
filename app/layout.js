import "./globals.css";

export const metadata = {
  title: "Sumangala Portfolio",
  description: "Student Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h2>Sumangala</h2>

          <div>
            <a href="/">Home</a>
            <a href="/student-details">Student Details</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}