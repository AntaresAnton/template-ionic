import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HttpClientModule} from '@angular/common/http';

import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [SQLite, SQLiteObject, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard,
    AuthenticationService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
