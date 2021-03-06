import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

@Injectable({
  providedIn: 'root'
})
export class CompletionCertificatesService {

  downloadCertificateLoading = false
  faSpinner = faSpinner

  constructor(
    private httpClient: HttpClient
  ) { }

  downloadCertificate(pid: number) {
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
