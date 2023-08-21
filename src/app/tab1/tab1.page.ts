import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router, public alertController: AlertController, public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Guardiões da Galáxia Vol. 3 (2023)',
      lancamento: '04/05/2023',
      duracao: '2h 29m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mgFdvrwlzYi6wLq3zgzOwkiT43k.jpg',
      generos: ['Aventura', 'Ficção científica'],
      pagina: '/guardioes',
      favorito: false
    },
    {
      nome: 'Super Mario (2023)',
      lancamento: '06/04/2023',
      duracao: '1h 32m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg',
      generos: ['Aventura', 'Fantasia'],
      pagina: '/mario',
      favorito: false
    },
    {
      nome: 'Ilha do Medo (2010)',
      lancamento: '12/03/2010',
      duracao: '2h18m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/erl801HYIodoIBGZeFk0GTwCUBh.jpg',
      generos: ['Drama', 'Thriller', 'Mistério'],
      pagina: '/ilha',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
