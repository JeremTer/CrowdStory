import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Content} from '../../models/Content';
import {StoryService} from '../../services/story.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Story} from '../../models/Story';
import {log} from 'util';

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.css']
})
export class StoryEditorComponent implements OnInit {

  story: Story = {id: 0, name: '', theme: '', iteration: 0};

  children: Content[] = [];

  currentIndex = 0;

  newContent = '';
  editorConfig = {
    height: '300px'
  };
  remainingCharacters = 180;

  constructor(private contentService: ContentService,
              private route: ActivatedRoute,
              private storyService: StoryService,
              private navigation: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storyService.getStoryById(id).then(result => this.story = result[0]);
    this.contentService.getStoryContents(id).then(result => {
      this.children = result;
    });

  }

  saveContent(): void {
    if (this.children.length < 5) {
      this.contentService.saveContentOfStory(this.story.id, this.newContent).then(
        () => {
          this.navigation.navigateByUrl('');
        }
      ).catch(e => this.navigation.navigateByUrl(''));
    } else {
      this.contentService.saveChildOfContent(this.children[this.currentIndex], this.newContent).then(
        () => {
          this.navigation.navigateByUrl('');
        }
      ).catch(e => this.navigation.navigateByUrl(''));
    }
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
    return !(trimContent.length <= 180);
  }
}
