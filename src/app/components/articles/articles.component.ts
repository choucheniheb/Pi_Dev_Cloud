import { Component } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  allArticles:any;

  constructor(private articleService: ArticleService) {}

  ngOnInit(){
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleService.getAllArticles().subscribe(res=>{
      console.log(res);
      this.allArticles = res;
    }, error=>{
      console.log("Error while fetching articles");
    })
  }
}
