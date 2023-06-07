import "./App.css";
import { NewsCard } from "./pages/dashboard/News/NewsCard";
import DashboardLayout from "./pages/dashboard/Layout/Layout";

function App() {
  return (
    <>
      <DashboardLayout>
        <NewsCard />
      </DashboardLayout>
    </>
  );
}

export default App;
