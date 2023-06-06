import "./App.css";
import DashboardLayout from "./pages/dashboard/Layout/Layout";
import { News } from "./pages/dashboard/News/News";

function App() {
  return (
    <>
      <DashboardLayout>
        <News />
      </DashboardLayout>
    </>
  );
}

export default App;
