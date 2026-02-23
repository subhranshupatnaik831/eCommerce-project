import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #1e40af, #020617)",
        padding: "90px 15px",
      }}
    >
      <Container>
        <Card
          className="border-0 flex-column flex-md-row"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 22,
            overflow: "hidden",
            backdropFilter: "blur(18px)",
            background: "rgba(255,255,255,0.08)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
          }}
        >
          {/* LEFT */}
          <div
            className="text-center text-md-start"
            style={{
              flex: 1,
              padding: "36px",
              color: "#e5e7eb",
              background:
                "linear-gradient(160deg, rgba(37,99,235,0.35), rgba(15,23,42,0.9))",
            }}
          >
            <h2 className="fw-bold mb-3">Let’s Talk 💬</h2>

            <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
              Questions about an order?
              <br />
              Need help choosing the right phone?
              <br />
              Or just want to say hi?
            </p>

            <div style={{ marginTop: 32 }}>
              <p className="mb-2">📧 support@mystore.com</p>
              <p className="mb-2">📞 +91 8658653882</p>
              <p className="mb-0">🕒 Mon – Sat, 9AM – 7PM</p>
            </div>

            <div
              style={{
                marginTop: 40,
                fontSize: 13,
                opacity: 0.7,
              }}
            >
              We usually reply within a few hours.
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              flex: 1.2,
              background: "#fff",
              padding: "36px",
            }}
          >
            <h4 className="fw-bold mb-1 text-center text-md-start">
              Send us a message
            </h4>
            <p
              className="text-muted mb-4 text-center text-md-start"
              style={{ fontSize: 14 }}
            >
              Fill the form and we’ll get back to you
            </p>

            {!submitted ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Your name"
                    required
                    style={{
                      borderRadius: 14,
                      padding: "12px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    required
                    style={{
                      borderRadius: 14,
                      padding: "12px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us what's on your mind…"
                    required
                    style={{
                      borderRadius: 14,
                      padding: "12px",
                      resize: "none",
                    }}
                  />
                </Form.Group>

                <Button
                  className="w-100 fw-semibold"
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(135deg, #2563eb, #1e40af)",
                    border: "none",
                    borderRadius: 16,
                    padding: "12px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 12px 25px rgba(37,99,235,0.45)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  Send Message →
                </Button>
              </Form>
            ) : (
              /* SUCCESS MESSAGE */
              <div
                style={{
                  background: "#f0f9ff",
                  borderRadius: 16,
                  padding: "24px",
                  textAlign: "center",
                  color: "#1e40af",
                }}
              >
                <h5 className="fw-bold mb-2">
                  Message sent successfully 🎉
                </h5>
                <p className="mb-0" style={{ fontSize: 14 }}>
                  Thanks for reaching out!
                  <br />
                  Our team has received your message and will get back to you shortly.
                </p>
              </div>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default ContactUs;