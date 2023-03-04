import React, { useEffect, useState } from "react";

import Header from "../header";
import Footer from "../footer";
import Prof from "./prof";

const Profile = (props) => {

    let [profil, setProfil]=useState({id:'', phone:'', email:'', name:'', registrationDate:'', countPets:'', countOrder:''})
    useEffect(()=>getprof(),[])

    function getprof(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
    fetch("https://pets.сделай.site/api/users", requestOptions)
    .then(response => response.json())
    .then(result => {
        setProfil(result)
        console.log(result)
    })

    .catch(error => console.log('error', error))
    
    }

    return (
        <div>
            <Header />
                <Prof user = {profil}/>
            <Footer />
        </div>
    );
};

export default Profile