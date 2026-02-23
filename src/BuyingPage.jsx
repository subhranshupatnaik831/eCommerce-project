import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const BuyingPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      setError("🛒 Your cart is empty");
      return;
    }

    const { name, phone, address, city, pincode, state } = form;

    if (!name || !phone || !address || !city || !pincode || !state) {
      setError("⚠️ Please fill all delivery details");
      return;
    }

    navigate("/payment-method", {
      state: {
        orderDetails: {
          cart,
          grandTotal,
          address: form,
        },
      },
    });
  };

  /* 🔹 Order Charges */
  const shippingCharge = cartTotal > 50000 ? 0 : 99;
  const platformFee = cart.length > 0 ? 29 : 0;
  const grandTotal = cartTotal + shippingCharge + platformFee;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b2a4a, #0a1f3d)",
        padding: "60px 0",
      }}
    >
      <Container style={{ marginTop: "80px" }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="g-4">
              {/* Delivery Info */}
              <Col md={7}>
                <Card
                  className="border-0"
                  style={{
                    borderRadius: 18,
                    background: "#f8fafc",
                    padding: 26,
                    boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
                  }}
                >
                  <h5 className="fw-bold mb-4">📦 Delivery Information</h5>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <Row className="g-3 mb-3">
                    <Col>
                      <Form.Floating>
                        <Form.Control name="name" onChange={handleChange} />
                        <label>Full Name</label>
                      </Form.Floating>
                    </Col>

                    <Col>
                      <Form.Floating>
                        <Form.Control name="phone" onChange={handleChange} />
                        <label>Phone Number</label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="address"
                      style={{ height: 90 }}
                      onChange={handleChange}
                    />
                    <label>Full Address</label>
                  </Form.Floating>

                  <Row className="g-3 mb-3">
                    <Col>
                      <Form.Floating>
                        <Form.Control name="city" onChange={handleChange} />
                        <label>City</label>
                      </Form.Floating>
                    </Col>

                    <Col>
                      <Form.Floating>
                        <Form.Control name="pincode" onChange={handleChange} />
                        <label>Pincode</label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Form.Floating>
                    <Form.Control name="state" onChange={handleChange} />
                    <label>State</label>
                  </Form.Floating>
                </Card>
              </Col>

              {/* Order Summary */}
              <Col md={5}>
                <Card
                  className="border-0"
                  style={{
                    borderRadius: 18,
                    padding: 26,
                    boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
                  }}
                >
                  <h5 className="fw-bold mb-3">🧾 Order Summary</h5>

                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between mb-2"
                    >
                      <span>
                        {item.brand} {item.model} × {item.quantity}
                      </span>
                      <span>
                        ₹ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <hr />

                  <div className="d-flex justify-content-between mb-2">
                    <span>Price</span>
                    <span>₹ {cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <span>
                      {shippingCharge === 0 ? "FREE" : `₹ ${shippingCharge}`}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Platform Fee</span>
                    <span>₹ {platformFee}</span>
                  </div>

                  <hr />

                  <h5 className="fw-bold d-flex justify-content-between">
                    <span>Total Payable</span>
                    <span>₹ {grandTotal.toFixed(2)}</span>
                  </h5>

                  <Button
                    className="w-100 mt-3 fw-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, #2563eb, #1e40af)",
                      border: "none",
                      borderRadius: 14,
                    }}
                    onClick={handlePlaceOrder}
                  >
                    🔐 Place Order
                  </Button>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuyingPage;