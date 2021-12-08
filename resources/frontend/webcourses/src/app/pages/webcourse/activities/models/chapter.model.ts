export class Chapter {
  constructor(
    public id: number,
    public label: string,
    public syllabus: Array<any>,

    // Hidden for the front end
    public created_at: string,
    public updated_at: string,

    // LEGACY, already substituted above with another property
    public chid: number,
    public title: string,
    public ta: number,

    // LEGACY, not yet substituted above with another property
    public tac: number,

    // OPTIONAL parameters have to come last
    public total_activities?: number
    ) {}
}
