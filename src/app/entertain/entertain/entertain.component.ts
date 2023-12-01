import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.css']
})
export class EntertainComponent {
  constructor(private router: Router){
    
  }
done() {
this.router.navigate(['entertainment']);
  
}

}
