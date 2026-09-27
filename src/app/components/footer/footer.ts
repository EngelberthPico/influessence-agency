import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sparkle } from '../../shared/sparkle';

@Component({
  imports: [RouterLink, Sparkle],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
}
