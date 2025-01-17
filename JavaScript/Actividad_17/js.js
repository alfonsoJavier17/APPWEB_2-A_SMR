document.addEventListener("DOMContentLoaded", function(){
    function likes(num){
        let salida=""
        if(num < 1000){
            salida+=num;

        }else if (num>=1000 && num < 1000000){
            let n= (num-(num&1000))/1000;
            salida += n +"k";
        }else{
            let n=(num-(num&1000000))/1000000
            salida += n+"M"
        }



    }
})