import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import getLocationById from '../../graphql/schemas/getLocationById';

export default function LocationById() {
   const { state } = useLocation();
   const { locationId, setLocationId, prevLocation, nextLocation, loading, error, data } =
      getLocationById();

   error && console.log(error);

   useEffect(() => {
      setLocationId(Number(state.id));
   }, []);

   return loading ? (
      <p>Chargement...</p>
   ) : (
      <>
         <p>{data?.location?.name}</p>
         <button onClick={prevLocation}>PREV LOCATION</button>
         <button onClick={nextLocation}>NEXT LOCATION</button>
      </>
   );
}
