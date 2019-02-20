import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IConfig } from '../models/iconfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  /**
   * Optional variable for control finish loading configuration
   */
  public configLoaded = false;

  /**
   * Data of configuration
   */
  public configurations: IConfig;

  constructor(private http: HttpClient) {}

  /**
   * Set params of configuration
   */
  public setConfigs(): Promise<void> {
      return this.http.get<IConfig>('/assets/env/config.json')
      .toPromise()
      .then(config => {
        this.configurations = config;
        this.configLoaded = true;
      });
  }

  /**
   * Return configuration
   *
   */
  public getConfig(): IConfig {
    return this.configurations;
  }
}
