<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Resultado</ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="question"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <h2 class="pergunta">
        {{resultado}}
      </h2>


  <ion-card>
    <ion-card-header>
      <ion-card-title>Estresse</ion-card-title>
      <ion-card-subtitle>{{estresse}}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{estressem}}Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>

  <ion-card color="success">
    <ion-card-header>
      <ion-card-title>Ansiedade</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-card-header>
      <ion-card-title>Depressão</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>



INTERPRETAÇÃO
As perguntas 3, 5, 10, 13, 16, 17 e 21 formam a subescala de depressão. 
As perguntas 2, 4, 7, 9, 15, 19 e 20 formam a subescala de ansiedade. 
As perguntas 1, 6, 8, 11, 12, 14 e 18 formam a subescala de estresse.

Para a pontuação final, os valores de cada subescala foram somados e multiplicados por dois para corresponder à pontuação da escala original
(DASS-42) (Saad et al., 2017).
A classificação dos sintomas: estresse (0-10 = normal; 11-18 = leve; 19-26 moderado; 27-34 = severo; 35-42 = extremamente severo); 
ansiedade (0-6 normal; 7-9 = leve; 10-14 = moderado; 15-19 = severo; 20-42 = extremamente severo); 
depressão (0-9 = normal; 10-12 = leve; 13-20 = moderada; 21-17 = severo; 28-42 = extremamente severo).

    </ion-content>

  </ion-page>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  import { useRouter } from 'vue-router';

  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRippleEffect,
    IonList,
    IonItem,
    IonItemSliding,
    IonLabel,
    IonAvatar,
    IonButtons,
    IonBackButton,
    IonImg
  } from '@ionic/vue';

  export default defineComponent({
    name: 'ResultPage',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonRippleEffect,
      IonList,
      IonItem,
      IonItemSliding,
      IonLabel,
      IonAvatar,
      IonButtons,
      IonBackButton,
      IonImg
    },

    data() {
      return {
        resultado: [0, 0, 0],

        estresse: 0,
        ansiedade: 0,
        depressao: 0,        
      }
    },

    methods: {

      escala_estresse() {
      
      },
      
      escala_ansiedade() {
      },
      
      escala_depressao() {
      }


    },

    created() {
      let urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has('result')) {
        const j = urlParams.get('result');
        this.resultado = JSON.parse(j || '{}');
        
        this.estresse = this.resultado[0] * 2;
        this.ansiedade = this.resultado[1] * 2;
        this.depressao = this.resultado[2] * 2;       

        // estresse
        
        if (this.estresse <= 10) {
          // normal 
        }
        else if (this.estresse <= 18) {
          // leve
        }
        else if (this.estresse <= 26) {
          // moderado
        }
        else if (this.estresse <= 34) {
          // severo
        }
        else {
          // extremamente severo
        }
        
        // ansiedade

        if (this.estresse <= 6) {
          // normal 
        }
        else if (this.estresse <= 9) {
          // leve
        }
        else if (this.estresse <= 14) {
          // moderado
        }
        else if (this.estresse <= 19) {
          // severo
        }
        else {
          // extremamente severo
        }        
        
        // depressao

        if (this.estresse <= 9) {
          // normal 
        }
        else if (this.estresse <= 12) {
          // leve
        }
        else if (this.estresse <= 20) {
          // moderado
        }
        else if (this.estresse <= 27) {
          // severo
        }
        else {
          // extremamente severo
        }        

     
        
      }

      return false;
    },

    setup() {
      const route = useRouter();
      return {
        route
      }
    }
  });

</script>

<style scoped>
  .ripple-parent {
    position: relative;
    overflow: hidden;
  }

  .pergunta {
    font-size: 110%;
  }
  
</style>