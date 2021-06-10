import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EXAMPLE_DATA } from '../../example-data'

const ELEMENT_DATA: any[] = EXAMPLE_DATA;

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'links', 'content'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'content': return item.attributes.content;
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data, filter: string)  => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter.toLocaleLowerCase()) != -1;
    };
  }

  public doFilter = (eventTarget: any) => {
    const value = eventTarget.value;
    this.dataSource.filter = value;
  }
}
