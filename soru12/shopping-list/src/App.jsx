import { Button, Grid, Input, Checkbox } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.getItem('myData') ? setItems(JSON.parse(localStorage.getItem('myData'))) : setItems([]);
  }, [])

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(items))
  }, [items])

  const [inputValue, setInputValue] = useState("");

  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    }

    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue("");
  }

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  }

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    (newItems[index].quantity > 0) ? newItems[index].quantity-- : newItems[index].quantity = 0;
    //newItems[index].quantity--;
    setItems(newItems);
  }

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  }

  return (
    <div className="App">
      <div className="left">
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Grid padding={"50px"}>
          <Button variant="contained" onClick={() => handleAddButtonClick()}> Add Item</Button>
        </Grid>
      </div>

      <div className="right">
        {items.map((item, i) => (

          <div className='listItem'>
            {item.isSelected ? (<>
              <Checkbox defaultChecked onClick={() => toggleComplete(i)} />
              <s>{item.itemName}</s>
            </>
            ) : (<>
              <Checkbox onClick={() => toggleComplete(i)} />
              <p>{item.itemName}</p></>
            )}
            <ChevronLeft onClick={() => handleQuantityDecrease(i)} />
            <p>{item.quantity}</p>
            <ChevronRight onClick={() => handleQuantityIncrease(i)} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
