import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        border: "1px solid white",
        borderRadius: "8px",
        padding: "24px",
        textTransform: "capitalize",
      }}
    >
      <Navbar />
      <Counter />
      <Posts />
    </div>
  );
}

export default App;
