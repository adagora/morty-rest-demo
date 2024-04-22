import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { IData, IDataExtra } from "../pages/@types/IData";

export function useCharacters(
  enabled?: boolean
): UseQueryResult<IData[], Error> {
  return useQuery<IDataExtra, Error, IData[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      return response.json();
    },
    select: (data) => data.results,
    enabled
  });
}

export function useCharacterById(
  id: number,
  enabled?: boolean
): UseQueryResult<IData, Error> {
  return useQuery<IData, Error, IData>({
    queryKey: ["character", id],
    queryFn: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      return response.json();
    },
    enabled
  });
}
