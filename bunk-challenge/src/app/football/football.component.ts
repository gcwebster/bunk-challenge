import { Component, OnInit } from '@angular/core';
import  footballers from '../../assets/footballers.json';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  footballers;
  myTeam = [];
  error='';
  constructor() { 
    this.footballers = footballers;
  }

  ngOnInit() {
  }

  addToList(name, position){
    this.error = '';
    let foundInTeam = false;
    for(let i = 0; i < this.myTeam.length; i++){
      if(name === this.myTeam[i].name)
        foundInTeam = true;
    }
    if(!foundInTeam)
      this.myTeam.push({name, position});
    else
      this.error = "Player " + name + " already exists in your team!";

  }

}
