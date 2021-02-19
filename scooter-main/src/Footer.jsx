import React from 'react';
import {Sdata2,Sdata3} from './Array';
import $ from 'jquery';
let Footer =()=>{
    let Footer_props=(props)=>{
        return(
        <>
            
                    <h1 class="text-xl text-white capitalize tracking-wide font-semibold">
                        {props.menu}
                    </h1>
                    <li type="none" class="text-xs tracking-wide  uppercase text-gray-200" style={{fontFamily:"inherit"}}>
                    <a href="#">
                        {props.list}
                    </a>
                    </li>
            <br/>
            </>
        );
    };
    let Footer_val=(val)=>{
        return(
        <>
            <Footer_props list={val.list} />
            </>
        );
    };
    return(
    <>
        <br/>
        <div class="container  "style={{backgroundColor:"var(--black)"}} >
            <div class="row pt-10">
                <div class="col-md-3 text-white">
                    <img src="" class="img-fluid" />
                    <i class="fa text-2xl fa-facebook-official text-lg"/>
                    <br/>
                    <i class="fa text-2xl fa-twitter text-lg"/>
                    <br/>
                    <i class="fa text-2xl fa-instagram text-lg"/>
                </div>
                <div class="col-md-2">
                   <Footer_props menu="menu" />
                    {Sdata2.map(Footer_val)}
                </div>
                <div class="col-md-2">
                   {Sdata3.map(Footer_val)}
                </div>       
                <div class="col-md-4">  
                <h1 class="text-gray-200 capitalize font-semibold text-xl tracking-wider">subscribe for latest updates</h1>              <br/>  
                    <form>
                    <input type="email" placeholder="Enter Email Address" class="form-control rounded-pill"  />
                    <br/>
                    <button class="rounded-pill  subscribe btn   text-lg py-1 px-5 capitalize">subscribe</button>
                </form>
                </div>
                </div>
            </div>
        
        </>
    );
}
export default Footer;