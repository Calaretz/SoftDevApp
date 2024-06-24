import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contactId: string;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get('id');
    if (this.contactId) {
      this.contactService.getContact(this.contactId).subscribe(data => {
        this.contactForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      if (this.contactId) {
        this.contactService.updateContact(this.contactId, this.contactForm.value).subscribe(() => {
          this.router.navigate(['/contacts']);
        });
      } else {
        this.contactService.createContact(this.contactForm.value).subscribe(() => {
          this.router.navigate(['/contacts']);
        });
      }
    }
  }
}
