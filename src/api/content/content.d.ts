interface Page {
  name: string;
  displayName: string;
  layout: string;
  document: object;
  containers: Array<Container>;
}

interface Container {
  path: string;
  components: Array<object>;
}

interface Document {
  contentType: string;
  fields: Array<Field>;
  name: string;
  displayName: string;
  path: string;
  system: {
    createdBy: string;
    createdAt: string;
    updateBy: string;
    updatedAt: string;
  }
}

interface Field {
  name: string;
  value: Array<string>;
}
