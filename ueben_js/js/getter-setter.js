class Rechteck{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0 && typeof newWidth === "number"){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    //set lässt einen den input validiren bzw. anpassen
    set height(newHeight){
        if (newHeight > 0 && typeof newHeight === "number") {
            this._height = newHeight
        } else {
            console.error("Height must be a positive number");
        }
    }
    

    //get lässt einen den output anpassen (z.b. nachkomma stellen)
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._height * this._width).toFixed(1);
    }
}

const rechteck1 = new Rechteck(100,100);

console.log(rechteck1.height);
console.log(rechteck1.width);
console.log(rechteck1.area);