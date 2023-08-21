import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ISeries } from '../model/ISeries';

@Component({
  selector: 'app-serie-detalhe',
  templateUrl: './serie-detalhe.page.html',
  styleUrls: ['./serie-detalhe.page.scss'],
})
export class SerieDetalhePage implements OnInit {
  series:ISeries | undefined;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state) {
        this.series = getNav.extras.state['paramSeries'];;
      }
    });
  }

}
