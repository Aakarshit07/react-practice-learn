import CounterButton from "./CounterButton.jsx";
import CounterValue from "./CounterValue.jsx";
import Navbar from "./Navbar.jsx";

const Counter = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        border: "1px solid white",
        borderRadius: "8px",
        padding: "24px",
        textTransform: "capitalize",
      }}
    >
      <CounterValue />
      <CounterButton />
    </div>
  );
};

export default Counter;
