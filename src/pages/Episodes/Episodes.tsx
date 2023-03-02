import { Link } from 'react-router-dom';

import getEpisodes from '../../graphql/schemas/getEpisodes';
import { EpisodesType } from '../../types/EpisodesType';

export default function Episodes() {
   const { page, setPage, prevPage, loading, error, data } = getEpisodes();

   error && console.log(error);

   return loading ? (
      <p>Chargement...</p>
   ) : (
      <div>
         {data.episodes.results.map((episode: EpisodesType) => (
            <Link key={episode.id} to="/episode/:id" state={{ id: episode.id }}>
               <p>{episode.name}</p>
            </Link>
         ))}
         <button type="button" onClick={prevPage}>
            PREV PAGE
         </button>
         <button type="button" onClick={() => setPage(() => page + 1)}>
            NEXT PAGE
         </button>
      </div>
   );
}
