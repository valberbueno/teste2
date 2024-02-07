<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>DASS 21</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <swiper ref="swini" allowSlideNext>

        <swiper-slide >
          <ion-card>
            <ion-card-content>
              <img src="assets/img/logo.png" class="slide-image" />
              <h2 class="slide-title">Quiz das Profissões</h2>
              <div>Qual a profissão ideal para você?</div>
            </ion-card-content>
          </ion-card>
        </swiper-slide>

        <swiper-slide>
          <ion-card>
            <ion-card-content>
              <img src="assets/img/op2.png" class="slide-image" />
              <h2 class="slide-title">Responda</h2>
              <div>Responda às perguntas com sua percepção sobre elas.</div>
            </ion-card-content>
          </ion-card>
        </swiper-slide>

        <swiper-slide>
          <ion-card>
            <ion-card-content>
              <img src="assets/img/op3.png" class="slide-image" />
              <h2 class="slide-title">Calculando</h2>
              <p>Ao final do processo este teste lhe mostrará áreas em que seu perfil se encaixa!</p>
            </ion-card-content>
          </ion-card>
        </swiper-slide>

        <swiper-slide>
          <ion-card>
            <ion-card-content>
              <img src="assets/img/op4.png" class="slide-image" />
              <h2 class="slide-title">Um pouco mais</h2>
              <p>Você poderá conhecer um pouco mais de cada área, e assim decidir o que fazer...</p>
            </ion-card-content>
          </ion-card>
        </swiper-slide>

        <ion-button @click="start" shape="round" expand="block" color="warning">
          Iniciar
          <ion-icon :icon="arrowForwardOutline" ></ion-icon>
        </ion-button>

      </swiper>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // IMPORT SWIPER STYLES
  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon
  } from '@ionic/vue';
  import { arrowForwardOutline } from 'ionicons/icons';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      Swiper,
      SwiperSlide,
      IonCard,
      IonCardContent,
      IonButton,
      IonIcon
    },

    methods: {

      start() {
        window.location.href = "/question";
      }

    },

    setup() {
      return {
        arrowForwardOutline
      }
    }
  });

</script>

<style scoped>

  ion-card {
    height: 90%;
  }

  .swiper-container {
    width: 100%;
    height: 80%;
  }

  H2.slide-title {
    font-weight: bold;
  }

</style>