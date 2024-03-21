import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';

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

export default class AppClass extends Component {
    constructor(props){
        super(props);
        this.choice = choice;
        this.state ={
            userSelect: this.choice.default,
            computerSelect: this.choice.default,
            result: "",
        }
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
        })
    }

    randomChoice = () =>{
        let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 함수
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem]
        return choice[final];
    }

    judgement = (user, computer) => {
        console.log("user : " + user, "computer : " + computer)
    
        // user == computer tie
        // user == "rock", computer == scissor [user win]
        // user == rock , computer == "paper" [user lose]
        // user == "scissor", computer paper [user win]
        // user == scissor, computer == "rock" [user lose]
        // user == "paper", computer == rock [user win]
        // user == paper, computer == "scissor" [user lose]
    
        if(user.name === computer.name){
          return "tie";
        }else if(user.name === "Rock")
          return computer.name === "Scissor"?"win":"lose";
        else if(user.name === "Scissor")
          return computer.name === "Paper"?"win":"lose";
        else if(user.name === "Paper")
          return computer.name === "Rock"?"win":"lose";
      }

  render() {
    return (
        <div className="body">
            <div className="main">
            <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
            <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
            </div>
        
            <div className="main">
            <button onClick={() => this.play("scissor")}><img alt="" src='https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_scissors_icon_194407.png' /></button>
            <button onClick={() => this.play("rock")}><img alt="" src='https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_rock_icon_194408.png'/></button>
            <button onClick={() => this.play("paper")}><img alt="" src='https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_paper_icon_194460.png'/></button>
            </div>
        </div>
    )
  }
}
