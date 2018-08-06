import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Math';
  questions = [];

  constructor() {
    this.questions = this.setSubtractionQuestions(5, 14);    
  }

  setSubtractionQuestions = function(practiceNumber, maxNumber) {
    let questions = [];

    for(let i = practiceNumber; i < maxNumber; i++) {
      var question = {};
      question['firstNumber'] = i;
      question['secondNumber'] = practiceNumber;
      question['answer'] = question['firstNumber'] - question['secondNumber'];

      console.log(question);
      questions.push(question);
    }

    return questions;
  }
}
