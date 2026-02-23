import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavScrollExample = ({ setSearch }) => {
  const suggestions = [
    "Samsung",
    "Apple",
    "Xiaomi",
    "OnePlus",
    "Motorola",
  ];

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  /* ✅ CLICK OUTSIDE HANDLER */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ✅ SHOW DEFAULT OR FILTERED */
  const visibleSuggestions = query
    ? suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : suggestions;

  return (
    <>
      <div style={{ height: "73px" }}></div>

      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        style={{ zIndex: "1000" }}   // ✅ removed fixed height
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold"
            style={{
              color: "#1e90ff",
              fontSize: "1.6rem",
              letterSpacing: "1px",
            }}
          >
            MyStore🛍️
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          {/* ✅ MOBILE DRAWER STYLE COLLAPSE */}
          <Navbar.Collapse
            id="navbarScroll"
            className="mobile-menu"
          >
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>

              <NavDropdown title="More" menuVariant="dark">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/orders">
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/support">
                  Contact Us!
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* 🔍 SEARCH */}
            <Form className="d-flex mx-auto position-relative" ref={searchRef}>
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2 bg-white text-dark border-0 shadow-sm"
                style={{ width: "280px" }}
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSearch(e.target.value);
                }}
              />

              {showSuggestions && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "280px",
                    background: "#111827",
                    borderRadius: "10px",
                    marginTop: "6px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
                    zIndex: 2000,
                    overflow: "hidden",
                  }}
                >
                  {visibleSuggestions.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "10px 14px",
                        cursor: "pointer",
                        color: "#e5e7eb",
                      }}
                      onClick={() => {
                        setQuery(item);
                        setSearch(item);
                        setShowSuggestions(false);
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#1f2937")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "transparent")
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </Form>

            <Button as={Link} to="/login" variant="outline-warning">
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ MOBILE DRAWER CSS */}
      <style>
        {`
          @media (max-width: 991px) {
            .mobile-menu {
              background: #111827;
              padding: 20px;
              margin-top: 10px;
              border-radius: 12px;
              box-shadow: 0 15px 40px rgba(0,0,0,0.5);
              animation: slideDown 0.3s ease-in-out;
            }

            .mobile-menu .nav-link {
              padding: 10px 0;
              font-size: 1.05rem;
            }

            .mobile-menu .btn {
              margin-top: 10px;
              width: 100%;
            }

            .mobile-menu form {
              margin: 15px 0;
              width: 100%;
            }

            .mobile-menu input {
              width: 100% !important;
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default NavScrollExample;