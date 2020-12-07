const a = [{
	name: 'Ravindra',
	sports: ['Chess', 'Cricket'],
},
{
	name: 'Ravi',
	sports: ['Cricket', 'Football'],
},
{
	name: 'Rishabh',
	sports: ['Table-Tennis', 'Football']
}]
/* this is called an array of object */

/* the expected output looks like [{chess:[ravindra],cricket:['ravindra','ravi']}] */
let finarr = {};

for (let i = 0; i < a.length; i++) {
	/* check for the first element of a and check if spots has length or not */
	/* if it has length get first position */
	let currpos = a[i];
	for (let j = 0; j < currpos.sports.length; j++) {
		alert(currpos.sports[j]);
		/*alert(finarr.find(currpos.sports[j]));*/
		/* check if chess exists in finarr and if it does not add it as an object to finarr with ravingra as names */
		
		if (finarr.hasOwnProperty(currpos.sports[j])) {
			finarr[currpos.sports[j]].push(currpos.name);
		} else {
			finarr[currpos.sports[j]] = [currpos.name];
		}
	}
}

console.log(finarr)