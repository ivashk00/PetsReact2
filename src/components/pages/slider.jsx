import React from "react";
import cat from '../img/кошка.jpg';
import dog from '../img/собака.jpg';
import chikken from '../img/курица1.jpg';

const Slider = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-success m-2">Найденные животные</h2>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={cat} className="rounded mx-auto d-block" style={{'width': '700px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill card text-bg-primary mb-3" style={{'max-width': '18rem'}}>
                                    <div className="card-body">Найдена кошка</div>
                                    <div className="card-body">
                                        <p className="card-text">Звонить на этот номер +7 *** *** ** **</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={dog} className="rounded mx-auto d-block" style={{'width': '700px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill card text-bg-primary mb-3" style={{'max-width': '18rem'}}>
                                <div className="card-body">Найдена собака</div>
                                <div className="card-body">
                                    <p className="card-text">Был найден у забора на Мурино, на шее есть медальен</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={chikken} className="rounded mx-auto d-block" style={{'width': '700px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                        <div className="position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill card text-bg-primary mb-3" style={{'max-width': '18rem'}}>
                                <div className="card-body">Найдена курица</div>
                                <div className="card-body">
                                    <p className="card-text">Коричневая, яйца не несет, забирайте даром</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Предыдущий</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Следующий</span>
  </button>
        </div>
            )
};
            export default Slider;