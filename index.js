// Test 1 
// Sample Number 1
var section1=document.getElementById('section1');
function warnTheDeveloper(n, m, s) {
    const r = (((m + n) % n) + (s % n) - 1) % n;
    var solution = r == 0 ? n : ((r+n) % n)
    section1.innerHTML=('Sample Number 1 - '+'Warn Developer in Chair '+ solution);
}
warnTheDeveloper(4,6,2);

// Sample Number 2
var section2=document.getElementById('section2');
function warnTheDeveloper2(n, m, s) {
    const r = (((m + n) % n) + (s % n) - 1) % n;
    var solution = r == 0 ? n : ((r+n) % n)
    section2.innerHTML=('Sample Number 2 - '+'Warn Developer in Chair '+ solution);
}
warnTheDeveloper2(5,2,1);

// Sample Number 3
var section3=document.getElementById('section3');
function warnTheDeveloper3(n, m, s) {
    const r = (((m + n) % n) + (s % n) - 1) % n;
    var solution = r == 0 ? n : ((r+n) % n)
    section3.innerHTML=('Sample Number 3 - '+'Warn Developer in Chair '+ solution);
}
warnTheDeveloper3(5,2,2);

// Sample Number 4
var section4=document.getElementById('section4');
function warnTheDeveloper4(n, m, s) {
    const r = (((m + n) % n) + (s % n) - 1) % n;
    var solution = r == 0 ? n : ((r+n) % n)
    section4.innerHTML=('Sample Number 4 - '+'Warn Developer in Chair '+ solution);
}
warnTheDeveloper4(7,19,2);