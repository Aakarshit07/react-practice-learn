import "./App.css";
import Card from "./components/Card";
import Grid from "./components/Grid";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      <Grid />
      <h1 className="text-amber-900">Learn to Tailwind</h1>
      <div className="flex gap-4">
        <Card
          image="https://images.unsplash.com/photo-1765498067720-6ff6847f8f85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quam natus. Exercitationem maiores ea officia!"
        />
        <Card
          image="https://images.unsplash.com/photo-1765498067720-6ff6847f8f85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quam natus. Exercitationem maiores ea officia!"
        />
        <Card
          image="https://images.unsplash.com/photo-1765498067720-6ff6847f8f85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quam natus. Exercitationem maiores ea officia!"
        />
      </div>
      <Button variant={"outline"}>Button</Button>
    </>
  );
}

export default App;
