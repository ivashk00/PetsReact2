import React from "react";

import cat from '../img/cat1.jpeg';
import goat from '../img/коза.jpeg';
import chiken from '../img/курица1.jpg'

import Header from "../header";
import Footer from "../footer";
import Slider from "./slider";
import Cards from "./cards";

const Main = () => {
    
    let animal1 = {
        id: '14', type: 'Кошка', about: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', 
        numChip: 'ca-001-spb', raion: 'Василиостровский', date: '24-03-2020',
        nameAnimal: 'Маруся', tel: '+799912342345', email: 'meow@meow.com', photos: cat
    } 

    let animal2 = {
        id: '18', type: 'Коза', about: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.', 
        numChip: 'go-011-spb', raion: 'Центральный', date: '14-03-2022',
        nameAnimal: 'Бебе', tel: '+74353565434', email: 'goat@goat.com', photos: goat
    } 
    let animal3 = {
        id: '22', type: 'Курица', about: 'Потерялась курица, пятнистая, рыжая. Любит играть, ласковая.', 
        numChip: 'ch-001-spb', raion: 'Невский', date: '29-03-2020',
        nameAnimal: 'Ева', tel: '+7-921-485-65-44', email: 'my_chiken@mail.ru', photos: chiken
    } 

    return (
        <div>
            <Header/>
                <main style={{'minHeight':'70vh'}}>
                    <Slider/>
                    <h2 className="text-center text-white bg-success m-2">Карточки найденных животных</h2>
                    <Cards animal = {animal1}/>
                    <Cards animal = {animal2}/>
                    <Cards animal = {animal3}/>
                </main>
            <Footer/>
        </div>
    );
};

export default Main;