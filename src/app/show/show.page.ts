import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  member:any =[];

  constructor(
    public dataapi: DataapiService,
    private nav: NavController,
    private http: HttpClient
  ) {
    this.loadDataMem();
   }

  ngOnInit() {
    this.loadDataMem();
  }

  loadDataMem(){
    this.dataapi.listMenber().subscribe({
      next: (res:any) => {
        console.log("แสดงผลข้อมูลได้สำเร็จ",res);
        this.member = res;
      },
      error: (err:any) => {
        console.log("เกิดข้อผิดพลาดในการแสดงผลข้อมูล",err);
      }
    }
    );
  }

  edit(datamem:any){
    this.dataapi.data_detailMen = datamem;
    console.log(datamem);
    this.nav.navigateForward('/edit');
  }

  delMem(id:any){
        this.dataapi.delMember(id).subscribe({
          next:(res:any) => {
            console.log("ลบข้อมูลสำเร็จ",res);
            this.loadDataMem();

          },
          error:(err:any) => {
            console.log("เกิดข้อผิดพลาดในการลบข้อมูล",err);
          }
        });

  }
}
