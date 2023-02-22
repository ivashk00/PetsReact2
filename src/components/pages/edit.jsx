import React from "react";
import Footer from "../footer";
import Header from "../header";

import EditIn from "./editInner";

const Edit = (props) => {
    return (
        <div>
            <Header/>
                <EditIn/>
            <Footer/>
        </div>
    );
};

export default Edit;