import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Adjust path as needed
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactService } from './services/contact.service'; // Adjust path as needed

@NgModule({
  declarations: [
    AppComponent,
    ContactEditComponent,
    ContactAddComponent // Ensure ContactAddComponent is declared here
    // Other components, directives, pipes
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule here for ngModel
    AppRoutingModule, // Your routing module
    RouterModule // Ensure RouterModule is imported
    // Other modules you might need
  ],
  providers: [
    ContactService // Add ContactService to providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
