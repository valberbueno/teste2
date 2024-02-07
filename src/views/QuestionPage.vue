<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="home"></ion-back-button>
        </ion-buttons>
        <ion-title>Pergunta {{form.contador + 1}} / {{form.base.perguntas.length}} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-button expand="block" color="warning" @click="reset()" v-if="form.contador >= form.base.perguntas.length">
        <ion-icon :icon="reloadOutline" />
        &nbsp; Reiniciar teste
      </ion-button>

      <h2 class="pergunta" v-if="form.contador < form.base.perguntas.length">{{form.base.perguntas[form.contador].Pergunta}}</h2>

      <ion-list v-if="form.contador < 21">
        <ion-item-sliding>

          <ion-item @click="registrar(0)" class="ion-activatable ripple-parent">
            <ion-avatar>
              <img src="assets/img/0.png"/>
            </ion-avatar>
            <ion-label  class="ripple-parent">
              Não se aplicou de forma alguma
            </ion-label>
            <ion-ripple-effect></ion-ripple-effect>         
          </ion-item>

          <ion-item @click="registrar(1)" class="ion-activatable ripple-parent">
            <ion-avatar>
              <img src="assets/img/1.png"/>
            </ion-avatar>
            <ion-label  class="ripple-parent">
              Aplicou-se em algum grau/por pouco tempo
            </ion-label>
            <ion-ripple-effect></ion-ripple-effect>            
          </ion-item>

          <ion-item @click="registrar(2)" class="ion-activatable ripple-parent">
            <ion-avatar>
              <img src="assets/img/2.png"/>
            </ion-avatar>
            <ion-label  class="ripple-parent">
              Aplicou-se em um grau considerável e por boa parte do tempo
            </ion-label>  
            <ion-ripple-effect></ion-ripple-effect>            
          </ion-item>

          <ion-item @click="registrar(3)" class="ion-activatable ripple-parent">
            <ion-avatar>
              <img src="assets/img/3.png"/>
            </ion-avatar>
            <ion-label  class="ripple-parent">
              Aplicou-se muito ou na maioria do tempo
            </ion-label>
            <ion-ripple-effect></ion-ripple-effect>            
          </ion-item>

        </ion-item-sliding>
      </ion-list>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import QJSON from '../../public/assets/data/questionario.json';

  import { useRouter } from 'vue-router';

  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonRippleEffect,
    IonIcon,
    IonList,
    IonItem,
    IonItemSliding,
    IonLabel,
    IonAvatar,
    IonButtons,
    IonBackButton
  } from '@ionic/vue';
  import { reloadOutline } from 'ionicons/icons';

  export default defineComponent({
    name: 'QuestionPage',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonButton,
      IonRippleEffect,
      IonIcon,
      IonList,
      IonItem,
      IonItemSliding,
      IonLabel,
      IonAvatar,
      IonButtons,
      IonBackButton
    },

    data() {
      return {

        form: {
          base: QJSON,
          resultado: [0, 0, 0],
          contador: 0
        },
      }
    },

    methods: {

      registrar(valor: number) {
        // REGISTRA
        this.form.resultado[this.form.base.perguntas[this.form.contador].IdCategoria] += valor;
        this.form.contador++;

        if (this.form.contador < this.form.base.perguntas.length) {
          // PEGA NOVA PERGUNTA
          this.selecionar();
        }
        else {
          // FINALIZA
          this.finalizar();
        }

        return false;
      },

      zerar(){
        this.form.resultado = [0, 0, 0];
        this.form.contador = 0;
      },

      selecionar() {        

      },

      finalizar() {
 
        this.router.push({
          path: 'result', 
          query: { result: JSON.stringify(this.form.resultado) }
        });

      },

      reset() {
        this.zerar();
        this.selecionar();
      }

    },

    mounted() {
      this.reset();

      return false;
    },

    setup() {
      const router = useRouter();
      return {
        router,
        reloadOutline
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