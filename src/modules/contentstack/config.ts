import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    api_key: string;
    delivery_token: string;
    environment: string;
    api_host: string;
    app_host: string;
    management_token: string;
    live_preview: boolean;

    constructor() {
      this.api_host = "";
      this.api_key = "";
      this.environment = "";
      this.api_host = "";
      this.delivery_token = "";
      this.app_host = "";
      this.management_token = "";
      this.live_preview = false;
    }
  }