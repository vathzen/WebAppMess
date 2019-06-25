import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatCardModule, 
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatSelectModule
        } from '@angular/material';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
    imports: [
      MatButtonModule,
      MatCardModule, 
      MatDatepickerModule,
      MatIconModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      MatTabsModule,
      MatSelectModule
    ],
    exports: [
      MatButtonModule,
      MatCardModule, 
      MatDatepickerModule,
      MatIconModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      MatTabsModule,
      MatSelectModule
    ],
    providers: [ MatDatepickerModule, MatSelectModule],
  })
  
  export class MaterialModule {}