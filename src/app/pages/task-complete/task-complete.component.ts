import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import SignaturePad from 'signature_pad';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { ProjectTask } from '../../models/project-task.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-task-complete',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './task-complete.component.html',
  styleUrl: './task-complete.component.scss'
})
export class TaskCompleteComponent {
  formModel = {
    inizio: '',
    fine: '',
    note: '',
    nomeCognome: ''
  };

  task: ProjectTask
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  signaturePad: SignaturePad;
  id:number;
  constructor(private odooEm: OdooEntityManager,private route: ActivatedRoute,private router: Router){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.load();
  }

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
      this.canvas.nativeElement.width = 300
      this.canvas.nativeElement.height = 125 ;
      // this.canvas.nativeElement.getContext("2d")?.scale(ratio, ratio);
      this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  }

  async load() {
    let t = await firstValueFrom(this.odooEm.search<ProjectTask>(new ProjectTask, [
      ["id", "=", this.id]
    ]))
    this.task = t[0]
  }
  onSubmit()
 {
    this.odooEm.update<ProjectTask>(this.task, {
      description: this.formModel.note
    })
    this.router.navigate(['/task-list']);
  }

  // Optional: Reset signature method if needed
  onResetSignature() {
    this.signaturePad.clear()
  }


}
