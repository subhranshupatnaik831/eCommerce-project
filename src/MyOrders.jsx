import { useCart } from "./CartContext";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const MyOrders = () => {
  const { orders } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const getOrderDate = (createdAt) => {
    const date = createdAt ? new Date(createdAt) : new Date();
    return isNaN(date.getTime()) ? new Date() : date;
  };

  const getDeliveryDate = (orderDate) => {
    const delivery = new Date(orderDate);
    delivery.setDate(delivery.getDate() + 2);
    return delivery;
  };

  if (!orders || orders.length === 0) {
    return (
      <Container className="text-center mt-5">
        <h4>No orders placed yet 📦</h4>
        <p className="text-muted">Your purchased phones will appear here</p>
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-4 mb-5">
        <h3 className="mb-4 fw-bold">My Orders</h3>

        {orders.map((order, index) => {
          const orderDate = getOrderDate(order.createdAt);
          const deliveryDate = getDeliveryDate(orderDate);

          return (
            <Card key={index} className="mb-4 shadow-sm border-0">
              <Card.Body>
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <h6 className="mb-1">Order #{index + 1}</h6>
                    <small className="text-muted">
                      Ordered on {orderDate.toLocaleString()}
                    </small>
                  </div>
                  <Badge bg="warning" text="dark">
                    Arriving Soon
                  </Badge>
                </div>

                <small className="text-muted d-block mb-3">
                  Expected delivery:{" "}
                  <strong>{deliveryDate.toDateString()}</strong>
                </small>

                <hr />

                {/* Products */}
                {order.items.map((item) => (
                  <Row key={item.id} className="align-items-center mb-3">
                    <Col xs={3}>
                      <img
                        src={item.image}
                        alt={item.model}
                        className="img-fluid rounded"
                        style={{ maxHeight: "90px", objectFit: "contain" }}
                      />
                    </Col>

                    <Col xs={9}>
                      <h6 className="mb-1">
                        {item.brand} {item.model}
                      </h6>
                      <small className="text-muted">
                        Qty: {item.quantity}
                      </small>
                      <div className="fw-semibold mt-1">
                        ₹{item.price * item.quantity}
                      </div>
                    </Col>
                  </Row>
                ))}

                <hr />

                {/* Footer */}
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-semibold">Order Total</span>
                  <span className="fw-bold fs-5">₹{order.total}</span>
                </div>

                {/* Track Order Button (BLUE by default) */}
                <Button
                  variant="primary"
                  className="mt-3 w-100 fw-semibold"
                  onClick={() => setShowPopup(true)}
                >
                  📍 Track Order
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>

      {/* TRACK ORDER POPUP */}
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
          <Card
            className="p-4 text-center"
            style={{ width: 360, borderRadius: 16 }}
          >
            <h5 className="fw-bold mb-2">📦 Order Status</h5>
            <p className="text-muted mb-3">
              Seller is processing your order.
              <br />
              Your package will be shipped shortly.
            </p>

            <div
              style={{
                background: "#f8f9fa",
                borderRadius: 12,
                padding: 12,
                fontSize: 14,
              }}
            >
              🚚 Estimated delivery in 2 days
            </div>

            <Button
              variant="dark"
              className="mt-4 w-100"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </Card>
        </div>
      )}
    </>
  );
};

export default MyOrders;