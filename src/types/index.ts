// ================================================
// GENERIC TYPES
// ================================================
export interface System {
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  mergedBy?: string | null;
  mergedAt?: string | null;
}

// ================================================
// CONTENT MANAGEMENT API
// ================================================
export interface Page {
  name: string;
  displayName: string;
  layout: string;
  document: object;
  containers: Array<{
    path: string;
    components: Array<object>;
  }>;
}

export interface Document {
  contentType: string;
  fields: Array<{
    name: string;
    value: Array<string>;
  }>;
  name: string;
  displayName: string;
  path: string;
  system: System
}

// ================================================
// DELIVERY API SETTINGS
// ================================================
export interface DeliveryApiSettingsV1 {
  enabled?: boolean;
  skipTranslations?: boolean;
}

export interface DeliveryApiSettingsV2 extends DeliveryApiSettingsV1{
  secret?: string;
  securedApis?: Array<"folders" | "document" | "images" | "assets" | "openapi">;
  format?: "flatted" | "inlined";
}

// ================================================
// PROJECTS MANAGEMENT API
// ================================================
export interface ProjectChannel {
  id: string;
  displayName: string;
}

export interface ProjectContentType {
  name: string;
  displayName: string;
}

export interface ProjectDocument {
  path: string;
  displayName: string;
}

export interface ProjectErrors {
  channels: Array<ProjectError>
}

export interface ProjectError {
  target: string;
  message: string;
}

export type ProjectStatus = "IN_PROGRESS" | "ADDING_CHANNEL" | "REBASING" | "REBASE_ERROR" | "IN_REVIEW" | "APPROVED" | "MERGING" | "MERGED" | "MERGE_ERROR" | "DELETED" | "DELETING" | "RUNNING" | "START_RUNNING" | "STOP_RUNNING"

export interface Project {
  id: string;
  name: string;
  includeContentTypes: boolean;
  description: string;
  state: {
    status: ProjectStatus;
    message: string;
    errors: ProjectErrors | null;
    availableActions: Array<string>;
  }
  items: {
    channels: Array<ProjectChannel>,
    contentTypes: Array<ProjectContentType>,
    documents: Array<ProjectDocument>,
    pages: Array<ProjectDocument>,
    resourceBundles: Array<ProjectDocument>,
  } | null;
  system: System;
}

// ================================================
// WEBHOOK MANAGEMENT API
// ================================================
export interface WebhookConfiguration {
  id: string;
  name: string;
  enabled: boolean;
  url: string;
  method: string;
  triggers: Array<string>;
  headers: Array<{
    name: string;
    value: string;
    secret: boolean;
  }>;
  system?: System
}

export type WebhookConfigurations = Array<WebhookConfiguration>;

export interface WebhookExecution {
  id: string;
  payloadOperationId: string;
  webhookConfigurationId: string;
  time: Date;
  status: string;
  error: string | null;
  requestDetail: string;
  responseDetail: string;
}

export type WebhookExecutions = Array<WebhookExecution>;
