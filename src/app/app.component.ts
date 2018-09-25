import { Component } from '@angular/core';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  downloadPDF() {
    const doc = new jspdf();
    doc.text("first line", 10, 20);
    doc.save('test.pdf');
  }
}
