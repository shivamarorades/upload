import React from 'react';
import {MyData} from './Array';
import image from './about_image.webp';
console.log(image);
let About=()=>{
    
    let About_props=(props)=>{
        return(
        <>
            <div class="col-md-12 col-sm-12">
            <div class="flex items-center">
            <h1 class="text-4xl text-black font-semibold tracking-wide ">{props.heading}</h1>
            </div>    
            </div>
            </>
        );
    };
    let About_val=(val)=>{
        return(
        <>
            <About_props heading={val.heading} />
        </>
        );
    }
    return(
    <>
        <div class="container-xl container-sm container-md fonts">
        <div class="row">
            {MyData.map(About_val)}
            <div class="col-md-12 col-lg-6 col-sm-12">
            <br/>
            <p class="text-sm fonts">
Founded in 2019 with the aim to create scooters that not only enhances mobility but at the same time does not leave much carbon footprint, we at M2GO have successfully produced world-class electric scooters. We firmly believe that the direction of the future is gearing towards seamless mobility without compromising environmental impact. Therefore, four world-class electric scooters using the latest technology and best design have been brought in the market.
            </p>
            <br/>
            <p class="text-sm fonts">
            Through these first fleet of models on-hand, we are aiming to reduce up to 90% of the cost of mobility mainly due to the fact that they are powered lithium-ion batteries, which are rechargeable electrically thus saving a considerable amount of money in paying for fuel by just plugging their electric scooters on a power outlet. We are also aiming to create nationwide visibility and availability. This is our way of spreading cost-effective mobility without actually compromising on quality and efficiency.
            </p>
            <br/>
            <p c;ass="text-sm fonts">
            Initial fleet of models caters to a broad range of market which includes scooter enthusiasts as well. Whatever the choice will be, each model on our fleet will definitely bring a common functionality and satisfaction – a world-class quality of mobility and capability thus bringing in a lot of savings accordingly.
            </p>
                <br/>
            <p class="text-xl font-semibold fonts">
                For more information about our products and the characteristics of each model on our scooter line, please feel free to contact us anytime and we will gladly accommodate you.
                </p>
                </div>
            <div class="col-md-12 col-sm-12 col-lg-6">
            <figure>
                <img src={image} class="img-fluid" alt="images" />
                </figure>
            </div>
            </div>
        </div>
        </>
    );
}