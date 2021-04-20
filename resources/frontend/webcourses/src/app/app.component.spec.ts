import { TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { APP_INITIALIZER } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { ConfigService } from './core/services/config/config.service'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        HttpClientTestingModule,
        CookieService,
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [ConfigService],
          useFactory: (config: ConfigService) => {
            return () => {
              return config.loadConfig()
            }
          }
        }
      ]
    }).compileComponents()
  }))


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'Cultivate Learning Web Course Catalogue'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('Cultivate Learning Web Course Catalogue')
  })

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   fixture.detectChanges()
  //   const compiled = fixture.debugElement.nativeElement
  //   expect(compiled.querySelector('h1').textContent).toContain('Cultivate Learning Web Course Catalogue')
  // })
})
