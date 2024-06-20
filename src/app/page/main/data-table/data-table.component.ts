import { Component } from '@angular/core';
import { User } from 'backend/src/models/user.model'; 
import { UserService } from 'src/app/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  users:User[]=[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log(this.users);
        
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }


}
