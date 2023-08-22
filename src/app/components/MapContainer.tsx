'use client'

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useEffect, useState } from "react";
const containerStyle = {
    width: '100%',
    height: '100vh',
    maxHeight: '100vh'
  };
  
 

export const MapContainer = () => {
    const [center, setCenter] = useState({ lat: -22.9068,
        lng: -43.1729})
    const markers = [
        { lat: -22.9519, lng: -43.2105 }, // Christ the Redeemer
        { lat: -22.9485, lng: -43.1579 }, // Sugarloaf Mountain
        { lat: -22.9711, lng: -43.1823 }, // Copacabana Beach
        { lat: -22.9121, lng: -43.2302 }  // Maracanã Stadium
    ];
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if(!apiKey) throw new Error('API KEY NOT FOUND')
    const { isLoaded } = useJsApiLoader({
        
        googleMapsApiKey: apiKey
      })



      useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                
                const {latitude, longitude} = position.coords
                setCenter({lat:latitude, lng:longitude})
            }, (error)=>{
                console.log('Erro ao buscar localização')
            })
        }
      },[])
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {markers.map((marker, index) => (
             <Marker key={index} position={{lat:marker.lat, lng:marker.lng}}/>
          ) )}
         
        </GoogleMap>
    ) : <> <p>carregando...</p></>
}