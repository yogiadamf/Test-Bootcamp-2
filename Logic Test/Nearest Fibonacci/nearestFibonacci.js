
function nearestFibonacci(num)
{
    
    if (num == 0) {
        document.write(0);
        return;
    }

    let first = 0, second = 1;

    
    let third = first + second;

    while (third <= num) {

       
        first = second;

        
        second = third;

        
        third = first + second;
    }

    
    let ans = (Math.abs(third - num)
            >= Math.abs(second - num))
                ? second
                : third;

    
    document.write(ans - total);
}

    arr = [15,1,3];
    var total = 0;
    for(i = 0; i <arr.length; i++){
    total += arr[i];
    
    
  }
  nearestFibonacci(total);
  
    
