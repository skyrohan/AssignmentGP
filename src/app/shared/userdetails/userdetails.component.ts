import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/post';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  @Input() user_id!: number;
  
  userDetail: User[]=[];

  constructor(private userDetails:PostserviceService) { }

  ngOnInit(): void {
    // Get user Details as per userID
    this.userDetails.getUserDetails(this.user_id).subscribe(res => {this.userDetail.push(res);})
  }

}
