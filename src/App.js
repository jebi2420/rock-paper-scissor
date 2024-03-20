import {useState} from 'react';
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
     img: "https://i.ebayimg.com/images/g/5hgAAOSwtfljWQIq/s-l1200.webp"
  },
  scissor: {
    name: "Scissor",
    img:"https://rukminim2.flixcart.com/image/850/1000/kltryq80/scissor/e/o/8/high-quality-small-scissor-for-moustache-trimming-for-nose-hair-original-imagyvfxvv6nwhgt.jpeg?q=90&crop=false"
  },
  paper: {
    name: "Paper",
    img:"https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  },
  default: {
    name: "안내면 진거..",
    img:"https://img.monstock.app/public/web/content/20220507/ba26c48c-7911-47e0-b8cb-a8019575c604.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(choice.default);
  const [computerSelect, setComputerSelect]= useState(choice.default);
  const [result, setResult] = useState("");


  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice || choice.default)
    setResult(judgement(choice[userChoice], computerChoice))
  }

  const judgement = (user, computer) => {
    console.log("user : " + user, "computer : " + computer)

    // user == computer tie
    // user == "rock", computer == scissor [user win]
    // user == rock , computer == "paper" [user lose]
    // user == "scissor", computer paper [user win]
    // user == scissor, computer == "rock" [user lose]
    // user == "paper", computer == rock [user win]
    // user == paper, computer == "scissor" [user lose]

    if(user.name == computer.name){
      return "tie";
    }else if(user.name == "Rock")
      return computer.name == "Scissor"?"win":"lose";
    else if(user.name == "Scissor")
      return computer.name == "Paper"?"win":"lose";
    else if(user.name == "Paper")
      return computer.name == "Rock"?"win":"lose";
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }

  return (
    <div className="body">
    <div className="main">
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={result}/>
    </div>

    <div className="main">
      <button onClick={() => play("scissor")}><img alt="" src='https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_scissors_icon_194407.png' /></button>
      <button onClick={() => play("rock")}><img alt="" src='https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_rock_icon_194408.png'/></button>
      <button onClick={() => play("paper")}><img alt="" src='https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_paper_icon_194460.png'/></button>
    </div>
    </div>
  );
}

export default App;
