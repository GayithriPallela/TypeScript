let st = "hello";
let freq:any = {};

for(let ch of st) {
    freq[ch] = (freq[ch] || 0) + 1;
}

console.log(freq);
