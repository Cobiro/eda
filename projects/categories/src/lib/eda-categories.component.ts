import {Component, Inject} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {MatSelectionListChange} from "@angular/material/list";
import {Dispatcher} from "../../../application-bus/src/lib/dispatcher";
import {AppEvent} from "../../../application-bus/src/lib/application.event";
import {CategorySelectedEvent} from "../../../events/src/lib/category-selected.event";
import {APPLICATION_BUS} from "../../../application-bus/src/lib/application.bus";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-eda-categories',
  templateUrl: 'categories.component.html',
})
export class EDACategoriesComponent {

  public categories$ = this.categoryService.categories$;

  constructor(
    private categoryService: CategoriesService,
    @Inject(APPLICATION_BUS) private dispatcher: Dispatcher<CategorySelectedEvent>
  ) { }

  onCategorySelected($event: MatSelectionListChange) {
    const categoryName = $event.source.selectedOptions.selected[0].value;
    this.categoryService.select(categoryName);
    this.dispatcher.dispatch(new CategorySelectedEvent(categoryName));
  }
}
