import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-option.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() name: string;
  @Input() options: MenuOption[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
