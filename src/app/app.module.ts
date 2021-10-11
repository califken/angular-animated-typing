import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TyperService } from './typer.service';
import { TyperComponent } from './typer/typer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TyperComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TyperService]
})
export class AppModule { }
