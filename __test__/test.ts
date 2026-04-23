var st = "26.04.2013";
var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
var dt = new Date(st.replace(pattern, '$3-$2-$1'));

console.log(dt)
