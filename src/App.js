import "./App.css";
import Dashboard from "./section/dashboard/Dashboard";
import Navigation from "./section/navigation/Navigation";
import Transactions from "./section/transactions/Transactions";

function App() {
  return (
    <div className="App">
      {/* Side Navigation */}
      <Navigation />

      {/* Main Content */}
      <Dashboard />

      {/* Transactions */}
      <Transactions />
    </div>
  );
}

export default App;
