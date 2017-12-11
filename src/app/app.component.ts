import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empty:any = {
    Year: ' ',
    Month: ' ',
    Weeks: " ",
    Days: " ",
    Hours: " ",
    Minutes: " ",
    Seconds: " ",
    MilliSeconds: ""
  };

  full:any = {
    Year: 'Year ',
    Month: 'Month ',
    Weeks: "Week ",
    Days: "Day ",
    Hours: "Hour ",
    Minutes: "Minute ",
    Seconds: "Second ",
    MilliSeconds: "MilliSecond"
  };
}
