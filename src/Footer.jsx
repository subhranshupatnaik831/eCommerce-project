import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #020617, #0b2a4a)",
        color: "#e5e7eb",
        paddingTop: 110,
        paddingBottom: 65,
        overflow: "hidden",
      }}
    >
      {/* ANIMATED SHIMMER DIVIDER */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 4,
          background:
            "linear-gradient(120deg, transparent 20%, #3b82f6 40%, #93c5fd 50%, #3b82f6 60%, transparent 80%)",
          backgroundSize: "200% 100%",
          animation: "footerShimmer 3s linear infinite",
          boxShadow:
            "0 0 25px rgba(59,130,246,0.9), 0 0 45px rgba(147,197,253,0.6)",
          borderRadius: 10,
        }}
      />

      {/* AMBIENT GLOW */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <Container>
        <Row className="mb-5">
          {/* BRAND */}
          <Col md={4} className="mb-4">
            <h4 className="fw-bold mb-3">MyStore 🛍️</h4>
            <p style={{ opacity: 0.85, lineHeight: 1.8 }}>
              Your trusted destination for premium smartphones.
              Secure payments, fast delivery, and genuine products —
              every single time.
            </p>
          </Col>

          {/* LINKS */}
          <Col md={2} sm={6} className="mb-4">
            <h6 className="fw-semibold mb-3">Explore</h6>
            <ul className="list-unstyled opacity-85">
              <li className="mb-2">Home</li>
              <li className="mb-2">Shop</li>
              <li className="mb-2">About</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* SUPPORT */}
          <Col md={3} sm={6} className="mb-4">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled opacity-85">
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Returns & Refunds</li>
              <li className="mb-2">Warranty Policy</li>
              <li>Terms & Privacy</li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col md={3} className="mb-4">
            <h6 className="fw-semibold mb-3">Get in touch</h6>
            <p className="mb-2">📧 support@mystore.com</p>
            <p className="mb-2">📞 +91 8658653882</p>
            <p className="mb-0">🕒 Mon – Sat, 9AM – 7PM</p>
          </Col>
        </Row>
      </Container>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 26,
          paddingBottom: 26,
          textAlign: "center",
          fontSize: 14,
          opacity: 0.75,
        }}
      >
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>

      {/* SHIMMER KEYFRAMES */}
      <style>
        {`
          @keyframes footerShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;