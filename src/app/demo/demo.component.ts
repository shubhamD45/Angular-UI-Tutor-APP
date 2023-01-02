import { Component, OnInit } from '@angular/core';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public parents: Parent[];
  constructor(private parentservice: ParentService) { }

  ngOnInit(): void {
    this.parentservice.findAll().subscribe(data => {
      this.parents = data;
    });
  }

}
