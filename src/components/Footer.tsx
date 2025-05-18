
import "@/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Studio Goldleaf. All rights reserved.</p>
        <p>📬 goldleafstudio24@gmail.com</p>
      </div>
    </footer>
  );
}
