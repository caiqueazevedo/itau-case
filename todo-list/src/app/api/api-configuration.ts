/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://ec2-18-188-169-228.us-east-2.compute.amazonaws.com:8080';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
