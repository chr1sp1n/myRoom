import { Component, Input } from '@angular/core';

/**
 * Generated class for the MrSerialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mr-serial',
  templateUrl: 'mr-serial.html'
})
export class MrSerialComponent {

	@Input() name: string;
	@Input() dvc: string;

	toggles: object;

	constructor() {
		this.toggles = [
			{
				icon: 'md-bulb',
				label: 'Lamp 1',
				state: true
			},
			{
				icon: 'md-bulb',
				label: 'Lamp 2',
				state: false
			},
			{
				icon: 'md-bulb',
				label: 'Lamp 3',
				state: false
			},
			{
				icon: 'md-bulb',
				label: 'Lamp 4',
				state: false
			}
		]
	}

}
