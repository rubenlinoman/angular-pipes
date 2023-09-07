import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'rubén';
  public nameUpper: string = 'RUBÉN';
  public fullName: string = 'RuBeN LinO';
}
