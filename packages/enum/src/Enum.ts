// @ts-nocheck
const defaults = {
  strict: true,
};

type Value = string | { __typename: string };

const array = [0, 112];
array.forEach((value): void => {
  console.log(value);
});

class Enum {
  private enums: Value[] = [];

  private static isValid(value: Value): boolean {
    if (typeof value === 'string') {
      return true;
    }

    if (typeof value === 'object') {
      return Object.hasOwnProperty.call(value, '__typename');
    }

    return false;
  }

  private static equals(value: Value): boolean {
    // if (value === enum) {
    //   return true
    // }

    // if (typeof value === 'object') {
    // return value?.__typename === enum?.__typename
    // }

    return false;
  }

  public constructor(...enums): void {
    this.enums = enums;

    this.enums.forEach((enumm: Value) => {
      Object.defineProperty(this, enumm, {
        get() {
          return enumm;
        },
      });
    });

    Object.seal(this);
  }

  public get(value: Value): Value | undefined {
    // return this.enums.find(enum => this.match(value, enum))
  }

  public match(value, branches = {}) {
    // const foundBranch = Object.entries(branches).find(([enum, path]) =>
    //   this.equals(value, enum)
    // )

    return foundBranch[1];
  }
}

export default Enum;
