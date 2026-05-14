import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {
  private maintenanceMode = true; 
  isMaintenanceMode(): boolean {
    return this.maintenanceMode;
  }
}