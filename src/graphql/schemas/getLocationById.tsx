import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

export default function getLocationById() {
   const [locationId, setLocationId] = useState<number>(1);

   const GET_LOCATION_BY_ID = gql`
      query {
         locations(page: 1) {
            info {
               count
               next
            }
         }
         location(id: ${locationId}) {
            id
            name
            type
            dimension
            residents
         }
      }
   `;

   const { loading, error, data } = useQuery(GET_LOCATION_BY_ID);

   const lastLocation: number = Number(data?.locations?.info?.count);

   const prevLocation = () => {
      if (locationId > 1) {
         setLocationId(locationId - 1);
      }
   };

   const nextLocation = () => {
      if (locationId < lastLocation) {
         setLocationId(locationId + 1);
      }
   };

   return { locationId, setLocationId, prevLocation, nextLocation, loading, error, data };
}
