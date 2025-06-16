import "./Modal.css";

export default function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img src={item.images["Poster Art"].url} alt={item.title} />
        <h2>{item.title}</h2>
        <p><strong>Año:</strong> {item.releaseYear}</p>
        <p>{item.description}</p>
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
}
