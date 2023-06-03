import { trigger, style, transition, animate } from '@angular/animations'

export const FadeInOut2 = trigger('FadeInOut2', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 }))
  ])
])
