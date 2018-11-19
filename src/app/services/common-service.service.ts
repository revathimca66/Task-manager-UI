import { Component, NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


var vURL = "http://localhost:8061/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class CommonServiceService {

  constructor(public http: HttpClient) { }


  getParentTask() {
    return this.http.get(vURL + "api/TaskManager/GetParentTask");
  }

  getTaskManager() {
    return this.http.get(vURL + "api/TaskManager/GetTaskDetails");
  }

  submitTask(task) {
    return this.http.post(vURL + "api/TaskManager/InsertTaskDetails", task, httpOptions);    
  }

  updateEndTask(task) {
    return this.http.post(vURL + "api/TaskManager/UpdateEndTask", task);
  }
}
