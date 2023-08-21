import { IAtores } from './../model/IAtores';
import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router:Router, public alertController: AlertController, public toastController: ToastController) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Ryan Reynolds',
      nascimento: '23/10/1976',
      idade: 46,
      imagem: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg',
      favorito: false
    },
    {
      nome: 'Alexandra Daddario',
      nascimento: '16/03/1986',
      idade: 37,
      imagem: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg',
      favorito: false
    },
    {
      nome: 'Chris Pratt',
      nascimento: '21/06/1979',
      idade: 43,
      imagem: 'https://m.media-amazon.com/images/M/MV5BZjdkYjg1NzMtOTY2YS00ZWI1LWEwZWYtOTU1YTM2ODA2ZWY5XkEyXkFqcGdeQXVyMTM1MjAxMDc3._V1_FMjpg_UX1000_.jpg',
      favorito: false
    }

  ];
  exibirAtores(atores: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtores:atores}};
    this.router.navigate(['ator-detalhe'], navigationExtras);
  }
  async exibirAlertaFavorito(atores: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            atores.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            atores.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
