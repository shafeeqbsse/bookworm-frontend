import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
    private level: number = 5;

    constructor() {
    }

    msg(msg:any, level:number) {
        if (level <= this.level) {
            console.log(msg)
        }
    }

}
