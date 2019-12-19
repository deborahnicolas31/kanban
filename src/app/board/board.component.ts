import { Component, OnInit } from '@angular/core';
import { CardStore } from '../CardStore';
import { ListSchema } from '../ListSchema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})



// On récupère les listes de cartes et on définit le nom de chaque liste

export class BoardComponent implements OnInit {
  cardStore: CardStore;
  lists: ListSchema[];
  constructor() { }
  setMockData(): void {
    this.cardStore = new CardStore();
    const lists: ListSchema[] = [
      {
        name: 'À faire',
        cards: []
      },
      {
        name: 'En cours',
        cards: []
      },
      {
        name: 'Terminé',
        cards: []
      },
      {
        name: 'Archivé',
        cards: []
      }
    ];
    this.lists = lists;
  }

  //les données de la table sont de type MockData, c'est un format de texte

  ngOnInit() {
    this.setMockData();
  }

}
