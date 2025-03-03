import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-gsap-model',
  imports: [],
  templateUrl: './GsapModel.component.html',
  styleUrl: './GsapModel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GsapModelComponent implements OnInit {
  @ViewChild('green', { static: true }) green!: ElementRef<HTMLDivElement>;
  @ViewChild('blue', { static: true }) blue!: ElementRef<HTMLDivElement>;
  @ViewChild('purple', { static: true }) purple!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.create();
  }

  create() {
    gsap.to(this.green.nativeElement, { rotate: 27, x: 100, duration: 1 });
    gsap.to(this.blue.nativeElement, { rotate: 10, x: 80, duration: 1 });
    gsap.to(this.purple.nativeElement, { rotate: 45, x: 180, duration: 1 });
  }
}
