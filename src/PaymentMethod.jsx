import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { placeOrder } = useCart();

  const order = location.state?.orderDetails;

  const [selectedMethod, setSelectedMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!order) {
      navigate("/home");
    }
  }, [order, navigate]);

  if (!order) return null;

  const handlePayNow = () => {
    if (!selectedMethod) return;
    setShowPopup(true);
  };

  const completePayment = () => {
    placeOrder(order.grandTotal);
    navigate("/orders");
  };

  return (
    <>
      {/* Main Page */}
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0b2a4a, #0a1f3d)",
          padding: "80px 0",
          filter: showPopup ? "blur(6px)" : "none",
          transition: "0.3s",
        }}
      >
        <Container style={{ maxWidth: 500, marginTop: "80px" }}>
          <Card
            className="border-0 p-4"
            style={{
              borderRadius: 18,
              boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
            }}
          >
            <h4 className="fw-bold mb-3">💳 Select Payment Method</h4>

            <Form>
              {/* UPI */}
              <Form.Check className="mb-3 d-flex align-items-center">
                <Form.Check.Input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "upi"}
                  onChange={() => setSelectedMethod("upi")}
                  style={{
                    width: 18,
                    height: 18,
                    border: "2px solid #2563eb",
                    cursor: "pointer",
                  }}
                />
                <Form.Check.Label style={{ marginLeft: 10, cursor: "pointer" }}>
                  📱 UPI (Google Pay / PhonePe / Paytm)
                </Form.Check.Label>
              </Form.Check>

              {/* CARD */}
              <Form.Check className="mb-3 d-flex align-items-center">
                <Form.Check.Input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "card"}
                  onChange={() => setSelectedMethod("card")}
                  style={{
                    width: 18,
                    height: 18,
                    border: "2px solid #2563eb",
                    cursor: "pointer",
                  }}
                />
                <Form.Check.Label style={{ marginLeft: 10, cursor: "pointer" }}>
                  💳 Credit / Debit Card
                </Form.Check.Label>
              </Form.Check>

              {/* NET BANKING */}
              <Form.Check className="mb-3 d-flex align-items-center">
                <Form.Check.Input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "netbanking"}
                  onChange={() => setSelectedMethod("netbanking")}
                  style={{
                    width: 18,
                    height: 18,
                    border: "2px solid #2563eb",
                    cursor: "pointer",
                  }}
                />
                <Form.Check.Label style={{ marginLeft: 10, cursor: "pointer" }}>
                  🏦 Net Banking
                </Form.Check.Label>
              </Form.Check>

              {/* COD */}
              <Form.Check className="mb-4 d-flex align-items-center">
                <Form.Check.Input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "cod"}
                  onChange={() => setSelectedMethod("cod")}
                  style={{
                    width: 18,
                    height: 18,
                    border: "2px solid #2563eb",
                    cursor: "pointer",
                  }}
                />
                <Form.Check.Label style={{ marginLeft: 10, cursor: "pointer" }}>
                  💵 Cash on Delivery
                </Form.Check.Label>
              </Form.Check>

              <h5 className="fw-bold mb-3">
                Total Payable: ₹ {order.grandTotal.toFixed(2)}
              </h5>

              <Button
                className="w-100 fw-semibold"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1e40af)",
                  border: "none",
                  borderRadius: 14,
                }}
                disabled={!selectedMethod}
                onClick={
                  selectedMethod === "cod"
                    ? completePayment
                    : handlePayNow
                }
              >
                🔒 Pay Now
              </Button>
            </Form>
          </Card>
        </Container>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <Card className="p-4" style={{ width: 340, borderRadius: 18 }}>
            {selectedMethod === "upi" && (
              <>
                <h5 className="fw-bold mb-3 text-center">📱 Scan & Pay</h5>
                <img
                  src="/QRcode.jpeg"
                  alt="UPI QR"
                  style={{ width: "100%", marginBottom: 16 }}
                />
              </>
            )}

            {selectedMethod === "card" && (
              <>
                <h5 className="fw-bold mb-3">💳 Card Details</h5>
                <Form.Group className="mb-2">
                  <Form.Control placeholder="Card Number" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control placeholder="MM / YY" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="CVV" type="password" />
                </Form.Group>
              </>
            )}

            {selectedMethod === "netbanking" && (
              <>
                <h5 className="fw-bold mb-3">🏦 Select Bank</h5>
                <Form.Select className="mb-3">
                  <option>Select your bank</option>
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                  <option>Axis Bank</option>
                </Form.Select>
              </>
            )}

            <Button
              variant="success"
              className="w-100 mb-2"
              onClick={completePayment}
            >
              Confirm Payment ✅
            </Button>

            <Button
              variant="outline-secondary"
              className="w-100"
              onClick={() => setShowPopup(false)}
            >
              Cancel ❌
            </Button>
          </Card>
        </div>
      )}
    </>
  );
};
export default PaymentMethod;