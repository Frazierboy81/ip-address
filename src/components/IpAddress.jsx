import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import { assets } from "../assets/pattern-bg-desktop.png";




function IpAddress() {
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const API_KEY = "at_AJgfYLIJ5XYPH6f7SJPgtA1qq6u0p";

    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setLocation({
                lat: data.location.lat,
                lng: data.location.lng,
                city: data.location.city,
                region: data.location.region,
                country: data.location.country,
            });
            setIsLoading(fasle);
        })
        .catch(error => {
            console.error('Error fetching location: ', error);
            setIsLoading(false);
        });
    }, []);
        if (isLoading) {
            return <div>Loading map...</div>
        }


    
    return (
        <div>
            <div className="bg-linear-to-t from-sky-500 to-indigo-500 h-56 p-2 -z-10...">
            <div className="flex justify-center">
            <h2 className="p-2 text-white">IP Address Tracker</h2></div>

                <form className="flex justify-center" action="submit">
                    <input className="bg-white w-96 rounded-l-md" type="text" />
                    <button className="bg-black text-white p-3 rounded-r-md" onSubmit={{}}>+</button>
                </form>
            </div>
            

            <div className="flex flex row justify-around p-4 h-32 shadow-xl w-5/6 ml-32 rounded-xl relative top-[-50px] position absolute z-8">
                <div className=""><h3 className="ml-1">IP Address</h3></div>
                <div className="border-l-1 border-gray-300"><h3 className="ml-1">Location</h3></div>
                <div className="border-l-1 border-gray-300"><h3 className="ml-1">Timezone</h3></div>
                <div className="border-l-1 border-gray-300"><h3 className="ml-1">ISP</h3></div>
            </div>
            

        </div>
    )
}

export default IpAddress;

