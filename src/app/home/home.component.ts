import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <body style="justify-content: center;">
<div class="typed-text" >
  <span>Bienvenue! dans votre application SPN Dashboard, merci de consulter vos rapport en clicant dessus sur "Dashboard",
vous pouvez discuter avec votre assisstan robot en appuiyant sur "Chat AI".
Bon travail!

  </span>
</div>

<img src="https://i.pinimg.com/originals/5e/78/af/5e78affab2547d678e4c5458dd931381.gif" class="col ml-auto" >

</body>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
