import { Component, OnInit } from '@angular/core';
import { ConfigService } from './core/services/config.service';

/**
 * Creación de documentación de ejemplo
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Ejemplo documentar título
   *
   */
  public title = 'trangular';

  constructor(private configService: ConfigService) {
    // Cargamos de ejemplo la configuración del proyecto
    console.log(this.configService.getConfig());
  }

  ngOnInit() {
    console.log('Init app component');
  }

}
