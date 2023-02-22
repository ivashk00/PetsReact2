import React from "react";

//пикчи
import dog from '../img/собака.jpg';
import mouse from '../img/мышь.jpg';
import monkey from '../img/горилла.jpg';

const Slider = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <div id="carouselExampleIndicators" className="carousel p-3 mb-2 bg-transparent" text-bodydata-bs-ride="carousel" 
            style={{ 'minHeight': '400px'}}>
                <div className="carousel-indicators p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2" style={{'color': 'black'}}/>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={dog} className="rounded mx-auto d-block" alt="Собака" style={{'width': '300px'}} />
                        <h2 className="text-center">Найдена собака</h2>
                        <p className="text-center">Собака рыжая, была утеряна в красногвардейском районе</p>
                    </div>
                    <div className="carousel-item">
                        <img src={mouse} className="rounded mx-auto d-block" alt="Мышь" style={{'width':'300px'}}/>
                        <h2 className="text-center">Найдена мышь</h2>
                        <p className="text-center">Мышь серая, была утеряна в центральном районе</p>
                    </div>
                    <div className="carousel-item">
                        <img src={monkey} className="rounded mx-auto d-block" alt="Горилла" style={{'width':'300px'}}/>
                        <h2 className="text-center" style={{'margin-top': '10px'}}>Найдена горила</h2>
                        <p className="text-center">Горилла, была утеряна в красногвардейском районе</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;

