
//import{   headerData,containerData,storypartData,eductionpartData,projectpartData  } from  "../Data/data.js"


   class Education_Componenet{

    constructor(eachcarddata){

        this.eachcarddata =eachcarddata;
        this.isMounted = false;

    }


    render(){



        const {school_name,class1,year,percentage,address} = this.eachcarddata;

        const educationCard1=document.createElement("div");
        const educationCard1_content=document.createElement("div");
        const firsth3=document.createElement("h3")
        const firstbr=document.createElement("br")
        const first_card_p1=document.createElement("p")
        const first_card_p2=document.createElement("p")
        const first_card_p3=document.createElement("p")
        const first_card_p4=document.createElement("p")
       // const secondbr=document.createElement("br")


        educationCard1.classList.add("education_card1")
        educationCard1_content.classList.add("education_card-content")


        educationCard1.appendChild(educationCard1_content)
        educationCard1_content.appendChild(firsth3)
        educationCard1_content.appendChild(firstbr)

        educationCard1_content.appendChild(first_card_p1)
        educationCard1_content.appendChild(first_card_p2)
        educationCard1_content.appendChild(first_card_p3)
        educationCard1_content.appendChild(first_card_p4)
       // educationCard1_content.appendChild(secondbr)


        //adding text
        firsth3.innerHTML=school_name;
        first_card_p1.innerHTML=class1;
        first_card_p2.innerHTML=year;
        first_card_p3.innerHTML=percentage;
        first_card_p4.innerHTML=address;


        return educationCard1;

    }
    mount(el){
        if (this.isMounted) return
        if(el){
            el.appendChild(this.render());
            this.isMounted = true;
            return;
        }
        document.body.appendChild(this.render());
        this.isMounted = true;
        return;
    }
   }

export { Education_Componenet}; 
   



  