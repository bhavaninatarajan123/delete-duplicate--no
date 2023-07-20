var a=[20,40,40,20,20,48,23,99,99];
document.write("a=[20,40,40,20,21,48,23,99,99]"+"<br>"+"<br>");
var b=[];
a.sort();
let temporary;
for(let i=0;i<a.length;i++){
	if(a[i]!==temporary){
		b.push(a[i]);
		temporary=a[i];
	}
}
document.write(b);