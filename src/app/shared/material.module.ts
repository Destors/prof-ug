import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
