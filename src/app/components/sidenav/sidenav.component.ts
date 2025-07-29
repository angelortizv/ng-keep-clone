import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-sidenav',
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {

  constructor(public Shared: SharedService, public router: Router) { }

  collapseSideBar() {
    document.querySelector('[sideBar]')?.classList.toggle('close')
  }

  ngOnInit(): void {
    this.Shared.closeSideBar.subscribe(x => { if (x) this.collapseSideBar() })
    if (window.innerWidth <= 600) {
      this.collapseSideBar()
    }
  }

}
