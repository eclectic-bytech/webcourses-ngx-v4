export class ActivityAnswers {
  constructor(
    public id: number,
    public activity_id: number,
    public slot: number,
    public caption: any,
    public created_at: string,
    public updated_at: string,

    public selected?: boolean,
    public correct?: number,
  ) {}
}
