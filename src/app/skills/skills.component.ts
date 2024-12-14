import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  getclass(skillindex: number | null) {
    const skillindexx: string = 'class' + JSON.stringify(skillindex);
    return skillindexx;
  }
  skills: skill[] = [
    {
      name: 'HTML',
      level: 'pro',
      description:
        'Strong foundation in structuring and organizing web pages with semantic and accessible markup.',
    },
    {
      name: 'CSS',
      level: 'advanced',
      description:
        'Skilled at styling web pages with creative designs, responsive layouts, and advanced effects like transitions and animations.',
    },
    {
      name: 'JavaScript',
      level: 'intermediate',
      description:
        'Comfortable working with JavaScript to add interactivity, manipulate DOM elements, and handle events in web applications.',
    },
    {
      name: 'TypeScript',
      level: 'advanced',
      description:
        'Proficient in writing type-safe code and leveraging TypeScript’s features for cleaner and more maintainable projects.',
    },
    {
      name: 'Angular',
      level: 'pro',
      description:
        'Highly experienced in building dynamic, component-based web applications with standalone configurations and SSR.',
    },
    {
      name: 'English',
      level: 'default',
      description:
        'Improving fluency in written and spoken English with a focus on mastering punctuation and grammar.',
    },
    {
      name: 'API Management',
      level: 'advanced',
      description:
        'Gaining expertise in integrating and managing APIs, including CRUD operations and pagination techniques.',
    },
    {
      name: 'Database Management',
      level: 'beginner',
      description:
        'Familiar with database concepts, including organizing and retrieving data using Firestore and similar systems.',
    },
    {
      name: 'Python',
      level: 'beginner',
      description:
        'Starting to explore Python programming for versatile applications, from scripting to data handling.',
    },
  ];

  // sortedSkills = [...this.skills];
  sorttype: string = 'AZ';
  order: string = 'asc';
  constructor() {
    // if (typeof window !== 'undefined' && localStorage) {
    //   const savedsort = localStorage.getItem('selectedSort');
    //   const savedorder = localStorage.getItem('order');
    //   if (savedsort) this.sorttype = savedsort;
    //   if (savedorder) this.order = savedorder;
    //   this.applySorting();
    // }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const savedsort = localStorage.getItem('selectedSort');
      const savedorder = localStorage.getItem('order');
      if (savedsort) this.sorttype = savedsort;
      if (savedorder) this.order = savedorder;
      setTimeout(() => this.applySorting(), 0);
    }
  }
  saveSort() {
    localStorage.setItem('selectedSort', this.sorttype);
  }
  ordersort() {
    if (this.order === 'asc') {
      this.order = 'decs';
    } else if (this.order === 'decs') {
      this.order = 'asc';
    }
    // this.order = this.order === 'asc' ? 'desc' : 'asc';
    this.applySorting();
    localStorage.setItem('order', this.order);
  }
  applySorting() {
    let sortedSkills = [...this.skills]; // Create a new reference of the skills array

    if (this.sorttype === 'AZ') {
      sortedSkills = sortedSkills.sort((a, b) => {
        if (this.order === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    } else if (this.sorttype === 'pro') {
      const proOrder = [
        'default',
        'pro',
        'semipro',
        'advanced',
        'intermediate',
        'beginner',
      ];
      sortedSkills = sortedSkills.sort((a, b) => {
        const proA = proOrder.indexOf(a.level);
        const proB = proOrder.indexOf(b.level);
        if (this.order === 'decs') {
          return proA - proB;
        } else {
          return proB - proA;
        }
      });
    }

    this.skills = sortedSkills; // Assign the new sorted array to trigger re-render
    localStorage.setItem('selectedSort', this.sorttype);
  }

  // skillcolor(skill: {
  //   name: string;
  //   level: string | null;
  //   description: string;
  // }) {
  //   if (skill.level === 'pro') {
  //     return 'rainbow-text';
  //   } else if (skill.level === 'semipro') {
  //     return 'shiny-diamond';
  //   } else if (skill.level === 'advanced') {
  //     return 'advanced';
  //   } else if (skill.level === 'intermediate') {
  //     return 'intermediate';
  //   } else if (skill.level === 'beginner') {
  //     return 'beginner';
  //   } else {
  //     return 'default';
  //   }
  // }
}
export interface skill {
  name: string;
  level: string;
  description: string;
}
// { name: ' ', level: ' ', description: ' ' },
