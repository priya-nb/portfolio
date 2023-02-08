

    class Project_Componenet{

        constructor(eachprojectcarddata){
    
            this.eachprojectcarddata =eachprojectcarddata;
            this.isMounted = false;
    
        }


    render(){

const {project_content_heading,project_details}=this.eachprojectcarddata;

        //creating elements
  
      const projectCard1=document.createElement("div");
      const projectCard1_heading=document.createElement("div");
      const prheading_content1=document.createElement("h2");
      const projectCard1_content=document.createElement("div");
      const first_prcard_p1=document.createElement("p")
      
      //const firstbreak=document.createElement("br")
      


      //adding id and text
  
      projectCard1.classList.add("project_card2")
      projectCard1_heading.classList.add("project_cardheader")
      projectCard1_content.classList.add("project_heading")
      
    

      //adding elements

 
      projectCard1.appendChild(projectCard1_heading)
      projectCard1_heading.appendChild(prheading_content1)
      projectCard1.appendChild(projectCard1_content)
      projectCard1_content.appendChild(first_prcard_p1)
     


      //adding inner text
   
       prheading_content1.innerHTML=project_content_heading;
       first_prcard_p1.innerHTML=project_details;

     
        
      return projectCard1;
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
    
   
   
   export { Project_Componenet }  