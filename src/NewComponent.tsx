import React from 'react';

type FilterType = 'all' | 'RUBLES' | 'Dollars'

type NewComponentPropsType = {
    currentMoney: Array<InArrayCurrentMoney>
    onclickFilterHandler: (nameButton: FilterType) => void
}
type InArrayCurrentMoney = {
    banknotes: string,
    value: number,
    number: string
}


export const NewComponent = ({currentMoney, onclickFilterHandler}: NewComponentPropsType) => {

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknotes}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>)
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => onclickFilterHandler('all')}>all</button>
                <button onClick={() => onclickFilterHandler('RUBLES')}>RUBLES</button>
                <button onClick={() => onclickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    )
}
