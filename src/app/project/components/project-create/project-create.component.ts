import { getDraftProject } from './../../reducers/selectors';
import { Project } from './../../../core/models/project';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../../app.state';
import { ProjectActions } from './../../actions/project.actions';
import { ProjectState } from './../../reducers/project.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  draftProject$: Observable<Project>;
  selectedTab: number;

  constructor(private store: Store<AppState>, private actions: ProjectActions) {
    this.selectedTab = 1;
    this.draftProject$ = this.store.select(getDraftProject);
  }

  ngOnInit() {
    this.store.dispatch(this.actions.initDraftProject());
  }

  changeTab(tab: number) {
    this.selectedTab = tab;
  }

  incrementTab() {
    this.selectedTab++;
  }

}
