import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import SaleCountdown from "./SaleCountdown";


const ProductDetails = () => {
  const { addToCart, setCartItemQuantity } = useCart();
  const { user } = useAuth(); // 🔐 auth check
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;
  const [qty, setQty] = useState(1);
  const [expanded, setExpanded] = useState(false);

  if (!product) {
    return <h3 className="text-center mt-5">No product found</h3>;
  }

  // 🔒 Common auth guard
  const requireAuth = (action) => {
    if (!user) {
      navigate("/login", {
        state: { redirectTo: "/product", product },
      });
      return;
    }
    action();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b2a4a, #0a1f3d)",
        padding: "60px 0",
      }}
    >
      <Container style={{ marginTop: "80px" }}>
        <Row className="g-4">
          {/* IMAGE */}
          <Col md={6}>
            <Card
              className="p-4 border-0 text-center"
              style={{
                borderRadius: 20,
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
              }}
            >
              <img
                src={product.image}
                alt={product.model}
                className="img-fluid"
                style={{ maxHeight: 400, objectFit: "contain" }}
              />
            </Card>
          </Col>

          {/* DETAILS */}
          <Col md={6}>
            <Card
              className="p-4 border-0"
              style={{
                borderRadius: 20,
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
              }}
            >
              <Badge bg="primary">{product.category}</Badge>

              <h3 className="mt-3">
                {product.brand} {product.model}
              </h3>

              <h2 className="fw-bold text-primary">
                ₹ {(product.price * qty).toFixed(2)}
              </h2>

              <SaleCountdown></SaleCountdown>
              {/* Description */}
              <div
                style={{
                  maxHeight: expanded ? "none" : 120,
                  overflowY: expanded ? "visible" : "auto",
                  scrollbarWidth: "none",
                }}
                className="hide-scroll mt-2"
              >
                {product.description}
              </div>

              <Button
                variant="link"
                className="p-0 mt-1"
                style={{ textDecoration: "none" }}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Read less ▲" : "Read more ▼"}
              </Button>
              {/* Quantity */}
              <div className="d-flex gap-3 mt-4 align-items-center">
                <Button
                  variant="light"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </Button>
                <strong>{qty}</strong>
                <Button
                  variant="light"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </Button>
              </div>

              {/* Actions */}
              <div className="d-flex gap-3 mt-3">
                <Button
                  className="flex-grow-1"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #1e40af)",
                    border: "none",
                  }}
                  onClick={() =>
                    requireAuth(() => {
                      setCartItemQuantity(product, qty);
                      navigate("/payment", {
                        state: { product, qty },
                      });
                    })
                  }
                >
                  Buy Now
                </Button>

                <Button
                  variant="outline-primary"
                  className="flex-grow-1"
                  onClick={() =>
                    requireAuth(() => addToCart(product, qty))
                  }
                >
                  Add to Cart
                </Button>
              </div>

              {!user && (
                <p className="text-danger small mt-3">
                  ⚠ Please login to continue
                </p>
              )}
            </Card>
          </Col>
        </Row>
      </Container>

      <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
};
export default ProductDetails;