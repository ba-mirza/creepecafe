import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
      console.log('Error saving to localStorage', err);
    }
  }

  getAll(): any {
    try {
      let data = [];
      for(let i = 0; i < localStorage.length; i++) {
        data.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!))
      }
      return data
    } catch (err) {
      console.log('Error getting data from localStorage', err);
      return null;
    }
  }

  delete(key: string): void {
    localStorage.removeItem(key)
  }
}
