import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';

@Injectable()
export class ProjectsService {
    projects = [];
    funProjects = [];
    professionalProjects = [];

    constructor (private http: Http) { }

    getProjects() {
        this.http.get(environment.josPortalApiUrl + 'projects').subscribe(res => {this.projects = res.json();});
    }

    getFunProjects() {
        this.http.get(environment.josPortalApiUrl + 'funprojects').subscribe(res => {this.funProjects = res.json();});
    }

    getProfessionalProjects() {
        this.http.get(environment.josPortalApiUrl + 'professionalprojects').subscribe(res => {this.professionalProjects = res.json();});
    }
}