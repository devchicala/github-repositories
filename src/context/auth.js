import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  function addProfile(results) {
    setProfile(results);
  }

  function returnProfile() {
    console.log(profile);
  }

  return (
    <AuthContext.Provider
      value={{ addProfile, returnProfile, error, setError }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
