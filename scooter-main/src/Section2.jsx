import React from 'react';
import banner from './1-1.png';
let Section2=()=>{
    return(
    <>
        <div class="container-lg">
            <div class="row">
               <div class="col-md-4">
                
                      <div class="mt-60 text-center">
                   
                     <h3 class=" tracking-widest moto text-red-500 text-3xl mt-10 w-52"  style={{fontSize:"5em"}}>m2go</h3>
                   
                     
                         <br/>
                    <h1 class="mr-10 display-4 moto">civitas</h1><br/>
                    <button class="btn  bg-black text-white text-sm tracking-wide py-2 px-4 hover:bg-red-600 font-mono">view details</button>
                    <br/>
                <br/>
                        <button class="btn bg-yellow-500 text-white animate-bounce p-4 hover:text-white uppercase hover:bg-black tracking-widest moto">book now</button>
               </div>
                </div>
                <div class="col-md-8">
                  
                        <figure>
                      
                        <img src={banner} alt="" class="img-fluid"/>
                      <p class="text-right font-semibold font-mono px-4 ml-auto mb-52 bg-red-500 text-white ml-52 w-96">Get the best dealer here</p>
                   
                   
                    </figure>
                </div>
        </div>
        </div>
        </>
    );
}
export default Section2;