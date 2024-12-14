import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  // { path: '', component: TestComponent },
  // { path: 'Skills', component: SkillsComponent },
];
