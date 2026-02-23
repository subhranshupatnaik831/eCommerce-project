import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (mode === "login") {
      login({ name: "User", email: form.email });
    } else {
      signup({ name: form.name, email: form.email });
    }
    navigate("/profile");
  };

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
          className="border-0 shadow-lg overflow-hidden flex-column flex-md-row w-100"
          style={{
            maxWidth: "760px",
            borderRadius: "18px",
            minHeight: "420px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-4px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          {/* LEFT */}
          <div
            className="text-center text-md-start"
            style={{
              flex: 1,
              background: "linear-gradient(160deg,#0f172a,#1e3a8a)",
              color: "#e5e7eb",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 className="fw-bold mb-2">MyStore</h3>
              <p className="opacity-75">
                A smarter way to shop.
                <br />
                Secure. Fast. Personal.
              </p>
            </div>

            <Button
              variant="outline-light"
              style={{ transition: "all 0.3s ease" }}
              onClick={() =>
                setMode(mode === "login" ? "signup" : "login")
              }
            >
              {mode === "login" ? "Create Account" : "Login Instead"}
            </Button>
          </div>

          {/* RIGHT */}
          <div
            style={{
              flex: 1.2,
              background: "#fff",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4 className="fw-bold mb-1 text-center text-md-start">
              {mode === "login"
                ? "Welcome Back 👋"
                : "Create Account ✨"}
            </h4>

            <p
              className="text-muted mb-4 text-center text-md-start"
              style={{ fontSize: "14px" }}
            >
              {mode === "login"
                ? "Login to continue shopping"
                : "Join us — it only takes a minute"}
            </p>

            <Form>
              {mode === "signup" && (
                <Form.Group className="mb-3">
                  <Form.Control
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    autoFocus
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  autoFocus={mode === "login"}
                />
              </Form.Group>

              <Form.Group className="mb-3 position-relative">
                <Form.Control
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "13px",
                    color: "#2563eb",
                    userSelect: "none",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </Form.Group>

              <Button
                className="w-100 fw-bold mt-2"
                style={{
                  background:
                    "linear-gradient(135deg,#1e40af,#2563eb)",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(37,99,235,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "none")
                }
                onClick={handleSubmit}
              >
                {mode === "login" ? "Login" : "Sign Up"}
              </Button>
            </Form>

            <p className="text-center text-muted small mt-3 mb-0">
              🔒 Your credentials are encrypted & secure
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
};
export default Auth;