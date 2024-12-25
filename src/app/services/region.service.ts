import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Link } from '../models/link.model'
import { Meta } from '../models/meta.model';
import { Observable } from 'rxjs';

export interface Region {
  id: Number;
  name: string;
  nameKey: string;
  code: string;
  links: Link[];
}

export interface RegionResult {
  regions: Region[];
  meta: Meta;
  links: Link[];
}

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private baseUrl = 'https://api.ratings.food.gov.uk';
  private headers = new HttpHeaders({ "x-api-version": "2" });

  constructor(private http: HttpClient) { }

  public getRegions(): Observable<RegionResult> {
    return this.http.get<RegionResult>(`${this.baseUrl}/Regions`, { headers: this.headers });
  }

  public getRegion(id: Number): Observable<Region> {
    return this.http.get<Region>(`${this.baseUrl}/Regions?id=${id}`, { headers: this.headers });
  }
}
