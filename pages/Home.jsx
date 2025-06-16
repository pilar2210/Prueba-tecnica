import { Link } from "react-router-dom";
import "./Home.css"; 

export default function Home() {
  return (
    <div className="home">
      <Link className="block" to="/series">Series</Link>
      <Link className="block" to="/movies">Películas</Link>
    </div>
  );
}
