export class CouponCode {
  constructor(
    public status: Status,
    public details?: Details
  ) {}
}

export class Status {
  constructor(
    public valid: boolean,
    public message: string,
    public cssClass: string
  ) {}
}

export class Details {
  constructor(
    public group_code: {
      cover: {
        image_url: string,
        alt_desc: string
      },
      cid: string
    },
    public course_code: {
      courseCode: {
        cid: string
        discount: number
      }
    },
    public short_desc: string,
    public label: string,
    public hash: string,
    public publisher?: string
  ) {}
}
