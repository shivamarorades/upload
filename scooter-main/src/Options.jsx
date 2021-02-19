import React from 'react';

let Options=()=>{
    return(
    <>
    <div class="container bg-red-500 text-white">
        <div class="row container">
            <div class="col-md-4 mt-6 text-center font-mono">
                
                <i class="fa text-6xl  fa-mobile"/>
                <br/>
                <p class="tracking-wide ">011 4072 2600</p>
            </div>  
            <div class="col-md-4  text-center font-mono">
                <br/>
                <i class="fa text-6xl fa-map-marker"/>
                <address class="tracking-wide">
                    13, ARIHANT NAGAR, WEST PUNJABI BAGH,
NEW ROHTAK ROAD, NEW DELHI 110026
                </address>
            </div>
            <div class="col-md-4  text-center font-mono">
            <br/>
                    <i class="fa fa-envelope text-6xl"/>
                <p class="tracking-wide">
                    BDM@M2GO.IN
                </p>
            </div>
        </div>
    </div>
        </>
    );
}
export default Options;