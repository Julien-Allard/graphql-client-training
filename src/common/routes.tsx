import { RouteType } from '../types/RouteType';
import Landing from '../pages/Landing/Landing';
import Characters from '../pages/Characters/Characters';
import CharacterById from '../pages/CharacterById/CharacterById';
import Episodes from '../pages/Episodes/Episodes';
import EpisodeById from '../pages/EpisodeById/EpisodeById';
import Locations from '../pages/Locations/Locations';
import LocationById from '../pages/LocationById/LocationById';

const allRoutes: RouteType[] = [
   { path: '/', element: <Landing /> },
   { path: '/characters', element: <Characters /> },
   { path: '/character/:id', element: <CharacterById /> },
   { path: '/episodes', element: <Episodes /> },
   { path: '/episode/:id', element: <EpisodeById /> },
   { path: '/locations', element: <Locations /> },
   { path: '/location/:id', element: <LocationById /> },
];

export default allRoutes;
