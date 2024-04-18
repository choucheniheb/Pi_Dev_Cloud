import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent {
  articleId=this.activatedRoute.snapshot.params['id'];
  articleData:any;
  comments:any;

  commentForm!: FormGroup;

  constructor(private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private commentService: CommentService){}

    ngOnInit(){
      console.log(this.articleId);
      this.getArticleById();
      this.getCommentsByArticleId();

      this.commentForm = this.fb.group({
        content: [null, Validators.required],
      })
    }

    publishComment(){
      const content = this.commentForm.get('content')?.value;
      console.log(this.commentForm.get('content')?.value);
      console.log(this.articleId);
      
      this.commentService.createNewComment(this.articleId,content).subscribe(res=>{
        console.log("Comment Published Successfully","ok");
        this.ngOnInit();
      },error=>{
        console.log("Something Went Wrong!!!");
      })
    }

    getArticleById(){
      this.articleService.getArticleById(this.articleId).subscribe(res=>{
        this.articleData = res;
        console.log(res);
      } ,error=>{
        console.log("Article not found")
      });
    }

    getCommentsByArticleId(){
    this.commentService.getCommentsByArticleId(this.articleId).subscribe(res=>{
      this.comments=res;
      console.log(res);
      
    }, error=>{
      console.log("Error while fetching articles", "ok");
    })
  }
  scrolldown(){
    window.scrollTo(0,document.body.scrollHeight);
  }

}
