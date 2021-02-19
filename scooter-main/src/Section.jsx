import React from 'react';
import first_scooter from './X1-Tp3.png';
console.log(first_scooter);
let Section=()=>{
    return(
    <>
        <div class="container bg-gray-100">
            <div class="row">
                <div class="col-lg-6">
                    <figure>
                        <img src={first_scooter} alt="scooter"  class="img-fluid" />
                    </figure>
                </div>
                <div class="col-lg-6">
                   <div class="mt-60 text-center">
                    <h3 class=" tracking-widest  text-red-500 text-3xl mr-20 w-52 moto"  style={{fontSize:"5em"}}>m2go</h3>
                    <h1 class=" display-4 moto">x-1</h1><br/>
                    <button class="btn font-semibold bg-black text-sm  text-gray-200 tracking-wide py-2 px-4 hover:bg-red-600 ">view details</button>
                    <br/>
                   <p class="text-right  px-4 font-semibold font-mono bg-red-500 text-white  ml-52"style={{transform:"rotate(90deg)"}}>Get the best dealer here</p>
                    <button class="btn moto bg-yellow-500 text-white animate-bounce p-4 hover:text-white uppercase hover:bg-black tracking-widest">book now</button>
                </div>
                </div>    
            </div>
        </div>
        </>
    );
}
export default Section;