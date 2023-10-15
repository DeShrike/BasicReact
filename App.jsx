import { createRoot } from "react-dom/client";
import Button from "./Button";
import Counter from "./Counter";

function App() {
    return (
    <div>
        <h1>Hello React !</h1>
        <Button />
        <hr/>
        <Counter />
    </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
