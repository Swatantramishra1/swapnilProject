import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { sharedComponents } from './components';

@NgModule({
  declarations: [...sharedComponents],
  entryComponents: [...sharedComponents],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, ...sharedComponents],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
