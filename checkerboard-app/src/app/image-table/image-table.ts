import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { NgxPrintDirective } from 'ngx-print';

@Component({
  selector: 'app-image-table',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgxPrintDirective],
  templateUrl: './image-table.html',
  styleUrl: './image-table.scss'
})
export class ImageTable {
  images: string[] = [];
  orientation: 'portrait' | 'landscape' = 'portrait';

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  setOrientation(orientation: 'portrait' | 'landscape') {
    this.orientation = orientation;
  }

  getGridIndices(): number[] {
    return this.orientation === 'portrait'
      ? Array.from({ length: 12 }, (_, i) => i)
      : Array.from({ length: 9 }, (_, i) => i);
  }

  getGridClass(): string {
    return this.orientation === 'portrait' ? 'portrait-grid' : 'landscape-grid';
  }
}
