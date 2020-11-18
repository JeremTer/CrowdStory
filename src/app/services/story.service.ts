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
    const url = '';
    return this.requestService.getAll(url);
  }

  getFinishedStories(): Promise<Story[]> {
    const url = '';
    return this.requestService.getAll(url);
  }
}
