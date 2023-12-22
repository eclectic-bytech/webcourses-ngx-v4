export class ActivityMeta {
  constructor(
    public activity_id: number,
    public activity_type: string,
    public course_id: number,
    public build_id: number,
    public chapter_id: number,
    public seq: number,
    public marked: boolean,
    public cont: boolean,
    public default_answer: boolean,
    public style: string,
    public demo: boolean,
    public created_at: string,
    public updated_at: string
  ) {}
}
