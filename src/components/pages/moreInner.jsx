import React from "react";



const MoreIn = (props) => {

    return (
        <div>
            <main style={{'minHeight': '70vh'}}>
                <h2 className="text-center text-white bg-primary m-2" style={{'textTransform': 'uppercase'}}>Карточка животного {props.animal.type}</h2>
                <div className="d-flex flex-row flex-wrap border  border-primary m-auto  p-3 position-relative w-50" style={{'minWidth': '300px'}}>
                    <div className="d-flex flex-row flex-wrap justify-content-around border border">
                        <img src={props.animal.photos1} className="w-25 p-3" style={{'minWidth': '250px'}} alt="Изображения животного" />
                        <img src={props.animal.photos2} className="w-25 p-3" style={{'minWidth': '250px'}} alt="Изображения животного" />
                        <img src={props.animal.photos3} className="w-25 p-3" style={{'minWidth': '250px'}} alt="Изображения животного" />
                    </div>
                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>id:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.id}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Имя:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.nameAnimal}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Телефон:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.tel}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>E-mail:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.email}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Вид животного:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.type}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Описание:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.about}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Номер чипа:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.numChip}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Район:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.raion}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Дата:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.date}</p>
                </div>
                <br />
            </main>
        </div>
    );
};

export default MoreIn