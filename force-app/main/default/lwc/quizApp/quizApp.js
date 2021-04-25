import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected ={};
    myQuestions = [
        {
            id: "Question1",
            question: "Which of the following is not a template loop",
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    changeHandler (event){
        // console.log('name',event.target.name);
        // console.log('value',event.target.value);
        // console.log(event.target);
        const {name,value} = event.target;
        // console.log('name',name);
        // console.log('value',value);
        this.selected = {...this.selected,[name]:value};
        // console.log('this.selected',this.selected);
        console.log('Object.keys(this.selected)',this.selected);

    }

    submitHandler(){

    }

    resetHandler(){
        
    }

    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }
}