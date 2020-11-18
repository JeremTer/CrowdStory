import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {Story} from '../../models/Story';
import {log} from 'util';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'theme', 'itération'];
  stories: Story[] = [];

  constructor(private storyService: StoryService) {
  }

  ngOnInit(): void {
    this.storyService.getNonFinishedStories().then(result => this.stories = result).catch(err => log(err));
  }

  rowClicked($event): void {
    console.log($event);
  }
}
