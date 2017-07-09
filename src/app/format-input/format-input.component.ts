import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-format-input',
  templateUrl: './format-input.component.html',
  styleUrls: ['./format-input.component.css']
})
export class FormatInputComponent implements OnInit {
  employmentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employmentForm = this.fb.group({
      price: [],
      ssn: [],
      date: [],
      cap: [],
    });
  }

}
