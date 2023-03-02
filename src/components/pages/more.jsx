import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../header";
import More from "./more";
import Footer from "../footer";

function Pet() {
    let [pet1, setPet1] = useState({ id: '', kind: '', photos1: '', photos2: '', photos3: '', description:'', mark:'', district:'', name:'', phone:'', email:'', date:'' })
    let id = useParams()
    useEffect(() => getpet())

    function getpet() {
        var requestOptions = {
            method: 'GET',
        };
        let url = "https://pets.сделай.site/api/pets" + id.id;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPet1(result.data.pet)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div>
            <Header />
            <main style={{ 'minHeight': '85vh' }}>
                <More animal={pet1} />
            </main>
            <Footer />
        </div>
    );
};

export default Pet