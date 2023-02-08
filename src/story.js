

import{ storypartData} from  "../Data/data.js"


class StoryContainerr{

    render(){


        //creating elements
       const storycontainer=document.createElement("div");
       const storyHeadingclass=document.createElement("div");
       const storyHeading=document.createElement("h1");
       const brs1=document.createElement("br");
       const StoryContent=document.createElement("div");
       
       const storyulist=document.createElement("ul");
       const storylist1=document.createElement("li");
       const storylist2=document.createElement("li");
       const storylist3=document.createElement("li");
       const storylist4=document.createElement("li");
       const storylist5=document.createElement("li");
       const storylist6=document.createElement("li");
       const storylist7=document.createElement("li");
       const storylist8=document.createElement("li");
       const hrs1=document.createElement("hr");
       const hrs2=document.createElement("hr");

      
      //adding id and class

      storycontainer.id="STORYPART";
      storycontainer.classList.add("storypart")
      storyHeadingclass.classList.add("story_heading")
      StoryContent.classList.add("story_content")



      //adding text
      storyHeading.innerHTML=storypartData.s_heading;
    



      storylist1.innerHTML=storypartData.s_Name
      storylist2.innerHTML=storypartData.s_DOB
      storylist3.innerHTML=storypartData.s_Email
      storylist4.innerHTML=storypartData.s_Phone_No
      storylist5.innerHTML=storypartData.s_Address
      storylist6.innerHTML=storypartData.s_Qualification
      storylist7.innerHTML=storypartData.s_Stream
      storylist8.innerHTML=storypartData.s_Technical_Skills




      storycontainer.appendChild(hrs2)
      storycontainer.appendChild(storyHeadingclass)
      storyHeadingclass.appendChild(storyHeading)
      storycontainer.appendChild(brs1)
      storycontainer.appendChild(StoryContent)
      StoryContent.appendChild(storyulist)
      storyulist.appendChild(storylist1)
      storyulist.appendChild(storylist2)
      storyulist.appendChild(storylist3)
      storyulist.appendChild(storylist4)
      storyulist.appendChild(storylist5)
      storyulist.appendChild(storylist6)
      storyulist.appendChild(storylist7)
      storyulist.appendChild(storylist8)
      storycontainer.appendChild(hrs1)






       return storycontainer;


    }
    mount(element){
        if(element){
            element.appendChild(this.render())
            return
        }
        document.body.appendChild(this.render())
    }
    
    }
    
    export { StoryContainerr }