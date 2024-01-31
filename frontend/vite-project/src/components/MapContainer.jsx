import { GoogleMap, Marker, useLoadScript ,InfoWindow} from "@react-google-maps/api";
import { useMemo,useState } from "react";
import '../css/map.css'
import { Button } from "@mui/material";
import axios from 'axios';
import ForecastDetails from "./forecastdetails";
const MapContainer = () => {
  const [selectedMountain, setSelectedMountain] = useState(null);
  const [forecastdata,setforecastdata]=useState({});
  const [openforecast,setopenforecast]=useState(false);
  const [isloading,setisloading]=useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:'AIzaSyD2JFS0acRfjxcRskGNBEG_gQS--6XBtLs',
  });
  const center = useMemo(() => ({ lat: 30.7352, lng: 79.0669  }), []);
  const uttarakhandMountains = [
    {
      name: 'Nanda Devi',
      coordinates: { lat: 30.3747, lng: 79.7722 },
      description: 'Nanda Devi is the second highest mountain in India.'
    },
    {
      name: 'Trishul',
      coordinates: { lat: 30.4431, lng: 79.7833 }
    },
    {
      name: 'Chaukhamba',
      coordinates: { lat: 30.7450, lng: 79.3425 }
    },
    {
      name: 'Kamet',
      coordinates: { lat: 30.9200, lng: 79.6000 }
    },
    {
      name: 'Shivling',
      coordinates: { lat: 30.8767, lng: 79.0612 }
    }
  ];
  
  async function showforecast(name,coordinates){
  setopenforecast(true);
  setforecastdata({'name':name});
  setisloading(true);
  const data=await axios.post('http://127.0.0.1:5000/getforecast',{
    coordinates
  });
  setforecastdata({'name':name,...data.data});
 setisloading(false);
 
  }
  
  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}

        >{
          uttarakhandMountains.map((e)=>{
            return (
            <Marker
            key={e.name}
            position={e.coordinates}
            title={e.name}
            onClick={() => setSelectedMountain(e)}
          ></Marker>);
          })
        }
         {selectedMountain && (
          <InfoWindow
            position={selectedMountain.coordinates}
            onCloseClick={() => setSelectedMountain(null)}
          >
            <div style={{color:'black'}}>
              <h2>{selectedMountain.name}</h2>
              <p>{selectedMountain.description}</p>
              <span style={{fontWeight:'400',fontSize:'1rem'}}>Danger: </span>
              {/* <span className="danger-moderate">Moderate</span> */}
              <br></br>
              <Button variant="contained" sx={{marginTop:'10px'}} onClick={()=>{showforecast(selectedMountain.name,selectedMountain.coordinates);}}>Show Forecast</Button>
            </div>
          </InfoWindow>
        )}
          { openforecast &&
            <ForecastDetails isloading={isloading} open={openforecast} setopen={setopenforecast} forecastdata={forecastdata}></ForecastDetails>
          }
        </GoogleMap>
      )}
    </div>
  );
};

export default MapContainer;