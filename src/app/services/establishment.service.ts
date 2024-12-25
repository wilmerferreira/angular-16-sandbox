import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meta } from '../models/meta.model';
import { Link } from '../models/link.model';

export interface Geocode {
  longitude: Number;
  latitude: Number;
}

export interface Scores {
  Hygiene: Number;
  Structural: Number;
  ConfidenceInManagement: Number;
}

export interface EstablishmentBasic {
  FHRSID: Number;
  LocalAuthorityBusinessID: string;
  BusinessName: string;
  BusinessType: string;
  RatingValue: string;
  RatingDate: string;
  links: Link[];
}

export interface Establishment {
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  AddressLine4: string;
  BusinessName: string;
  BusinessType: string;
  BusinessTypeID: Number;
  ChangesByServerID: Number;
  Distance?: any;
  FHRSID: Number;
  LocalAuthorityBusinessID: string;
  LocalAuthorityCode: string;
  LocalAuthorityEmailAddress: string;
  LocalAuthorityName: string;
  LocalAuthorityWebSite: string;
  NewRatingPending: boolean;
  Phone: string;
  PostCode: string;
  RatingDate: string;
  RatingKey: string;
  RatingValue: string;
  RightToReply: string;
  SchemeType: string;
  geocode: Geocode;
  scores: Scores;
}

export interface EstablishmentsBasicResult {
  establishments: EstablishmentBasic[];
  meta: Meta;
  links: Link[];
}

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private baseUrl = 'https://api.ratings.food.gov.uk';
  private headers = new HttpHeaders({ "x-api-version": "2" });

  constructor(private http: HttpClient) { }

  public getEstablishmentsBasic(pageNumber: Number = 1, pageSize: Number = 10): Observable<EstablishmentsBasicResult> {
    return this.http.get<EstablishmentsBasicResult>(`${this.baseUrl}/Establishments/basic/${pageNumber}/${pageSize}`, { headers: this.headers });
  }

  public getEstablishment(id: Number): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.baseUrl}/Establishments?id=${id}`, { headers: this.headers });
  }
}
