import { useCharacterById } from "../../../services/CharactersServices";
import { useParams } from "react-router-dom";

export const CharacterAboutComponent = () => {
  let { id } = useParams();

  const {
    data: characterData,
    isError: characterIsError,
    error: characterError,
    isLoading: characterIsLoading,
    refetch: characterRefetch
  } = useCharacterById(Number(id));

  return (
    <div>
      <button onClick={() => window.history.back()}>Back</button>
      {characterIsError ? (
        <div className="content-alert-error">
          <div>
            Problem with fetching data, please try again later. Error:
            {characterError.message}
            <button onClick={() => characterRefetch()}>Try again</button>
          </div>
        </div>
      ) : null}
      <li>
        <h2>Character</h2>
        {characterIsLoading ? (
          <p>Loading...</p>
        ) : characterData ? (
          <ul>
            <li>
              <img src={characterData.image} alt={characterData.name} />
            </li>
            <li>
              <h3>{characterData.name}</h3>
            </li>
            <li>
              <p>Species: {characterData.species}</p>
            </li>
            <li>
              <p>Status: {characterData.status}</p>
            </li>
            <li>
              <h3>Origin</h3>
              <p>{characterData.origin.name}</p>
            </li>
            <li>
              <h3>Location</h3>
              <p>{characterData.location.name}</p>
            </li>
            <li>
              <h3>More info</h3>
              <p>{characterData.url}</p>
            </li>
            <li></li>
          </ul>
        ) : null}
      </li>
    </div>
  );
};
