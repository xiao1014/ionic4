import { Component, OnInit, ViewChild } from '@angular/core';
import {InfiniteScroll} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss']
})
export class NewsPage implements OnInit {
    public newsList = [
        {
            name: 'aaa1'
        },
        {
            name: 'aaa2'
        },
        {
            name: 'aaa3'
        },
        {
            name: 'aaa4'
        },
        {
            name: 'aaa5'
        },
        {
            name: 'aaa6'
        },
        {
            name: 'aaa7'
        },
        {
            name: 'aaa8'
        },
        {
            name: 'aaa9'
        },
        {
            name: 'aaa10'
        }
    ];

    @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

    constructor(private router: Router) {}

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            for (let i = 0; i < 10; i++) {
                this.newsList.push({name: this.newsList.length + 1 + ''});
            }
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.newsList.length >= 50) {
                event.target.disabled = true;
            }
        }, 500);
    }

    goNewsDetail(name) {
        this.router.navigateByUrl(
            this.router.createUrlTree(['/NewsDetail'], {queryParams: {name: name}})
        );
    }

    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }

    ngOnInit() {
    }

}
