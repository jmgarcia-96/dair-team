import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MenubarModule],
  exports: [HeaderComponent, FooterComponent],
})
export class GeneralModule {}
