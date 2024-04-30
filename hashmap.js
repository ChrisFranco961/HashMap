#!/usr/bin/node
class HashMap{
    constructor(){}

    buckets=16
    bucketcount(){
      let bucketcount=0
      
      for(let i=0;i<this.buckets;i++){
        if(this[i]!=null){
          bucketcount++
        }
      }return bucketcount
    }
     hash(key) {

        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode=hashCode%this.buckets
        }
     
        return hashCode;
      } 
    

    get(key){
     
        let hashnumber=this.hash(key)
        if(this[hashnumber]==null){
            console.log('Does not exist')
        }else {
            return this[hashnumber].value
        }
    }
    has(key){
      
        let hashnumber=this.hash(key)
        function containing(me,key){
          
          if(me==null){
             return 'False'
          }else if(me.key==key){
           return 'True'
          
          }else {
            
            return containing(me.next,key)
          }  
        }
        if(this[hashnumber]==null){
          return 'False'
        } else 
        if(this[hashnumber].key==key){
            return 'True'
          }else if(this[hashnumber].key!=key && this[hashnumber].key!=null){
           return containing(this[hashnumber].next,key)
          }
          

    }


    remove(key){
        let hashnumber=this.hash(key)
        if(this[hashnumber].key==key){
            this[hashnumber]=this[hashnumber].next
        }else {
            return 'False'
        }
    }
    length(){
      let length=0
      function checking(array){
        if(array==undefined){
          
        return}
      else{
        
      length++      
      checking(array.next)
      }  
    }
    
      for(let i=0;i<this.buckets;i++){
        
       if (this[i]!=null){
        
        length++
        checking(this[i].next)
      
    }

        } return length    }
       
    clear(){
      for(let i=0;i<this.buckets;i++){
        this[i]=null
      }
    }
    keys(){
      let keys=[]
      function checking(array){
        if(array==undefined){
          
        return}
      else{
        
      keys.push(array.key)      
      checking(array.next)
      }  
    }
    
      for(let i=0;i<this.buckets;i++){
        
       if (this[i]!=null){
        
        keys.push(this[i].key)
        checking(this[i].next)
      
    }

        } return keys    } 
     values(){
      let values=[]
      function checking(array){
        if(array==undefined){
          
        return}
      else{
        
      values.push(array.value)      
      checking(array.next)
      }  
    }
    
      for(let i=0;i<this.buckets;i++){
        
       if (this[i]!=null){
        
        values.push(this[i].value)
        checking(this[i].next)
      
    }

        } return values    }    

    entries(){
      let entries=[]
      function checking(array){
        if(array==undefined){
          
        return}
      else{
        
      entries.push({'key':array.key,
        'value':array.value})      
      checking(array.next)
      }  
    }
    
      for(let i=0;i<this.buckets;i++){
        
       if (this[i]!=null){
        
        entries.push({'key':this[i].key,
        'value':this[i].value
      })
        checking(this[i].next)
      
    }

        } return entries

    }
    increasebucket(){
     
     let ratio=((this.bucketcount()/this.buckets) *100 )
    if(ratio>75){
      let array=this.entries()
      this.buckets=this.buckets*2
      this.clear()
      for(let i=0;i<array.length;i++){
        this.set(array[i].key,array[i].value)
      }return this
    }return this
    
    }
    set(key,value){
      
      let hashnumber=this.hash(key)
      function checking (me,similar){
        if(me.key!=similar && me.next==null){
            me.next={
                'key':similar,
                'value':value
                
            }
        
          }else if(me.next!=null){
          checking(me.next,similar)
        }
        
      }
    
    
      if(this[hashnumber]==null){
      this[hashnumber]={'key':key,
    'value':value}
    this.increasebucket()}
    else if(this[hashnumber].key==key){
        this[hashnumber].value=value
      
    }else  {
    return  checking(this[hashnumber],key,this)
    }
  }

 }
        



let newmap=new HashMap
newmap.set('Carlos','Fishyyyy')
newmap.set('Filindra','raslnemer')
newmap.set('hakuna','matata')
newmap.set('Timon','Pumba')
newmap.set('pooky','mpakmpak')
newmap.set('ChrisFranco','commandosniper')
console.log(newmap.has('ChrisFranco'))
newmap.set('a','a')
newmap.set('b','b')
newmap.set('c','c')
newmap.set('d','d')
newmap.set('h','h')
newmap.set('i','i')
newmap.set('j','j')
newmap.set('k','k')