import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

export default function getCharacterById() {
   const [characterId, setCharacterId] = useState<number>(1);

   const GET_CHARACTER_BY_ID = gql`
    query {
      characters(page: 1) {
        info {
          count
          next
        }
      }
      character(id: ${characterId}) {
        id
        name
        status
        created
        species
        gender
        origin {
          name
        }
        location {
          name
          dimension
        }
        image
        episode
      }
    }
  `;

   const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID);

   const lastCharacter: number = Number(data?.characters?.info?.count);

   const nextCharacter = () => {
      if (characterId < lastCharacter) {
         setCharacterId(characterId + 1);
      }
   };

   const prevCharacter = () => {
      if (characterId > 1) {
         setCharacterId(characterId - 1);
      }
   };

   return { characterId, setCharacterId, nextCharacter, prevCharacter, loading, error, data };
}
