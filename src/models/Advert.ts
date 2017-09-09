export class Advert {
  Subject: string;
  Topic: string;
  authorName: string;
  authorLastName: string;
  createdAt: string;
  City: string;
  Province: string;
  Body: string;
  Photos: [string];
  valueFrom: number;
  valueTo: number;
  State: string;
  userID: number;
  constructor(params) {
    Object.keys(params).forEach(param => {
      this[param] = params[param];
    })
  }
}
