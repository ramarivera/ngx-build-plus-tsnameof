import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tsnameof-poc';

  NamedProperty = 42;

  nameOfProperty = nameof<AppComponent>(x => x.NamedProperty);
}
