import { Component, ViewChild } from '@angular/core';
import { IonSlides, IonicSwiper } from '@ionic/angular';

import SwiperCore, { Keyboard, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Scrollbar, IonicSwiper]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slidesRef', { static: true }) slidesRef: IonSlides;

  constructor() {}

  public slideWillChange() {
    console.log('Slide will change');
  }

  public async slideDidChange() {
    console.log('Slide did change');

    if (!this.slidesRef) return;

    console.table({
      isBeginning: await this.slidesRef.isBeginning(),
      isEnd: await this.slidesRef.isEnd()
    });
  }

}
