import { Http } from '@angular/http';
import { Injectable } from '@angular/core'

@Injectable()
export class ProjectsService {
    projects = [];
    funProjects = [];
    professionalProjects = [];

    constructor (private http: Http) { }

    getProjects() {
        this.http.get('http://localhost:3000/projects').subscribe(res => {this.projects = res.json();});
    }

    getFunProjects() {
        this.http.get('http://localhost:3000/funprojects').subscribe(res => {this.funProjects = res.json();});
    }

    getProfessionalProjects() {
        this.http.get('http://localhost:3000/professionalprojects').subscribe(res => {this.professionalProjects = res.json();});
    }
}