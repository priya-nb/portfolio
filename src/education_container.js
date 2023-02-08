
import{ eductionpartData} from  "../Data/data.js"

import { Education_Componenet } from "./EcardComponent.js";

   class Education_Container{

    constructor(  eachcarddata ){
       this.eachcarddata =eachcarddata;
       this.isMounted = false;

    }

    render(){
       

          //creating elements
       const edcation_container=document.createElement("div");
       const edHeadingclass=document.createElement("div");
       const edHeading=document.createElement("h1");
       
       const educationCards=document.createElement("div");
    
        const hrline=document.createElement("hr");
       edcation_container.id="EDUCATIONPART"
       edcation_container.classList.add("education_heading")
       educationCards.classList.add("education_cards")



       edHeading.innerHTML=eductionpartData.education_heading;
       edcation_container.appendChild(edHeadingclass)
       edHeadingclass.appendChild(edHeading)
       edcation_container.appendChild(educationCards);
       edcation_container.appendChild(hrline);
    

       this.eachcarddata.forEach(element => {
        const e1 = new Education_Componenet(element);
        //educationCards.appendChild(secondbr)
       
        e1.mount(educationCards);
  
    });

     //  edHeading.innerHTML=eductionpartData.education_heading;


       return edcation_container;


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
    
    export { Education_Container }   

     