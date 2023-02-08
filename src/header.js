import{ headerData} from  "../Data/data.js"



class Header{


    render(){



    //creating elements

    const header=document.createElement("header");
    const header_name=document.createElement("h1");
    const navbar=document.createElement("nav");
   const ulist=document.createElement("ul");
    const list1=document.createElement("li");
    const list2=document.createElement("li");
    const list3=document.createElement("li");
    const list4=document.createElement("li");
    const anchor1=document.createElement("a");
    const anchor2=document.createElement("a");
    const anchor3=document.createElement("a");
    const anchor4=document.createElement("a");
     
    
    
    //adding ids and classes


    header.classList.add("main-header");


    //adding elements

    header.appendChild(header_name)
    header.appendChild(navbar)
    navbar.appendChild(ulist)
    ulist.appendChild(list1)
    list1.appendChild(anchor1)
    ulist.appendChild(list2)
    list2.appendChild(anchor2)
    ulist.appendChild(list3)
    list3.appendChild(anchor3)
    ulist.appendChild(list4)
    list4.appendChild(anchor4)

    //adding innertext

    header_name.innerHTML=headerData.heading;

    anchor1.innerHTML=headerData.navBar[0].title;
    anchor2.innerHTML=headerData.navBar[1].title;
    anchor3.innerHTML=headerData.navBar[2].title;
    anchor4.innerHTML=headerData.navBar[3].title;


    anchor1.href=headerData.navBar[0].href;
    anchor2.href=headerData.navBar[1].href;
    anchor3.href=headerData.navBar[2].href;
    anchor4.href=headerData.navBar[3].href;

 



    return header;


}

  

mount(element){
    if(element){
        element.appendChild(this.render())
        return
    }
    document.body.appendChild(this.render())
}

}

export{Header}



    