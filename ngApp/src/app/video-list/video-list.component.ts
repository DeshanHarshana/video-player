import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../video';
import { VideoDetailsComponent } from '../video-details/video-details.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],

  outputs:['selectVideo']
})
export class VideoListComponent implements OnInit {
  @Input() videos:any;
  @Output() selectVideo=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onselect(vid : Video){
    this.selectVideo.emit(vid);
    VideoDetailsComponent.editTitle=false;
  }

}
