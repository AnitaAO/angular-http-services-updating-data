import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
    httpClient.get(this.url).subscribe(response => {
      this.post = response.json();
    });

    createPost(title: HTMLInputElement){
      let post = {title.value};
      title.value = "";

      this.httpClient.post(this.url, JSON.stringify(post))
        .subscribe(response => {
          this.post['id'] = response.json();
          this.post.splice(0, 0, post);
        });
    }

    updatePost(post){
      this.httpClient.patch ${(this.url + '/' + post.id, JSON.stringify(isRead: true))
      //you can use put if the Api doesn't support patch
      //this.httpClient.put(this.url, JSON.stringify(post))
        .subscribe(response => {
          this.post = response.json();
        })
    }

    
  };

  ngOnInit() {
  }

}