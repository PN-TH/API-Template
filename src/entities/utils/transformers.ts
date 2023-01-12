export const jsonTransformer = {
  to: (val: object) => {
    return JSON.stringify(val);
  },
  from: (val: string) => {
    return JSON.parse(val);
  }
};
