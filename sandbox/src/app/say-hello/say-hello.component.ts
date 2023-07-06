import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.scss']
})
export class SayHelloComponent  implements OnInit{

  name=''

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // Dans le cas ou la valeur 'name' n'est pas changeante.
    this.name = this.activatedRoute.snapshot.paramMap.get("name") ?? ''

    //Sinon
    this.activatedRoute.paramMap.subscribe( v => {
      console.log(v.get("name"))
      this.name = v.get('name') ?? ''
    })
  }

}
