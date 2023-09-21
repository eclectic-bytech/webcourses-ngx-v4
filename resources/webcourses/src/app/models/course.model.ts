import { Publisher } from './publisher.model'
import { UserCourseProgress } from './user.course.progress.model'

export class Course {
  public id: number
  public title: string
  public cover: string
  public publisher_id: number
  public completion_time: number
  public audience: string
  public cover_alt: string
  public short_desc: string
  public long_desc: string
  public objective: string
  public eval_type: string
  public price: number
  public created_at: string
  public updated_at: string
  public private: boolean
  public published: boolean
  public total_activities: number
  public total_students: number
  public publisher: Publisher
  public user_progress?: UserCourseProgress
  public access_codes?: number
}
