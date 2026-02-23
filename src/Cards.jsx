import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";
import { useNavigate } from "react-router-dom";

import phones from "./data/phone";
import SaleCountdown from "./SaleCountdown";
import Footer from "./Footer";

const Cards = ({ search = "" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(phones);
    setLoading(false);
  }, []);

  const filteredProducts = products.filter(item =>
    `${item.brand} ${item.model}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0b2a4a, #0a1f3d)",
          padding: "50px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 🔹 TOP ANIMATED DIVIDER */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "85%",
            height: 10, // ✅ THICKER DIVIDER
            background:
              "linear-gradient(120deg, transparent 20%, #3b82f6 40%, #93c5fd 50%, #3b82f6 60%, transparent 80%)",
            backgroundSize: "200% 100%",
            animation: "cardDividerShimmer 3s linear infinite",
            boxShadow:
              "0 0 30px rgba(59,130,246,0.95), 0 0 60px rgba(147,197,253,0.8)",
            borderRadius: 20,
          }}
        />

        <Container>
          <Row>
            {/* 🔹 SHIMMER LOADING */}
            {loading &&
              [...Array(8)].map((_, i) => (
                <Col md={3} sm={6} xs={12} key={i} className="mb-4">
                  <div className="shimmer-card">
                    <div className="shimmer-img" />
                    <div className="shimmer-line w-75" />
                    <div className="shimmer-line w-50" />
                    <div className="shimmer-btn" />
                  </div>
                </Col>
              ))}

            {/* 🔹 NO PRODUCT */}
            {!loading && filteredProducts.length === 0 && (
              <Col xs={12}>
                <div
                  className="text-center"
                  style={{
                    color: "#e5e7eb",
                    padding: "80px 0",
                  }}
                >
                  <h4 className="fw-bold mb-2">No products found 🔍</h4>
                  <p className="opacity-75">
                    Try searching with a different brand or model name
                  </p>
                </div>
              </Col>
            )}

            {/* 🔹 PRODUCTS */}
            {!loading &&
              filteredProducts.map(item => (
                <Col md={3} sm={6} xs={12} key={item.id} className="mb-4">
                  <Card
                    className="h-100 border-0 product-card"
                    style={{
                      borderRadius: "18px",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.18)",
                      overflow: "hidden",
                    }}
                  >
                    <div className="text-center p-3">
                      <img
                        src={item.image}
                        alt={item.model}
                        style={{ height: 180, objectFit: "contain" }}
                      />
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <Card.Title style={{ fontSize: 14 }}>
                        {item.brand} {item.model}
                      </Card.Title>

                      <div className="fw-bold mb-1">₹ {item.price}</div>

                      <SaleCountdown />

                      <Button
                        className="mt-auto fw-semibold"
                        style={{
                          background:
                            "linear-gradient(135deg, #2563eb, #1e40af)",
                          border: "none",
                          borderRadius: "12px",
                        }}
                        onClick={() =>
                          navigate("/products", {
                            state: { product: item },
                          })
                        }
                      >
                        View Product
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>

        {/* 🔹 SHIMMER + HOVER EFFECT STYLES */}
        <style>{`
          .shimmer-card {
            background: #0f172a;
            border-radius: 18px;
            padding: 16px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.18);
          }

          .shimmer-img,
          .shimmer-line,
          .shimmer-btn {
            background: linear-gradient(
              90deg,
              #1e293b 25%,
              #334155 37%,
              #1e293b 63%
            );
            background-size: 400% 100%;
            animation: shimmer 1.4s ease infinite;
          }

          .shimmer-img {
            height: 180px;
            border-radius: 12px;
            margin-bottom: 16px;
          }

          .shimmer-line {
            height: 14px;
            border-radius: 8px;
            margin-bottom: 10px;
          }

          .shimmer-btn {
            height: 36px;
            border-radius: 12px;
            margin-top: 16px;
          }

          @keyframes shimmer {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
          }

          @keyframes cardDividerShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          .product-card {
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }

          .product-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 25px 45px rgba(0,0,0,0.35);
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};
export default Cards;