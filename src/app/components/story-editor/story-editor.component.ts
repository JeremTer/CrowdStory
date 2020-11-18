import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.css']
})
export class StoryEditorComponent implements OnInit {

  story = {name: 'test', theme: 'fantastique', iteration: 0};

  children = [
    {id: 1, content: 'abc'},
    {id: 2, content: 'abcd'},
    {id: 3, content: 'abec'},
    {id: 4, content: 'abazzc'},
    {id: 5, content: 'abfzefzec'},
  ];

  currentIndex = 0;

  newContent = '';
  editorConfig = {
    height: '300px'
  };
  remainingCharacters = 180;

  constructor() { }

  ngOnInit(): void {
  }

  SaveContent(): void {
    console.log(this.children[this.currentIndex]);
    console.log(this.newContent);
    this.remainingCharacters -= 5;
  }

  onContentChange(): void {
    let trimContent = this.newContent;
    trimContent = trimContent.replace(/<[^>]*>/g, '');


    if (trimContent.length < 180) {
      this.remainingCharacters = 180 - trimContent.length;
    } else {
      //bloquer la validation
    }
  }
}
