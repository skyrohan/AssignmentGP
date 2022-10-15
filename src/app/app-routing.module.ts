import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostwithcommentsComponent } from './postwithcomments/postwithcomments.component';

const routes: Routes = [
  {path:'',redirectTo:'posts',pathMatch:'full'},
  
  {path:'posts',component:PostsComponent},
  {path: 'postcomment', component: PostwithcommentsComponent}
  //Wild Card Route for 404 request
  // { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
