import {Component, OnInit,} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {UserDto} from '../../models/dto/userDto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
  ]
})
export class DashboardComponent implements OnInit {
  public users: UserDto[] = [];

  constructor(
    private readonly apiService: ApiService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.users = await this.apiService.getUsers();
    } catch (error) {
      console.error('Error loading users:', error);
      this.users = [];
    }
  }
}


