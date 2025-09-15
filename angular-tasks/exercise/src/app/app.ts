import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RepeaterComponent } from './components/repeater';
import { CustomSortPipe } from './custom-sort.pipe';

@Component({
  selector: 'app-root',
  imports: [RepeaterComponent, CustomSortPipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  itemsList = signal([
    { name: 'Apple', price: 2.50, isLocal: true, harvestedDate: new Date('2023-01-15') },
    { name: 'Ananas', price: 12.50, isLocal: false, harvestedDate: new Date('2024-11-15') },
    { name: 'Banana', price: 1.20, isLocal: false, harvestedDate: new Date('2022-05-20') },
    { name: 'Banana', price: 2.20, isLocal: false, harvestedDate: new Date('2023-05-20') },
    { name: 'Grapes', price: 5.00, isLocal: true, harvestedDate: new Date('2024-03-10') },
    { name: 'Zucchini', price: 3.20, isLocal: true, harvestedDate: new Date('2023-01-15') }
  ]);

}
