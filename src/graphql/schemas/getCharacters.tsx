import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

export default function useCharacters() {
   const [page, setPage] = useState<number>(1);

   const GET_CHARACTERS = gql`
      query {
         characters(page: ${page}) {
            info {
               count
               pages
               next
             }
            results {
               id
               name
               image
            }
         }
      }
   `;

   const { loading, error, data } = useQuery(GET_CHARACTERS);

   const maxPage: number = Number(data?.characters?.info?.pages);

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

   return { page, setPage, prevPage, nextPage, loading, error, data };
}
