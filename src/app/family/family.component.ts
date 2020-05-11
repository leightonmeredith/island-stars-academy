import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FamilyRepoService } from '../service/family-repo.service';
import { IFamily } from './family.model';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  family$: Observable<IFamily[]>;
  family: IFamily[] = [];
  selectedMember: IFamily = {
    id: 0,
    country: '',
    desc: '',
    img: '',
    name: '',
    team: ''
  };

  customOptions: any = {
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ['TODO:ADD LEFT IMG', 'TODO:ADD RIGHT IMG'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
  }

  constructor(private familyRepo: FamilyRepoService) { }

  ngOnInit(): void {
    this.family$ = this.familyRepo.getAll();

    this.family$.subscribe(result => {
      this.family = result;
    })
  }

  getBio(member: IFamily) {
    this.family.forEach(element => {
      if (element.id === member.id) {
        this.selectedMember = element;
      }
    });

  }
}
