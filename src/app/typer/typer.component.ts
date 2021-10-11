import { Component, Input, OnInit } from '@angular/core';

import { delay, take } from 'rxjs/operators';
import { interval, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.css']
})
export class TyperComponent implements OnInit {
  @Input() delay: number;
  @Input() duration: number;
  @Input() content;
  source;
  subscribe;
  val;
  paragraph;
  p2;
  p3: string;
  sub$;
  thisp2shift: string;
  characterSplit: [];
  //emit value in sequence every 1 second
  constructor() {
    //emit value every second
    if (this.content) {
      // if (this.content) {
      //   let characterSplit = this.content.split('');
      //   let characterArray = [...this.content];
      //   const intervalPeriod = characterArray.length / this.duration;
      //   //emit value every second
      //   const message = interval(intervalPeriod);
      //   //emit value after five seconds
      //   const delayForFiveSeconds = () => timer(5);
      //   //after 5 seconds, start emitting delayed interval values
      //   const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
      //   //log values, delayed for 5 seconds
      //   //ex. output: 5s....1...2...3
      //   const subscribe = delayWhenExample.subscribe(val => {
      //     console.log('jh');
      //     let thisp2shift = characterArray.shift();
      //     if (thisp2shift != undefined) {
      //       this.p3 = this.p3 + thisp2shift;
      //     }
      //     if (this.p2.length == 0) {
      //       this.subscribe.unsubscribe();
      //     }
      //   });
      // }
    }
  }
  ngOnInit() {
    this.p3 = '';
    console.log(this.content);

    this.characterSplit = this.content.split('');
    let timeBetweenLetters =
      (this.duration * 1000) / this.characterSplit.length;
    const message = interval(timeBetweenLetters);
    //emit value after five seconds
    const delayForFiveSeconds = () => timer(this.delay * 1000);
    //after 5 seconds, start emitting delayed interval values
    const delayWhenExample = message.pipe(
      delayWhen(delayForFiveSeconds),
      take(this.characterSplit.length)
    );
    //log values, delayed for 5 seconds
    //ex. output: 5s....1...2...3
    const sub$ = delayWhenExample.subscribe(val => {
      console.log(this.characterSplit);
      console.log(this.characterSplit.length);
      if (this.characterSplit.length > 0) {
        this.thisp2shift = this.characterSplit.shift();

        // console.log(this.thisp2shift);
        if (this.thisp2shift != undefined) {
          this.p3 = this.p3 + this.thisp2shift;
        }
      } else {
        this.sub$.unsubscribe();
      }
    });
  }
}
