function Th(string='',rowspan=1,colspan=1){
	this.text=string;
	this.rowspan=rowspan;
	this.colspan=colspan;
};
var Th1 = new Th;
Th1.text='№';
Th1.rowspan=3;
Th2 = new Th;  
Th2.text = 'name2';
Th3 = new Th;
Th3.text = 'name3';
Th4 = new Th;
Th4.text = 'name4';
Th5 = new Th;
Th5.text = 'hname2';
Th6 = new Th;
Th6.text = 'hname3';
Th7 = new Th;
Th7.text = 'hname4';
Th8 = new Th;
Th8.text = 'type2';
Th9 = new Th;
Th9.text = 'type3';
Th10 = new Th;
Th10.text = 'type4';
var tr = [
 [Th1,Th2,Th3,Th4],
 [Th5,Th6,Th7],
 [Th8,Th9,Th10]
];
console.log(tr);