import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  githubHaberLink =
    'https://github.com/Atahannos/Angular-17-News-Website-Project';
  githubBootstrapLink = 'https://github.com/Atahannos/haberDeneme';
  githubMobilLink = 'https://github.com/Enisemerci/Onlynewsproject';
  githubHaber() {
    window.open(this.githubHaberLink, '_blank');
    console.log('bastım');
  }
  githubBootstrap() {
    window.open(this.githubBootstrapLink, '_blank');
    console.log('bastım');
  }
  githubMobil() {
    window.open(this.githubMobilLink, '_blank');
    console.log('bastım');
  }
}
