class FourSideShape {
	constructor(side1,side2,side3,side4) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		this.side4 = side4;
	};
	permiter() {
        return  this.side1 + this.side2 + this.side3 +this.side4;

    };
};

class Triangle extends FourSideShape {
	constructor(side1, side2, side3) {
        super(side1 ,side2 ,side3 ,0) ;
    }
	printTrinagle( ) {
       for ( let row=0; row< this.side2 ; row++) {
           let str = "" ; 
           str += " " .repeat (this.side2 -row -1);
           str += "*" .repeat (row + 1);
           console.log (str);
       };
    }
	area(side1,side2) {
        return 0.5 * this.side1 * this.side2
    };
};
 let TRIANGLE = new Triangle ( 10 ,6 ,8 ) ; 
 console.log (TRIANGLE) ;
 console.log (TRIANGLE.permiter()) ;
 console.log (TRIANGLE.area()) ;





 