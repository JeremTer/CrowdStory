import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Story} from '../models/Story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private requestService: RequestService) { }

  createStory(story: Story): void {
    const url = '';
    this.requestService.save(url, story);
  }

  getNonFinishedStories(): Promise<Story[]> {
    const url = 'http://localhost:3000/stories/30';
    return this.requestService.getAll(url);
  }

  getFinishedStories(): Promise<Story[]> {
    const url = 'http://localhost:3000/stories-end/30';
    return this.requestService.getAll(url);
  }

  getStoryById(id: any): Promise<Story> {
    const url = 'http://localhost:3000/story/' + id;
    return this.requestService.get(url);
  }
}
