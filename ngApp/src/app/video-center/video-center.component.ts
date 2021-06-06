import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedVideo:Video;
  videos:Video[]=[
{"_id":"1", "title":"Title 1", "url":"url1","description":"description1"},
{"_id":"1", "title":"Title 2", "url":"url1","description":"description1"},
{"_id":"1", "title":"Title 3", "url":"url1","description":"description1"},
{"_id":"1", "title":"Title 4", "url":"url1","description":"description1"},
{"_id":"1", "title":"Title 5", "url":"url1","description":"description1"},
  ];


  onSelectVideo(video:any){
    this.selectedVideo=video;
    console.log(this.selectedVideo);
  }
}
