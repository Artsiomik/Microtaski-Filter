import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './NewComponent';

type FilterType = 'all' | 'RUBLES' | 'Dollars'

function App() {

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLES', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('all')
    let currentMoney = money;
    if (filter === 'RUBLES') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'RUBLES')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars')
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <NewComponent currentMoney={currentMoney} onclickFilterHandler={onclickFilterHandler}/>
    );
}

export default App;
