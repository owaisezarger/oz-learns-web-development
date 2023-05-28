/*
You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.
You need print if area of rectangle 1 is greater than rectangle 2.
You need print if perimeter of rectangle 1 is greater than rectangle 2.
*/
function areaAndPerimeter(L1,B1,L2,B2) {
    //write code here
    let areaOfRectangle1 = L1*B1;
    let areaOfRectangle2 = L2*B2;
    let perimeterOfRectangle1 = 2*(L1+B1);
    let perimeterOfRectangle2 = 2*(L2+B2);
    if (areaOfRectangle1 > areaOfRectangle2)
    {
            console.log(true);
    }
    else
    {
            console.log(false);
    }

    if (perimeterOfRectangle1 > perimeterOfRectangle2)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}

areaAndPerimeter(1,2,2,3);