import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  allData: Object;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getMockJSONdata();
  }
  getMockJSONdata() {
    this.restaurantService.getMockJson().subscribe(res => {
      console.log(res);
      this.allData = res;
    });
  }

}
