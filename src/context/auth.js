import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [viewer, setViewer] = useState([]);

  function addFavorite(obj) {
    const itensCopy = Array.from(favorite);
    let index = itensCopy.findIndex((val) => val.id === obj.id);
    if (index < 0) {
      itensCopy.push({ id: obj.id, value: obj });
      setFavorite(itensCopy);
    } else {
      itensCopy.splice(index, 1);
      setFavorite(itensCopy);
    }
  }

  function isFavorite(obj) {
    const itensCopy = Array.from(favorite);
    let index = itensCopy.findIndex((val) => val.id === obj.id);
    return index;
  }

  function addView(obj) {
    const itensCopy = Array.from(viewer);
    let index = itensCopy.findIndex((val) => val.id === obj.id);
    if (index < 0) {
      itensCopy.push({ id: obj.id, value: obj });
      setViewer(itensCopy);
    }
  }

  function isView(obj) {
    const itensCopy = Array.from(viewer);
    let index = itensCopy.findIndex((val) => val.id === obj.id);
    return index;
  }

  function printFavorites() {
    console.log(favorite);
  }

  const user = {
    name: "Délcio",
  };

  return (
    <AuthContext.Provider
      value={{ user, favorite, addFavorite, printFavorites, isFavorite, addView, isView }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
