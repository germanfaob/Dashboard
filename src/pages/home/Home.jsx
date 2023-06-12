import { Nav } from "./components/nav/Nav";
import { Hero } from "./components/hero/Hero";
import "./home.css";

export const Home = () => {
  return (
    <div className="home-app">
      <div className="home-container">
        <Nav />
        <div className="hero">
          <Hero />
        </div>
      </div>
    </div>
  );
};
