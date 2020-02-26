import { Component, OnInit } from '@angular/core';
import { Point } from './models/shape/Point';
import { Line } from './models/shape/Line';
import { EmailsService } from './modules/courses/services/emails.service';

@Component({
  selector: 'app-root',
  template: '<courses></courses>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    for (const shape of [
      new Point(1, 2),
      new Point(),
      new Line(new Point(), new Point(5, 5)),
      new Line()
    ]) 
      shape.draw()
  }
}
