import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  githubLink = 'https://github.com/Atahannos';
  linkedinLink = 'https://www.linkedin.com/in/atahangune/';
  instagramLink = 'https://github.com/Atahannos';

  github() {
    window.open(this.githubLink, '_blank');
    console.log('bastım');
  }
  linkedin() {
    window.open(this.linkedinLink, '_blank');
    console.log('bastım');
  }
  instagram() {
    window.open(this.instagramLink, '_blank');
    console.log('bastım');
  }
}
