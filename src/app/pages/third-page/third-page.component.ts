import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {
  textValue: string = 'Default Text';

  textHistories: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  onChangeText(event: Event) {
    const target = event.target as HTMLInputElement
    this.textValue = target.value;

    this.textHistories.push(this.textValue)
  }
}
