import React from "react";

import Header from "../header";
import Footer from "../footer";
import MoreIn from "./moreInner";

import cat1 from '../img/cat1.jpeg';
import cat2 from '../img/cat2.jpg';
import cat3 from '../img/cat3.jpeg';

import goat1 from '../img/коза.jpeg';
import goat2 from '../img/goat2.jpg';
import goat3 from '../img/goat3.jpg';

import chick1 from '../img/курица1.jpg';
import chick2 from '../img/курица2.jpg';
import chick3 from '../img/курица3.jpg';

const More = (props) => {

    let animal1 = {
        id: '14', type: 'Кошка', about: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', 
        numChip: 'ca-001-spb', raion: 'Василиостровский', date: '24-03-2020',
        nameAnimal: 'Маруся', tel: '+799912342345', email: 'meow@meow.com', photos1: cat1, photos2: cat2, photos3: cat3
    } 

    let animal2 = {
        id: '18', type: 'Коза', about: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.', 
        numChip: 'go-011-spb', raion: 'Центральный', date: '14-03-2022',
        nameAnimal: 'Бебе', tel: '+74353565434', email: 'goat@goat.com', photos1: goat1, photos2: goat2, photos3: goat3
    } 
    let animal3 = {
        id: '22', type: 'Курица', about: 'Потерялась курица, пятнистая, рыжая. Любит играть, ласковая.', 
        numChip: 'ch-001-spb', raion: 'Невский', date: '29-03-2020',
        nameAnimal: 'Ева', tel: '+7-921-485-65-44', email: 'my_chiken@mail.ru', photos1: chick1, photos2: chick2, photos3: chick3
    } 

    return (
        <div>
            <Header />
                <MoreIn animal = {animal1}/>
                <MoreIn animal = {animal2}/>
                <MoreIn animal = {animal3}/>
            <Footer />
        </div>
    );
};

export default More