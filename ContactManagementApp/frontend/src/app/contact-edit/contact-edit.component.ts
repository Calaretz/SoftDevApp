// contact-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact'; // Adjust path as per your project structure
import { ContactService } from '../services/contact.service'; // Adjust path as per your project structure

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // Parse route parameter 'id' as number
    const id = +this.route.snapshot.paramMap.get('id'); // Ensure id is parsed as a number

    // Fetch contact data from service
    this.contactService.getContact(id).subscribe((data: Contact) => {
      this.contact = data;
    });
  }

  updateContact(): void {
    // Ensure contact.id is of type number
    if (typeof this.contact.id !== 'number') {
      console.error('Contact ID must be a number');
      return;
    }

    // Call service to update contact
    this.contactService.updateContact(this.contact.id, this.contact).subscribe(
      () => {
        console.log('Contact updated successfully!');
      },
      (error) => {
        console.error('Error updating contact:', error);
      }
    );
  }
}
