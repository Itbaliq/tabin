let store={
  _state:{
    profilePage:{
      posts:[
        {stat:1,id:0,habar:"Oyn",count:4,price:"$3.00"}
      ],
      goods:[
        {stat:1,id:0,habar:"Oyn",count:3,price:"$3.00"}
      ],
      operations:[
        {id:0,price:"$3.00",goods:"{ Id: 6853| Name of item: Oyn| Count: 1| Price: $3.00 }"}
      ],
      newId:'',
      newPostText:'',
      newCount:'',
      newPrice:'',
      but1:0,
      but2:0,
      ser:'',
      ser_shop:'',
      total_price:"$0.00"

  },





},
  _callSubscriber () {
 console.log('shhh');},

  getState(){
    return this._state;},
  subscribe  (observer) {
      this._callSubscriber=observer;
    },

  dispatch(action){
    if(action.type==='ADD-POST'){
      this.del({type:"rebuild-search" });
      this.dispatch({type:"price-form",newPricee:this._state.profilePage.newPrice});
      let newPost={
        stat:1,
        id:this._state.profilePage.newId,
        habar: this._state.profilePage.newPostText,
        count: this._state.profilePage.newCount,
        price:this._state.profilePage.newPrice

      };
      this._state.profilePage.posts.push (newPost);
      this._state.profilePage.newId ='';
      this._state.profilePage.newPostText ='';
      this._state.profilePage.newCount ='';
      this._state.profilePage.newPrice ='';
    var fil =  this._state.profilePage.posts.filter(function (el) {
     return el != null;
   });
     this._state.profilePage.posts=fil;
     this._callSubscriber(this._state);
    }
    else if (action.type==='UPDATE-NEW-ID') {
      this._state.profilePage.newId =action.newIdd;
      this._callSubscriber(this._state);

    }
    else if (action.type==='UPDATE-NEW-POST-TEXT') {
      let s= action.newText.toLowerCase();
     for (const p in this._state.profilePage.posts) {
          let q = this._state.profilePage.posts[p].habar.toLowerCase();
            if (q===s){
            this._state.profilePage.newPostText =action.newText+"-Copy";
            this._callSubscriber(this._state);
            break;
          }
            else{
            this._state.profilePage.newPostText =action.newText;
            this._callSubscriber(this._state);
          }


      }
    }
    else if (action.type==='UPDATE-NEW-POST-TEXT-shop') {
      this._state.profilePage.newPostText =action.newText;
      this._callSubscriber(this._state);
       for (const p in this._state.profilePage.posts) {

         if(this._state.profilePage.posts[p].id!=0){
        if(this._state.profilePage.posts[p].habar===action.newText){
 for (const q in this._state.profilePage.goods){
if(this._state.profilePage.goods[q].id!=0){
         if(action.newText.toLowerCase()===this._state.profilePage.goods[q].habar.toLowerCase()){
           this._state.profilePage.newPostText ="";
           this._callSubscriber(this._state);
         }

}
       }
     }
     }
       }


    }
    else if (action.type==='UPDATE-NEW-COUNT') {
      if(action.newCountt>9999){
        action.newCountt=9999;
      }
      this._state.profilePage.newCount =action.newCountt;
      this._callSubscriber(this._state);

    }
    else if (action.type==='UPDATE-NEW-PRICE') {

      this._state.profilePage.newPrice =action.newPricee;
      this._callSubscriber(this._state);
    }
    else if (action.type==='update-but1') {
      this._state.profilePage.but1 =action.new;
      this._callSubscriber(this._state);
    }
    else if (action.type==='update-but2') {
      this._state.profilePage.but2 =action.new;
      this._callSubscriber(this._state);
    }
    else if (action.type==='update-ser') {
      this._state.profilePage.ser =action.new;
      this._callSubscriber(this._state);
      if(this._state.profilePage.ser!=""){
      this.del({type:"search",ser:this._state.profilePage.ser });
    }
    this._state.profilePage.ser="";
  }
  else if (action.type==='update-ser-shop') {
    this._state.profilePage.ser_shop =action.new;
    this._callSubscriber(this._state);
    if(this._state.profilePage.ser_shop!=""){
    this.del({type:"search-shop",ser:this._state.profilePage.ser_shop });
  }
  this._state.profilePage.ser="";
}
    else if (action.type==='price-form') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
      })

    this._state.profilePage.newPrice =formatter.format(action.newPricee);
    this._callSubscriber(this._state);
  }
  else if (action.type==='UPDATE-NEW-COUNT2') {
     for (const p in this._state.profilePage.posts) {
       if(action.id===this._state.profilePage.posts[p].id){
         if(this._state.profilePage.posts[p].count!=1){
         if(action.newCountt>(this._state.profilePage.posts[p].count-1)){
           this._state.profilePage.newCount =this._state.profilePage.posts[p].count-1;
         }
         else{
           this._state.profilePage.newCount =action.newCountt;
           this._callSubscriber(this._state);
         }
         }

       }
       }
}
else if (action.type==='UPDATE-NEW-COUNT2-add') {
   for (const p in this._state.profilePage.posts) {
     if(this._state.profilePage.newPostText===this._state.profilePage.posts[p].habar){

       if(action.newCountt>this._state.profilePage.posts[p].count-1){
         this._state.profilePage.newCount=this._state.profilePage.posts[p].count-1;
         this._callSubscriber(this._state);
       }
       else{
         this._state.profilePage.newCount =action.newCountt;
         this._callSubscriber(this._state);
       }

       }

     }
     }
},







  del(ac){

 if(ac.type==='delete'){
    for (const p in this._state.profilePage.posts) {
      if(this._state.profilePage.posts[p].id!=null){
      if(this._state.profilePage.posts[p].id===ac.id){
        this.del({type:"delete-shop",id:ac.id});
        this._state.profilePage.posts[p].id=0;
        this._callSubscriber(this._state);
      }}

}}
 if(ac.type==='delete-shop'){
   for (const p in this._state.profilePage.goods) {
     if(this._state.profilePage.goods[p].id!=0){
     if(this._state.profilePage.goods[p].id===ac.id){
       this._state.profilePage.goods[p].id=0;
       this._callSubscriber(this._state);
     }}

}}
 if(ac.type==='sort-pricemax'){


this._state.profilePage.posts.sort((a, b) => a.price.replace(/[^0-9.]/g,'') < b.price.replace(/[^0-9.]/g,'') ? 1 : -1);
    this._callSubscriber(this._state);

 }
 if(ac.type==='sort-pricemin'){


this._state.profilePage.posts.sort((a, b) => a.price.replace(/[^0-9.]/g,'') > b.price.replace(/[^0-9.]/g,'') ? 1 : -1);
    this._callSubscriber(this._state);

 }
 if(ac.type==='sort-pricemax-shop'){


this._state.profilePage.goods.sort((a, b) => a.price.replace(/[^0-9.]/g,'') < b.price.replace(/[^0-9.]/g,'') ? 1 : -1);
    this._callSubscriber(this._state);

 }
 if(ac.type==='sort-pricemin-shop'){


this._state.profilePage.goods.sort((a, b) => a.price.replace(/[^0-9.]/g,'') > b.price.replace(/[^0-9.]/g,'') ? 1 : -1);
    this._callSubscriber(this._state);

 }
 if(ac.type==='sort-pricemax-operations-price'){
    this._state.profilePage.operations.sort((a, b) => a.price.replace(/[^0-9.]/g,'') < b.price.replace(/[^0-9.]/g,'') ? 1 : -1);
    this._callSubscriber(this._state);
 }
 if(ac.type==='sort-pricemin-operations-price'){


this._state.profilePage.operations.sort((a, b) => a.price.replace(/[^0-9.]/g,'') > b.price.replace(/[^0-9.]/g,'') ? 1 : -1);
    this._callSubscriber(this._state);

 }
 if(ac.type==='sort-namemax'){
  this._state.profilePage.posts.sort(function sortThings(a, b) {
  let bir = a.habar.toLowerCase();
  let eqi = b.habar.toLowerCase();

  return bir < eqi ? -1 : eqi < bir ? 1 : 0;
} )
  this._callSubscriber(this._state);
 }
 if(ac.type==='sort-namemin'){
  this._state.profilePage.posts.sort(function sortThings(a, b) {
  let bir = a.habar.toLowerCase();
  let eqi = b.habar.toLowerCase();

  return bir > eqi ? -1 : eqi > bir ? 1 : 0;
} )
  this._callSubscriber(this._state);
 }
 if(ac.type==='sort-namemax-shop'){
  this._state.profilePage.goods.sort(function sortThings(a, b) {
  let bir = a.habar.toLowerCase();
  let eqi = b.habar.toLowerCase();

  return bir < eqi ? -1 : eqi < bir ? 1 : 0;
} )
  this._callSubscriber(this._state);
 }
 if(ac.type==='sort-namemin-shop'){
  this._state.profilePage.goods.sort(function sortThings(a, b) {
  let bir = a.habar.toLowerCase();
  let eqi = b.habar.toLowerCase();

  return bir > eqi ? -1 : eqi > bir ? 1 : 0;
} )
  this._callSubscriber(this._state);
 }
 if(ac.type==='sort-namemax-operations-price'){
   this._state.profilePage.operations.sort((a, b) => a.id < b.id ? 1 : -1);
       this._callSubscriber(this._state);
 }
 if(ac.type==='sort-namemin-operations-price'){
   this._state.profilePage.operations.sort((a, b) => a.id > b.id ? 1 : -1);
       this._callSubscriber(this._state);

 }
 if(ac.type==='edit'){
   this.dispatch({type:"price-form",newPricee:this._state.profilePage.newPrice});


     for (const p in this._state.profilePage.posts) {
       if(this._state.profilePage.posts[p].id!=0){
       if(this._state.profilePage.posts[p].id===ac.id){
         this._state.profilePage.posts[p].habar=this._state.profilePage.newPostText;
         this._state.profilePage.posts[p].count=this._state.profilePage.newCount;
         this._state.profilePage.posts[p].price=this._state.profilePage.newPrice;
         this.del({type:"edit-shop",id:this._state.profilePage.posts[p].id,newName: this._state.profilePage.posts[p].habar,newCount:this._state.profilePage.posts[p].count,newPrice:this._state.profilePage.posts[p].price});
         this._state.profilePage.newPostText ='';
         this._state.profilePage.newCount ='';
         this._state.profilePage.newPrice ='';
         this._callSubscriber(this._state);
       }}
     }






 }
 if(ac.type==='edit-shop'){

if( this._state.profilePage.newPostText!="" && this._state.profilePage.newCount!="" && this._state.profilePage.newPrice !="" ){
  for (const p in this._state.profilePage.goods) {
    if(this._state.profilePage.goods[p].id!=0){
    if(this._state.profilePage.goods[p].id===ac.id){
      this._state.profilePage.goods[p].habar=this._state.profilePage.newPostText;
      if(this._state.profilePage.goods[p].count>this._state.profilePage.newCount ){
        this._state.profilePage.goods[p].count=this._state.profilePage.newCount-1;
      }

      this._state.profilePage.goods[p].price=this._state.profilePage.newPrice;
      this._state.profilePage.newPostText ='';
      this._state.profilePage.newCount ='';
      this._state.profilePage.newPrice ='';
      this._callSubscriber(this._state);
    }}}
}
else{
  for (const p in this._state.profilePage.goods) {
    if(this._state.profilePage.goods[p].id!=0){
    if(this._state.profilePage.goods[p].id===ac.id){
      this._state.profilePage.goods[p].count=this._state.profilePage.newCount;
      this._state.profilePage.newPostText ='';
      this._state.profilePage.newCount ='';
      this._state.profilePage.newPrice ='';
      this._callSubscriber(this._state);
    }}}
}
 }
 if(ac.type==='search'){
   let s= ac.ser.toLowerCase();



     for (const p in this._state.profilePage.posts) {
       let q = this._state.profilePage.posts[p].habar.toLowerCase();
       if(this._state.profilePage.posts[p].id!=0){
         if (q.includes(s)===false){
         this._state.profilePage.posts[p].stat=0;
         this._callSubscriber(this._state);
       }
       }

   }



 }
 if(ac.type==='search-shop'){
      let s= ac.ser.toLowerCase();
     for (const p in this._state.profilePage.goods) {
       let q = this._state.profilePage.goods[p].habar.toLowerCase();
       if(this._state.profilePage.goods[p].id!=0){
         if (q.includes(s)===false){
         this._state.profilePage.goods[p].stat=0;
         this._callSubscriber(this._state);
       }
       }

   }



 }
 if(ac.type==='rebuild-search'){
     for (const p in this._state.profilePage.posts) {
       if(this._state.profilePage.posts[p].id!=null){
         this._state.profilePage.posts[p].stat=1;
         this._callSubscriber(this._state);
       }

   }
 }
 if(ac.type==='rebuild-search-shop'){
      for (const p in this._state.profilePage.goods) {
        if(this._state.profilePage.goods[p].id!=null){
          this._state.profilePage.goods[p].stat=1;
          this._callSubscriber(this._state);
        }

    }
  }
if(ac.type==="total_price"){
  let sum=0;
  for (const p in this._state.profilePage.goods) {
    if(this._state.profilePage.goods[p].id!=0){
      let count=this._state.profilePage.goods[p].count;
      let price=this._state.profilePage.goods[p].price.toString().replace(/[^0-9.]/g,'');
     sum=sum+(count*price);
    }
}
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
  })

