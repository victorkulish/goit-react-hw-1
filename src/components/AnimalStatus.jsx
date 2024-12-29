import "./AnimalStatus.css";

function AnimalStatus() {
  const animals = [
    { name: "Mango", status: "Online" },
    { name: "Kiwi", status: "Offline" },
    { name: "Ajax", status: "Online" },
    { name: "Jay", status: "Online" },
    { name: "Poly", status: "Offline" },
  ];

  return (
    <div className="animal-status">
      {animals.map((animal, index) => (
        <div
          key={index}
          className={`animal-card ${animal.status.toLowerCase()}`}
        >
          <div className={`animal-avatar ${animal.name.toLowerCase()}`}></div>
          <p>{animal.name}</p>
          <p className="status">{animal.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AnimalStatus;
