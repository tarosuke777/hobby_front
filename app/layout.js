import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "hobby",
  description: "hobby manage system",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1>Hobby Manage System</h1>
        </header>
        <div id="container">
          <div id="sidebar">
            <h2>Hobbies</h2>
            <nav>
              <ul>
                <li>
                  <Link href="/designer">designer</Link>
                </li>
              </ul>
            </nav>
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
