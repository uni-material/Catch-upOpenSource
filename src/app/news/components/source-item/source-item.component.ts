import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Source} from "../../model/source.entity";

@Component({
  selector: 'app-source-item',
  standalone: true,
  imports: [],
  templateUrl: './source-item.component.html',
  styleUrl: './source-item.component.css'
})

export class SourceItemComponent {
  @Input() source!: Source;
  @Output() sourceSelected = new EventEmitter<Source>();

  onClick(){
    this.sourceSelected.emit(this.source);
  }


}
