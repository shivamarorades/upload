import React from 'react';
import banner from './m2go-civitas.jpg';
import {listing} from './Array';
let Model1=()=>{
    let Model_props=(props)=>{
        return(
        <>
            <li type="disc">{props.listing}</li>
            </>
        );
    };
    let Model_val=(val)=>{
        return(
        <>
            <Model_val listing={val.list} />
            </>
        );
    };
    let Model_props2=(props)=>{
        return(
        <>
            <div class="container-xl">
            <div class="row">
        <div class="col-md-6">
            <h1 class="text-5xl tracking-normal">{props.heading}</h1>
            <h1 class="text-muted text-2xl">
            {props.caption}
            </h1>
            <br/>
            <p>
            {props.para}
            </p>
            <br/>
            <button><a href="#">
            {props.Buton}
                </a>
            </button>
            </div>
                <div class="col-md-6">
                <figure>
                    <img src={props.banner} class="img-fluid" />
                    </figure>
                </div>
                </div>
        </div>
        
            </>
        );
    };
    
    let Model_val2=(val)=>{
        return(
        <>
            <Model_props2 heading={val.heading} caption={val.caption} Buton={val.Buton} banner={val.banner} />
            </>
        );
    };
    
    let Model_props3=(props)=>{
        return(
        <>
               
        <div class="row">
        <div class="col-md-12">
            <img src={props.banner2} class="img-fluid" />
            </div>
        </div>
        
     
            </>
        );
    };
    
    let Model_val3=(val)=>{
        return(
        <>
            <Model_val banner2={val.banner2} />
            </>
        );
    };
    
    let Model_carousel=(props)=>{
        return(
        <>
            <div class="container">
        <div class="row">
        <div class="col-md-12 text-center">
        <h1 class="text-4xl tracking-wider text-black font-bold text-center capitalize ">{props.headers}</h1> 
            <br/>
            <p class="text-muted">
            Ride safe with unbelievable features 
            </p>
            <br/>
            
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={props.image1} class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h1 class="text-black text-4xl tracking-normal font-medium uppercase">brown</h1>
        </div>
    </div>
    <div class="carousel-item">
      <img src={props.image2} class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h1 class="text-black text-4xl tracking-normal font-medium uppercase">black</h1>
        </div>
    </div>
    <div class="carousel-item">
      <img src={props.image3} class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h1 class="text-black text-4xl tracking-normal font-medium uppercase">white</h1>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>    
            
            <div class="col-md-12 thebanner">
                <div class="myflex">
                <button class="btn btn-light text-black rounded-pill animate-bounce">
                    Book Now
                </button>
                    </div>
            </div>
        </div>
        </div>
            </>
        );
    };
    
    let Carousel_val=(val)=>{
        return(
        <>
            <Carousel_val  headers={val.headers} image1={val.image1} image2={val.image2} image3={val.image3} />
            </>
        );
    }
    
    let Model_Specifications=(props)=>{
        return(
        <>
            <div class="col-lg-2 col-sm-12 col-md-12 text-center">       
            <img src={props.image} class="flex justify-center img-fluid" />
            <h1>{props.heading}</h1>
            <p>{props.caption}</p>
            </div>
            </>
        );
    };
    
    let Model_Specification_val=(val)=>{
        return(
        <>
            <Model_Specifications image={val.icon} heading={val.heading} caption={val.caption} />
            </>
        );
    };
    return(
    <>
        
        // Second Section
        
        <div class="container">
            <div class="row">
            <div class="col-md-3">
                <h1 class="text-2xl font-bold text-black capitalize">
                    features
                </h1>
                <br/>
                <br/>
                <ul>
                {listing.map(Model_val)}
                </ul>
            </div>
                <div class="col-md-9">
                <h1 class="text-2xl font-bold text-black capitalize">
                    specification
                </h1>
                    <br/>
                    {Imag.map(Model_Specification_val)}
                </div>
                <br/>
                </div>
        </div>
        
        
        //image section
        
        
        //Carousel
        
        
        </>
    );
}