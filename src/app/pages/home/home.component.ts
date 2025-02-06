import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'assets/js/script.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
