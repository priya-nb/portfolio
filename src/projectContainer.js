import{ projectpartData} from  "../Data/data.js"

import { Project_Componenet } from "./projectcomponent.js";

   class Project_Container{

    constructor(projectcarddata ){
       this.projectcarddata =projectcarddata;
       this.isMounted = false;

   
   
    }



render(){


    
            //creating elements
   const project_container=document.createElement("div");
   const prHeadingclass=document.createElement("div");
   const prHeading=document.createElement("h1");
   const projectCards=document.createElement("div");


      //adding id and text
    project_container.id="PROJECTPART"
    project_container.classList.add("PROJECT")
    prHeadingclass.classList.add("project_heading")
    projectCards.classList.add("projects_cardss")

         //adding elements

    project_container.appendChild(prHeadingclass)
    prHeadingclass.appendChild(prHeading)
    project_container.appendChild(projectCards)
   // projectCards.appendChild(projectCard1)

        //adding inner text
    prHeading.innerHTML=projectpartData.project_heading


    this.projectcarddata.forEach(element => {
        const p1 = new Project_Componenet(element);
        //educationCards.appendChild(secondbr)
       
        p1.mount(projectCards);
  
    });



return project_container;


}
mount(element){
    if (this.isMounted) return

    if(element){
        this.isMounted = true;
        element.appendChild(this.render())
        return
    }
    document.body.appendChild(this.render());
    this.isMounted = true;
    return;
  }

}

export { Project_Container }  
   