function clock()
{
    function time()
    {
        var mainClock = new Date(); //Instacia o objeto date do javaScript;
        var hora = mainClock.getHours(); //Instacia o objeto hora;
        var minutos = mainClock.getMinutes(); //Instacia o objeto minuto;
        var segundos = mainClock.getSeconds(); //Instancia o objeto segundo;
    
        if(hora < 10)
        {
            hora = "0"+hora;
        }
        
        if(minutos < 10)
        {
            minutos = "0"+minutos;
        }
    
        if(segundos < 10)
        {
            segundos = "0"+segundos;
        }
    
    
        var clockResult = hora+":"+minutos+":"+segundos;
    
        var clock = document.getElementById("clock");
        clock.innerHTML = clockResult;
    }

    setInterval(time,1000)
}

window.onload = clock();