import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../routes';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateTo() {
    this.router.navigateByUrl(ROUTE_PATHS.feedback);
  }
}
