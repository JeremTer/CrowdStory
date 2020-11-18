import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Content} from '../models/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private requestService: RequestService) { }


  saveChildOfContent(content: Content, newContent: string ): Promise<any> {
    const finalContent = content.text + newContent;
    const url = 'http://localhost:3000/content-child/' + content.id;
    return this.requestService.save(url, {text: finalContent});
  }

  getStoryContents(storyId): Promise<Content[]> {
    const url = 'http://localhost:3000/contents/' + storyId;
    return this.requestService.getAll(url);
  }

  saveContentOfStory(id: number, newContent: string): Promise<any> {
    const url = 'http://localhost:3000/content/' + id;
    return this.requestService.save(url, {text: newContent});
  }
}
