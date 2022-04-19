<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <swiper
        :modules="modules"
        :keyboard="true"
        :pagination="true"
        :scrollbar="true"
      
        @slideChangeTransitionStart="slideWillChange"
        @slideChangeTransitionEnd="slideDidChange"
        @swiper="swiperInit"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonicSlides
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Swiper,
    SwiperSlide
  },
  setup() {
    const slidesRef = ref();

    const swiperInit = (swiper: any) => {
      slidesRef.value = swiper;
    }

    const slideWillChange = () => {
      console.log('Slide will change');
    }
    
    const slideDidChange = () => {
      console.log('Slide did change');
      
      if (!slidesRef.value) return;

      console.table({
        isBeginning: slidesRef.value.isBeginning,
        isEnd: slidesRef.value.isEnd
      });
    }
    
    return {
      slideWillChange,
      slideDidChange,
      swiperInit,
      modules: [Keyboard, Pagination, Scrollbar, IonicSlides]
    }
  }
});
</script>

<style scoped>
  .swiper {
    height: 300px;
    
    --bullet-background: rgb(var(--ion-color-primary-rgb), 0.5);
    --bullet-background-active: var(--ion-color-primary);
    --scroll-bar-background: var(--ion-color-light);
  }
</style>