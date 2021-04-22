import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'Zero to Hero'
    title = 'aura'
  
    //method
    // getFullName(event){

    // }
    changeHandler(event){
        this.title = event.target.value
    }

    address = {
        city:'Moscow',
        zipcode:109044,
        country:'Russia'
    }

    trackHandler(event){
        this.address ={...this.address,"city": event.target.value.toUpperCase()
    }}
    
    // getter example

    users = ["max", "oleg", "alla","angel"];
    num1 = 6
    num2 = 13
    get getUserZero(){
        return `All users combined: ${this.users.join(' | ').toLocaleUpperCase()}`
    }

    get multiply(){
        return this.num1*this.num2
    }
}