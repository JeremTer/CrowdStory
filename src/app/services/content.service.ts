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
    const url = '';
    this.requestService.save(url, {text: finalContent});
  }

  getStoryContents(storyId): void {
    const url = '';
    this.requestService.getAll(url);
  }
}
