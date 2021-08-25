import { Component, OnInit } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { concatMap, map, pairwise, switchMap, takeUntil } from 'rxjs/operators';
import * as $ from 'jquery';

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

@Component({
  selector: 'app-annotate',
  styles: [
    `
      mat-card {
        width: 400px;
        box-sizing: border-box;
        margin: 16px;
      }

      .card-container {
        position: fixed;
        top: 70px;
        bottom: 0;
        display: flex;
        flex-flow: row wrap;
      }
    `,
  ],
  template: `
    <div class="card-container">
      <mat-card>
        <app-line *ngFor="let line of lines" [line]="line"></app-line>
        <app-doc></app-doc>
      </mat-card>
    </div>
  `,
})
export class AnnotateComponent implements OnInit {
  lines: Line[] = [];

  ngOnInit() {
    // -------------------------------------------------------------------
    // CHALLENGE: Annotate over the document
    // -------------------------------------------------------------------
    // Create the streams needed to draw a line
    // Sequence them appropriately
    // Helper functions have been given to help keep you focused
    // -------------------------------------------------------------------

    var mouseDown = fromEvent(document, 'mousedown');
    var mouseMove = fromEvent(document, 'mousemove');
    var mouseUp = fromEvent(document, 'mouseup');

    mouseDown.pipe(
      concatMap(() =>
        mouseMove.pipe(
          map((e: MouseEvent) => this.generatePosition(e)),
          pairwise(),
          map(([e1, e2]) => this.generateCoordinates(e1, e2)),
          takeUntil(mouseUp)
        )
      )
    ).subscribe(line=> this.lines = [...this.lines, line]);
  }

  generatePosition(e: MouseEvent) {
    const offset = $(e.target).offset();
    return {
      x: e.clientX - offset.left,
      y: e.pageY - offset.top,
    };
  }

  generateCoordinates(start, end): Line {
    return { x1: start.x, y1: start.y, x2: end.x, y2: end.y };
  }
}
