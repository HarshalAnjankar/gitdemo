import { LightningElement } from 'lwc';

export default class OneWayDataBinding extends LightningElement {

  /***Data binding example */
  fullname = "zero to Hero"
  title="aura"

  changeHandler(event){
    this.title = event.target.value
  }
}