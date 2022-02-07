import React from "react";
import { useState } from "react";

import { FILTERED_EPISODES } from "../../graphql/queries";

import { useQuery } from "@apollo/client";
import Episodio from "../Episodio";
import { GoAlert } from "react-icons/go";

import { AuthContext } from "../../context/auth";

const Principal = () => {
  const { user, favorite, favoriteUp } = React.useContext(AuthContext);
  console.log(user);

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

  //console.log(data);

  return (
    <div className="container-fluid principal p-5">
      <div className="row">
        <div className="col-sm-12">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="">
          <div className="row mt-4">
            {!data || loading ? (
              <div>...</div>
            ) : (
              data.episodes.results.map((item) => <Episodio item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
