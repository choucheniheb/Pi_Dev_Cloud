import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Service } from '../service'; // Update the path as needed
import { ServiceService } from '../service/service.service'; // Update the path as needed

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent {
  updateServiceForm: FormGroup;
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { service: Service },
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ServiceUpdateComponent>,
    private serviceService: ServiceService
  ) {
    this.updateServiceForm = this.formBuilder.group({
      serviceName: [data.service.service_name, Validators.required],
      serviceDescription: [data.service.service_description, Validators.required]
    });
  }

  updateService(): void {
    if (this.updateServiceForm.invalid) {
      return;
    }
  
    const updatedServiceData: Service = {
      serviceid: this.data.service.serviceid,
      service_name: this.updateServiceForm.value.serviceName,
      service_description: this.updateServiceForm.value.serviceDescription,
      subject: this.data.service.subject // You might want to handle subject update logic here if needed
    };
  
    console.log('id update:', updatedServiceData.serviceid);
  
    this.serviceService.updateService(updatedServiceData.serviceid, updatedServiceData).subscribe(
      (response: any) => {
        console.log('Service updated successfully:', response);
        this.data.service = updatedServiceData; // Update the data object with the new service details
        this.dialogRef.close(true); // Close dialog with true to indicate success
        
      },
      (error: any) => {
        console.error('Error while updating service:', error);
      }
    );
  }

  cancelUpdate(): void {
    this.dialogRef.close(); // Close dialog without indicating success
  }
}
