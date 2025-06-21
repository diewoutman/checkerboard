import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageTable } from './image-table/image-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'checkerboard-app';
}
