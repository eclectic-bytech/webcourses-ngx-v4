import { Course } from "./course.model"

export class UserCourseProgress {
  public id: number
  public user_id: number
  public course_id: number
  public build_id: number
  public correct: number
  public wrong: number
  public missed: number
  public created_at: string
  public updated_at: string
  public demo: number
  public course?: Course
  // Legacy, added so the app compiles. These will become their own 'UserCourseProgress' model
  public pid: number
  public ta: number
  public tac: number
  public cid: number
  public private: boolean
}
