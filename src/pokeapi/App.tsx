import { FC } from 'react';
import { useLimit, usePagination, usePokemonList } from './recoil/pokemonState';

export const App: FC = () => {
  const { next, page, prev } = usePagination();
  const [limit, setLimit] = useLimit();
  const list = usePokemonList();
  return (
    <div>
      <div>pokemonList</div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {list.map((value, index) => (
            <tr key={index}>
              <td>{index + 1 + page * limit}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ paddingTop: 10 }}>currentPage:{page + 1}</div>
      <div style={{ paddingTop: 10 }}>
        <div>
          <button type="button" onClick={next}>
            next
          </button>
          <button type="button" disabled={page === 0} onClick={prev}>
            prev
          </button>
        </div>
        <div style={{ paddingTop: 10 }}>
          limit:
          <span>
            {[20, 30, 50].map((value) => (
              <span key={`rangeButton-${value}`} style={{ paddingLeft: 10 }}>
                <button
                  type="button"
                  disabled={limit === value}
                  value={value}
                  onClick={({ currentTarget: { value } }) =>
                    setLimit(Number(value))
                  }
                >
                  {value}
                </button>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
