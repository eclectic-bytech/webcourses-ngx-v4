import { Publisher } from './publisher.model'
import { Theme } from './theme.model'

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
  public publisher: Publisher
  public theme: Theme
  // Legacy, added so the app compiles. These will become their own 'UserCourseProgress' model
  public pid: number
  public ta: number
  public tac: number
  public cid: number
  public private: boolean
}
