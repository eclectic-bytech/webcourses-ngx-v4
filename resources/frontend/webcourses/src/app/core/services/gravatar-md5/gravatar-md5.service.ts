import { Injectable } from '@angular/core'
import { Md5 } from 'ts-md5/dist/md5'

@Injectable({
  providedIn: 'root'
})
export class GravatarMd5Service {

  private defaultAvatar = encodeURI('https://www.cultivatelearning.ca/assets/avatar.png')

  constructor() { }

  gravatarMD5src(email) {
    const md5email = Md5.hashStr(email)
    const gravatarSrc = 'https://www.gravatar.com/avatar/' + md5email + '?d=' + this.defaultAvatar
    return gravatarSrc
  }

}
