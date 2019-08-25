import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { ActivatedRoute, Router } from '@angular/router'

import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '', 
    image: '',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gamesService.getGame(params.id).subscribe(
        res => {
          console.log(res);
          this.game = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
    
  }

  saveNewGame() {
    delete this.game.id;
    delete this.game.created_at;

    this.gamesService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        // navigate to the list page after saving
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

  updateGame() {
    delete this.game.created_at;

    this.gamesService.updateGame(this.game).subscribe(
      res => {
        console.log(res);
        // navigate to the list page after saving
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

}
