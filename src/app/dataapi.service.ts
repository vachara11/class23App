import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  data_detailMen:any = [];

  constructor(
    public http:HttpClient,
  ) { }

  //ฟังก์ชันการเพิ่มที่ส่งไปยัง api
  addMember(data:any){
    console.log("ค่ามาจากแอพ",data);
    return this.http.post('http://localhost/class2-3/api/insert.php', data);
  }

  //ฟังก์ชันแสดงผลข้อมูล
  listMenber(){
    return this.http.get('http://localhost/class2-3/api/list_member.php');
  }

  //ฟังก์ชันสำหรับแก้ไขข้อมูล
editMember(dataEdit: any){
  return this.http.put('http://localhost/class2-3/api/update.php', dataEdit)
}

delMember(id:any){
  return this.http.delete('http://localhost/class2-3/api/delete.php?id='+id);
}


}
