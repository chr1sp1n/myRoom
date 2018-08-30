import { Component } from '@angular/core';

/**
 * Generated class for the MrRgbyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mr-rgby',
  templateUrl: 'mr-rgby.html'
})
export class MrRgbyComponent {

  rgby: object;

  constructor() {
	this.rgby = {
		name: 'RGBY',
		state: true,
		red: 0,
		green: 0,
		blue: 0
	}
  }

}
