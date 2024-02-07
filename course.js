
let data = {    //الاو
	meta: {
		totalPages: 13,
	},
	data: [
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "articles",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
	],
	links: {
		self: "http://example.com/articles?page[number]=3&page[size]=1",
		first: "http://example.com/articles?page[number]=1&page[size]=1",
		prev: "http://example.com/articles?page[number]=2&page[size]=1",
		next: "http://example.com/articles?page[number]=4&page[size]=1",
		last: "http://example.com/articles?page[number]=13&page[size]=1",
	},
};

// get totalPages
let totalp = data.meta.totalPages 
console.log(totalp);

// show self & first beside each other
let s = data.links.self ; 
let f = data.links.first ;
console.log(s + " " + f);

// check if totalPages is equal to data length
let datalength = data.data.length;
let isequal= datalength == data.meta.totalPages ;
console.log(isequal)

// get the title of the data before the last one
let BeforeTheLastOne = data.data.length-2;
let title4 = data.data[BeforeTheLastOne].attributes.title;
console.log (title4)

// check if post id is less than 3 and type is articles
let len = data["data"].length;    // obj ليس له طول انا بحط له كي >  array > لها طول و الكمبيونر بيحط لها كي

      //data.data = data["data"]
let ID = data["data"][len-2] ["id"]  // لازم ادخل ع الكبير الاول 

let Type = data["data"][len-2]["type"];
let PI = ID < 3;
let AR = Type == "articles";
console.log(PI)
console.log(AR)

if (ID < 3 && Type == "articles" ) {
	console.log ("Pinned Article")
};
console.log ('article')

if (totalp != datalength) {
	console.log ("invalid Data")
};
 



if (ID < 3) {
	if (Type == "articles"){
	console.log ("Pinned Article")
  } 
}



let grade = 0 ;
	if (grade*-1  < 50) { 
	console.log("Failed");
  } else if (grade < 65 ) {
	console.log("Accepted");
  } else if (grade < 75) {
	console.log("Good");
  } else if (grade < 85) {
	console.log("Very Good");
  } else if (grade <= 100) {
	console.log("Excellent");
  }	

