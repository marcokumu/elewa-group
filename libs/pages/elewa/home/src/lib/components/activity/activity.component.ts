import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent {
  @Input() width = '400';
  cards = [
    {
      title: 'Education',

      subtitle: 'Elewa',
      description:
        'A key player in the development of operations of new-age human-center digital learning experiences',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Education_hstyzo.png',
    },
    {
      subtitle: 'italanta',

      title: 'Technology',
      description:
        'Offshore tech services which accelerates your business and your talent.',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/technolagy_sgfgo6.png',
    },
    {
      subtitle: 'Ventures',
      title: 'Venture Labs',
      description:
        'Sometimes "to grow" means "to let go". Our bravest move is into Venture Labs, where our start-ups can start and accelerate their own ventures.',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690296/elewa-group-website/Icons/SVG/venturelabs_icon_vfnmpj.svg',
    },
  ];
}
