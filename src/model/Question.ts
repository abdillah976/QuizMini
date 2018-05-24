export class Question{
	id: number;
	label: string;
	anwser: boolean;
	description: string;
	category: string;

	constructor(id: number, label: string, anwser: boolean, description: string,category: string){
		this.id = id;
		this.label = label;
		this.anwser = anwser;
		this.description = description;
		this.category = category;
	}
}
