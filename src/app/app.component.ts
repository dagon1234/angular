import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | undefined;
  count: number;
  imgSrc: string = "./assets/angular_logo.png";

  captionList: CaptionItem[] = [
    {
      id: 1,
      message: 'สมัยนี้พรหมลิขิต ก็สู้บัตรเครดิตไม่ได้',
      icon: './assets/icons/ic_funny_01.png',
    },
    {
      id: 2,
      message: 'หน้าหนาวทำให้ปากแตก แต่เดี๋ยวมึงได้หน้าแหกถ้าปากดี',
      icon: './assets/icons/ic_funny_02.png',
    },
    {
      id: 3,
      message: 'อย่าโง่นัก ซึ่งมันอาจทำให้คุณโด่งดังได้',
      icon: './assets/icons/ic_funny_03.png',
    },
  ];

  usedCaptionList: CaptionItem[] = [];

  constructor() {
    this.title = this.randomCaption()?.message;
    this.count = 0;
  }

  randomCaption() {
    let randomIndex: number;
    let newCaption: CaptionItem;
    this.count++;

    if (this.usedCaptionList.length === this.captionList.length) {
      return null
    }

    do {
      randomIndex = this.getRandomInt(this.captionList.length);
      newCaption = this.captionList[randomIndex]
    } while (this.usedCaptionList.includes(newCaption));

    this.usedCaptionList.push(newCaption);
    return this.captionList[randomIndex];
  }


  handleClickButton() {
    this.title = this.randomCaption()?.message;
  }
  resetClickButton() {
    this.usedCaptionList = [];
    this.title = this.randomCaption()?.message;
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
  }
}
