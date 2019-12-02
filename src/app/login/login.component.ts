import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import IUser from "../models/IUser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  logged = false;
  logging = false;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  ngOnInit() {}

  connexion() {
    this.http
      .get(
        "https://jsonplaceholder.typicode.com/users?username=" + this.username
      )
      .subscribe(
        (value: IUser[]) => {
          if (value.length === 1) {
            this.logged = true;
            this.snackBar.open("Tu es connecté !!", null, {
              duration: 2000
            });
            console.log(value[0].company.name);
          } else {
            this.snackBar.open("Echec", null, {
              duration: 2000
            });
          }
        },
        (error1: HttpErrorResponse) => {
          console.log("error1 ", error1);
        }
      );

    //   if (this.username === "admin" && this.password === "admin") {
    //     this.logged = true;
    //     this.logging = true;
    //     setTimeout(() => {
    //       this.logging = false;
    // this.snackBar.open("Tu es connecté !!", null, {
    //   duration: 2000
    // });
    //     }, 2000);
    //   } else {
    //     this.logging = true;
    //     setTimeout(() => {
    //       this.logging = false;
    //       this.snackBar.open("Echec", null, {
    //         duration: 2000
    //       });
    //     }, 2000);
    //   }
  }
}
