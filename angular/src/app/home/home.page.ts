import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private swiperInstance: any;
  public swiperModules = [IonicSlides];

  @ViewChild('swiper')
  set swiper(swiperRef: ElementRef) {
    /**
     * This setTimeout waits for Ionic's async initialization to complete.
     * Otherwise, an outdated swiper reference will be used.
     */
    setTimeout(() => {
      this.swiperInstance = swiperRef.nativeElement.swiper;
    }, 0);
  }

  public slideWillChange() {
    console.log('Slide will change');
  }

  public slideDidChange() {
    console.log('Slide did change');

    if (!this.swiperInstance) return;

    console.table({
      isBeginning: this.swiperInstance.isBeginning,
      isEnd: this.swiperInstance.isEnd
    });
  }

}
