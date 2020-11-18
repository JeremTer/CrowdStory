import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoryService} from '../../services/story.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {

  createStoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private storyService: StoryService,
              private navigation: Router) {
  }

  ngOnInit(): void {
    this.createStoryForm = this.formBuilder.group({
      theme: [null, [Validators.required]],
      title: [null, Validators.required]
    });
  }

  submit(): void {
    if (!this.createStoryForm.valid) {
      return;
    }

    console.log(this.createStoryForm.value);
    this.storyService.createStory({id: 0, name: this.createStoryForm.value.title, theme: this.createStoryForm.value.theme, iteration: 0}).then(
      () => {
        location.reload();
      }
    ).catch(e => {
      location.reload();
    });
  }

}
