export class UserAnswer {
  constructor(
    public id: number,
    public activity_id: number,
    public chapter_id: number,
    public progress_id: number,
    public answer_id: number,
    public created_at: string,
    public updated_at: string
  ) {}
}
