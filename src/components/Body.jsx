import BodySection1 from "./BodySection1.jsx";
import BodySection2 from "./BodySection2.jsx";

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
      <BodySection2 />
    </div>
  );
}

export default Body;
