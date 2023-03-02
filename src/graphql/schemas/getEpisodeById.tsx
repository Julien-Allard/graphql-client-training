import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

export default function getEpisodeById() {
   const [episodeId, setEpisodeId] = useState<number>(1);

   const GET_EPISODE_BY_ID = gql`
      query {
         episodes(page: 1) {
            info {
               count
               next
            }
         }
         episode(id: ${episodeId}) {
            id
            episode
            name
            air_date
         }
      }
   `;

   const { loading, error, data } = useQuery(GET_EPISODE_BY_ID);

   const lastEpisode: number = Number(data?.episodes?.info?.count);

   const nextEpisode = () => {
      if (episodeId < lastEpisode) {
         setEpisodeId(episodeId + 1);
      }
   };

   const prevEpisode = () => {
      if (episodeId > 1) {
         setEpisodeId(episodeId - 1);
      }
   };

   return { episodeId, setEpisodeId, nextEpisode, prevEpisode, loading, error, data };
}
