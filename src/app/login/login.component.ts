import { Component, OnInit } from '@angular/core';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(public ps: ParentService) {}

  
  ngOnInit(): void {
  }

  saveParent(parent:Parent) {
    this.ps.saveParent(parent).subscribe();
  }

  navigateToHome(){
    window.location.reload();
  }

}
