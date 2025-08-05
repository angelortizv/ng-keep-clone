import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidenavComponent } from '../sidenav/sidenav.component';
import { NotesComponent } from '../notes/notes.component';
import { NotesToolsPipe } from '../../pipes/notes-tools.pipe';

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, SidenavComponent, NotesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
