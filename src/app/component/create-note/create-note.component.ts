import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  description:string;
  tittle: string;
  colors:any;
  isOpen=true;

  public show: boolean= true;
  public buttonName: any = "Tittle";
  constructor() {
    this.tittle = "",
    this.description = ""
  }

  @Output() refreshNote = new EventEmitter<any>();


  ngOnInit(): void {}

  onClick() {
    this.show=!this.show;
    if(this.show)
      this.buttonName = "Take A note";
    else
      this.buttonName = "Tittle";
  }
  closeWiondow() {
    this.show = !this.show;
    if(this.show)
      this.buttonName="Take a note";
    else
      this.buttonName="Tittle";
    console.log('Closing');
    this.addNote()
  }
  addNote():void{
    let obj = {
      "title": this.tittle,
      "description": this.description,
      "color": this.colors
    }

  }
}
