import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    debugger;

    const parsedUrl: [string, string][] = this.route.snapshot.fragment
      .split('&')
      .map(o => o.split('=') as [string, string]); // necessary typing

    // dunno if useful but it works out real nice.
    const urlParamMap: Map<string, string> = new Map(parsedUrl);
  }

}
