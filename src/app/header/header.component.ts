import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink="/home"><img height="100" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBIQEBAVFhIQFRUSGBAPEhAVDxUVFRYWFxUVFRUYHSggGCYlHRUTITUiJTUrLi4uFyAzODMsNygtLisBCgoKDg0OGxAQGi0mICMuLi0tLS0tLS0tLS0tLS0rLS0tLS0tKy0tLS0tLS0rLS0tLS03LS0tKy0tLS03Ny0tK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBAgUEA//EAEIQAAIBAgIFBwcLAgcBAAAAAAABAgMRBAYFEiExUUFhcXKBobETFCIyNFORBxYjQlKSk7LB0dKz4TNDRGJzgvBj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAMEAgEF/8QAJREAAgICAgEEAgMAAAAAAAAAAAECAwQREiExEzIzQVJhQlGB/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYuLgGQAAAAAAAAAAAAAAAAAADFwDIMC4BkAAAAxcAyDFwADm6Y0xSw0fT2ye6C3v9j24usqcJTe6EXJ9iKwxuIlWqSnLbKT3eEUZsi701peS1NXN9+DpY7NeJm3qNQXCKTfxZyammcS/wDUVOybXciX6HynTUVLELWm/qXahHm2bzuQ0PhluoU+2EX4kFTdPtyKu2uPSRWlPMOMhurz6JWl4o7eis9yUlHEwut3lKa9JdMeXsJLj8sYSqmnSUW/rU/Rkvhs+JW+YtDzwlXUk7xl6UZ2spK/DitlzmUbae97R1F129a0y28LiYVIRnTkpRkrqS3NH1K0+T7S0qdfzeT9Cte19ymle/ak102LLNtNisjsy2Q4S0YZC8xafxNHEzp05JRjq2Wqnvim9rXOTWxy8bl7DVpupUg3KVrvXmtystiduQ8uhOUdRZ7XKKe5ELea8Z7xfcj+xo824z3i+5D9iYfNLBe6f4lX+Rj5o4L3T/Eq/wAjKqL/AMi/q1fiQ55uxnvF9yH7G0M54xb5QfM4L9NpLvmhgvdP8Sr/ACPhiMlYSStFTg+MZt90rnvo3r+Q9Sp/Rz9GZ6i2o4inq/8A0p3ce2L2rvJhh68akVOEk4yV1JNNNFT6f0LUwlTVltjK7jNbmlvXM1wOzkDS7hV82k/QqXcf9s1taXC+3tOqr5KXGZzZUnHlEsQi+d8VUpxpeTnKN5SvqNq9lzEnuRP5QPUo9aXgWyXqttE6VuaIvR07iac4z8tN6rT1ZTk4tcqaZZWjMdCvSjVg7qS7U+VPoKjqHbydpvzer5Kb+iqtLbujLcn0cewxYt7T1I031JrcSy0ZMIyfUMJhleZp0lXhi6sYVpxitS0YyaSvCL3LnbLCKzzj7bW/6f04GPMbUFr+y+Mk5dnYyJjq1WrVVSpKSUItKcm7becyef5O/wDFrdSP5gUxW3X2c36U2SjMyfmtW3BfDWVyA4Coo1qUpeqpwbvwUtpZ1ekpxlCSupJxa5mrMrTSuj54eo4SWzepW2SXFfsQy4tNTRXHaacSzomxXOjMzV6CUHacFsSl6yXBS/c7+Eznh5W8pGcHzrWj8Y7e4tDJhL7Jyomvok7Irn3RtSvSpulBzlCe6K22ad/BHcwml8PV2U60G/s6yUvg9p7blZKNkdE4txeypdGaDxtOvSn5vUWpUi76u5KSv3FtIyDmqlVrSOrLHN7YAMMsTMg1ABsDAAI1n6jGWDcnvpyhJdr1X3N/Ar/Q9RxxNFrkqQ/MkS35QNLQcVhoSu9bWnZ7rbov437ER3KuDdXF0klsi/KPmUdvjqrtPn3NStWjZUtVtstpETz/AOpR60vAliInn/1KPWl4F8r4mQo+REX0BTUsVSjJXUm009zTi0zz5j0TLC1nDfB+lCXGN93Stx6sue2UOv8Aoyd5k0PHFUHD68fShLhLh0PcZKalOr9o022cbP0czJGnPL0/Izl9LSWy++UNyfPb9iVFMYWvUw1ZTXo1KctsXfetjjLvRbWidIwxNKNWG6S2rli+WL6DXj28lxfkhdXp7R7Cs84+21v+n9OBZjIvpnKbxFadXy2rr29Hybla0VHfrLgeZVcpwSR5RNRltnM+Tv8Axa3Uj+YHcy3lx4Oc5Orr66SsoatrO+/WYKURcYaaObmpS2iQHnxuBp1o6lSKkufk50+QYnG0qbSqVIRvu15JX+IoY2lN2hVhJ8Izi33FG4vpnC2uyLaRyW99Gps+xUv3SRHsZl3F09roykuNP0+5bS0rGLGeeJB+C0ciaKVqRadmtq5Hydh7MBmDFYe3k6rcV9Sb1odFnu7C0tI6JoYhWq0oy/3NekuiS2le5ryw8KvK025Um7bfWi3uu+VGadE6+4svG2FnTRL8s5op4v0GtSsldwvdNLli+Xk2b13kgKLoYiVKcakHaUGpJ86Lq0Xi1Wo06q3VIRlbg2tq7Nppxrua0/ohfVwe0epkLzFmDEUcTOnTmlGOrZasXvim+9k0K3zh7ZU6IfkiMuTjDpjHinPTDzZjPtr7kTV5txnvF9yJ88s4GnXxCp1FeLjJ2Ta2pbNqJj80cF7p/iVP3MtUbrFtSL2Sqg9NEPebsZ7xfcieTF5jxdRNOtJLhC0e9bSdfM/Be6f4lX+R9qWVsFH/ACE7facpeLKehd9yOPVr+olX4TCVK01ClFyk9to7+l8OksvKugVhKb1rOrP1mty4RXMrnYw+Gp01qwhGK4RSS7j7F6sdQ7fklZc59GEiJ5/9Sj1peBLSJfKB6lHrS8D3K+JnlHyIjOXfbKHXX6lo2Kty97XQ66LTRLC9jKZXuIPn7Qf+qprdZVEl2Kf6HGydpvzatqTf0VVpO+6MtynzcH/Ys6rTUk4yV1JNNPc09jKnzNoh4Ss4pfRyvKEub7PZuF8HCXOJ7VLnHgy2U7mxEsi6c8rDzeo/pKS9FvfKC5OleFiWo1QmpraM8ouL0xYGQdnJFM+Ya9OnUX1G4vol/dd5CtE4/wA2xNKs90ZWl1ZK0u5+Ba2kcGq1KdKW6atflT5H2OzOBoTKFOjJVK1qlRbl/lx6E9737WYraJOxSiaa7YqGmSaEk1dbntubnM0vpinhYpzu23ZQjbWfF8yPhQzRg5K/ldXmmpJrmNLsinpsgoNraR2WcXOM4rA19bljZdZtavfY+WLzhg4LZNzf2acW38XZEGzNmOeMajbUpxd1C923xk/0JXXwUWt7K11Sb2R6Rb2TKbjgcOpb3Fy7JSco9zRWWg9EzxdaNKKervnLkjDld+5Fy0qajFRirKKSS4JKyI4cXtyKZMl0jcrfOHtlToh+SJZBW+cPbKnRD8kTvN+M4xvebZK9rj1J+BY5XGSva49WfgWOe4Xx/wCjJ94ABrM4AAAIl8oHqUetLwJaRL5QPUo9aXgZ8r4mWo+REXy/7XQ66LUKr0D7XQ/5I+JaiI4PsZ3le4HLzFoiOKoyg9kl6UJcJcnY9zOqYNjimtMzptPaKXpVKmHrXXo1KUtz5HF7Uy2dC6ThiaMaseXZKPLGS3p/+4EZz7oPWXnVNbY7KiXKlun2bnzW4EfylpvzWtaT+iqWUubhLs29nYY4N0z4vwapL1I8l5LVBiMrq/EG4yGxrI2ABBdN5exlSpKo2ql92q7WXIlF7u84VfQmKjvoT7I6y7i17AyTxIye9l45EktFRR0Hi5Oyw9Tti0u+yOpo7I1eo060lTjzWlPsS2LpLIsLCOHBeT2WRJnh0TomjhqepSjZb23tlJ8ZPlPcZsDUkl0iDbfkwyFZj0BiK2JnUpwTjLVs9aK3RSex86ZNgTtqVi0zqE3B7RC8saCxFDEKpUglFRkrqUXta4Imhixk9rrVa0hObm9sAAocAAAAj2btF1cRGmqSTcW27tLetm8kIOLIKceLOoycXtEB0VlnFU8RSqShHVhOMm9eL2J7SeoWMnNVUa1qJ7Obm9sIAFTg0qRTTTV09jT3bSu9J5KxCqy8glKm9sbySaT5HfgWOLE7Koz8ncJuPg4WVqGJpUfJYiKWpshJSUrx4O3D9Qdyxk7iuK0cye3sAA9PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" alt="Logo SPN">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-between w-100" id="navbarNavDropdown">
    <ul class="navbar-nav mx-auto"> <!-- Utilisation de mx-auto pour centrer les éléments -->
      <li class="nav-item active">
        <a class="nav-link" routerLink="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/dashboard">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/chatAI">Chat AI</a>
      </li>
    
      
    </ul>
  
  </div>
</nav>






   
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}