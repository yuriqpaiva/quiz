class AnswerModel {
  private _value: string;
  private _right: boolean;
  private _revealed: boolean;

  constructor(value: string, right: boolean, revealed: boolean = false) {
    this._value = value;
    this._right = right;
    this._revealed = revealed;
  }

  static right(value: string) {
    return new AnswerModel(value, true);
  }

  static wrong(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this._value;
  }

  get right() {
    return this._right;
  }

  get revealed() {
    return this._revealed;
  }

  reveal() {
    return new AnswerModel(this.value, this.right, true);
  }

  toObject() {
    return {
      value: this.value,
      right: this.right,
      revealed: this.revealed,
    };
  }

  static fromObject({ value, right, revealed }: AnswerModel) {
    return new AnswerModel(value, right, revealed);
  }
}

export default AnswerModel;
