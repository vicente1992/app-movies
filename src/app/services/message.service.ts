import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public loading: boolean = true;
  constructor() { }


  public showLoading() {
    this.loading = true;
  }

  public hideLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }
}
