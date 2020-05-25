class Score {
  private _score: number;
  private element: HTMLDataElement;
  constructor(element: HTMLDataElement, initialScore?: number) {
    this._score = initialScore || 0;
    this.element = element;
    this.element.innerText = this.score.toString();
  }
  get score(): number {
    return this._score;
  }
  set score(newscore: number) {
    this._score = newscore;
    this.element.innerText = this._score.toString();
  }
  reset() {
    this._score = 0;
    this.element.innerText = "0";
  }
  increment(toAdd: number) {
    this._score += toAdd;
    this.element.innerText = this._score.toString();
  }
}
export = Score;
