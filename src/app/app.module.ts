import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostcardComponent } from './shared/postcard/postcard.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './shared/userdetails/userdetails.component';
import { PostwithcommentsComponent } from './postwithcomments/postwithcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcardComponent,
    PostsComponent,
    UserdetailsComponent,
    PostwithcommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
