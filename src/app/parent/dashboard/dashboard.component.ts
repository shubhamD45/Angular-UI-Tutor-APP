import { Component, OnInit } from '@angular/core';
import { Parent } from '../../parent';

import { ParentService } from '../../parent.service';
import { Tutor } from '../../tutor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public tutors: Tutor[];
  public parent: Parent[];
  constructor(private parentservice: ParentService) { }

  ngOnInit(): void {
    this.parentservice.FindAllTutor().subscribe(data1 => {
      this.tutors = data1;
    });

  }

}
