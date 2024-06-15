import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for forms

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component'; // Assuming this is your contact form component

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent
    // Add other components here as needed
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Add ReactiveFormsModule to your imports array
    // Add other modules here as needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
