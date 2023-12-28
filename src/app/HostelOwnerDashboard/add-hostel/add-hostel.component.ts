import { Component } from '@angular/core';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrl: './add-hostel.component.css'
})
export class AddHostelComponent {
selectedFeeType: any;
selectedFiles: File[] = [];

ngAfterViewInit(): void {
  const editor = new Quill('#editor', {
    theme: 'snow', // Use the Snow theme for a clean interface
  });
}

onFileChange(event: any): void {
  // Clear the previously selected files
  this.selectedFiles = [];

  // Get the selected files from the event
  const files: FileList = event.target.files;

  // Process each selected file
  for (let i = 0; i < files.length; i++) {
    const file: File = files[i];
    this.selectedFiles.push(file);
  }
}





}
