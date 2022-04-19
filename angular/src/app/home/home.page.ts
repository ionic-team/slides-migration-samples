import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

import SwiperCore, { Keyboard, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Scrollbar, IonicSlides]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private slidesRef: any;

  constructor() {}

  public swiperInit(swiper: any) {
    this.slidesRef = swiper;
  }

  public slideWillChange() {
    console.log('Slide will change');
  }

  public slideDidChange() {
    console.log('Slide did change');

    if (!this.slidesRef) return;

    console.table({
      isBeginning: this.slidesRef.isBeginning,
      isEnd: this.slidesRef.isEnd
    });
  }

}
