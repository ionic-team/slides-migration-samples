import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slidesRef', { static: true }) slidesRef: IonSlides;

  public options = {
    keyboard: true
  }

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
