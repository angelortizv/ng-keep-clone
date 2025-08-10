import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidenavComponent } from '../sidenav/sidenav.component';
import { NotesComponent } from '../notes/notes.component';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, SidenavComponent, NotesComponent, InputComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
