import { Component, OnInit } from '@angular/core';
import { ApiCollectionResponse } from 'src/app/models/apiResponse';
import { CategoryDto } from 'src/app/models/categoryDto';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  categories!: Array<CategoryDto>

  constructor(private categpriesService: CategoriesService) { }

  ngOnInit() {
    this.categpriesService.getCategories().subscribe( (res: ApiCollectionResponse) => {
       if(res.isSuccessful) {
         console.log(res.data);
         this.categories = res.data;
       }
    });
  }

}
