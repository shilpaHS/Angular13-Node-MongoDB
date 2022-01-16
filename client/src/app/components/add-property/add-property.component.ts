import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private propert_service: PropertyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      size: ['', [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    // console.log('Name', form.value.name);
    this.propert_service.create(form.value)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/property']);
        },
        error => {
          console.log(error);
        });
  }
}
