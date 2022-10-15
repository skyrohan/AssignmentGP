import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  postsUrl = 'https://gorest.co.in/public/v2/posts?page';

  userInfo = 'https://gorest.co.in/public/v2/users';

  commentApi = 'https://gorest.co.in/public/v2/comments?post_id';

  constructor(private http: HttpClient) { }
  
  // Get post data as per page number
  postsData(pageId:number): Observable<any> {return this.http.get<any>(`${this.postsUrl}=${pageId}`)}

  // Get comment data as per PostId
  postsWithCommentsData(postId:number): Observable<any> {return this.http.get<any>(`${this.commentApi}=${postId}`)}

  // Get User Details as per User Id
  getUserDetails(userId: number): Observable<any> {return this.http.get<any>(`${this.userInfo}/${userId}`)}
}
