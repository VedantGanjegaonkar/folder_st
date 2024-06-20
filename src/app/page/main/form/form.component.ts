import { Component } from '@angular/core';
import { UserService } from 'src/app/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private userService : UserService){}
  users = [
    {
      userId: 1,
      userName: 'Jane Smith',
      email: 'jane.smith@example.com',
      addresses: [
        { street: '789 Maple St', city: 'Capital City', state: 'IL', zipCode: '62703' }
      ]
    }
  ];

  onAddAddress(event: { userId: number, address: { street: string, city: string, state: string, zipCode: string } }) {
    const user = this.users.find(u => u.userId === event.userId);
    if (user) {
      user.addresses.push(event.address);
    }
  }

  onDeleteAddress(event: { userId: number, index: number }) {
    const user = this.users.find(u => u.userId === event.userId);
    if (user) {
      user.addresses.splice(event.index, 1);
    }
  }

  onUpdateAddress(event: { userId: number, index: number, address: { street: string, city: string, state: string, zipCode: string } }) {
    const user = this.users.find(u => u.userId === event.userId);
    if (user) {
      user.addresses[event.index] = event.address;
    }
  }

  onSaveUser(user: any) {
    const existingUser = this.users.find(u => u.userId === user.userId);
    if (existingUser) {
      existingUser.userName = user.userName;
      existingUser.email = user.email;
      existingUser.addresses = user.addresses;
      
    } else {
      this.users.push(user);
      this.userService.createUser(user).subscribe(
        response => {
          console.log('User saved successfully!', response);
          window.location.reload(); // Consider using more Angular-friendly ways to refresh the data.
        },
        error => {
          console.error('Error saving user!', error);
        }
      );
      console.log("Data Submitted Successfully")
    }
  }

}
