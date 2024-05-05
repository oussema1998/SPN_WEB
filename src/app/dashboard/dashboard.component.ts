import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
<body style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <iframe title="dashboard_Bi" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=34411507-9bbf-4f50-8166-8c8fdac41e44&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730" frameborder="0" allowFullScreen="true"></iframe>
  </body>
 `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
