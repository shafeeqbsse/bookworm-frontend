import {Component, OnInit} from "@angular/core";
import {PurchaseService} from "../services/purchase.service";

@Component({
    selector: 'app-purchases-page',
    templateUrl: './purchases-page.component.html',
    styleUrls: ['./purchases-page.component.css']
})
export class PurchasesPageComponent implements OnInit {
    purchases: Array<Purchase>;

    constructor(private service: PurchaseService) {
    }

    ngOnInit() {
        this.service.getPurchases().subscribe(result => {
            this.purchases = result.map(p => {
                let purchase: Purchase;
                purchase = p;
                return purchase;
            });
            console.debug("Purchases: ", this.purchases);
        }, error => {
            console.error("Error getting purhases:", error);
        })
    }
}

class Purchase {
    purchaseId: number;
    member: Member;
    book: PurchaseBook;
    amount: number;
}
class Member {
    memberId: number;
    email: string;
    username: string;
}
class PurchaseBook {
    bookId: number;
    title: string;
}
