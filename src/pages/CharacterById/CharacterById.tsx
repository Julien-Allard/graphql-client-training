import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import getCharacterById from '../../graphql/schemas/getCharacterById';

export default function CharacterById() {
   const { state } = useLocation();
   const { setCharacterId, nextCharacter, prevCharacter, loading, error, data } =
      getCharacterById();

   error && console.log(error);

   useEffect(() => {
      setCharacterId(Number(state.id));
   }, []);

   return loading ? (
      <p>Chargement...</p>
   ) : (
      <>
         <div style={{ display: 'flex' }}>
            <div>
               <p>{data.character.name}</p>
               <img src={data.character.image} alt="" />
            </div>
            <div>
               <p>{data.character.gender}</p>
               <p>{data.character.species}</p>
               <p>{data.character.status}</p>
            </div>
         </div>
         <button onClick={prevCharacter}>PREV CHARACTER</button>
         <button onClick={nextCharacter}>NEXT CHARACTER</button>
      </>
   );
}
