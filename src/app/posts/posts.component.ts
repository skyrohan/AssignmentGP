import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postArray: Post[] = [];
  startPage = 1;
  page = 10
  listArray: number[] = [];
  constructor(private postsData: PostserviceService) { }

  ngOnInit(): void {
    // call Api with page ID = 1.
    this.callPostsApi(1);

    // Create page first 10 
    for (; this.startPage <= this.page; this.startPage++) {
      this.listArray.push(this.startPage)
    }

  }

  // Call Post Api as per Page ID by Default page id is 1.
  callPostsApi(pageId: number) { this.postsData.postsData(pageId).subscribe(res => { this.postArray = res; }); }

  // On click page number , call Api as per page number.
  onPageSubmit(num: any) {
    this.callPostsApi(num);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // call next 10 page number
  onNextPages() {
    this.startPage = this.page
    this.page += 10;
    this.listArray = []
    for (; this.startPage <= this.page; this.startPage++) {
      this.listArray.push(this.startPage)
    }
  }

  // call Prev 10 page number
  onPrevPages() {
    let i = this.page - 20
    this.page -= 10;
    this.listArray = []
    for (; i <= this.page; i++) {
      this.listArray.push(i)
    }
  }

}
