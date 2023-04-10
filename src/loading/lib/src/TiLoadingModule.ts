/**
 * Copyright (c) 2022 - present TinyUI Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiIconModule } from '@opentiny/ng-icon';
import { TiLoadingComponent } from './TiLoadingComponent';
import { TiLoadingfailComponent } from './TiLoadingfailComponent';
import { TiLocale } from '@opentiny/ng-locale';
import { locales } from './i18n';

@NgModule({
  imports: [CommonModule, TiIconModule],
  exports: [TiLoadingComponent, TiLoadingfailComponent],
  declarations: [TiLoadingComponent, TiLoadingfailComponent]
})
export class TiLoadingModule {
  constructor() {
    const words = (window as any).tiWords;
    TiLocale.setTiWords(locales);
  }
}
export { TiLoadingComponent } from './TiLoadingComponent';
export { TiLoadingfailComponent } from './TiLoadingfailComponent';