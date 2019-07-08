import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public users: User[];
  public loading: boolean;
  constructor(private dataService: DataService , public alertController: AlertController) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getUsers().then(
      (users) => {
        this.loading = false;
        this.users = users;
      }
    ).catch(
      (error) => {
        this.presentAlert('Error leyendo los usuarios registrados');
      }
    );
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


}
