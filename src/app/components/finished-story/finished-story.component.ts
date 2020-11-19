import { Component, OnInit } from '@angular/core';
import {Story} from '../../models/Story';
import {Content} from '../../models/Content';
import {ContentService} from '../../services/content.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StoryService} from '../../services/story.service';

@Component({
  selector: 'app-finished-story',
  templateUrl: './finished-story.component.html',
  styleUrls: ['./finished-story.component.css']
})
export class FinishedStoryComponent implements OnInit {

  story: Story = {id: 0, name: '', theme: '', iteration: 0};

  children: Content[] = [];

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

}
