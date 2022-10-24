import { createContext, useReducer, useState } from 'react'
import Reducer from './Reducer'
import { LatLng } from '../components/Homepage';

export interface Congestion {
  address: string;
  stationKey: number;
  stationName: string;
  latitude: number;
  longitude: number;
  radius: number;
  isSaved: boolean;
  threshold: number;
  population: number;
  time: number;
}

export type CongestionQuery = Pick<Congestion, "latitude" | "longitude" | "radius" | "population" | "time">; 

//global context
export const GlobalContext = createContext({
  showModal: false,
  congestions: [] as Congestion[],
  center: {} as LatLng,
  radius: 1,
  currentCongestion: {} as Congestion | undefined,
  handleSearch: (data: CongestionQuery) => {},
  setShowModal: (status: boolean) => {},
  handleDismiss: (id: number) => {},
  handleView: (conjestion: Congestion) => {},
  handleSaved: (id: number) => {},
  setCenter: (coords: LatLng) => {},
  setRadius: (radius: number) => {},
  setCurrentCongestion: (congestion: Congestion) => {},
})

export interface ProviderProps {
  children: JSX.Element,
};

//global context provider
export function GlobalProvider({ children }: ProviderProps): JSX.Element {
  const [congestions, dispatch] = useReducer(Reducer, [])
  const [showModal, setShowModal] = useState(false)
  const [center, setCenter] = useState<LatLng>({latitude: 33.8568, longitude: 151.2153});
  const [radius, setRadius] = useState<number>(1);
  const [currentCongestion, setCurrentCongestion] = useState<Congestion | undefined>();

  //data from homepage and refine search
  async function handleSearch(data: CongestionQuery) {
    fetch(`/predict?longitude=${data.longitude}&latitude=${data.latitude}&radius=${data.radius}&population=${data.population}&time=${data.time}`)
      .then((response) => response.json())
      .then((data) => {
        const congestionData = data.map((congestion: any) => {
          return {
            stationKey: congestion.station_key,
            address: congestion.full_name,
            latitude: parseFloat(congestion.wgs84_latitude),
            longitude: parseFloat(congestion.wgs84_longitude),
          };
        });
        dispatch({ type: 'ADD_CONGESTION', payload: { data: congestionData } })
      });

  }

  //card dismiss button handler
  function handleDismiss(id: number) {
    dispatch({ type: 'DISMISS', payload: { id: id } })
  }

  //Card view button handler
  function handleView(congestion: Congestion) {
    if (congestion) {
      setShowModal(true);
      setCurrentCongestion(congestion);
    }
  }

  //card save button handler
  function handleSaved(id: number) {
    dispatch({ type: 'SAVED', payload: { id: id } })
  }

  return (
    <GlobalContext.Provider
      value={{
        handleSearch,
        congestions,
        handleDismiss,
        handleView,
        showModal,
        setShowModal,
        handleSaved,
        center,
        setCenter,
        radius,
        setRadius,
        currentCongestion,
        setCurrentCongestion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
