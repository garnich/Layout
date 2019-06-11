const logo = document.querySelectorAll('#myLogo path');

console.log(logo);
// logo.map((item, index) => console.log(`Letter ${index} is ${item.getTotalLength()}`));
for(let i=0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}