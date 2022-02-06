import React from "react";
import { useState } from "react";

import { FILTERED_EPISODES } from "../../graphql/queries";

import { useQuery } from "@apollo/client";
import Episodio from "../Episodio";
import { GoAlert } from "react-icons/go";

import { AuthContext } from "../../context/auth";

const Favorite = () => {
  const { favorite } = React.useContext(AuthContext);

  //console.log(favorite[0].value);

  const [filter, setFilter] = useState("");

  const { data, loading, error } = useQuery(FILTERED_EPISODES, {
    variables: { filter: filter },
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
    <div className="container-fluid principal p-5">
      <div className="row">
      <h1 className="text-white">Episódios favoritos:</h1>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="row mt-4">
            {!favorite ? (
              <div>SEM FAVORITOS!</div>
            ) : (
              favorite.map((item) => <Episodio item={item.value} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
