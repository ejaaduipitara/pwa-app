import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { FilterComponent } from './filter/filter.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { StorageService, TelemetryService, UtilService } from '../services';
import { LangaugeSelectComponent } from './langauge-select/langauge-select.component';
import { SheetModalComponent } from './sheet-modal/sheet-modal.component';
import { AddToPitaraComponent } from './add-to-pitara/add-to-pitara.component';
import { EditRemovedModalComponent } from './edit-removed-modal/edit-removed-modal.component';
import { NewPlaylistModalComponent } from './new-playlist-modal/new-playlist-modal.component';

@NgModule({
    declarations: [
        ApplicationHeaderComponent,
        FilterComponent,
        ContentCardComponent,
        LangaugeSelectComponent,
        SheetModalComponent,
        AddToPitaraComponent,
        EditRemovedModalComponent,
        NewPlaylistModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
    ],
    exports: [
        ApplicationHeaderComponent,
        FilterComponent,
        ContentCardComponent,
        LangaugeSelectComponent,
        SheetModalComponent,
        AddToPitaraComponent,
        EditRemovedModalComponent,
        NewPlaylistModalComponent
    ],
    providers: [UtilService, TelemetryService, StorageService],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ComponentsModule { }
