import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Content} from '../models/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private requestService: RequestService) { }


  saveChildOfContent(content: Content, newContent: string ): void {
    const finalContent = content.text += newContent;
    const url = 'http://localhost:3000/content-child/' + content.id;
    this.requestService.save(url, {text: finalContent});
  }

  getStoryContents(storyId): Promise<Content[]> {
    const url = 'http://localhost:3000/contents/' + storyId;
    return this.requestService.getAll(url);
  }
}
