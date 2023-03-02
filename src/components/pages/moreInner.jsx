import React from "react";

const More = (props) => {
    let domain = 'https://pets.сделай.site';
    let img = [
        props.animal.photos1 != null ? <img src={domain + props.animal.photos1} className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображение животного"/>:'',
        props.animal.photos2 != null ? <img src={domain + props.animal.photos2} className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображение животного"/>:'',
        props.animal.photos3 != null ? <img src={domain + props.animal.photos3} className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображение животного"/>:'',
    ]

    let animal1 = {
        id: '14', kind: 'Кошка', about: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', 
        mark: 'ca-001-spb', raion: 'Василиостровский', date: '24-03-2020',
        name: 'Маруся', phone: '+799912342345', email: 'meow@meow.com', photos1: cat, photos2: cat, photos3: cat
    } 

    return (
        <div>
            <main style={{'minHeight': '70vh'}}>
                <h2 className="text-center text-white bg-primary m-2" style={{'textTransform': 'uppercase'}}>Карточка животного {props.animal.kind}</h2>
                <div className="d-flex flex-row flex-wrap border  border-primary m-auto  p-3 position-relative w-50" style={{'minWidth': '300px'}}>
                    <div className="d-flex flex-row flex-wrap justify-content-around border border">
                        {img}
                    </div>
                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>id:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.id}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Имя:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.name}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Телефон:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.phone}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>E-mail:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.email}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '250px'}}>Вид животного:</p>
                    <p className="w-50" style={{'minWidth': '250px'}}>{props.animal.kind}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Описание:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.description}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Номер чипа:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.mark}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Район:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.district}</p>

                    <p className="w-50 text-primary" style={{'minWidth': '300px'}}>Дата:</p>
                    <p className="w-50" style={{'minWidth': '300px'}}>{props.animal.date}</p>
                </div>
                <br />
            </main>
        </div>
    );
};

export default More