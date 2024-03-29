import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Injectable({
  providedIn: 'root'
})

export class CompletionCertService {

  public downloadCertificateLoading = false

  constructor(
    public selectedCourse: SelectedCourseService,
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  downloadCertificate(aid: number) {
    this.downloadCertificateLoading = true

    this.httpClient.get(
      `${this.configService.params.api.route}/webcourse/activities/special/completion-cert/${aid}`,
      {responseType: 'blob' as 'json'}
    ).subscribe(
      (response: any) => {
        this.downloadCertificateLoading = false
        const dataType = response.type
        const binaryData = []
        binaryData.push(response)
        const downloadLink = document.createElement('a')
        downloadLink.href = window.URL.createObjectURL(
          new Blob(binaryData, {type: dataType})
        )
        const fileName = 'certificate.pdf'
        if (fileName) {
          downloadLink.setAttribute('download', fileName)
        }
        document.body.appendChild(downloadLink)
        downloadLink.click()
      },
      (err) => {
        console.log(err)
      }
    )

  }
}
