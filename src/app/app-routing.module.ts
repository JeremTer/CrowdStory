import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {StoryEditorComponent} from './components/story-editor/story-editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor', component: StoryEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