this._state.profilePage.total_price =formatter.format(sum);
this._callSubscriber(this._state);
  }
if(ac.type==='add to basket'){
    let s= this._state.profilePage.newPostText.toLowerCase();
    this.del({type:"rebuild-search" });
    for (const p in this._state.profilePage.posts) {
      let q = this._state.profilePage.posts[p].habar.toLowerCase();
      if(this._state.profilePage.posts[p].id!=0){
        if (q===s){
       this._state.profilePage.newId=this._state.profilePage.posts[p].id;
       this._state.profilePage.newPrice=this._state.profilePage.posts[p].price;
        this._callSubscriber(this._state);
        let newPost={
          stat:1,
          id:this._state.profilePage.newId,
          habar: this._state.profilePage.newPostText,
          count: this._state.profilePage.newCount,
          price:this._state.profilePage.newPrice

        };
        this._state.profilePage.goods.push (newPost);
        this._state.profilePage.newId ='';
        this._state.profilePage.newPostText ='';
        this._state.profilePage.newCount ='';
        this._state.profilePage.newPrice ='';
      var fil =  this._state.profilePage.posts.filter(function (el) {
       return el != null;
      });
       this._state.profilePage.posts=fil;
       this._callSubscriber(this._state);
        this.del({type:"total_price" });
      }
      }

  }

  }
