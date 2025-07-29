import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent implements OnInit {
  constructor(private Shared: SharedService) { }

  closeSideBar() { this.Shared.closeSideBar.next(true) }

  refresh() { window.location.reload() }

  ngOnInit(): void { }

}