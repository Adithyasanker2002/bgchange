import React, { useState, useEffect } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('#eedd82');
  const [textColor, setTextColor] = useState('#000000'); 

  const changeColors = (bg, text) => {
    setBgColor(bg);
    setTextColor(text);
  };

  useEffect(() => {
    
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 >Background  <span style={{ color: textColor }} > Color Changer</span></h1>
      <h4>Click the buttons to change the background and text color!</h4>

      
      <button 
        onClick={() => changeColors('red', 'white')} 
        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', backgroundColor:'red', color:'black', borderRadius:'10px' }}
      >
       Red
      </button>
      <button 
        onClick={() => changeColors('lightblue', 'green')}  
        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' ,backgroundColor:'lightblue', color:'black', borderRadius:'10px' }}
      >
       Light Blue
      </button>
      <button 
        onClick={() => changeColors('lightgreen', 'brown')}  
        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' ,backgroundColor:'lightgreen', color:'black', borderRadius:'10px' }}
      >
        Light Green
      </button>
      <button 
        onClick={() => changeColors('#ffeb3b', 'orangered')}  
        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' ,backgroundColor:'Yellow', color:'black', borderRadius:'10px' }}
      >
        Yellow
      </button>
    </div>
  );
};

export default App;

