import { useState } from "react";

const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) return;

    onAdd({
      name: name,
      service: service,
    });

    setName("");
    setService("");
  };

  return (
    <form className="queue-form" onSubmit={onSubmit}>
      <h2>Add to Queue</h2>
      <div className="form-group">
        <input
          type="text"
          id="customer_name"
          name="customer_name"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="payment">Payment</option>
          <option value="consultation">Consultation</option>
          <option value="billing">Billing</option>
        </select>
      </div>
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default QueueForm;
