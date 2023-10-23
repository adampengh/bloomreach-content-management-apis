interface Project {
  id: string;
  name: string;
  includeContentTypes: boolean;
  description: string;
  state: {
    status: string;
    message: string;
    errors: any;
    availableActions: Array<string>;
  }
  items: {
    channels: Array<{
      id: string;
      displayName: string;
    }>,
    contentTypes: Array<{
      name: string;
      displayName: string;
    }>,
    documents: Array<{
      path: string;
      displayName: string;
    }>,
    pages: Array<{
      path: string;
      displayName: string;
    }>,
    resourceBundles: Array<{
      path: string;
      displayName: string;
    }>,
  } | null;
  system: {
    createBy: string;
    createdAt: string;
    updatedBy: string | null;
    updatedAt: string | null;
    mergedBy: string | null;
    mergedAt: string | null;
  }
}
