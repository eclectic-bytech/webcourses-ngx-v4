import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Injectable({
  providedIn: 'root'
})

export class CompletionCertService {

  downloadCertificateLoading = false

  constructor(
    private httpClient: HttpClient,
    private selectedCourse: SelectedCourseService
  ) { }

  downloadCertificate() {
    let pid = this.selectedCourse.selectedCourse.user_progress.id
    this.downloadCertificateLoading = true
    this.httpClient.get(`/api/certificate.php?id=${pid}`, {responseType: 'blob' as 'json'})
      .subscribe(
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
