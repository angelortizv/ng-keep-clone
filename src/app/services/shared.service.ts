import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
declare var Snackbar: any
@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor() {
    }

    closeSideBar = new Subject<boolean>()

}



