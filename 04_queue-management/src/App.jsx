import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [list, setQueueList] = useState([]);

  const onAddToQueue = (item) => {
    setQueueList((list) => [
      ...list,
      {
        ...item,
        status: "Waiting",
        id: Date.now(),
      },
    ]);
  };

  const onRemoveClick = (id) => {
    setQueueList((list) => list.filter((item) => item.id !== id));
  };

  const updateStatus = (id, newstatus) => {
    setQueueList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, status: newstatus } : item
      )
    );
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management</h1>
        <p>Manage your customers effeciently</p>
      </header>
      <main>
        <QueueForm onAdd={onAddToQueue} />
        <QueueDisplay
          queue={list}
          onStatusUpdate={updateStatus}
          onRemove={onRemoveClick}
        />
      </main>
    </div>
  );
}

export default App;
