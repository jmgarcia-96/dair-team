import { Component, OnInit } from '@angular/core';
import { TeamConstants } from './team.constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamConstants],
})
export class TeamComponent implements OnInit {
  members: any[] = [];
  constructor(private teamConstants: TeamConstants) {
    this.members = this.teamConstants.members;
  }

  ngOnInit(): void {}
}
