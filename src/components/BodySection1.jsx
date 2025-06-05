import PartnersLogo from "../assets/logos.svg";

function BodySection1() {
  return (
    <div style={{ width: "70%", textAlign: "center", marginTop: "10%" }}>
      <p style={{ fontWeight: "700" }} className="text-size-large">
        Features to build, connect, and grow your community
      </p>
      <p
        style={{ margin: "3% 0", display: "flex", justifyContent: "end" }}
        className="text-size-small"
      >
        <span style={{ fontWeight: "500", textAlign: "right", width: "90%" }}>
          Strengthen connections, drive engagement, and grow a thriving
          community. Reach your audience, foster loyalty, and monetize—free from
          ads and algorithms.
        </span>
      </p>
      <button
        style={{
          border: "none",
          backgroundColor: "#C6F806",
          borderRadius: "3.5rem",
          padding:
            "clamp(10px, 1.302vw - 3.33px, 30px) clamp(15px, 2.28vw - 8.37px, 50px)",
          width: "max-content",
        }}
      >
        <span
          className="text-size-small"
          style={{
            margin: "0 10px",
            color: "#2E134D",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Start Now
        </span>
      </button>
      <img
        style={{ margin: "10% 0 5% 0" }}
        src={PartnersLogo}
        fetchPriority="high"
        alt="logo of partners"
      />
    </div>
  );
}

export default BodySection1;
