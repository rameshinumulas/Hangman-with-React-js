import React, { Component } from 'react'
import {RandomWord} from './words';


import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";
import step7 from "./images/7.jpg";
import step8 from "./images/8.jpg";


export default class Hangman extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            mistakes:0,
            maxWrong:8,
            guessed:new Set([]),
            Answer:RandomWord(),
            images:[step0,step1,step2,step3,step4,step5,step6,step7,step8],
            disabled:true,
            levelMassege:"",





        }
    }
    
    CheckingLetter=(e)=>{
        let ClickingLetter = e.target.value
        console.log(ClickingLetter,"dfghjk",e.target)
        this.setState(st=>({
            guessed:st.guessed.add(ClickingLetter),
            mistakes:st.mistakes + (st.Answer.includes(ClickingLetter) ? 0 : 1),
            disabled:false
        }))
        // return ClickingLetter
    }

    Generaatebuttons(){
        const alphates="abcdefghijklmnopqrstuvwxyz"
        const Singlebutton=alphates.split('').map(letter=>(
        <button
        className='btn btn-lg btn-primary m-2'
            name={letter}
            key = {letter}
            value={letter}
            onClick={this.CheckingLetter}
            >
        {letter}
        </button>
        ))
        return Singlebutton
    }
    guessedWord(){
        const checkingWord=this.state.Answer.split('').map(
            letter =>(
            this.state.guessed.has(letter) ? 
            letter:
             <button
            className='btn btn-lg bg-secondary m-2 border border-secondary'
            >

            </button>))
        return checkingWord
    }
    HintOFtheWord = () =>{
        const Hint =this.state.Answer.split('')
        console.log(Hint,"tttttttttt")
        const RandomHint=Hint[Math.floor(Math.random() * Hint.length)]
        console.log(RandomHint,"sssssssssssssssssss")
        alert(`this is the hint and one of the letter from that word 
         ${RandomHint}`)
    }

    LevelChange = (e) =>{
        console.log(e.target.value,"levels")
        this.setState({
            Level:e.target.value,
        })
        if (e.target.value === "medium"){
            alert(
                "greate!!!!.... you have selected medium level, now you got only 5 chances to find the secrete word!!!"        
               )
            this.setState({
                maxWrong:5,
                images:[step0,step2,step3,step4,step6,step8],

            })
        }
        else if (e.target.value === "hard"){
                alert(
                 "greate!!!!.... you have selected hard level, now you got only 3 chances to find the secrete word!!!"        
                )
            this.setState({
                maxWrong:3,
                images:[step0,step3,step6,step8],

            })
        }else{
            this.setState({
                maxWrong:8,
                images:[step0,step1,step2,step3,step4,step5,step6,step7,step8],

            })
        }
    }

    PlayAgain = () => {
        this.setState({
          mistakes: 0,
          guessed: new Set([]),
          Answer: RandomWord(),
          disabled:true
        });
      }
    render() {
        const Gamecomplete = this.state.mistakes >= this.state.maxWrong;

        const rightGuessing = this.guessedWord().join("") === this.state.Answer;

        let startGame=this.Generaatebuttons();


        if (rightGuessing){
            startGame="congratas you won"
        }
        if (Gamecomplete){
            startGame=" play again to click the below button!!!!....."
        }

        console.log(this.state.guessed,"guessed letters ")

        return (
            <div  className="Hangman">
                
                    <h3 className="float-xl-right">Wrong Guesses:{this.state.mistakes} of {this.state.maxWrong}</h3><br /><br />
                        {this.state.disabled ?
                        <select class="custom-select" style={{width:200}} onChange={this.LevelChange}>
                        <option value="easy" selected>Easy</option>
                        <option value="medium">meduim</option>
                        <option value="hard">Hard</option>
                        </select>
                        : 
                        <select class="custom-select" style={{width:200}} onChange={this.LevelChange}>
                        <option value="easy" selected disabled>Easy</option>
                        <option value="medium" disabled>meduim</option>
                        <option value="hard" disabled>Hard</option>
                        </select>}
                    <p className="text-center">
                    {!Gamecomplete ? this.guessedWord() : this.state.Answer}
                    </p>
                   
                    <div className="hangman_images" style={{display:"flex"}}>
                        {rightGuessing ?  '' :
                        <img src={this.state.images[this.state.mistakes]} alt ="hangman" style={{width:350,height:300}}/>
                        }
                    <p className=" container start_game">
                    {startGame}
                    </p>
                    </div>
                    <div className="text-center">
                        { this.state.mistakes >= this.state.maxWrong || rightGuessing ? 
                        <div>hello my dear friend<br/> 
                            <h3> The secrete word is
                                <i>{this.state.Answer}</i>
                            </h3>
                        </div>
                        :<button className='btn btn-danger' onClick={this.HintOFtheWord}>you can use hint option</button>
                        }
                        <button className='btn btn-danger' onClick={this.PlayAgain}>Restart</button>  
                    </div>
                 
                  
                
                
            </div>
        )
    }
}
