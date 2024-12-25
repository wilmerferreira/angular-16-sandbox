import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Establishment, EstablishmentService, Geocode } from 'src/app/services/establishment.service';


@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss']
})
export class EstablishmentComponent implements OnInit, OnDestroy {
  establishment!: Establishment;
  getEstablishment$!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private establishmentService: EstablishmentService) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');

    if (isNaN(id)) {
      this.router.navigate(['/error']);
    }

    this.getEstablishment$ = this.establishmentService
      .getEstablishment(id)
      .subscribe((response) => {
        console.log(response);
        this.establishment = response
      });
  }

  ngOnDestroy(): void {
    this.getEstablishment$.unsubscribe();
  }

  mailTo(email: string): string {
    return `mailto://${email}`;
  }

  mapLink(geocode: Geocode): string {
    return `https://www.google.com/maps/place/?q=${geocode.latitude}+${geocode.longitude}`;
  }
}
