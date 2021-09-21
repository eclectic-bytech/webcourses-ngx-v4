export class Activity {
  constructor(
    public id: number,
    public prequestion: string,
    public question: string,
    public assess_text: string,
    public after_word: string,
    public created_at: string,
    public updated_at: string
  ) {}
}
