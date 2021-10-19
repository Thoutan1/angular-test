import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: 'Contact Me ☎️',
    subtitle: 'Contact di bawah ini',
    number: '-',
    email_address: 'firgaming22@gmail.com',
  };
  constructor() {}

  ngOnInit(): void {}
}
