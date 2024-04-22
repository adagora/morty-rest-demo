import { Link } from "react-router-dom";
import { useCharacters } from "../services/CharactersServices";

export const Characters = () => {
  const { data, isError, error, isLoading, refetch } = useCharacters();

  return (
    <>
      {isError ? (
        <div className="content-alert-error">
          <div>
            Problem with fetching data, please try again later. Error:
            {error.message}
            <button onClick={() => refetch()}>Try again</button>
          </div>
        </div>
      ) : null}
      <div className="item">
        <li>
          <h2>Characters</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : data && data.length > 0 ? (
            <ul>
              {data.map((item) => (
                <Link to={`characters/${item.id}`} key={item.id}>
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <p>Name: {item.name}</p>
                    <p>Species: {item.species}</p>
                    <p>Status: {item.status}</p>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p>No data</p>
          )}
        </li>
      </div>
    </>
  );
};
