import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.css'
})
export class SlideToggleComponent {
  checked = false;
  disabled = false;
}
