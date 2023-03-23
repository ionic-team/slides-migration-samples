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
    
      <ion-slides
        :pager="true"
        :scrollbar="true"
        :options="options"
        
        @ionSlideWillChange="slideWillChange"
        @ionSlideDidChange="slideDidChange"
        
        ref="slidesRef"
      >
        <ion-slide>Slide 1</ion-slide>
        <ion-slide>Slide 2</ion-slide>
        <ion-slide>Slide 3</ion-slide>
        <ion-slide>Slide 4</ion-slide>
        <ion-slide>Slide 5</ion-slide>
      </ion-slides>
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
  IonSlides,
  IonSlide
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSlides,
    IonSlide
  },
  setup() {
    const slidesRef = ref();
    const options = {
      keyboard: true
    }
    const slideWillChange = () => {
      console.log('Slide will change');
    }
    
    const slideDidChange = async () => {
      console.log('Slide did change');
      
      if (!slidesRef.value) return;

      console.table({
        isBeginning: await slidesRef.value.$el.isBeginning(),
        isEnd: await slidesRef.value.$el.isEnd()
      });
    }
    
    return {
      slideWillChange,
      slideDidChange,
      slidesRef,
      options
    }
  }
});
</script>

<style scoped>
  ion-slides {
    height: 300px;
    
    --bullet-background: rgb(var(--ion-color-primary-rgb), 0.5);
    --bullet-background-active: var(--ion-color-primary);
    --scroll-bar-background: var(--ion-color-light);
  }
</style>