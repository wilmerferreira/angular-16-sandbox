import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Subscription } from 'rxjs';

import { Region, RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit, OnDestroy {
  region!: Region;
  getRegion$!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regionService: RegionService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');

    if (isNaN(id)) {
      this.router.navigate(['/error']);
    }

    this.getRegion$ = this.regionService
      .getRegion(id)
      .subscribe((response) => {
        console.log(response);
        this.region = response
      });

    // TODO: Handle scenario when the region does not exists
    // TODO: Handle scenarios when the server throws errors or timeouts
  }

  ngOnDestroy(): void {
    this.getRegion$.unsubscribe();
  }
}
