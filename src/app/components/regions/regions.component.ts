import { Component, OnDestroy, OnInit } from '@angular/core';
import { Region, RegionResult, RegionService, } from '../../services/region.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit, OnDestroy {
  regions!: Region[];

  getRegions$!: Subscription;

  constructor(private regionService: RegionService) {
  }

  ngOnInit(): void {
    this.getRegions$ = this.regionService.getRegions().subscribe(response => {
      this.regions = response.regions.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
    });
  }

  ngOnDestroy(): void {
    this.getRegions$.unsubscribe();
  }
}
