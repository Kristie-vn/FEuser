//import { District } from "./District";

export class Province {
//     'code': number;
//     'name': string;
//     'districts': District[];
  'province_id': string;
  'province_name': string;
  'provinces' : Province[];
  constructor(province_id: string, province_name: string) {
          this.province_id = province_id;
          this.province_name = province_name;
  }
}
