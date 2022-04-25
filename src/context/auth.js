import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function addProfile(results) {
    setProfile(results);
  }

  function addRepos(repos) {
    setRepos(repos);
  }

  function returnProfile() {
    console.log(profile);
  }

  return (
    <AuthContext.Provider
      value={{ addProfile, returnProfile, error, setError, profile, user, setUser, addRepos, repos }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
