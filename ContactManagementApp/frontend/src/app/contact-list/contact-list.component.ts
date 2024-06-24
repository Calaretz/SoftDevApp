// contact-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(data => this.contacts = data);
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(
      () => {
        // handle success, e.g., remove the contact from the local list
        this.contacts = this.contacts.filter(contact => contact.id !== id);
      },
      error => {
        // handle error
        console.error('Error deleting contact:', error);
      }
    );
  }
}
