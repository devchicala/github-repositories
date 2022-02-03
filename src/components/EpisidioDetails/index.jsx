import { useEffect, useState } from "react";
import img from "../../assets/rick-and-morty.jpg";
import { FILTERED_EPISODE } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import Episodio from "../Episodio";

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  
}

const EpisodioDetails = (item) => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(FILTERED_EPISODE, {
    variables: { filter: id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  console.log(data)

  return (
    
    <div className="container-fluid secondary p-5">
      <div className="row align-items-center">
        <div className="col-sm-8">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-4">
          <p className="card-text">Episódio #{data.episode.id}</p>
          <p className="card-text">Name: {data.episode.name}</p>
          <p className="card-text">Data de Emissão: {data.episode.air_date}</p>
        </div>
      </div>

      <div className="px-5 pt-5">
        <h1 className="">Personagens</h1>

        <div className="row mt-5">
          {data.episode.characters.map((item) => (
            `Personagem - ${item.id}`
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodioDetails;
