import {Component, ViewChild} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar-saller',
  templateUrl: './sidebar-saller.component.html',
  styleUrls: ['./sidebar-saller.component.css']
})
export class SidebarSallerComponent {
  @ViewChild(MatAccordion) accordion: any = MatAccordion;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
