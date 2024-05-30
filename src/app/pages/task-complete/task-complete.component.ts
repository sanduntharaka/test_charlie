import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-task-complete',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-complete.component.html',
  styleUrl: './task-complete.component.scss'
})
export class TaskCompleteComponent {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  signaturePad: SignaturePad;

  ngAfterViewInit(): void {
    // const signaturePad = new SignaturePad(this.canvas.nativeElement,
    //  {
    //   minWidth: 5,
    // maxWidth: 10,
    //   penColor: "rgb(66, 133, 244)"
    //  });

    //  signaturePad.addEventListener("beginStroke", () => {
    //   console.log("Signature started");
    // }, { once: true });
    // signaturePad.on()


    this.signaturePad = new SignaturePad(this.canvas.nativeElement, {
      // It's Necessary to use an opaque color when saving image as JPEG;
      // this option can be omitted if only saving as PNG or SVG
      backgroundColor: 'rgb(255, 255, 255)'
    });
    
    // Adjust canvas coordinate space taking into account pixel ratio,
    // to make it look crisp on mobile devices.
    // This also causes canvas to be cleared.
     var resizeCanvas = () => {
      const ratio =  Math.max(window.devicePixelRatio || 1, 1);

      console.log("ration", ratio)
      this.canvas.nativeElement.width = document.body.offsetWidth - 36 ;
      this.canvas.nativeElement.height = document.body.offsetWidth ;
      // this.canvas.nativeElement.getContext("2d")?.scale(ratio, ratio);
      this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }
  
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
    
  }


}
