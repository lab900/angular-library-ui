import { Component, Input } from '@angular/core';
import { BreadCrumb } from '../../models/bread-crumb.model';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent {
  @Input()
  public breadCrumbs: BreadCrumb[];

  @Input()
  public data?: any;

  public getTitle(title: ((data: any) => string) | string): string | null {
    return readPropValue(title, this.data);
  }

  public getRoute(route: ((data: any) => string) | string): string | null {
    return readPropValue(route, this.data);
  }

  public getQueryParams(
    queryParams: ((data: any) => object) | object | undefined
  ): object | null {
    return readPropValue(queryParams, this.data);
  }
}
