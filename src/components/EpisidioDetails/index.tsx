import { useEffect, useState } from "react";
import img from "../../assets/rick-and-morty.jpg";
import Episodio from "../Episodio";
import api from "../../services/api";

const EpisodioDetails = ({ item }: any) => {
  const [allData, setData] = useState([]);

  useEffect(() => {
    api.get("codigopenal").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="container-fluid secondary p-5">
      <div className="row align-items-center">
        <div className="col-sm-8">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-4">
          <p className="card-text">Episódio #1</p>
          <p className="card-text">Name: Return to Mart</p>
          <p className="card-text">Data de Emissão: 10/03/2018</p>
        </div>
      </div>

      <div className="px-5 pt-5">
        <h1 className="">Personagens</h1>

        <div className="row mt-5">
          {allData.map((item: { id: any }) => (
            <Episodio item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodioDetails;
