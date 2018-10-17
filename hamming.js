const stringInput = document.getElementById('number');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const regexNum = /[0-9]/;


    const hammingDistance = (str) => {
    	let count = 0;
    	let strSplit = str.split(',');

       	let [str1, str2] = strSplit;

    	str1 = str1.trim();
    	str2 = str2.trim();

    	// console.log(str1,str2);
    	// console.log(str1.length,str2.length);

    	for(let i = 0; i < str1.length; i++) {
    		if(str1[i] !== str2[i]) {
    			count++;
    		}
    	}
    	console.log(count);
    	return count;
    }

    // hammingDistance('10011, 10100');
    // hammingDistance('helloworld, worldhello');

btn.addEventListener('click', hammingDistance);
stringInput.addEventListener('change', hammingDistance);

const para = document.querySelector('.left');
    const timeIn = () => {
    let period = new Date().toLocaleTimeString();
    para.innerHTML = '<h1>' + period + '</h1>';
      };

    setInterval(timeIn, 1000);