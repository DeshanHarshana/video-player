import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  //inputs:['video']
})
export class VideoDetailsComponent implements OnInit {
  @Input() video:any;
  public static editTitle:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
  onTitleClick(){
    VideoDetailsComponent.editTitle=true;
  }

  ngOnChange(){
    VideoDetailsComponent.editTitle=false;
  }
  get(){
    return  VideoDetailsComponent.editTitle;
  }

}
