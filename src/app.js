import{ eductionpartData,projectpartData} from  "../Data/data.js"

//Importing Classes


import { Header } from "./header.js";
import { Container } from "./container.js";
import { StoryContainerr } from "./story.js";
import { Education_Container } from "./education_container.js";
import { Project_Container } from "./projectContainer.js";



const appcreater=()=>{
//getting root
const root=document.getElementById("root")


//Creating new instances of classes 


const Header1= new Header()
const Container1=new Container()
const Storypart1=new StoryContainerr()
const edpp= new Education_Container(eductionpartData.education_cards);
const Projectpar1=new Project_Container(projectpartData.project_card);




Header1.mount(root)
Container1.mount(root)
Storypart1.mount(root)
edpp.mount(root)
Projectpar1.mount(root)




 }

appcreater()