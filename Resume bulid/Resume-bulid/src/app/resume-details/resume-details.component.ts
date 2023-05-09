import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.css']
})
export class ResumeDetailsComponent {
  @Input() childPosts:any[] = []
  @Input() deatails:any
  @Input() Emails:any
  @Input() Weblink:any
}
