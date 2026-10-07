import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-mark" href="/">KM</Link>
      <span>© {new Date().getFullYear()} Kamogelo Mokone. Midrand, South Africa.</span>
    </footer>
  );
}
