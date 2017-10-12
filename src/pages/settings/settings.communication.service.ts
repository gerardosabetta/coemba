import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable()
export class SettingsCommunicationService {
    room:string;
    constructor(private storage: Storage) {
        this.getRoom()
    }
    setRoom(room) {
        this.storage.set('room', room);
        this.room = room
    }

    getRoom() {
        this.storage.get('room').then(room => {
            room ? this.room = room : this.room = 'ag'
        })
    }
}