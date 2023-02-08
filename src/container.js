import{   headerData,containerData,storypartData,eductionpartData,projectpartData  } from  "../Data/data.js"


class Container{

    render(){


        //creating elements
       const Fullcontainer=document.createElement("div");
       const contentSection=document.createElement("div");
       const Title=document.createElement("div");
       const Title_heading=document.createElement("h1");
       const Content=document.createElement("div");
       const subHeading=document.createElement("h1");
       const p1=document.createElement("p");
       const p2=document.createElement("p");
       const p3=document.createElement("p");
       const p4=document.createElement("p");
       const p5=document.createElement("p");
       const p6=document.createElement("p");
       const br1=document.createElement("br");
       const Image=document.createElement("div");
       const img=document.createElement("img");
    

       //adding ids and classes
      
       Fullcontainer.id="start";
       Fullcontainer.classList.add("container");
       contentSection.classList.add("content-section");
       Title.classList.add("title");
       Content.classList.add("ct");
       Image.classList.add("img-section");


       //adding innerText

       Title_heading.innerHTML=containerData.content_section["main-heading"];
       p1.innerHTML=containerData.content_section.p11;
       p2.innerHTML=containerData.content_section.p12;
       p3.innerHTML=containerData.content_section.p13;
       p4.innerHTML=containerData.content_section.p14;
       p5.innerHTML=containerData.content_section.p15;
       p6.innerHTML=containerData.content_section.p16;

   
      img.src=containerData["image-section"]

       //adding elements
       Fullcontainer.appendChild(contentSection);
       Fullcontainer.appendChild(Image);
       contentSection.appendChild(Title);
       Title.appendChild(Title_heading);
       contentSection.appendChild(Content);
       Content.appendChild(subHeading);
       Content.appendChild(p1);
       Content.appendChild(p2);
       Content.appendChild(p3);
       Content.appendChild(p4);
       Content.appendChild(p5);
       Content.appendChild(p6);
       Fullcontainer.appendChild(br1);
       Image.appendChild(img);
     



       return Fullcontainer;


    }
    mount(element){
        if(element){
            element.appendChild(this.render())
            return
        }
        document.body.appendChild(this.render())
    }
    
    }
    
    export{ Container }
