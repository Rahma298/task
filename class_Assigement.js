class Shape {
	constructor(side1,side2,side3,side4) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		this.side4 = side4;
	};

    calc_area (){
        return this.side1 * this.side2

    }
	calc_permiter() {
        return  this.side1 + this.side2 + this.side3 +this.side4;
    };
};

class Rectangle extends Shape {
	constructor(width , height) {
        super(side1 ,side2 ,side3 ,side4) ;
        this.width = width ;
        this.height = height ;
    };
	print_shape () {
        function printRectangle(width, height) {
        if (width > 1|| height > 1) {
            let horizontalLine = "*".repeat(width);
            for (let i = 0; i < height; i++) {
            console.log(horizontalLine);
            };
        };
    };   


    };
    where_to_draw(){
        console.log(" Draw the shape in the center of the page ")
    };

};

class  Square extends Rectangle {
    constructor (side1 ,side2, side3, side4 ,sideLength){
        super (side1 ,side2, side3, side4) ;
        this.sideLength = sideLength
        sideLength = this.side1 ;

    }
}
 let smallSquare = new Square ( 10 ,10 ,10,10) ; 
 console.log (Square) ;
 console.log (Square.calc_permiter()) ;
 console.log (Square.area()) ;
 console.log (Square.sideLength()) ;


 
     

    
        
        
    
      


