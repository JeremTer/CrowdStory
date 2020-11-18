import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Content} from '../../models/Content';
import {StoryService} from '../../services/story.service';
import {ActivatedRoute} from '@angular/router';
import {Story} from '../../models/Story';

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.css']
})
export class StoryEditorComponent implements OnInit {

  story: Story = {id: 0, name: 'test', theme: 'fantastique', iteration: 0};

  children: Content[] = [
    {id: 1, text: 'abc'},
    {id: 2, text: 'abcd'},
    {id: 3, text: 'abec'},
    {id: 4, text: 'abazzc'},
    {id: 5, text: 'abfzefzec'},
  ];

  currentIndex = 0;

  newContent = '';
  editorConfig = {
    height: '300px'
  };
  remainingCharacters = 180;

  constructor(private contentService: ContentService,
              private route: ActivatedRoute,
              private storyService: StoryService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storyService.getStoryById(id).then(result => this.story = result[0]);
    this.contentService.getStoryContents(id).then(result => {
      this.children = result;
    });

  }

  saveContent(): void {
    this.contentService.saveChildOfContent(this.children[this.currentIndex], this.newContent);
  }

  onContentChange(): void {
    let trimContent = this.newContent;
    trimContent = trimContent.replace(/<[^>]*>/g, '');

    if (trimContent.length <= 180) {
      this.remainingCharacters = 180 - trimContent.length;
    } else {
      this.remainingCharacters = 0;
    }
  }

  getColorProgress(): string {
    let trimContent = this.newContent;
    trimContent = trimContent.replace(/<[^>]*>/g, '');
    return trimContent.length <= 180 ? 'primary' : 'warn';
  }
  getContentInformations(): string {
    let trimContent = this.newContent;
    trimContent = trimContent.replace(/<[^>]*>/g, '');
    return trimContent.length <= 180 ? 'Caractères  restants : ' + this.remainingCharacters : (trimContent.length - 180) + ' caractères en trop';
  }

  canSaveContent(): boolean {
    let trimContent = this.newContent;
    trimContent = trimContent.replace(/<[^>]*>/g, '');
    return !(trimContent.length <= 180 && this.currentIndex != null);
  }
}
