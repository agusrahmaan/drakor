import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [kdramas, setKdrama] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5297/api/Kdrama")
      .then((response) => response.json())
      .then((kdramas) => setKdrama(kdramas));
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-3 justify-center pt-5">
      {kdramas.map((kdrama) => (
        <div key={kdrama.id} className="border bg-slate-400 rounded-md p-3">
          <img className="w-48 h-60" src={kdrama.picUrl} alt={kdrama.name} />
          <h3 className="font-bold">{kdrama.name}</h3>
          <h5 className="text-xs">Epsidoe : {kdrama.episode}</h5>
          <p className="text-xs">{kdrama.genre}</p>
          <Link>
            <button className="border bg-green-600 rounded-md px-3">
              Detail
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
