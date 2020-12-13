import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { LoadDataPageComponent } from './pages/load-data-page/load-data-page.component';
import { DmRowPageComponent } from './pages/data-management/dm-row-page/dm-row-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';
import { StatisticPanelComponent } from './components/statistic-panel/statistic-panel.component';
import { SaGeneralPageComponent } from './pages/statistic-analysis/sa-general-page/sa-general-page.component';
import { DmAttributePageComponent } from './pages/data-management/dm-attribute-page/dm-attribute-page.component';
import { CellRendererCheckboxComponent } from './components/grid/cells/cell-renderer-checkbox/cell-renderer-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    LoadDataPageComponent,
    DmRowPageComponent,
    MainMenuComponent,
    HomePageComponent,
    GuidePageComponent,
    StatisticPanelComponent,
    SaGeneralPageComponent,
    DmAttributePageComponent,
    CellRendererCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([
      CellRendererCheckboxComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
