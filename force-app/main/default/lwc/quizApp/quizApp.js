import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected ={};
    correctAnswers = 0;
    isSubmitted = false;

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
        console.log('this.selected',this.selected);
        console.log('Object.values(this.selected)',Object.values(this.selected));

    }

    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item =>{
            return this.selected[item.id]===item.correctAnswer;
        });
        console.log('correct',correct);
        this.correctAnswers = correct.length;
        console.log('this.correctAnswers',this.correctAnswers);
        this.isSubmitted = true;
    }

    resetHandler(){
        this.selected = {};
        this.correctAnswers = 0 
        this.isSubmitted = false;      
    }

    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
    }
}