if(ac.type==='buy'){
  if( this._state.profilePage.total_price!="$0.00"){

    let id= Math.floor(Math.random(1) * Math.floor(100000));
    let goods="";


      for (const p in this._state.profilePage.goods) {

        if(this._state.profilePage.goods[p].id!=0){
            goods=goods+" { "
          goods=goods+"Id: "+this._state.profilePage.goods[p].id+"| Name of item: "+this._state.profilePage.goods[p].habar+"| Count: "+this._state.profilePage.goods[p].count+"| Price: "+this._state.profilePage.goods[p].price+" }";
          let s= this._state.profilePage.goods[p].habar.toLowerCase();
         for (const p in this._state.profilePage.posts) {
              let q = this._state.profilePage.posts[p].habar.toLowerCase();
              if(this._state.profilePage.posts[p].id!=0){
                if (q===s){
                this._state.profilePage.posts[p].count=this._state.profilePage.posts[p].count-this._state.profilePage.goods[p].count;
                this._callSubscriber(this._state);
                }
              }

          }
        }

    }
    let newPost={

      id:id,
      price:this._state.profilePage.total_price,
      goods: goods

    };
    this._state.profilePage.operations.push (newPost);
    this._state.profilePage.total_price="$0.00";
    this._state.profilePage.newId ='';
    this._state.profilePage.newPostText ='';
    this._state.profilePage.newCount ='';
    this._state.profilePage.newPrice ='';
  var fil =  this._state.profilePage.posts.filter(function (el) {return el != null;});
   this._state.profilePage.posts=fil;
   this._callSubscriber(this._state);
    for (const p in this._state.profilePage.goods) {
      if(this._state.profilePage.goods[p].id!=null){
        this._state.profilePage.goods[p].id=0;
        this._callSubscriber(this._state);
      }

}

}
}
}

}


export default store;
window.state=store;
