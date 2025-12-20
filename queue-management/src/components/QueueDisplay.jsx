const QueueDisplay = ({ onRemove, onStatusUpdate, queue }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Waiting":
        return "var(--warning)";
      case "Serving":
        return "var(--success)";
      case "Completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <section className="queue-display">
      <h2>Current Queue</h2>

      <div className="queue-list">
        {queue?.length === 0 ? (
          <div className="empty-queue">NO ITEMS IN QUEUE</div>
        ) : (
          queue?.map((item) => (
            <div className="queue-item" key={item.id}>
              <div className="customer-info">
                <h3>{item.name}</h3>
                <p>Service: {item.service}</p>
                <p
                  className="status"
                  style={{ color: getStatusColor(item.status) }}
                >
                  {item.status}
                </p>
              </div>
              <div className="actions">
                {item.status === "Waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => onStatusUpdate(item.id, "Serving")}
                  >
                    Serve
                  </button>
                )}
                {item.status === "Serving" && (
                  <button
                    className="complete-btn"
                    onClick={() => onStatusUpdate(item.id, "Completed")}
                  >
                    Complete
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.id)}
                >
                  <strong>X</strong>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default QueueDisplay;
