import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecapComponent } from './recap/recap.component';
import { FormsModule } from '@angular/forms';
import { InputInvalidDirective } from './input-invalid.directive';
import { TelephoneFormatPipe } from './telephone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormComponent,
    RecapComponent,
    InputInvalidDirective,
    TelephoneFormatPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
