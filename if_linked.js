const a = 12;
if(a >= 10 && a <= 20)
    console.log('1:between 10 and 20');
else
    console.log('1: not between 10 and 20');

if (a < 10 || a > 20)
    console.log('2: not between 10 and 20');
else
    console.log('2:between 10 and 20');

if (!(a >= 10 && a <= 20))
    console.log('3:not between 10 and 20');
else
    console.log('3:between 10 and 20');
