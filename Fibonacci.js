var N=10;

var f=new Array(N);

f[0]=0;
f[1]=f[0]+1;

for(var i=2; i<N; i++){
    f[i]=f[i-1]+f[i-2];
}

alert(f);
