import { useEffect, useState } from "react";
import "../styles/MediaPage.css";
import Modal from "../components/Modal";

export default function Series() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [selected, setSelected] = useState(null);
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    fetch("/feed/sample.json")
      .then((res) => res.json())
      .then((json) => {
        const filtered = json.entries
          .filter((e) => e.programType === "series" && e.releaseYear >= 2010)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 20);
        setItems(filtered);
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p className="state">Cargando...</p>;
  if (status === "error") return <p className="state">Error al cargar datos.</p>;

  return (
    <>
      <h2 className="page-title">Series populares</h2>

      <input
        type="number"
        placeholder="Filtrar por año..."
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
        className="year-filter"
      />

      <div className="grid">
        {items
          .filter(
            (item) =>
              yearFilter === "" || item.releaseYear === parseInt(yearFilter)
          )
          .map((item) => (
            <div className="card" key={item.title}>
              <img src={item.images["Poster Art"].url} alt={item.title} />
              <button className="title" onClick={() => setSelected(item)}>
                {item.title}
              </button>
            </div>
          ))}
      </div>

      <Modal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
