import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import getEpisodeById from '../../graphql/schemas/getEpisodeById';

export default function EpisodeById() {
   const { state } = useLocation();
   const { episodeId, setEpisodeId, nextEpisode, prevEpisode, loading, error, data } =
      getEpisodeById();

   error && console.log(error);

   useEffect(() => {
      setEpisodeId(Number(state.id));
   }, []);

   return loading ? (
      <p>Chargement...</p>
   ) : (
      <>
         <p>{data.episode.name}</p>
         <p>{data.episode.episode}</p>
         <p>{data.episode.air_date}</p>
         <button onClick={prevEpisode}>PREV EPISODE</button>
         <button onClick={nextEpisode}>NEXT EPISODE</button>
      </>
   );
}
