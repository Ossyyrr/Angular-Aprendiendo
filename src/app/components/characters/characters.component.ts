import { Component, OnInit } from '@angular/core';
import { Icharacter  } from '../../Interfaces/character.interface';
import { apiResponse  } from '../../api/characters.api';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})



export class CharactersComponent implements OnInit {
    public apiResponse: Icharacter[];
    constructor() {
      this.apiResponse = apiResponse;
  }

  ngOnInit() {

  }

}

