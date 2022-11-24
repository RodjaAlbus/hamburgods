import { useState } from "react";
import { Header, Footer } from "./Components/Main";
import { WaiterArea } from "./Components/WaiterArea";
import { KitchenArea } from "./Components/KitchenArea";
import "./Components/style.css";

function App() {
  const [money, setMoney] = useState("$280,000");
  return (
    <body>
      <Header />
      <div className="gameArea">
        <WaiterArea />
        <KitchenArea />
      </div>
      <Footer money={money} />
    </body>
  );
}

export default App;
