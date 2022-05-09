import { useEffect, useState } from "react";
import FetchForCharacter from "./FetchForCharacter";

const apiUrl = "https://swapi.dev/api/people";
function Main() {
  const [personNames, setPersonNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [characterInfo, setCharacterInfo] = useState([]);
  const [info, setInfo] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(function loadingDelay() {
      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error();
        })
        .then((data) => setPersonNames(data.results))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  return (
    <main className="container">
      {loading ? (
        <img
          src="https://c.tenor.com/cX26OGHFnkwAAAAj/amaterasu.gif"
          className="sharingan-loading"
        ></img>
      ) : (
        <>
          <div className="leftSide">
            {personNames.map((character) => (
              <button
                className="button"
                key={character.name}
                onClick={() => {
                  setInfo(false);
                  setCharacterInfo(character);
                }}
              >
                {character.name}
              </button>
            ))}
          </div>
          <div className="rightSide">
            {info ? (
              <h1>Click character name for info</h1>
            ) : (
              <FetchForCharacter characterInfo={characterInfo} />
            )}
          </div>
        </>
      )}
      {error && <h2>{"Error! reason: " + " ---> " + error + " :("}</h2>}
    </main>
  );
}

export default Main;
