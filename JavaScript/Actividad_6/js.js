document.addEventListener("DOMContentLoaded", function(){
    function sucesoFibonacci(num_ele){
        let f0=0;
        let f1=1;
        let fn=f0+f1;
        let lst_fib=[f0, f1];
        const n = lst_fib.length

        for(let i=0;i<num_ele-n;i++){
            let fn=f0+f1
            lst_fib.push(fn);
            
            f0=f1;
            f1=fn;
        }

        return lst_fib;

    }


    const num_ele_usr=parseInt(prompt("Introduce cuantos numero de la secuencia quieres"))
    alert ("los primeros" + num_ele_usr + "terminos de la secuencia Fibonacci son: " + sucesoFibonacci(num_ele_usr)) 
});