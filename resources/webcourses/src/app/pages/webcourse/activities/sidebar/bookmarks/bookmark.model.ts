export class Bookmark {
  constructor(
    public id: number,
    public aid: number,
    public pid: number,
    public label: string,
    public created_at: string,
    public updated_at: string,
    public deleted?: boolean
  ) { }
}
