function get3And5 ()
{
    for(i=1; i<=100; i++)
    {
       
            if (i % 3 == 0 && i % 5 == 0)
            {
                console.log(i+"   Jackpot!"); 
            }
            else if (i % 3 == 0) 
            { 
                console.log(i+ "   This is divisible by 3"); 
            }
            else if (i % 5 == 0) 
            {
                console.log(i +"   This is divisible by 5");
            }
            else console.log(i);
        }
        
    }   

get3And5();