import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any, groupId: number): any {

    const isInGroup = function(student) {
      if (student.gid === +groupId || (!student.gid && +groupId === 0)) {
        return student
      }
    }

    const results = students.filter(isInGroup)

    return results

  }

}
