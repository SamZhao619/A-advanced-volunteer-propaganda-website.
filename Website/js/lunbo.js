function Carousel(id){
                this.screen=document.getElementsByClassName(id)[0], 
                this.ul=document.querySelector('.'+id+' ul'), 
                this.ol=document.querySelector('.'+id+" ol"), 
                this.left=document.querySelector('.'+id+" .prev"), 
                this.right=document.querySelector('.'+id+" .next"), 
                this.index=0, 
                this.timeId="",
                this.ultimer="",
                this.isLeft="",
                this.ulleft='',
                this.right.onclick=function(){
                     this.scroll();
                     console.log(this.right);
                }.bind(this);
                this.left.onclick=function(){
                    
                    if(this.index==0){
                        
                        this.index=this.ul.children.length-1; 
                        this.ul.style.left=-this.index*this.screen.offsetWidth+"px"; 
                    }
                    
                    this.index--;
                     
                    this.animationMove(this.ul,-this.index*this.screen.offsetWidth,10);
                    this.indexShow();
                }.bind(this);
            }
            Carousel.prototype.cliol=function(){

    　　　　　　for(var i=0;i<this.ol.children.length;i++){
                 
                this.ol.children[i].liIndex=i;
                                 var that=this;
                this.ol.children[i].onclick= function () {
                                    
                    that.index= this.liIndex-1;
                                   
                    that.scroll(); 
                };
            }

            }
            Carousel.prototype.scroll=function(){
                
                console.log(this)
                if(this.index==this.ul.children.length-1){
                    
                    this.index=0; 
                    this.ul.style.left=0+"px"; 
                }
                console.log(this)
                
                this.index++;
                
                
                this.animationMove(this.ul,-this.index*this.screen.offsetWidth,10);
                this.indexShow(); 
            }
            Carousel.prototype.indexShow=function(){
                console.log(this)
                for(var i=0;i<this.ol.children.length;i++){
                    if(i==this.index){
                        this.ol.children[i].classList.add("current");
                    }else{
                        this.ol.children[i].classList.remove("current");
                    }
                    
                    if(this.index==this.ul.children.length-1){
                        this.ol.children[0].classList.add("current");
                    }
                }
            }
            
            Carousel.prototype.animationMove=function(obj,target,speed){
                var c=-this.index*this.screen.offsetWidth;
                console.log("ani");
                console.log(this.ultimer);
                
                clearInterval(this.ultimer);  
                this.ultimer=setInterval(function () {
                    
                    this.ulleft=this.ul.offsetLeft; 
                   this.isLeft=this.ul.offsetLeft>c?true:false;  
                   
                   if(this.isLeft){
                       this.ulleft-=10;    
                     
                   }else{
                       this.ulleft+=10;    
                      
                   }
                   if(this.isLeft?this.ulleft>c:this.ulleft<c){
                       
                      this.ul.style.left=this.ulleft+"px";  
                     
                   }else{
                       clearInterval(this.ultimer);
                      this.ul.style.left=c+"px";
                   }
                   
                }.bind(this),speed);
            }
            Carousel.prototype.init=function(){
                var that=this;
                this.timeId=setInterval(this.scroll.bind(this),8000);
                this.cliol();
            }