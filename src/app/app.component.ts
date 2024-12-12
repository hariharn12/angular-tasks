import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';
import { CommonModule } from '@angular/common';
import { DataService } from './service/data.service';
import { HoverBackgroundDirective } from './custom directives/hover-background.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoxesComponent, HoverBackgroundDirective ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tasks';

  posts: any;
  user: any;
  dataService = inject(DataService);

  async fetchPosts(): Promise<void> {
    try {
      this.posts = await this.dataService.getPosts();
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  }

  async getuser() {
    try {
      this.user = await this.dataService.fetchuser();
    } catch (error) {
      console.error(error);
    }
  }
  
  ngOnInit(): void {
    this.fetchPosts();
    this.getuser();
  }
}
