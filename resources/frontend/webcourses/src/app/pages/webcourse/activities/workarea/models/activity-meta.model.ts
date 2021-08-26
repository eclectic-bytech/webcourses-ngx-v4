export class ActivityMeta {
  constructor(
    public pid: number,
    public chid: number,
    public aid: number,
    public seq: number,
    public type: string,
    public cont: boolean,
    public marked: boolean,
    public style: string
  ) {}
}
