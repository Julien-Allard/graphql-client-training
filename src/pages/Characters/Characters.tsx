import { Link } from 'react-router-dom';

import useCharacters from '../../graphql/schemas/getCharacters';
import { CharactersType } from '../../types/CharactersType';

import './Characters.scss';

export default function Characters() {
   const { page, prevPage, nextPage, loading, error, data } = useCharacters();

   error && console.log(error);

   return loading ? (
      <p>Chargement...</p>
   ) : (
      <div className="characters-page-container">
         <div className="character-cards-container">
            {data.characters.results.map((character: CharactersType) => (
               <Link to="/character/:id" state={{ id: character.id }} key={character.id}>
                  <div className="character-card">
                     <p>{character.name}</p>
                     {/* <img src={character.image} alt="Character portrait" /> */}
                  </div>
               </Link>
            ))}
         </div>
         <button type="button" onClick={prevPage}>
            PREV PAGE
         </button>
         <button type="button" onClick={nextPage}>
            NEXT PAGE
         </button>
      </div>
   );
}
