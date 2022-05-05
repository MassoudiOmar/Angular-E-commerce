import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-edit-item.component.html',
  styleUrls: ['./admin-edit-item.component.css']
})
export class AdminDataEditItemComponent implements OnInit {

  public products:any[]= [];
  constructor(
    private userService: UsersService,
    // private http: HttpClient,
    // private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.userService.getAllData()
      .subscribe(data => {
        this.products = data;
        console.log(data)
      },
      (error)=>{ console.log(error)}
      );
    }
  url:any="url"


      
seletImage(event:any){
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0])
  reader.onload = () =>{
    this.url = reader.result
   }
  }

}




