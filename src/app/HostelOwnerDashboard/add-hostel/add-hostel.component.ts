import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css';
import { HostelService } from '../../service/hostel.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrl: './add-hostel.component.css',
})
export class AddHostelComponent {

  selectedFeeType: any;
  selectedFiles: File[] = [];
  hostelForm!: FormGroup;
  HostelDetails: any = [];
  loggedUser: any;


  // ngAfterViewInit(): void {
  //   const editor = new Quill('#editor', {
  //     theme: 'snow', // Use the Snow theme for a clean interface
  //   });
  // }

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

  constructor(private fb: FormBuilder, private hostelser: HostelService) {
    this.hostelForm = this.fb.group({
      hostelname: ['', Validators.required],
      ownername: ['', Validators.required],
      hosteltype: ['', Validators.required],
      phoneno: ['', Validators.required],
      email: ['', Validators.required],
      feetype: ['', Validators.required],
      oneshare: [''],
      twoshare: [''],
      threeshare: [''],
      fourshare: [''],
      fiveshare: [''],
      advanceamount: [''],
      monthlyflatprice: [''],
      flatadvanceamount: [''],
      alphabets: [false],
      numbers: [false],
      combinationtype: [false],
      flat: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      street: ['',Validators.required],
      district: ['',Validators.required],
      pincode: ['', Validators.required],
      ac: [false],
      nonac: [false],
      washingmachine: [false],
      geyser: [false],
      gym: [false],
      parking: [false],
      hostelbus: [false],

      // hostelphotos: [null],
      instructions: ['',Validators.required],
      username: this.loggedUser ? this.loggedUser.username : '',

    });
  }

  ngOnInit(): void {
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
        this.loggedUser = JSON.parse(userProfile);
        console.log('Logged_UserData', this.loggedUser);

        // Check if username is defined before accessing
        if (this.loggedUser && this.loggedUser.username) {
            this.hostelForm.patchValue({
                username: this.loggedUser.username,
            });
        }
        console.log("Username : ",this.loggedUser.username);
    }
}
  registerHostel() {

    if (!this.loggedUser) {
      console.error('User data not found in localStorage');
      return;
    }

    const formData = new FormData();

    // Append fields to the FormData
    formData.append('', this.hostelForm.get('hostelname')?.value || '');
    formData.append('',this.hostelForm.get('ownername')?.value || '');
    formData.append('',this.hostelForm.get('hosteltype')?.value || '');
    formData.append('',this.hostelForm.get('phoneno')?.value || '');
    formData.append('',this.hostelForm.get('email')?.value || '');
    formData.append('',this.hostelForm.get('feetype')?.value || '');
    formData.append('', this.hostelForm.get('oneshare')?.value || '');
    formData.append('', this.hostelForm.get('twoshare')?.value || '');
    formData.append('',this.hostelForm.get('threeshare')?.value || '');
    formData.append('', this.hostelForm.get('fourshare')?.value || '');
    formData.append('', this.hostelForm.get('fiveshare')?.value || '');
    formData.append('',this.hostelForm.get('advanceamount')?.value || '');
    formData.append('',this.hostelForm.get('monthlyflatprice')?.value || '');
    formData.append('',this.hostelForm.get('flatadvanceamount')?.value || '');
    formData.append('', this.hostelForm.get('alphabets')?.value || '');
    formData.append('', this.hostelForm.get('numbers')?.value || '');
    formData.append('',this.hostelForm.get('combinationtype')?.value || '');
    formData.append('', this.hostelForm.get('flat')?.value || '');
    formData.append('', this.hostelForm.get('city')?.value || '');
    formData.append('', this.hostelForm.get('state')?.value || '');
    formData.append('', this.hostelForm.get('street')?.value || '');
    formData.append('', this.hostelForm.get('district')?.value || '');
    formData.append('', this.hostelForm.get('pincode')?.value || '');
    formData.append('', this.hostelForm.get('ac')?.value || '');
    formData.append('', this.hostelForm.get('nonac')?.value || '');
    formData.append('',this.hostelForm.get('washingmachine')?.value || '');
    formData.append('', this.hostelForm.get('geyser')?.value || '');
    formData.append('', this.hostelForm.get('gym')?.value || '');
    formData.append('', this.hostelForm.get('parking')?.value || '');
    formData.append('', this.hostelForm.get('hostelbus')?.value || '');
    formData.append('', this.hostelForm.get('instructions')?.value || '');
    formData.append('', this.loggedUser.username);


    // const photoInput = this.hostelForm.get('hostelphotos');
    // if (photoInput && photoInput.value && photoInput.value.files && photoInput.value.files.length > 0) {
    //   formData.append('hostelphotos', photoInput.value.files[0]);
    // }

    Object.keys(this.hostelForm.controls).forEach(key => {
      const control = this.hostelForm.get(key);
      if (control && control.value !== null && control.value !== undefined && control.value !== '') {
        formData.append(key, control.value);
      }
    });

    if(this.hostelForm.valid){
      this.hostelser.registerHostel(formData).subscribe(
        (response) => {
          console.log('Hostel registered successfully', response);
          alert("Hostel Added Successfully");
          this.hostelForm.reset();
        },
        (error) => {
          console.error('Error while registering the hostel', error);
        }
      );
    }

  }
}
