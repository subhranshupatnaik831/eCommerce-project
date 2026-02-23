import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <>
      <style>
        {`
          .about-container {
            min-height: 100vh;
            padding: 120px 20px 80px;
            background: radial-gradient(circle at top, #1e3a8a, #020617);
          }

          .about-hero {
            max-width: 800px;
          }

          .about-heading {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #ffffff;
          }

          .about-text {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #c7d2fe;
          }

          .about-cards {
            margin-top: 80px;
          }

          .about-card {
            background: rgba(2, 6, 23, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 18px;
            padding: 30px;
            box-shadow: 0 0 30px rgba(96, 165, 250, 0.15);
            border: 1px solid rgba(96, 165, 250, 0.15);
            transition: all 0.35s ease;
          }

          .about-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 0 40px rgba(96, 165, 250, 0.35);
          }

          .about-card-title {
            font-size: 1.2rem;
            color: #60a5fa;
            margin-bottom: 12px;
          }

          .about-card-text {
            font-size: 0.95rem;
            color: #c7d2fe;
            line-height: 1.6;
          }

          .about-divider {
            width: 120px;
            height: 4px;
            margin: 80px auto 40px;
            background: linear-gradient(90deg, #60a5fa, transparent);
            border-radius: 5px;
          }

          .about-footer-text {
            font-size: 0.9rem;
            color: #94a3b8;
            letter-spacing: 0.5px;
          }
        `}
      </style>

      <div className="about-container text-white text-center">
        <Container>
          {/* Hero */}
          <div className="about-hero mx-auto">
            <h1 className="about-heading">About MyStore</h1>
            <p className="about-text">
              MyStore is a next-gen e-commerce platform crafted for speed, trust,
              and delight. From curated products to seamless checkout — we obsess
              over every detail so you don’t have to.
            </p>
          </div>

          {/* Feature Cards */}
          <Row className="justify-content-center g-4 about-cards">
            <Col md={4} sm={6}>
              <Card className="about-card h-100 border-0">
                <Card.Body>
                  <h3 className="about-card-title">
                    🚀 Lightning-Fast Delivery
                  </h3>
                  <p className="about-card-text">
                    Smart logistics and real-time tracking ensure your orders
                    arrive faster than ever.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="about-card h-100 border-0">
                <Card.Body>
                  <h3 className="about-card-title">
                    🔐 Bank-Grade Security
                  </h3>
                  <p className="about-card-text">
                    End-to-end encryption and trusted gateways keep every
                    transaction safe.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="about-card h-100 border-0">
                <Card.Body>
                  <h3 className="about-card-title">💎 Curated Quality</h3>
                  <p className="about-card-text">
                    Verified sellers, premium products, and zero compromises on
                    quality.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Divider */}
          <div className="about-divider"></div>

          {/* Footer */}
          <p className="about-footer-text">
            Built with passion for shoppers who expect more.
          </p>
        </Container>
      </div>
    </>
  );
};
export default About;