import {Injectable} from '@angular/core';

@Injectable() // @ts-ignore
export class CourseService{

    //findAllCourses = () => fetch('http://localhost:8080/api/courses').then(response => response.json())
    findAllCourses = () => fetch('http://blackboardapplication-env.eba-8xpppzc9.us-east-2.elasticbeanstalk.com/api/courses').then(response => response.json())
}
