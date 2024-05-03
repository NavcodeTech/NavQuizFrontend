import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdashboard',
  templateUrl: './tdashboard.component.html',
  styleUrls: ['./tdashboard.component.css']
})
export class TdashboardComponent implements OnInit {

  reminderText:string="This is remider text";
  showQuizForm: boolean = false;
  constructor() { }
  isLoggedIn:boolean=false;
  ngOnInit(): void {
    
  }
  imageUrls: string[] = [];

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    
    // Clear existing images
    this.imageUrls = [];

    // Loop through selected files
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file: File = files[i];

      reader.onload = () => {
        // Add the base64 data URL to the array
        this.imageUrls.push(reader.result as string);
      };

      // Read the file as Data URL
      reader.readAsDataURL(file);
    }

    // Clear the input value to allow selecting the same file again
    event.target.value = null;
  }

  showQuizFormFunc()
  {
    this.showQuizForm = true;
    console.log('>>true');
  }

}
