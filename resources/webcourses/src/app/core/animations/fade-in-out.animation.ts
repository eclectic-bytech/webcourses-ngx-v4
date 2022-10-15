import { trigger, style, state, transition, animate } from '@angular/animations'

export const FadeInOut =

  trigger('fadeInOut', [
    state('void', style(
      { opacity: 0 }
    )),
    transition('* => void', [
      animate('0.3s')
    ]),
    transition('void => *', [
      animate('0.3s 0.3s')
    ]),
  ])
