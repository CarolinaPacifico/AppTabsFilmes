import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router, public alertController: AlertController, public toastController: ToastController) {}

  listaSeries: ISeries[] = [
    {
      nome: 'Pretty Little Liars (2010)',
      lancamento: '08/06/2010',
      temporadas: 7,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lntOFDrvVPBAULcrE8NoUlExa11.jpg',
      generos: ['Mistério'],
      pagina: '/pll',
      favorito: false
    },
    {
      nome: 'Diários de um Vampiro (2009)',
      lancamento: '10/09/2009',
      temporadas: 8,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lcGQaSrWkkxGuh0JJqyN2TkuNqb.jpg',
      generos: ['Mistério'],
      pagina: '/tvd',
      favorito: false
    },
    {
      nome: 'Brooklyn Nine-Nine: Lei e Desordem (2013)',
      lancamento: '17/09/2013',
      temporadas: 8,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hgRMSOt7a1b8qyQR68vUixJPang.jpg',
      generos: ['Comédia', 'Crime'],
      pagina:'/b99',
      favorito: false
    },

    {
      nome: 'The Umbrella Academy (2019)',
      lancamento: '15/02/2019',
      temporadas: 3,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg',
      generos: ['Action', 'Adventure', 'Sci-Fi', 'Fantasy', 'Drama'],
      pagina:'/umbrella',
      favorito: false
    }
  ];
  exibirSeries(series: ISeries){
    const navigationExtras: NavigationExtras = {state:{paramSeries:series}};
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }
  async exibirAlertaFavorito(series: ISeries) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            series.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            series.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
