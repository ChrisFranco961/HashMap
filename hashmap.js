#!/usr/bin/node
class HashMap{
    constructor(){}

    buckets=16
     hash(key,buckets) {

        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode=hashCode%buckets
        }
     
        return hashCode;
      } 
    set(key,value){
      let hashnumber=this.hash(key,this.buckets)
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
    'value':value}}
    else if(this[hashnumber].key==key){
        this[hashnumber].value=value
    }else 
    return checking(this[hashnumber],key)
  }

    get(key){
     
        let hashnumber=this.hash(key,this.buckets)
        if(this[hashnumber]==null){
            console.log('Does not exist')
        }else {
            return this[hashnumber].value
        }
    }
    has(key){
      
        let hashnumber=this.hash(key,this.buckets)
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
        let hashnumber=this.hash(key,this.buckets)
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
        this[i]={}
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

 }
        



let newmap=new HashMap
newmap.set('Carlos','Fishyyyy')
newmap.set('Filindra','raslnemer')
newmap.set('hakuna','matata')
newmap.set('Timon','Pumba')
newmap.set('pooky','mpakmpak')
newmap.set('ChrisFranco','commandosniper')
console.log(newmap.has('ChrisFranco'))
