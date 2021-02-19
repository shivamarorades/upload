import React from 'react';
import {MyData2,City1} from './Array';
let Contact=()=>{
    
    let Contact_props=(props)=>{
        return(
        <>
            <a href="#">{props.city}</a>
            </>
        );
    };
    
    let Contact_val=(val)=>{
        return(
        <>
            <Contact_props city={val.city} />
            </>
        );
    }
    return(
    <>
        <div class="container-xl container-md container-sm">
         <div class="row">
            <div claas="col-md-12 col-lg-12 col-sm-12">
        {MyData2.map(About_val)}
        <br/>
                <p class="text-capitalize text-center tracking-widest text-3xl ">contact us now</p>
                  <hr/>
            </div>
             <div class="col-md-12">
                <form class="row">
                    <div class="col-md-6">
                 
                 <input type="text" class="form-control" />
                        </div>
                    <div class="col-md-6">
                 
                 <input type="text" class="form-control" />
                        </div>
                    <div class="col-md-12">
                        
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col-md-6">
                    <options>select state
                        {City1.map(Contact_val)}
                        </options>
                    </div>
                    <div class="col-md-6">
                    <options>select city
                        {City1.map(Contact_val)}
                        </options>
                    </div>
                    <div class="col-md-12">
                    <options class="form-control">
                        <a href="#">civitas</a>
                        <a href="#">dealership</a>
                        <a href="#">x1</a>
                        </options>
                    </div>
                    <br/>
                    <button class="btn tracking-wodest uppercase btn-danger rounded-pill text-center ">
                    send enquiry
                    </button>
                 </form>
             </div>
            </div>
        </div>
        </>
    );
}
export default Contact;