import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
/*get all */
  province = 'https://vapi.vnappmob.com/api/province/';
//   districts = 'https://vapi.vnappmob.com/api/province/district/';
//   wards = 'https://vnprovinces.pythonanywhere.com/api/wards';
/*-----------*/
  //province = 'https://vnprovinces.pythonanywhere.com/api/provinces/';
  district = 'https://vapi.vnappmob.com/api/province/district/'; // + province id
  ward = 'https://vapi.vnappmob.com/api/province/ward/'; // + district id

  constructor(private http: HttpClient) { }

  getAllProvinces(){
    return this.http.get(this.province);
  }
//get district of province
  getDistricts(code:string) {
    return this.http.get(this.district + code);
  }
//get ward of district
  getWards(code:string) {
    return this.http.get(this.ward + code);
  }
//------------------------------------------------
  getProvince(id: string) {
    return this.http.get(this.province+id);
  }

  getDistrict(id: string) {
    return this.http.get(this.district+id);
  }

  getWard(id: string) {
    return this.http.get(this.ward+id);
  }
}
