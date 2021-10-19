import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {
    github: 'https://github.com/Tudo12',
    gmail: 'sharthak31@gmail.com',
    facebook: 'https://www.facebook.com/sharthak.agrawal',
  };
  constructor() {}

  ngOnInit(): void {}
}
