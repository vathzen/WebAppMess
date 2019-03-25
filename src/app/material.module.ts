import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatCardModule, 
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        MatNativeDateModule,
        MatFormFieldModule
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
    ],
    providers: [ MatDatepickerModule ],
  })
  
  export class MaterialModule {}