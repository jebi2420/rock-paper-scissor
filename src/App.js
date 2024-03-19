import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다(이김-초록, 지면-빨강, 비김-검정)

const choice = {
  rock: {
     name: "Rock",
     img: "https://variety.com/wp-content/uploads/2024/01/Dwayne-Johnson_credHuyDoan-e1705977711715.jpg?w=1000&h=563&crop=1"
  },
  scissor: {
    name: "Scissor",
    img:"https://rukminim2.flixcart.com/image/850/1000/kltryq80/scissor/e/o/8/high-quality-small-scissor-for-moustache-trimming-for-nose-hair-original-imagyvfxvv6nwhgt.jpeg?q=90&crop=false"
  },
  paper: {
    name: "Paper",
    img:"https://m.media-amazon.com/images/I/61LpGWsUaLL.jpg"
  }
}
function App() {
  return (
    <div>
    <div className="main">
      <Box title="You"/>
      <Box title="Computer"/>
    </div>

    <div className="main">
      <button>가위</button>
      <button>바위</button>
      <button>보</button>
    </div>
    </div>
  );
}

export default App;
