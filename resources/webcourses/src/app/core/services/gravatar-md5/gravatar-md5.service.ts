import { Injectable } from '@angular/core'
import { Md5 } from 'ts-md5/dist/md5'

@Injectable({
  providedIn: 'root'
})
export class GravatarMd5Service {

  constructor() { }

  gravatarMD5src(email: string){
    return 'https://www.gravatar.com/avatar/' + Md5.hashStr(email)
  }

}
