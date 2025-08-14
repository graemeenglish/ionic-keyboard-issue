import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { FormPage } from '../form/form.page';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [IonButton]
})
export class ExploreContainerComponent {
  @Input() name?: string;

  constructor(private modalCtrl: ModalController){}
  onClick() {

  this.modalCtrl.create({
    component: FormPage
  }).then(modal => modal.present());
}
}
