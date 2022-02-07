import { useEffect, useState } from "react";
import img from "../../assets/rick-and-morty.jpg";
import { FILTERED_EPISODE } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GoAlert } from "react-icons/go";

import Character from "../Character";

const EpisodioDetails = (item) => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(FILTERED_EPISODE, {
    variables: { filter: id },
  });

  if (loading) {
    return (
      <div className="container-fluid text-center py-5">
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container-fluid text-center py-5 text-size-12">
        <GoAlert size={70} /> <h1>REGISTO NÃO ENCONTRADO!</h1>
      </div>
    );
  }

  return (
    
    <div className="container-fluid secondary p-5">
      <div className="row align-items-center">
        <div className="col-sm-8">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-4">
          <p className="card-text text-warning"><h3>Episódio #{data.episode.id}</h3></p>
          <p className="card-text text-white"><h5>Name: {data.episode.name}</h5></p>
          <p className="card-text text-white"><h5>Data de Emissão: {data.episode.air_date}</h5></p>
        </div>
      </div>

      <div className="px-5 pt-5">
        <h1 className="text-warning">Personagens</h1>

        <div className="row mt-5">
          {data.episode.characters.map((item) => (
            <Character item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodioDetails;
