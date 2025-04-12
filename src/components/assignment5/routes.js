import React from "react";

function Routes(props){
    const {projection, routes, selectedAirlineID} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (!selectedAirlineID) {
        return <g></g>;
    }

    const selectedRoutes = routes.filter(d => d.AirlineID === selectedAirlineID);

    return (
        <g className="routes">
            {selectedRoutes.map((route, index) => {
                const sourceCoords = projection([route.SourceLongitude, route.SourceLatitude]);
                const destCoords = projection([route.DestLongitude, route.DestLatitude]);

                if (!sourceCoords || !destCoords) return null;

                return (
                    <line
                        key={index}
                        x1={sourceCoords[0]}
                        y1={sourceCoords[1]}
                        x2={destCoords[0]}
                        y2={destCoords[1]}
                        stroke="#992a5b"
                        strokeWidth={.1}
                    />
                );
            })}
        </g>
    );
    
}

export { Routes }