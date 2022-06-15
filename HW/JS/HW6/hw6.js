class Vector {

    constructor(array) {
      this.a = array
    }
  
    length() {
      let n=0;
      for (let x=0;x<this.a.length;x++){
      n+= this.a[x]*this.a[x];
      }
      return Math.sqrt(n);
    }
  
    neg() {
      let n=new Vector([]);
          for (let x=0;x<this.a.length;x++){
             n.a.push(-this.a[x])
              }
          return n;
    }
  
    add(p2) {
      var n=new Vector([]);
      for (let x=0;x<this.a.length;x++){
      n.a.push(this.a[x]+p2.a[x]);
      }
      return n;
    }
    
  
    sub(p2) {
      return this.add(p2.neg())
    }
  
    dot(p2) 
    {
      let n=0;
      for (let x=0;x<this.a.length;x++){
      n+= this.a[x]*p2.a[x];
      }
      return n;
    }
  
    distance(p2) {
      return this.sub(p2).length()
    }
  
    toString() {
      return this.a.toString()
    }
  }
  
  
  let p = new Vector([2,3]), p2 = new Vector([1,2])
  console.log(p)
  console.log(p.toString())
  console.log(p+'')
  console.log('p.length()=', p.length())
  console.log('p.sub(p2)=', p.sub(p2))
  console.log('p.dot(p2)=', p.dot(p2).toString())
  console.log('p.sub(p2).length()=', p.sub(p2).length())
  console.log('p.distance(p2)=', p.distance(p2))
