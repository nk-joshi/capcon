import BodySection1 from "./BodySection1.jsx";
import Commerce_Games_Img from "../assets/commerce&games.svg";
import PromoImg from "../assets/promo.svg";
import BrandImg from "../assets/brands.svg";
import { Accordion } from "./Accordion.jsx";

function Body() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BodySection1 />
      <div className="body-wrapper">
        <img
          src={Commerce_Games_Img}
          alt="s-commerce and gamification icons"
          className="full-img"
        />
        <img src={PromoImg} alt="promo" className="full-img" />
        <div className="body-content">
          <img className="brand-img" src={BrandImg} alt="brands image" />
          <div className="text-panel">
            <button
              style={{
                borderRadius: "3.5rem",
                backgroundColor: "white",
                border: "1px solid #6e40a3",
                padding:
                  "clamp(10px, 1.302vw - 3.33px, 30px) clamp(15px, 2.28vw - 8.37px, 50px)",
                width: "max-content",
              }}
            >
              <span
                className="text-size-small"
                style={{
                  margin: "0 10px",
                  color: "#6E40A3",
                  textAlign: "center",
                }}
              >
                Capcons Pro
              </span>
            </button>
            <div style={{ marginTop: "5%" }}>
              <p className="title">Monetization: Earn on Your Terms</p>
              <p
                style={{ marginTop: "2%" }}
                className="description text-size-small"
              >
                Monetize seamlessly with paid Circles, subscriptions, and
                exclusive content—driving higher sales and faster revenue
                growth. With Capcons, creators and brands set their own pricing,
                ensuring sustainable income and deeper community engagement.
              </p>
              <div style={{ margin: "15% 0" }}>
                <Accordion
                  items={[
                    {
                      title: "Your brands",
                      content:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    },
                  ]}
                />
                <Accordion
                  items={[
                    {
                      title: "Your colors",
                      content:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    },
                  ]}
                />
                <Accordion
                  items={[
                    {
                      title: "Your community",
                      content:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
