import { Link } from 'react-router-dom';

import getLocations from '../../graphql/schemas/getLocations';
import { LocationsType } from '../../types/LocationsType';

export default function Locations() {
   const { page, prevPage, nextPage, loading, error, data } = getLocations();

   error && console.log(error);

   return loading ? (
      <p>Chargement</p>
   ) : (
      <div>
         {data.locations.results.map((location: LocationsType) => (
            <Link to="/location/:id" state={{ id: location.id }} key={location.id}>
               <p>{location.name}</p>
            </Link>
         ))}
         <button type="button" onClick={prevPage}>
            PREV PAGE
         </button>
         <button type="button" onClick={nextPage}>
            NEXT PAGE
         </button>
      </div>
   );
}
