export class Candidate {
    id: number;
    name: string;
    note: string;
    diploma: string;
    contract: string;

    constructor(id, name, note, diploma, contract) {
        this.id = id;
        this.name = name;
        this.note = note;
        this.diploma = diploma;
        this.contract = contract;
    }
}