import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {StoryEditorComponent} from './components/story-editor/story-editor.component';
import {FinishedStoryComponent} from './components/finished-story/finished-story.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor/:id', component: StoryEditorComponent},
  { path: 'view/:id', component: FinishedStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
