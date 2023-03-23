import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonicSlides
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Scrollbar, Swiper as SwiperInterface } from 'swiper';
import { useState } from 'react';
import './Home.css';

import 'swiper/swiper.min.css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  const [slidesRef, setSlidesRef] = useState<SwiperInterface>();

  const slideWillChange = () => {
    console.log('Slide will change');
  }
  
  const slideDidChange = () => {
    console.log('Slide did change');
    
    if (!slidesRef) return;
    
    console.table({
      isBeginning: slidesRef.isBeginning,
      isEnd: slidesRef.isEnd
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>         
        </IonHeader>
        
        <Swiper
          modules={[Keyboard, Pagination, Scrollbar, IonicSlides]}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          
          onSlideChangeTransitionStart={() => slideWillChange()}
          onSlideChangeTransitionEnd={() => slideDidChange()}
          onSwiper={(swiper) => setSlidesRef(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
