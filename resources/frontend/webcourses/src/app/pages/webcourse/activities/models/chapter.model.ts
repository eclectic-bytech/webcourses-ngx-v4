export class Chapter {
  constructor(
    public chid: number,
    public title: string,
    public ta: number,
    public tac: number,
    public activities: Array<number>,
    public label: string
  ) {}
}
