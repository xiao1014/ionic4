import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.page.html',
    styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
    newsName: any;

    constructor(private router: ActivatedRoute) {
        const queryParamMap = router.snapshot.queryParamMap;
        this.newsName = queryParamMap.get('name');
    }

    ngOnInit() {
        this.ionViewDidLoad(this.newsName);
    }

    ionViewDidLoad(newsId) {
    }

}
