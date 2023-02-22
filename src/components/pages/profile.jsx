import React from "react";

import Header from "../header";
import Footer from "../footer";
import Prof from "./prof";




const Profile = (props) => {

    let user1 = {id: '21', phone: '+7-911-456-78-78', email: 'leonid@yandex.ru', firstname: 'Леонид', dateOfRegist: '26-06-2015', countF: '2', countOb: '4'}

    return (
        <div>
            <Header />
                <Prof user = {user1}/>
            <Footer />
        </div>
    );
};

export default Profile