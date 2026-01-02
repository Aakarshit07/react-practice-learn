import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      className={`px-6 py-2 rounded font-medium transition-all duration-300 
      ${size === "small" ? "text-sm px-2 py-1" : ""}
      ${size === "large" ? "text-lg px-8 py-3" : ""}
      ${
        color === "primary"
          ? "bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
          : ""
      }
      ${
        color === "secondary"
          ? "bg-neutral-500 hover:bg-neutral-600 text-white"
          : ""
      }
      ${color === "danger" ? "bg-rose-500 hover:bg-rose-600 text-white" : ""}
      ${color === "warning" ? "bg-amber-500 hover:bg-amber-600 text-white" : ""}
      ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed border" : "cursor-pointer"}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

const BaseProps = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2>Base Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, culpa
        corrupti, cumque ipsum ducimus deleniti at repudiandae quas excepturi
        velit earum nihil? Omnis veritatis dolores illo neque soluta, eius iure.
      </p>

      <div className="space-y-4">
        <h3>Different Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Warning Button"
            color="warning"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Disabled Button"
            disabled
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="space-y-4 mt-10">
        <h3>Different Sizes</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Small Button"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Large Button"
            color="primary"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Large Button"
            color="primary"
            size="large"
            disabled
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 bg-fuchsia-200 mt-6 px-4 py-3 rounded-lg">
        Click Count:
        <strong className="text-fuchsia-800">{clickCount}</strong>
      </div>
    </section>
  );
};

export default BaseProps;
