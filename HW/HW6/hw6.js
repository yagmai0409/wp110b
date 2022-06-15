class point
{
    constructor(array)
    {
        this.a = array;
    }

    length()
    {
        let n = 0;
        for (let i = 0 ; i < this.a.length ; i++) n = n + this.a[i] * this.a[i];
        return Math.sqrt(n);
    }

    neg()
    {
        let a8 = [];
        for (let i=0 ; i < this.a.length ; i++) a8[i]=this.a[i] * -1;
        return a8;
    }

    add(p2)
    {   
        let a9 = [];
        for (let i = 0 ; i < this.a.length ; i++) a9[i] = this.a[i] + p2[i];
        return a9;
    }

    sub(p2)
    {
        let a10=[];
        for(let i = 0 ; i < this.a.length ; i++) a10[i] = this.a[i] - p2.a[i];
        return new point(a10);
    }

    dot(p2)
    {
        let m = 0;
        for(let i=0;i < this.a.length ; i++) m = m + this.a[i] * p2.a[i];
        return m;
    }

    distance(p2)
    {
        return this.sub(p2).length();
    }

    toString()
    {
        return '(' + this.a + ')';
    }
}
let p = new point([2,3]);
let p2 = new point([1,2]);
console.log(p.toString());
console.log(p.length().toString());
console.log(p.sub(p2).toString());
console.log(p.distance(p2).toString());
console.log(p.dot(p2).toString());
