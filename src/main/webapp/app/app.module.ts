import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DpsLaenderverzeichnisSharedModule } from 'app/shared/shared.module';
import { DpsLaenderverzeichnisCoreModule } from 'app/core/core.module';
import { DpsLaenderverzeichnisAppRoutingModule } from './app-routing.module';
import { DpsLaenderverzeichnisHomeModule } from './home/home.module';
import { DpsLaenderverzeichnisEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DpsLaenderverzeichnisSharedModule,
    DpsLaenderverzeichnisCoreModule,
    DpsLaenderverzeichnisHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DpsLaenderverzeichnisEntityModule,
    DpsLaenderverzeichnisAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class DpsLaenderverzeichnisAppModule {}
