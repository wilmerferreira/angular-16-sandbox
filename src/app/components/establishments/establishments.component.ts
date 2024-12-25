import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Establishment, EstablishmentBasic, EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit, OnDestroy {
  pageNumber = 1;
  pageSize = 20;
  loading = true;
  establishments!: EstablishmentBasic[];
  getEstablishmentsBasic$!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.getEstablishmentsBasic$ = this.establishmentService.getEstablishmentsBasic(this.pageNumber, this.pageSize).subscribe(response => {
      this.loading = true;
      this.establishments = response.establishments;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.getEstablishmentsBasic$.unsubscribe();
  }
}
