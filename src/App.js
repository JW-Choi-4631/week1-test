import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState('제목을 입력하세요.(최대 20자)');
  const [card,setCard] = useState([]);

  const inputChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const inputClickHandler = () => {
    setTitle('');
  };

  const saveBtnClickHandler = () => {
    if(title.length === 0){
      alert('제목이 빈칸일 수 없습니다!');
    }
    else{
      const newCard = {
        id : new Date().getTime() + Math.random(),
        title : title,
      }
      setCard([...card, newCard]);
      console.log(card);
      setTitle('');
    }
   
  };

  return (
    <div className='App'>
      <div className = 'Head'>
        <div>
          <input className='titleInput' type="text" maxlength = {20} value={title } onClick={inputClickHandler} onChange={inputChangeHandler} />
          <button onClick={saveBtnClickHandler}>추가하기</button>
        </div>
        <h1>Todo List</h1>
      </div>
      <div className='Card-List'>
        { card.map(list => {
            return <Card list={list} />
          })}
      </div>
    </div>
  );
}

const Card = ({list})=>{
  return (
  <div className= "Card">
    <span>{list.title}</span>
  </div>
  );
}

export default App;
