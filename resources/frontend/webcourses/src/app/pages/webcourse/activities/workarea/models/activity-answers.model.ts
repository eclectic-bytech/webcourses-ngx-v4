export class ActivityAnswers {
  constructor(
    public id: number,
    public activity_id: number,
    public slot: number,
    public caption: any,
    public correct: boolean,
    public created_at: string,
    public updated_at: string
  ) {}
}
