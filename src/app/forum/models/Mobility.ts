export class Mobility{

    placeName: string;
    placeType: string;
    radius: number;
    unit: string;
    representation: string;

    constructor(placeName,placeType,radius,unit){
        this.placeName = placeName;
        this.placeType = placeType;
        this.radius = radius;
        this.unit = unit;
        switch(this.radius){
            case 0:
            case -1:
                this.representation = this.placeName;
                break;
            default:
                this.representation = this.placeName+", dans un rayon de "+this.radius+" "+this.unit;
                break;
        }
    }
}