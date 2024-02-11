import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InterfaceFor } from 'src/app/directives/interface';

@Component({
  selector: 'gtn-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgOnChangesComponent implements OnInit, OnChanges {

  @Input() myNgOnChanges1: InterfaceFor[] = [];
  @Input() myNgOnChanges2!: number;

  constructor() { }

  // To apply this, you should have a input and this would take actions when you modify inputs
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges works!');
    console.log(changes); // SimpleChange name would take your input name
    if(changes['myNgOnChanges2'].firstChange != true) {
      changes['myNgOnChanges1'].currentValue[0].name = changes['myNgOnChanges1'].currentValue[0].name.toUpperCase() + ' - 1';
    }
  }

  ngOnInit(): void {
  }

}
