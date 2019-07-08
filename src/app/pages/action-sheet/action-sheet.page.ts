import { Component, OnInit } from '@angular/core';
import { ActionSheetController , AlertController } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { Validation } from '../../utils/utils.validation';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  public user: User;
  public users: User[];

  constructor(public alertController: AlertController , private service: DataService) {
  }

  ngOnInit() {
    this.users = [];
    this.service.getUsers().then(
      (usersInput) => {
        this.users = usersInput;
      }
    );
    this.user = {
      birthdate : new Date(),
      firstname : '',
      identification : 0,
      lastname : ''
    };
  }

  public saveUser(): void {
    this.user.birthdate = new Date(this.user.birthdate);
    console.log('user' , this.user);
    if (Validation.validateDate(this.user.birthdate)) {
      if (Validation.validateNames(this.user.firstname) && Validation.validateNames(this.user.lastname)) {
        if (Validation.validateExist(this.user , this.users)) {
          this.presentAlert('Estás registrado en el sistema');
        } else {
          this.presentAlert('Ya te encuentras registrado en el sistema');
        }
      } else {
        this.presentAlert('No hemos entendido tu nombre, puedes volverlo a digitar');
      }
    } else {
      this.presentAlert('Debes tener más de 18 años para registrarte');
    }
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
