import { Component, OnInit } from '@angular/core';
import { CommentDetails } from '../models/post';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-postwithcomments',
  templateUrl: './postwithcomments.component.html',
  styleUrls: ['./postwithcomments.component.scss']
})
export class PostwithcommentsComponent implements OnInit {
  commentArray:CommentDetails[]=[];

  title!:string;
  body!:string;
  user_id!:number;
  postId!:number;

  constructor(private postCommentApi:PostserviceService) { }
  // title,body,user_id,postId
  ngOnInit(): void {
    // Get values from router using state
    this.postId = history.state.postId;
    this.body = history.state.body;
    this.user_id = history.state.user_id;
    this.title = history.state.title;

    this.callPostsCommentApi(this.postId);
  }

  // Call api as per postId
  callPostsCommentApi(pageId:number){this.postCommentApi.postsWithCommentsData(pageId).subscribe(res => { this.commentArray = res;});}
}
