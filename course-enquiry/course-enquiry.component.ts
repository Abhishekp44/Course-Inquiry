import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-enquiry',
  templateUrl: './course-enquiry.component.html',
  styleUrls: ['./course-enquiry.component.css']
})
export class CourseEnquiryComponent implements OnInit {
  enquiryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      course: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      // You can perform actions like submitting the form data to a server here
      console.log(this.enquiryForm.value);
    } else {
      // Form is invalid, handle accordingly
    }
  }
}
