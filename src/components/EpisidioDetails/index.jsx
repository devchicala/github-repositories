import { useEffect, useState } from "react";
import img from "../../assets/rick-and-morty.jpg";
import { FILTERED_EPISODES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import Episodio from "../Episodio";

const EpisodioDetails = (item) => {
  const [allData, setData] = useState([]);
  const [filter, SetFilter] = useState("");

  const { data, loading, error } = useQuery(FILTERED_EPISODES, {
    variables: { filter: filter },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const { id } = useParams();

  console.log('ID ', id)

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
          {data.episodes.results.map((item) => (
            <Episodio item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodioDetails;
