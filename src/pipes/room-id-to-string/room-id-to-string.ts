import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomIdToString',
})
export class RoomIdToStringPipe implements PipeTransform {
  transform(value: string, ...args) {
    switch(value) {
      case 'ag':
        return 'Asamblea General';
      case 'cs':
        return 'Consejo de seguridad';
      case 'ecosoc':
        return 'Ecosoc';
      case 'cdh':
        return 'Consejo de Derechos Humanos';
      case 'ttii':
        return 'Sala de tratados';
      case 'bathroom':
        return 'Baño';
    }
  }
}
