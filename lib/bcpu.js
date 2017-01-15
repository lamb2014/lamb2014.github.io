window.onload=function(){
var parser = new UAParser();
var result = parser.getResult();
var cpu=result.cpu.architecture

// function bcpu(){
// return result.cpu.architecture
console.log(cpu)
// }
// bcpu()
}