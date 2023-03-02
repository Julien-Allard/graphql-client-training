import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

export default function getLocations() {
   const [page, setPage] = useState<number>(1);

   const GET_LOCATIONS = gql`
      query {
         locations(page: ${page}) {
            info {
               count
               pages
               next
            }
            results {
               id
               name
               dimension
            }
         }
      }
   `;

   const { loading, error, data } = useQuery(GET_LOCATIONS);

   const maxPage: number = Number(data?.locations?.info?.pages);

   const prevPage = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };

   const nextPage = () => {
      if (page < maxPage) {
         setPage(page + 1);
      }
   };

   return { page, prevPage, nextPage, loading, error, data };
}
