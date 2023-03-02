import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

export default function getEpisodes() {
   const [page, setPage] = useState<number>(1);

   const GET_EPISODES = gql`
      query {
         episodes(page: ${page}) {
            info {
               count
               pages
               next
             }
            results {
               id
               episode
               name
            }
         }
      }
   `;

   const prevPage = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };

   const { loading, error, data } = useQuery(GET_EPISODES);

   return { page, setPage, prevPage, loading, error, data };
}
