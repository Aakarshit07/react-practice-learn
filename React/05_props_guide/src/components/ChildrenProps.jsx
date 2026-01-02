function Card({ children, title, color = "rose" }) {
  const colorClasses = {
    rose: "border-rose-500 bg-rose-500",
    green: "border-green-500 bg-green-500",
    blue: "border-blue-500 bg-blue-500",
    amber: "border-amber-500 bg-amber-500",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}
    >
      {title && <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>}
      <div className="text-white">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col gap-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid gird-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

const ChildrenProps = () => {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>Children Prop</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, modi.
        Ipsa nobis libero vitae. Repellendus, possimus. In quaerat cumque quod.
      </p>
      <div className="space-y-6">
        <h3>Card Component with Children</h3>
        <Container layout="grid">
          <Card title="User Profile" color="blue">
            <p className="mb-2">
              <strong>Name:</strong> Jhon Doe
            </p>
            <p className="mb-2">
              <strong>Email:</strong> hitesh@something.com
            </p>
            <p className="mb-2">
              <strong>Role:</strong> Developer/Instrucor
            </p>
          </Card>
          <Card title="Statistics" color="green">
            <p className="mb-2">
              <strong>Name:</strong> Jhon Doe
            </p>
            <p className="mb-2">
              <strong>Email:</strong> hitesh@something.com
            </p>
            <p className="mb-2">
              <strong>Role:</strong> Developer/Instrucor
            </p>
          </Card>
          <Card title="Score Blue Vs Rusty" color="amber">
            <div className="p-2 flex justify-between items-center gap-2">
              <div className="w-full p-5 bg-black text-white font-white rounded-md text-center">
                Score:
              </div>
              <div className="w-full p-5 bg-black text-white font-white rounded-md text-center">
                20:10
              </div>
            </div>
          </Card>
          <Card title="Lover Card" color="rose">
            <div className="space-y-2">
              <h3 className="font-mono text-white">I miss you</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                unde similique dolore, distinctio labore nostrum!
              </p>
              <button className="bg-rose-900 border text-white border-rose-600 px-2 py-1 rounded-md">
                Read more
              </button>
            </div>
          </Card>
        </Container>
      </div>
    </section>
  );
};

export default ChildrenProps;
