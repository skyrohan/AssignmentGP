import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {

  @Input() title!: string;
  @Input() postId!: number;
  @Input() body!: string;
  @Input() user_id!: number;
  @Input() comment!: boolean;


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  // Call Api (Get comments of post)
  commentsOfPost(title:string,body:string,user_id:number,postId:number){
    this.router.navigate(['/postcomment'],{state: {postId: postId,body: body,title:title,user_id:user_id}});
  }
}
