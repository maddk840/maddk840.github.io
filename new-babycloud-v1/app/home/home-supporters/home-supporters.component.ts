import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nImage } from 'src/app/shared/models/ci18n-image';

@Component({
  selector: 'app-home-supporters',
  templateUrl: './home-supporters.component.html',
  styleUrls: ['./home-supporters.component.scss']
})
export class HomeSupportersComponent implements OnInit {
  public bError = false;
  public supporters: Ci18nImage[] = [{
      ALT: '',
      SRC: ''
  }];

  // supporter Carousel Options
  public supporterCarousel: any = {
      loop: true,
      autoplay:true,
      items: 6,
      center: true,
      autoWidth: true,
      margin: 100,
      dotsEach: true,
      // autoplayTimeout:5000,
      smartSpeed: 1000,
      autoplayHoverPause:true,
      nav: false,
      // navClass: ['owl-prev', 'owl-next'],
    //   navText: ['<img src="assets/images/back.png">', '<img src="assets/images/next.png">'],
  };

  constructor(public translate: TranslateService) { }

  ngOnInit() {
      this.translate.get('HOME.SUPPORTER.SUPPORTERS').subscribe((res: Ci18nImage[] | string) => {
          if (typeof(res) === 'string') {
              this.bError = true;
              this.supporters = [{
                      ALT: '',
                      SRC: ''
              }];
          } else {
              this.supporters = res as Ci18nImage[];
          }
      });
  }
}
