import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState("Detecting location...");

  // ✅ redirect safely AFTER render
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // ⛔ prevent UI flicker
  if (!user) return null;

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center px-3"
      style={{
        background: "radial-gradient(circle at top, #1e3a8a, #020617)",
      }}
    >
      <Container
        className="d-flex justify-content-center"
        style={{ marginBottom: "75px" }}
      >
        <Card
          className="border-0 shadow-lg text-center w-100"
          style={{
            maxWidth: "26rem",
            borderRadius: "18px",
            padding: "20px",
            background: "#ffffff",
          }}
        >
          <Card.Body>
            {/* Avatar */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                margin: "0 auto 15px",
                background:
                  "linear-gradient(135deg,#1e40af,#2563eb)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <Card.Title className="fw-bold mb-1">
              {user.name}
            </Card.Title>

            <p className="text-muted small mb-4">
              {user.email}
            </p>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "15px",
                marginBottom: "20px",
                textAlign: "left",
                wordBreak: "break-word",
              }}
            >
              <p className="mb-2">
                <strong>📍 Address:</strong> {address}
              </p>
              <p className="mb-0">
                <strong>🛍️ Account Type:</strong> Customer
              </p>
            </div>

            {/* Continue to Shop Button (FIXED) */}
            <Button
              variant="primary"
              className="w-100 fw-semibold mb-2"
              onClick={() => navigate("/home")}
            >
              Continue to Shop
            </Button>

            {/* Logout Button */}
            <Button
              className="w-100 fw-bold"
              style={{
                background:
                  "linear-gradient(135deg,#020617,#1e293b)",
                border: "none",
              }}
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </Button>

            <p className="text-muted small mt-3 mb-0">
              🔐 Logged in securely
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;