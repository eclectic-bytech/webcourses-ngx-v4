export class ActivityAnswers {
  constructor(
    public answer_id: number,
    public slot: number,
    public caption: any,
    public correct: number,
    public selected: boolean
  ) {}
}
