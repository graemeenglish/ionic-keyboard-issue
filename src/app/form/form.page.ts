import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTextarea, IonFooter, IonIcon, IonButton, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowDownOutline, chatbubbleOutline, closeOutline, informationCircleOutline, send } from 'ionicons/icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonTextarea, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon]
})
export class FormPage implements OnInit {
  replyContentMaxLength=5;
replyContent = '';
  constructor() { 
    addIcons({ send });
  }

  ngOnInit() {
  }

}
