import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {}
