import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonSlides,
  IonSlide
} from '@ionic/react';
import { useRef } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const slidesRef = useRef<HTMLIonSlidesElement>(null);

  const options = {
    keyboard: true
  };
  
  const slideWillChange = () => {
    console.log('Slide will change');
  }
  
  const slideDidChange = async () => {
    console.log('Slide did change');
    
    if (!slidesRef.current) return;
    
    console.table({
      isBeginning: await slidesRef.current.isBeginning(),
      isEnd: await slidesRef.current.isEnd()
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
        
        <IonSlides
          pager={true}
          scrollbar={true}
          options={options}
          
          onIonSlideWillChange={() => slideWillChange()}
          onIonSlideDidChange={() => slideDidChange()}
          
          ref={slidesRef}
        >
          <IonSlide>Slide 1</IonSlide>
          <IonSlide>Slide 2</IonSlide>
          <IonSlide>Slide 3</IonSlide>
          <IonSlide>Slide 4</IonSlide>
          <IonSlide>Slide 5</IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Home;
