import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'theme', 'itération'];
  constructor() {
  }
  stories: any[] = [];

  ngOnInit(): void {
    this.stories.push({name: 'test', theme: 'fantastique', iteration: 0});
    this.stories.push({name: 'tes2t', theme: 'fantastique', iteration: 15});
  }

  rowClicked($event): void {
    console.log($event);
  }
}
