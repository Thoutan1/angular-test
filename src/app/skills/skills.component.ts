import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: 'My Skiils :)',
    subTitle: 'Masih Mikir Fullstack atau tidak',
    skills: [
      '⚡ Membuat Sebuah Bot Whatsaap, Discord, Telegram',
      '⚡ Menjadi Backend Developer Or Backend',
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
