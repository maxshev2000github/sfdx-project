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
}