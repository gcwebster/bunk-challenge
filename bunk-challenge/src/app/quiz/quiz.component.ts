import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  ready = '';
  reallyReady = '';
  reallySuperReady = '';
  reallySuperSpaceCowboyReady = '';
  answer = '';
  success = '';
  failure = '';
  hint = '';
  hint2 = '';

  constructor() { }

  ngOnInit() {
  }

  imReady(){
    this.ready='yeah';
  }

  imReallyReady(){
    this.reallyReady='yeah';
  }

  imReallyVeryReady(){
    this.reallySuperReady = 'fo shizzle';
  }

  imReallyVeryFinalReady(){
    this.reallySuperSpaceCowboyReady = 'fo shizzle';
  }

  answerQuestion(){
    this.success = '';
    this.failure = '';
    if(this.answer === "An owl in a miniature sombrero" || this.answer === "Pedro the mexican owl" )
      this.success = "Congrats, you passed!"
    else
      this.failure= "Better luck next time bro!"
  }

  giveAHint(){
    this.hint = 'Sure looks like \'An owl in a miniature sombrero\' to me!';
  }

  giveAHintAgain(){
    this.hint2 = 'Sure looks like \'Pedro the mexican owl\' to me!';
  }

}
