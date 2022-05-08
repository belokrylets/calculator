// @flow
import React from 'react';

const buttons = [
  { button: '√', id: 2 },
  { button: '%', id: 3 },
  { button: '/', id: 4 },
  { button: '7', id: 5 },
  { button: '8', id: 6 },
  { button: '9', id: 7 },
  { button: '×', id: 8 },
  { button: '4', id: 9 },
  { button: '5', id: 10 },
  { button: '6', id: 11 },
  { button: '-', id: 12 },
  { button: '1', id: 13 },
  { button: '2', id: 14 },
  { button: '3', id: 15 },
  { button: '+', id: 16 },
  { button: '00', id: 17 },
  { button: '0', id: 18 },
  { button: ',', id: 19 },
];
const MyButtons = (props: { setFormula: any; clearFormula: any; displeyResult: any; }) => {
    const { setFormula, clearFormula, displeyResult } = props
    
    return (
           <>
           <div className='buttonSection'>
               <button onClick={clearFormula}>C</button>
           </div>
           {buttons.map((item) => (
           <div key={item.id} className='buttonSection'>
               <button onClick={() => setFormula(item.button)}>{item.button}</button>
               </div>
               ))}
            <div className='buttonSection'>
               <button onClick={displeyResult}>=</button>
           </div>
           </>
    );
};
export default MyButtons;

