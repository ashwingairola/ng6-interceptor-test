import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit() {
  }

  apiCall1() {
    return this.service.getApiData1().subscribe((response) => {
      this.processResponse(response);
    });
  }

  apiCall2() {
    return this.service.getApiData2().subscribe((response) => {
      console.log(response);
      return response;
    });
  }

  apiCall3() {
    return this.service.getApiData3().subscribe((response) => {
      console.log(response);
      return response;
    });
  }

  apiCall4() {
    return this.service.getApiData4().subscribe((response) => {
      this.processResponse(response);
    });
  }

  processResponse(response): string {
    console.log(response);
    return response as string;
  }

}
