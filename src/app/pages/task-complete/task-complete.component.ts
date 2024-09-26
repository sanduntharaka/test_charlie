import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import SignaturePad from 'signature_pad';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { OdooSerializableInterface } from '../../shared/interfaces/odoo-serializable-interface';
import { ProjectTask } from '../../models/project-task.model';

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

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  signaturePad: SignaturePad;
  id:number;
  constructor(private odooEm: OdooEntityManager,private route: ActivatedRoute,private router: Router){

  }

  ngOnInit(): void {
    // Subscribe to the route parameters to get the ID
    this.route.params.subscribe(params => {
      this.id = +params['id']; // The '+' operator converts the string to a number
      console.log('Received ID:', this.id);
      // Now you can use the ID as needed
    });
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
  onSubmit()
  {
    const jsonFields = this.prepareJsonFields();
    const serializedObj = this.getSerializedObj();
    this.odooEm.update<ProjectTask>(serializedObj, jsonFields).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(['/task-list']);
        }
      },
      error: (error) => {
        // Handle error
        console.error('Update failed', error);
      },
    });

  }

  prepareJsonFields() {
    return {
      inizio: this.formModel.inizio,
      fine: this.formModel.fine,
      note: this.formModel.note,
      nomeCognome: this.formModel.nomeCognome
    };
  }

  getSerializedObj(): OdooSerializableInterface<any> {
    return {
      ODOO_MODEL: 'project.task', // Replace with your actual Odoo model name
      id: this.id, 
      deserialize: (data: any) => {
        return data;
      },
      fields: () => ['inizio', 'fine', 'note', 'nomeCognome'] // Implement fields method
    } as OdooSerializableInterface<any>; // Ensure it casts to the right interface
  }

  // Optional: Reset signature method if needed
  onResetSignature() {
    this.signaturePad.clear()
  }


}
