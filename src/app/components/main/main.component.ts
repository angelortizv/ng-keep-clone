import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, SidenavComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
