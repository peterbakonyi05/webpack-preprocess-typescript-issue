export class Dummy {

	private a: string;

	constructor() {
		// this is a compilation error
		this.a = 555;
	}

}