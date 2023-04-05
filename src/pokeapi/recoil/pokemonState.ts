import ky from 'ky';
import { useCallback } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const pageState = atom({
  key: 'page',
  default: 0,
});

export const usePagination = () => {
  const [page, setPage] = useRecoilState(pageState);
  const prev = useCallback<() => void>(
    () => setPage((old) => Math.max(old - 1, 0)),
    [setPage]
  );
  const next = useCallback<() => void>(
    () => setPage((old) => old + 1),
    [setPage]
  );
  return { page, prev, next };
};

const limitState = atom({
  key: 'limit',
  default: 20,
});

export const useLimit = () => useRecoilState(limitState);

export type PokemonListType = {
  count: number;
  next: string;
  previous: unknown;
  results: Result[];
};

export type Result = {
  name: string;
  url: string;
};

const pokemonListState = selector({
  key: 'pokemonList',
  get: async ({ get }) => {
    const page = get(pageState);
    const limit = get(limitState);
    const response = await ky
      .get('https://pokeapi.co/api/v2/pokemon/', {
        searchParams: { limit, offset: page * limit },
      })
      .json<PokemonListType>();
    return response.results.map(({ name }) => name);
  },
});

export const usePokemonList = () => useRecoilValue(pokemonListState);
