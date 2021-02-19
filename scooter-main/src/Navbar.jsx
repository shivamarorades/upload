import React from 'react';
import Sdata from './Array';
let Navbar=()=>{
    let Navbar_props=(props)=>{
        return(
        <>
        <li class="nav-item text-sm" type="none">
          <a class="nav-link moto hoverable text-black" href="#">{props.list}</a>
        </li>    
            </>
        );
    };
    let Navbar_val=(val)=>{
        return(
        <>
            <Navbar_props list={val.list} />
            </>
        );
    };
    return(
    <>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img class="" src="https://secureservercdn.net/198.71.233.138/wpi.a5a.myftpupload.com/wp-content/uploads/2019/07/Asset-1png1111.png" width="10%" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav moto uppercase ml-auto mb-2 mb-lg-0">
        <li class="nav-item  font-bold text-sm">
          <a class="nav-link hoverable active" aria-current="page" href="#">Home</a>
        </li>
        {Sdata.map(Navbar_val)}
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar;