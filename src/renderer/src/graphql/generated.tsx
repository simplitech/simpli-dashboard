import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigInt: { input: any; output: any }
  DateTime: { input: any; output: any }
  JSON: { input: any; output: any }
}

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput'
  count: Scalars['Int']['output']
}

export type AggregateClickupTask = {
  __typename?: 'AggregateClickupTask'
  _avg?: Maybe<ClickupTaskAvgAggregate>
  _count?: Maybe<ClickupTaskCountAggregate>
  _max?: Maybe<ClickupTaskMaxAggregate>
  _min?: Maybe<ClickupTaskMinAggregate>
  _sum?: Maybe<ClickupTaskSumAggregate>
}

export type AggregateClickupTasksDueDate = {
  __typename?: 'AggregateClickupTasksDueDate'
  _avg?: Maybe<ClickupTasksDueDateAvgAggregate>
  _count?: Maybe<ClickupTasksDueDateCountAggregate>
  _max?: Maybe<ClickupTasksDueDateMaxAggregate>
  _min?: Maybe<ClickupTasksDueDateMinAggregate>
  _sum?: Maybe<ClickupTasksDueDateSumAggregate>
}

export type AggregateClickupTasksQueue = {
  __typename?: 'AggregateClickupTasksQueue'
  _count?: Maybe<ClickupTasksQueueCountAggregate>
  _max?: Maybe<ClickupTasksQueueMaxAggregate>
  _min?: Maybe<ClickupTasksQueueMinAggregate>
}

export type AggregateClickupTasksStatus = {
  __typename?: 'AggregateClickupTasksStatus'
  _count?: Maybe<ClickupTasksStatusCountAggregate>
  _max?: Maybe<ClickupTasksStatusMaxAggregate>
  _min?: Maybe<ClickupTasksStatusMinAggregate>
}

export type AggregateClickupTasksTimeEstimate = {
  __typename?: 'AggregateClickupTasksTimeEstimate'
  _avg?: Maybe<ClickupTasksTimeEstimateAvgAggregate>
  _count?: Maybe<ClickupTasksTimeEstimateCountAggregate>
  _max?: Maybe<ClickupTasksTimeEstimateMaxAggregate>
  _min?: Maybe<ClickupTasksTimeEstimateMinAggregate>
  _sum?: Maybe<ClickupTasksTimeEstimateSumAggregate>
}

export type AggregateClickupWebhook = {
  __typename?: 'AggregateClickupWebhook'
  _count?: Maybe<ClickupWebhookCountAggregate>
  _max?: Maybe<ClickupWebhookMaxAggregate>
  _min?: Maybe<ClickupWebhookMinAggregate>
}

export type AggregateClockifyTimeEntry = {
  __typename?: 'AggregateClockifyTimeEntry'
  _avg?: Maybe<ClockifyTimeEntryAvgAggregate>
  _count?: Maybe<ClockifyTimeEntryCountAggregate>
  _max?: Maybe<ClockifyTimeEntryMaxAggregate>
  _min?: Maybe<ClockifyTimeEntryMinAggregate>
  _sum?: Maybe<ClockifyTimeEntrySumAggregate>
}

export type AggregateClockifyWebhook = {
  __typename?: 'AggregateClockifyWebhook'
  _count?: Maybe<ClockifyWebhookCountAggregate>
  _max?: Maybe<ClockifyWebhookMaxAggregate>
  _min?: Maybe<ClockifyWebhookMinAggregate>
}

export type AggregateProject = {
  __typename?: 'AggregateProject'
  _count?: Maybe<ProjectCountAggregate>
  _max?: Maybe<ProjectMaxAggregate>
  _min?: Maybe<ProjectMinAggregate>
}

export type AggregateUser = {
  __typename?: 'AggregateUser'
  _count?: Maybe<UserCountAggregate>
  _max?: Maybe<UserMaxAggregate>
  _min?: Maybe<UserMinAggregate>
}

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']['input']>
  divide?: InputMaybe<Scalars['BigInt']['input']>
  increment?: InputMaybe<Scalars['BigInt']['input']>
  multiply?: InputMaybe<Scalars['BigInt']['input']>
  set?: InputMaybe<Scalars['BigInt']['input']>
}

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  not?: InputMaybe<NestedBigIntFilter>
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  not?: InputMaybe<NestedBigIntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<NestedBoolFilter>
}

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<NestedBoolNullableFilter>
}

export type ClickupAttachment = {
  __typename?: 'ClickupAttachment'
  date: Scalars['String']['output']
  deleted: Scalars['Boolean']['output']
  emailData?: Maybe<Scalars['JSON']['output']>
  extension: Scalars['String']['output']
  hidden: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  isFolder?: Maybe<Scalars['Boolean']['output']>
  mimetype: Scalars['String']['output']
  orientation?: Maybe<Scalars['JSON']['output']>
  parentId: Scalars['String']['output']
  resolvedComments: Scalars['Int']['output']
  size: Scalars['Int']['output']
  source: Scalars['Int']['output']
  thumbnailLarge?: Maybe<Scalars['String']['output']>
  thumbnailMedium?: Maybe<Scalars['String']['output']>
  thumbnailSmall?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  totalComments: Scalars['Int']['output']
  type: Scalars['Int']['output']
  url: Scalars['String']['output']
  urlWHost: Scalars['String']['output']
  urlWQuery: Scalars['String']['output']
  user: ClickupUser
  version: Scalars['Int']['output']
}

export type ClickupAttachmentCreateInput = {
  date: Scalars['String']['input']
  deleted: Scalars['Boolean']['input']
  emailData?: InputMaybe<Scalars['JSON']['input']>
  extension: Scalars['String']['input']
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  isFolder?: InputMaybe<Scalars['Boolean']['input']>
  mimetype: Scalars['String']['input']
  orientation?: InputMaybe<Scalars['JSON']['input']>
  parentId: Scalars['String']['input']
  resolvedComments: Scalars['Int']['input']
  size: Scalars['Int']['input']
  source: Scalars['Int']['input']
  thumbnailLarge?: InputMaybe<Scalars['String']['input']>
  thumbnailMedium?: InputMaybe<Scalars['String']['input']>
  thumbnailSmall?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  totalComments: Scalars['Int']['input']
  type: Scalars['Int']['input']
  url: Scalars['String']['input']
  urlWHost: Scalars['String']['input']
  urlWQuery: Scalars['String']['input']
  user: ClickupUserCreateInput
  version: Scalars['Int']['input']
}

export type ClickupAttachmentObjectEqualityInput = {
  date: Scalars['String']['input']
  deleted: Scalars['Boolean']['input']
  emailData?: InputMaybe<Scalars['JSON']['input']>
  extension: Scalars['String']['input']
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  isFolder?: InputMaybe<Scalars['Boolean']['input']>
  mimetype: Scalars['String']['input']
  orientation?: InputMaybe<Scalars['JSON']['input']>
  parentId: Scalars['String']['input']
  resolvedComments: Scalars['Int']['input']
  size: Scalars['Int']['input']
  source: Scalars['Int']['input']
  thumbnailLarge?: InputMaybe<Scalars['String']['input']>
  thumbnailMedium?: InputMaybe<Scalars['String']['input']>
  thumbnailSmall?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  totalComments: Scalars['Int']['input']
  type: Scalars['Int']['input']
  url: Scalars['String']['input']
  urlWHost: Scalars['String']['input']
  urlWQuery: Scalars['String']['input']
  user: ClickupUserObjectEqualityInput
  version: Scalars['Int']['input']
}

export type ClickupAttachmentOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupChecklist = {
  __typename?: 'ClickupChecklist'
  creator: Scalars['Int']['output']
  dateCreated: Scalars['String']['output']
  id: Scalars['String']['output']
  items: Array<ClickupChecklistItem>
  name: Scalars['String']['output']
  orderindex: Scalars['Int']['output']
  resolved: Scalars['Int']['output']
  taskId: Scalars['String']['output']
  unresolved: Scalars['Int']['output']
}

export type ClickupChecklistCreateInput = {
  creator: Scalars['Int']['input']
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  items?: InputMaybe<Array<ClickupChecklistItemCreateInput>>
  name: Scalars['String']['input']
  orderindex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  taskId: Scalars['String']['input']
  unresolved: Scalars['Int']['input']
}

export type ClickupChecklistItem = {
  __typename?: 'ClickupChecklistItem'
  assignee?: Maybe<ClickupUser>
  dateCreated: Scalars['String']['output']
  groupAssignee?: Maybe<Scalars['JSON']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  orderindex: Scalars['Int']['output']
  parent?: Maybe<Scalars['String']['output']>
  resolved: Scalars['Boolean']['output']
}

export type ClickupChecklistItemCreateInput = {
  assignee?: InputMaybe<ClickupUserCreateInput>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderindex: Scalars['Int']['input']
  parent?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupChecklistItemObjectEqualityInput = {
  assignee?: InputMaybe<ClickupUserObjectEqualityInput>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderindex: Scalars['Int']['input']
  parent?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupChecklistObjectEqualityInput = {
  creator: Scalars['Int']['input']
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  items?: InputMaybe<Array<ClickupChecklistItemObjectEqualityInput>>
  name: Scalars['String']['input']
  orderindex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  taskId: Scalars['String']['input']
  unresolved: Scalars['Int']['input']
}

export type ClickupChecklistOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupDependency = {
  __typename?: 'ClickupDependency'
  dateCreated: Scalars['String']['output']
  dependsOn: Scalars['String']['output']
  taskId: Scalars['String']['output']
  type: Scalars['Int']['output']
  userid: Scalars['String']['output']
  workspaceId: Scalars['String']['output']
}

export type ClickupDependencyCreateInput = {
  dateCreated: Scalars['String']['input']
  dependsOn: Scalars['String']['input']
  taskId: Scalars['String']['input']
  type: Scalars['Int']['input']
  userid: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupDependencyObjectEqualityInput = {
  dateCreated: Scalars['String']['input']
  dependsOn: Scalars['String']['input']
  taskId: Scalars['String']['input']
  type: Scalars['Int']['input']
  userid: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupDependencyOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupLinkedTask = {
  __typename?: 'ClickupLinkedTask'
  dateCreated: Scalars['String']['output']
  linkId: Scalars['String']['output']
  taskId: Scalars['String']['output']
  userid: Scalars['String']['output']
  workspaceId: Scalars['String']['output']
}

export type ClickupLinkedTaskCreateInput = {
  dateCreated: Scalars['String']['input']
  linkId: Scalars['String']['input']
  taskId: Scalars['String']['input']
  userid: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupLinkedTaskObjectEqualityInput = {
  dateCreated: Scalars['String']['input']
  linkId: Scalars['String']['input']
  taskId: Scalars['String']['input']
  userid: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupLinkedTaskOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupLocation = {
  __typename?: 'ClickupLocation'
  access: Scalars['Boolean']['output']
  hidden?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type ClickupLocationCompositeFilter = {
  equals?: InputMaybe<ClickupLocationObjectEqualityInput>
  is?: InputMaybe<ClickupLocationWhereInput>
  isNot?: InputMaybe<ClickupLocationWhereInput>
}

export type ClickupLocationCreateEnvelopeInput = {
  set?: InputMaybe<ClickupLocationCreateInput>
}

export type ClickupLocationCreateInput = {
  access: Scalars['Boolean']['input']
  hidden?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupLocationObjectEqualityInput = {
  access: Scalars['Boolean']['input']
  hidden?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupLocationOrderByInput = {
  access?: InputMaybe<SortOrder>
  hidden?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
}

export type ClickupLocationUpdateEnvelopeInput = {
  set?: InputMaybe<ClickupLocationCreateInput>
  update?: InputMaybe<ClickupLocationUpdateInput>
}

export type ClickupLocationUpdateInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  hidden?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupLocationWhereInput = {
  AND?: InputMaybe<Array<ClickupLocationWhereInput>>
  NOT?: InputMaybe<Array<ClickupLocationWhereInput>>
  OR?: InputMaybe<Array<ClickupLocationWhereInput>>
  access?: InputMaybe<BoolFilter>
  hidden?: InputMaybe<BoolNullableFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
}

export type ClickupPriority = {
  __typename?: 'ClickupPriority'
  color: Scalars['String']['output']
  id: Scalars['String']['output']
  orderindex: Scalars['String']['output']
  priority: Scalars['String']['output']
}

export type ClickupPriorityCreateInput = {
  color: Scalars['String']['input']
  id: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  priority: Scalars['String']['input']
}

export type ClickupPriorityNullableCompositeFilter = {
  equals?: InputMaybe<ClickupPriorityObjectEqualityInput>
  is?: InputMaybe<ClickupPriorityWhereInput>
  isNot?: InputMaybe<ClickupPriorityWhereInput>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupPriorityNullableCreateEnvelopeInput = {
  set?: InputMaybe<ClickupPriorityCreateInput>
}

export type ClickupPriorityNullableUpdateEnvelopeInput = {
  set?: InputMaybe<ClickupPriorityCreateInput>
  unset?: InputMaybe<Scalars['Boolean']['input']>
  upsert?: InputMaybe<ClickupPriorityUpsertInput>
}

export type ClickupPriorityObjectEqualityInput = {
  color: Scalars['String']['input']
  id: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  priority: Scalars['String']['input']
}

export type ClickupPriorityOrderByInput = {
  color?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  orderindex?: InputMaybe<SortOrder>
  priority?: InputMaybe<SortOrder>
}

export type ClickupPriorityUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  priority?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupPriorityUpsertInput = {
  set: ClickupPriorityCreateInput
  update: ClickupPriorityUpdateInput
}

export type ClickupPriorityWhereInput = {
  AND?: InputMaybe<Array<ClickupPriorityWhereInput>>
  NOT?: InputMaybe<Array<ClickupPriorityWhereInput>>
  OR?: InputMaybe<Array<ClickupPriorityWhereInput>>
  color?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  orderindex?: InputMaybe<StringFilter>
  priority?: InputMaybe<StringFilter>
}

export type ClickupSharing = {
  __typename?: 'ClickupSharing'
  public: Scalars['Boolean']['output']
  publicFields: Array<Scalars['String']['output']>
  publicShareExpiresOn?: Maybe<Scalars['JSON']['output']>
  seoOptimized: Scalars['Boolean']['output']
  token?: Maybe<Scalars['JSON']['output']>
}

export type ClickupSharingCompositeFilter = {
  equals?: InputMaybe<ClickupSharingObjectEqualityInput>
  is?: InputMaybe<ClickupSharingWhereInput>
  isNot?: InputMaybe<ClickupSharingWhereInput>
}

export type ClickupSharingCreateEnvelopeInput = {
  set?: InputMaybe<ClickupSharingCreateInput>
}

export type ClickupSharingCreateInput = {
  public: Scalars['Boolean']['input']
  publicFields?: InputMaybe<ClickupSharingCreatepublicFieldsInput>
  publicShareExpiresOn?: InputMaybe<Scalars['JSON']['input']>
  seoOptimized: Scalars['Boolean']['input']
  token?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupSharingCreatepublicFieldsInput = {
  set: Array<Scalars['String']['input']>
}

export type ClickupSharingObjectEqualityInput = {
  public: Scalars['Boolean']['input']
  publicFields?: InputMaybe<Array<Scalars['String']['input']>>
  publicShareExpiresOn?: InputMaybe<Scalars['JSON']['input']>
  seoOptimized: Scalars['Boolean']['input']
  token?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupSharingOrderByInput = {
  public?: InputMaybe<SortOrder>
  publicFields?: InputMaybe<SortOrder>
  publicShareExpiresOn?: InputMaybe<SortOrder>
  seoOptimized?: InputMaybe<SortOrder>
  token?: InputMaybe<SortOrder>
}

export type ClickupSharingUpdateEnvelopeInput = {
  set?: InputMaybe<ClickupSharingCreateInput>
  update?: InputMaybe<ClickupSharingUpdateInput>
}

export type ClickupSharingUpdateInput = {
  public?: InputMaybe<BoolFieldUpdateOperationsInput>
  publicFields?: InputMaybe<ClickupSharingUpdatepublicFieldsInput>
  publicShareExpiresOn?: InputMaybe<Scalars['JSON']['input']>
  seoOptimized?: InputMaybe<BoolFieldUpdateOperationsInput>
  token?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupSharingUpdatepublicFieldsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>
  set?: InputMaybe<Array<Scalars['String']['input']>>
}

export type ClickupSharingWhereInput = {
  AND?: InputMaybe<Array<ClickupSharingWhereInput>>
  NOT?: InputMaybe<Array<ClickupSharingWhereInput>>
  OR?: InputMaybe<Array<ClickupSharingWhereInput>>
  public?: InputMaybe<BoolFilter>
  publicFields?: InputMaybe<StringNullableListFilter>
  publicShareExpiresOn?: InputMaybe<JsonNullableFilter>
  seoOptimized?: InputMaybe<BoolFilter>
  token?: InputMaybe<JsonNullableFilter>
}

export type ClickupSpace = {
  __typename?: 'ClickupSpace'
  id: Scalars['String']['output']
}

export type ClickupSpaceCompositeFilter = {
  equals?: InputMaybe<ClickupSpaceObjectEqualityInput>
  is?: InputMaybe<ClickupSpaceWhereInput>
  isNot?: InputMaybe<ClickupSpaceWhereInput>
}

export type ClickupSpaceCreateEnvelopeInput = {
  set?: InputMaybe<ClickupSpaceCreateInput>
}

export type ClickupSpaceCreateInput = {
  id: Scalars['String']['input']
}

export type ClickupSpaceObjectEqualityInput = {
  id: Scalars['String']['input']
}

export type ClickupSpaceOrderByInput = {
  id?: InputMaybe<SortOrder>
}

export type ClickupSpaceUpdateEnvelopeInput = {
  set?: InputMaybe<ClickupSpaceCreateInput>
  update?: InputMaybe<ClickupSpaceUpdateInput>
}

export type ClickupSpaceUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupSpaceWhereInput = {
  AND?: InputMaybe<Array<ClickupSpaceWhereInput>>
  NOT?: InputMaybe<Array<ClickupSpaceWhereInput>>
  OR?: InputMaybe<Array<ClickupSpaceWhereInput>>
  id?: InputMaybe<StringFilter>
}

export type ClickupStatus = {
  __typename?: 'ClickupStatus'
  color: Scalars['String']['output']
  id?: Maybe<Scalars['String']['output']>
  orderindex: Scalars['Int']['output']
  status: Scalars['String']['output']
  type: Scalars['String']['output']
}

export type ClickupStatusCompositeFilter = {
  equals?: InputMaybe<ClickupStatusObjectEqualityInput>
  is?: InputMaybe<ClickupStatusWhereInput>
  isNot?: InputMaybe<ClickupStatusWhereInput>
}

export type ClickupStatusCreateEnvelopeInput = {
  set?: InputMaybe<ClickupStatusCreateInput>
}

export type ClickupStatusCreateInput = {
  color: Scalars['String']['input']
  id?: InputMaybe<Scalars['String']['input']>
  orderindex: Scalars['Int']['input']
  status: Scalars['String']['input']
  type: Scalars['String']['input']
}

export type ClickupStatusObjectEqualityInput = {
  color: Scalars['String']['input']
  id?: InputMaybe<Scalars['String']['input']>
  orderindex: Scalars['Int']['input']
  status: Scalars['String']['input']
  type: Scalars['String']['input']
}

export type ClickupStatusOrderByInput = {
  color?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  orderindex?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
}

export type ClickupStatusUpdateEnvelopeInput = {
  set?: InputMaybe<ClickupStatusCreateInput>
  update?: InputMaybe<ClickupStatusUpdateInput>
}

export type ClickupStatusUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<IntFieldUpdateOperationsInput>
  status?: InputMaybe<StringFieldUpdateOperationsInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupStatusWhereInput = {
  AND?: InputMaybe<Array<ClickupStatusWhereInput>>
  NOT?: InputMaybe<Array<ClickupStatusWhereInput>>
  OR?: InputMaybe<Array<ClickupStatusWhereInput>>
  color?: InputMaybe<StringFilter>
  id?: InputMaybe<StringNullableFilter>
  orderindex?: InputMaybe<IntFilter>
  status?: InputMaybe<StringFilter>
  type?: InputMaybe<StringFilter>
}

export type ClickupTag = {
  __typename?: 'ClickupTag'
  creator: Scalars['Int']['output']
  name: Scalars['String']['output']
  tagBg: Scalars['String']['output']
  tagFg: Scalars['String']['output']
}

export type ClickupTagCreateInput = {
  creator: Scalars['Int']['input']
  name: Scalars['String']['input']
  tagBg: Scalars['String']['input']
  tagFg: Scalars['String']['input']
}

export type ClickupTagObjectEqualityInput = {
  creator: Scalars['Int']['input']
  name: Scalars['String']['input']
  tagBg: Scalars['String']['input']
  tagFg: Scalars['String']['input']
}

export type ClickupTagOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTask = {
  __typename?: 'ClickupTask'
  _count?: Maybe<ClickupTaskCount>
  archived: Scalars['Boolean']['output']
  assignees: Array<ClickupUser>
  attachments: Array<ClickupAttachment>
  checklists: Array<ClickupChecklist>
  clickupId: Scalars['String']['output']
  clickupProject: ClickupLocation
  creator: ClickupUser
  customFields: Array<ClickupTasksCustomField>
  customId?: Maybe<Scalars['String']['output']>
  dateClosed?: Maybe<Scalars['String']['output']>
  dateCreated: Scalars['String']['output']
  dateDone?: Maybe<Scalars['String']['output']>
  dateUpdated: Scalars['String']['output']
  dependencies: Array<ClickupDependency>
  description: Scalars['String']['output']
  folder: ClickupLocation
  id: Scalars['String']['output']
  linkedTasks: Array<ClickupLinkedTask>
  list: ClickupLocation
  name: Scalars['String']['output']
  orderindex: Scalars['String']['output']
  parent?: Maybe<Scalars['JSON']['output']>
  permissionLevel: Scalars['String']['output']
  points?: Maybe<Scalars['BigInt']['output']>
  priority?: Maybe<ClickupPriority>
  projectId?: Maybe<Scalars['String']['output']>
  sharing: ClickupSharing
  space: ClickupSpace
  startDate?: Maybe<Scalars['String']['output']>
  tags: Array<ClickupTag>
  teamId: Scalars['String']['output']
  textContent: Scalars['String']['output']
  timeSpent?: Maybe<Scalars['BigInt']['output']>
  url: Scalars['String']['output']
  watchers?: Maybe<Scalars['JSON']['output']>
}

export type ClickupTaskAvgAggregate = {
  __typename?: 'ClickupTaskAvgAggregate'
  points?: Maybe<Scalars['Float']['output']>
  timeSpent?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskCount = {
  __typename?: 'ClickupTaskCount'
  clickupTasksDueDates: Scalars['Int']['output']
  clickupTasksStatus: Scalars['Int']['output']
  clickupTasksTimeEstimates: Scalars['Int']['output']
  clockfyTimeEntry: Scalars['Int']['output']
}

export type ClickupTaskCountClickupTasksDueDatesArgs = {
  where?: InputMaybe<ClickupTasksDueDateWhereInput>
}

export type ClickupTaskCountClickupTasksStatusArgs = {
  where?: InputMaybe<ClickupTasksStatusWhereInput>
}

export type ClickupTaskCountClickupTasksTimeEstimatesArgs = {
  where?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
}

export type ClickupTaskCountClockfyTimeEntryArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClickupTaskCountAggregate = {
  __typename?: 'ClickupTaskCountAggregate'
  _all: Scalars['Int']['output']
  archived: Scalars['Int']['output']
  clickupId: Scalars['Int']['output']
  customId: Scalars['Int']['output']
  dateClosed: Scalars['Int']['output']
  dateCreated: Scalars['Int']['output']
  dateDone: Scalars['Int']['output']
  dateUpdated: Scalars['Int']['output']
  description: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  orderindex: Scalars['Int']['output']
  parent: Scalars['Int']['output']
  permissionLevel: Scalars['Int']['output']
  points: Scalars['Int']['output']
  projectId: Scalars['Int']['output']
  startDate: Scalars['Int']['output']
  teamId: Scalars['Int']['output']
  textContent: Scalars['Int']['output']
  timeSpent: Scalars['Int']['output']
  url: Scalars['Int']['output']
  watchers: Scalars['Int']['output']
}

export type ClickupTaskCreateInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateCreateNestedManyWithoutClickupTaskInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusCreateNestedManyWithoutClickupTaskInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateCreateNestedManyWithoutClickupTaskInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  project?: InputMaybe<ProjectCreateNestedOneWithoutClickupTasksInput>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskCreateManyInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  projectId?: InputMaybe<Scalars['String']['input']>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskCreateManyProjectInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskCreateManyProjectInputEnvelope = {
  data: Array<ClickupTaskCreateManyProjectInput>
}

export type ClickupTaskCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutProjectInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutProjectInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyProjectInputEnvelope>
}

export type ClickupTaskCreateNestedOneWithoutClickupTasksDueDatesInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTasksDueDatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTasksDueDatesInput>
}

export type ClickupTaskCreateNestedOneWithoutClickupTasksStatusInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTasksStatusInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTasksStatusInput>
}

export type ClickupTaskCreateNestedOneWithoutClickupTasksTimeEstimatesInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTasksTimeEstimatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTasksTimeEstimatesInput>
}

export type ClickupTaskCreateNestedOneWithoutClockfyTimeEntryInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClockfyTimeEntryInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClockfyTimeEntryInput>
}

export type ClickupTaskCreateOrConnectWithoutClickupTasksDueDatesInput = {
  create: ClickupTaskCreateWithoutClickupTasksDueDatesInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutClickupTasksStatusInput = {
  create: ClickupTaskCreateWithoutClickupTasksStatusInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutClickupTasksTimeEstimatesInput = {
  create: ClickupTaskCreateWithoutClickupTasksTimeEstimatesInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutClockfyTimeEntryInput = {
  create: ClickupTaskCreateWithoutClockfyTimeEntryInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutProjectInput = {
  create: ClickupTaskCreateWithoutProjectInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateWithoutClickupTasksDueDatesInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusCreateNestedManyWithoutClickupTaskInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateCreateNestedManyWithoutClickupTaskInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  project?: InputMaybe<ProjectCreateNestedOneWithoutClickupTasksInput>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskCreateWithoutClickupTasksStatusInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateCreateNestedManyWithoutClickupTaskInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateCreateNestedManyWithoutClickupTaskInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  project?: InputMaybe<ProjectCreateNestedOneWithoutClickupTasksInput>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskCreateWithoutClickupTasksTimeEstimatesInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateCreateNestedManyWithoutClickupTaskInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusCreateNestedManyWithoutClickupTaskInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  project?: InputMaybe<ProjectCreateNestedOneWithoutClickupTasksInput>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskCreateWithoutClockfyTimeEntryInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateCreateNestedManyWithoutClickupTaskInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusCreateNestedManyWithoutClickupTaskInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  project?: InputMaybe<ProjectCreateNestedOneWithoutClickupTasksInput>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskCreateWithoutProjectInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId: Scalars['String']['input']
  clickupProject: ClickupLocationCreateEnvelopeInput
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateCreateNestedManyWithoutClickupTaskInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusCreateNestedManyWithoutClickupTaskInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateCreateNestedManyWithoutClickupTaskInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateEnvelopeInput
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description: Scalars['String']['input']
  folder: ClickupLocationCreateEnvelopeInput
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list: ClickupLocationCreateEnvelopeInput
  name: Scalars['String']['input']
  orderindex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupPriorityNullableCreateEnvelopeInput>
  sharing: ClickupSharingCreateEnvelopeInput
  space: ClickupSpaceCreateEnvelopeInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId: Scalars['String']['input']
  textContent: Scalars['String']['input']
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskListRelationFilter = {
  every?: InputMaybe<ClickupTaskWhereInput>
  none?: InputMaybe<ClickupTaskWhereInput>
  some?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskMaxAggregate = {
  __typename?: 'ClickupTaskMaxAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  clickupId?: Maybe<Scalars['String']['output']>
  customId?: Maybe<Scalars['String']['output']>
  dateClosed?: Maybe<Scalars['String']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  dateDone?: Maybe<Scalars['String']['output']>
  dateUpdated?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderindex?: Maybe<Scalars['String']['output']>
  permissionLevel?: Maybe<Scalars['String']['output']>
  points?: Maybe<Scalars['BigInt']['output']>
  projectId?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['String']['output']>
  teamId?: Maybe<Scalars['String']['output']>
  textContent?: Maybe<Scalars['String']['output']>
  timeSpent?: Maybe<Scalars['BigInt']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskMinAggregate = {
  __typename?: 'ClickupTaskMinAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  clickupId?: Maybe<Scalars['String']['output']>
  customId?: Maybe<Scalars['String']['output']>
  dateClosed?: Maybe<Scalars['String']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  dateDone?: Maybe<Scalars['String']['output']>
  dateUpdated?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderindex?: Maybe<Scalars['String']['output']>
  permissionLevel?: Maybe<Scalars['String']['output']>
  points?: Maybe<Scalars['BigInt']['output']>
  projectId?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['String']['output']>
  teamId?: Maybe<Scalars['String']['output']>
  textContent?: Maybe<Scalars['String']['output']>
  timeSpent?: Maybe<Scalars['BigInt']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskNullableRelationFilter = {
  is?: InputMaybe<ClickupTaskWhereInput>
  isNot?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskOrderByWithRelationInput = {
  archived?: InputMaybe<SortOrder>
  assignees?: InputMaybe<ClickupUserOrderByCompositeAggregateInput>
  attachments?: InputMaybe<ClickupAttachmentOrderByCompositeAggregateInput>
  checklists?: InputMaybe<ClickupChecklistOrderByCompositeAggregateInput>
  clickupId?: InputMaybe<SortOrder>
  clickupProject?: InputMaybe<ClickupLocationOrderByInput>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateOrderByRelationAggregateInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusOrderByRelationAggregateInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateOrderByRelationAggregateInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryOrderByRelationAggregateInput>
  creator?: InputMaybe<ClickupUserOrderByInput>
  customFields?: InputMaybe<ClickupTasksCustomFieldOrderByCompositeAggregateInput>
  customId?: InputMaybe<SortOrder>
  dateClosed?: InputMaybe<SortOrder>
  dateCreated?: InputMaybe<SortOrder>
  dateDone?: InputMaybe<SortOrder>
  dateUpdated?: InputMaybe<SortOrder>
  dependencies?: InputMaybe<ClickupDependencyOrderByCompositeAggregateInput>
  description?: InputMaybe<SortOrder>
  folder?: InputMaybe<ClickupLocationOrderByInput>
  id?: InputMaybe<SortOrder>
  linkedTasks?: InputMaybe<ClickupLinkedTaskOrderByCompositeAggregateInput>
  list?: InputMaybe<ClickupLocationOrderByInput>
  name?: InputMaybe<SortOrder>
  orderindex?: InputMaybe<SortOrder>
  parent?: InputMaybe<SortOrder>
  permissionLevel?: InputMaybe<SortOrder>
  points?: InputMaybe<SortOrder>
  priority?: InputMaybe<ClickupPriorityOrderByInput>
  project?: InputMaybe<ProjectOrderByWithRelationInput>
  projectId?: InputMaybe<SortOrder>
  sharing?: InputMaybe<ClickupSharingOrderByInput>
  space?: InputMaybe<ClickupSpaceOrderByInput>
  startDate?: InputMaybe<SortOrder>
  tags?: InputMaybe<ClickupTagOrderByCompositeAggregateInput>
  teamId?: InputMaybe<SortOrder>
  textContent?: InputMaybe<SortOrder>
  timeSpent?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
  watchers?: InputMaybe<SortOrder>
}

export type ClickupTaskRelationFilter = {
  is?: InputMaybe<ClickupTaskWhereInput>
  isNot?: InputMaybe<ClickupTaskWhereInput>
}

export enum ClickupTaskScalarFieldEnum {
  Archived = 'archived',
  ClickupId = 'clickupId',
  CustomId = 'customId',
  DateClosed = 'dateClosed',
  DateCreated = 'dateCreated',
  DateDone = 'dateDone',
  DateUpdated = 'dateUpdated',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Orderindex = 'orderindex',
  Parent = 'parent',
  PermissionLevel = 'permissionLevel',
  Points = 'points',
  ProjectId = 'projectId',
  StartDate = 'startDate',
  TeamId = 'teamId',
  TextContent = 'textContent',
  TimeSpent = 'timeSpent',
  Url = 'url',
  Watchers = 'watchers',
}

export type ClickupTaskScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  archived?: InputMaybe<BoolFilter>
  clickupId?: InputMaybe<StringFilter>
  customId?: InputMaybe<StringNullableFilter>
  dateClosed?: InputMaybe<StringNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  dateDone?: InputMaybe<StringNullableFilter>
  dateUpdated?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  orderindex?: InputMaybe<StringFilter>
  parent?: InputMaybe<JsonNullableFilter>
  permissionLevel?: InputMaybe<StringFilter>
  points?: InputMaybe<BigIntNullableFilter>
  projectId?: InputMaybe<StringNullableFilter>
  startDate?: InputMaybe<StringNullableFilter>
  teamId?: InputMaybe<StringFilter>
  textContent?: InputMaybe<StringFilter>
  timeSpent?: InputMaybe<BigIntNullableFilter>
  url?: InputMaybe<StringFilter>
  watchers?: InputMaybe<JsonNullableFilter>
}

export type ClickupTaskSumAggregate = {
  __typename?: 'ClickupTaskSumAggregate'
  points?: Maybe<Scalars['BigInt']['output']>
  timeSpent?: Maybe<Scalars['BigInt']['output']>
}

export type ClickupTaskUpdateInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateUpdateManyWithoutClickupTaskNestedInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateEnvelopeInput>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupPriorityNullableUpdateEnvelopeInput>
  project?: InputMaybe<ProjectUpdateOneWithoutClickupTasksNestedInput>
  sharing?: InputMaybe<ClickupSharingUpdateEnvelopeInput>
  space?: InputMaybe<ClickupSpaceUpdateEnvelopeInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<StringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskUpdateManyMutationInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  creator?: InputMaybe<ClickupUserUpdateEnvelopeInput>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupPriorityNullableUpdateEnvelopeInput>
  sharing?: InputMaybe<ClickupSharingUpdateEnvelopeInput>
  space?: InputMaybe<ClickupSpaceUpdateEnvelopeInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<StringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskUpdateManyWithWhereWithoutProjectInput = {
  data: ClickupTaskUpdateManyMutationInput
  where: ClickupTaskScalarWhereInput
}

export type ClickupTaskUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutProjectInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutProjectInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyProjectInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskUpdateWithWhereUniqueWithoutProjectInput>>
  updateMany?: InputMaybe<Array<ClickupTaskUpdateManyWithWhereWithoutProjectInput>>
  upsert?: InputMaybe<Array<ClickupTaskUpsertWithWhereUniqueWithoutProjectInput>>
}

export type ClickupTaskUpdateOneRequiredWithoutClickupTasksDueDatesNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTasksDueDatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTasksDueDatesInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutClickupTasksDueDatesInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutClickupTasksDueDatesInput>
}

export type ClickupTaskUpdateOneRequiredWithoutClickupTasksStatusNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTasksStatusInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTasksStatusInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutClickupTasksStatusInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutClickupTasksStatusInput>
}

export type ClickupTaskUpdateOneRequiredWithoutClickupTasksTimeEstimatesNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTasksTimeEstimatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTasksTimeEstimatesInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutClickupTasksTimeEstimatesInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutClickupTasksTimeEstimatesInput>
}

export type ClickupTaskUpdateOneWithoutClockfyTimeEntryNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClockfyTimeEntryInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClockfyTimeEntryInput>
  delete?: InputMaybe<ClickupTaskWhereInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutClockfyTimeEntryInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutClockfyTimeEntryInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutClickupTasksDueDatesInput = {
  data: ClickupTaskUpdateWithoutClickupTasksDueDatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutClickupTasksStatusInput = {
  data: ClickupTaskUpdateWithoutClickupTasksStatusInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutClickupTasksTimeEstimatesInput = {
  data: ClickupTaskUpdateWithoutClickupTasksTimeEstimatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutClockfyTimeEntryInput = {
  data: ClickupTaskUpdateWithoutClockfyTimeEntryInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateWithWhereUniqueWithoutProjectInput = {
  data: ClickupTaskUpdateWithoutProjectInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpdateWithoutClickupTasksDueDatesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateUpdateManyWithoutClickupTaskNestedInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateEnvelopeInput>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupPriorityNullableUpdateEnvelopeInput>
  project?: InputMaybe<ProjectUpdateOneWithoutClickupTasksNestedInput>
  sharing?: InputMaybe<ClickupSharingUpdateEnvelopeInput>
  space?: InputMaybe<ClickupSpaceUpdateEnvelopeInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<StringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskUpdateWithoutClickupTasksStatusInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateUpdateManyWithoutClickupTaskNestedInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateEnvelopeInput>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupPriorityNullableUpdateEnvelopeInput>
  project?: InputMaybe<ProjectUpdateOneWithoutClickupTasksNestedInput>
  sharing?: InputMaybe<ClickupSharingUpdateEnvelopeInput>
  space?: InputMaybe<ClickupSpaceUpdateEnvelopeInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<StringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskUpdateWithoutClickupTasksTimeEstimatesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusUpdateManyWithoutClickupTaskNestedInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateEnvelopeInput>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupPriorityNullableUpdateEnvelopeInput>
  project?: InputMaybe<ProjectUpdateOneWithoutClickupTasksNestedInput>
  sharing?: InputMaybe<ClickupSharingUpdateEnvelopeInput>
  space?: InputMaybe<ClickupSpaceUpdateEnvelopeInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<StringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskUpdateWithoutClockfyTimeEntryInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateEnvelopeInput>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupPriorityNullableUpdateEnvelopeInput>
  project?: InputMaybe<ProjectUpdateOneWithoutClickupTasksNestedInput>
  sharing?: InputMaybe<ClickupSharingUpdateEnvelopeInput>
  space?: InputMaybe<ClickupSpaceUpdateEnvelopeInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<StringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskUpdateWithoutProjectInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<Array<ClickupUserCreateInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentCreateInput>>
  checklists?: InputMaybe<Array<ClickupChecklistCreateInput>>
  clickupId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusUpdateManyWithoutClickupTaskNestedInput>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateUpdateManyWithoutClickupTaskNestedInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateEnvelopeInput>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldCreateInput>>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependencies?: InputMaybe<Array<ClickupDependencyCreateInput>>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskCreateInput>>
  list?: InputMaybe<ClickupLocationUpdateEnvelopeInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderindex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupPriorityNullableUpdateEnvelopeInput>
  sharing?: InputMaybe<ClickupSharingUpdateEnvelopeInput>
  space?: InputMaybe<ClickupSpaceUpdateEnvelopeInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<Array<ClickupTagCreateInput>>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<StringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTaskUpsertWithWhereUniqueWithoutProjectInput = {
  create: ClickupTaskCreateWithoutProjectInput
  update: ClickupTaskUpdateWithoutProjectInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpsertWithoutClickupTasksDueDatesInput = {
  create: ClickupTaskCreateWithoutClickupTasksDueDatesInput
  update: ClickupTaskUpdateWithoutClickupTasksDueDatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutClickupTasksStatusInput = {
  create: ClickupTaskCreateWithoutClickupTasksStatusInput
  update: ClickupTaskUpdateWithoutClickupTasksStatusInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutClickupTasksTimeEstimatesInput = {
  create: ClickupTaskCreateWithoutClickupTasksTimeEstimatesInput
  update: ClickupTaskUpdateWithoutClickupTasksTimeEstimatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutClockfyTimeEntryInput = {
  create: ClickupTaskCreateWithoutClockfyTimeEntryInput
  update: ClickupTaskUpdateWithoutClockfyTimeEntryInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskWhereInput>>
  archived?: InputMaybe<BoolFilter>
  assignees?: InputMaybe<Array<ClickupUserObjectEqualityInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentObjectEqualityInput>>
  checklists?: InputMaybe<Array<ClickupChecklistObjectEqualityInput>>
  clickupId?: InputMaybe<StringFilter>
  clickupProject?: InputMaybe<ClickupLocationCompositeFilter>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateListRelationFilter>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusListRelationFilter>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateListRelationFilter>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  creator?: InputMaybe<ClickupUserCompositeFilter>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldObjectEqualityInput>>
  customId?: InputMaybe<StringNullableFilter>
  dateClosed?: InputMaybe<StringNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  dateDone?: InputMaybe<StringNullableFilter>
  dateUpdated?: InputMaybe<StringFilter>
  dependencies?: InputMaybe<Array<ClickupDependencyObjectEqualityInput>>
  description?: InputMaybe<StringFilter>
  folder?: InputMaybe<ClickupLocationCompositeFilter>
  id?: InputMaybe<StringFilter>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskObjectEqualityInput>>
  list?: InputMaybe<ClickupLocationCompositeFilter>
  name?: InputMaybe<StringFilter>
  orderindex?: InputMaybe<StringFilter>
  parent?: InputMaybe<JsonNullableFilter>
  permissionLevel?: InputMaybe<StringFilter>
  points?: InputMaybe<BigIntNullableFilter>
  priority?: InputMaybe<ClickupPriorityNullableCompositeFilter>
  project?: InputMaybe<ProjectNullableRelationFilter>
  projectId?: InputMaybe<StringNullableFilter>
  sharing?: InputMaybe<ClickupSharingCompositeFilter>
  space?: InputMaybe<ClickupSpaceCompositeFilter>
  startDate?: InputMaybe<StringNullableFilter>
  tags?: InputMaybe<Array<ClickupTagObjectEqualityInput>>
  teamId?: InputMaybe<StringFilter>
  textContent?: InputMaybe<StringFilter>
  timeSpent?: InputMaybe<BigIntNullableFilter>
  url?: InputMaybe<StringFilter>
  watchers?: InputMaybe<JsonNullableFilter>
}

export type ClickupTaskWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskWhereInput>>
  archived?: InputMaybe<BoolFilter>
  assignees?: InputMaybe<Array<ClickupUserObjectEqualityInput>>
  attachments?: InputMaybe<Array<ClickupAttachmentObjectEqualityInput>>
  checklists?: InputMaybe<Array<ClickupChecklistObjectEqualityInput>>
  clickupId?: InputMaybe<Scalars['String']['input']>
  clickupProject?: InputMaybe<ClickupLocationCompositeFilter>
  clickupTasksDueDates?: InputMaybe<ClickupTasksDueDateListRelationFilter>
  clickupTasksStatus?: InputMaybe<ClickupTasksStatusListRelationFilter>
  clickupTasksTimeEstimates?: InputMaybe<ClickupTasksTimeEstimateListRelationFilter>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  creator?: InputMaybe<ClickupUserCompositeFilter>
  customFields?: InputMaybe<Array<ClickupTasksCustomFieldObjectEqualityInput>>
  customId?: InputMaybe<StringNullableFilter>
  dateClosed?: InputMaybe<StringNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  dateDone?: InputMaybe<StringNullableFilter>
  dateUpdated?: InputMaybe<StringFilter>
  dependencies?: InputMaybe<Array<ClickupDependencyObjectEqualityInput>>
  description?: InputMaybe<StringFilter>
  folder?: InputMaybe<ClickupLocationCompositeFilter>
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<Array<ClickupLinkedTaskObjectEqualityInput>>
  list?: InputMaybe<ClickupLocationCompositeFilter>
  name?: InputMaybe<StringFilter>
  orderindex?: InputMaybe<StringFilter>
  parent?: InputMaybe<JsonNullableFilter>
  permissionLevel?: InputMaybe<StringFilter>
  points?: InputMaybe<BigIntNullableFilter>
  priority?: InputMaybe<ClickupPriorityNullableCompositeFilter>
  project?: InputMaybe<ProjectNullableRelationFilter>
  projectId?: InputMaybe<StringNullableFilter>
  sharing?: InputMaybe<ClickupSharingCompositeFilter>
  space?: InputMaybe<ClickupSpaceCompositeFilter>
  startDate?: InputMaybe<StringNullableFilter>
  tags?: InputMaybe<Array<ClickupTagObjectEqualityInput>>
  teamId?: InputMaybe<StringFilter>
  textContent?: InputMaybe<StringFilter>
  timeSpent?: InputMaybe<BigIntNullableFilter>
  url?: InputMaybe<StringFilter>
  watchers?: InputMaybe<JsonNullableFilter>
}

export type ClickupTasksCustomField = {
  __typename?: 'ClickupTasksCustomField'
  dateCreated: Scalars['String']['output']
  hideFromGuests: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  type: Scalars['String']['output']
  typeConfig: Scalars['JSON']['output']
  value?: Maybe<Scalars['JSON']['output']>
}

export type ClickupTasksCustomFieldCreateInput = {
  dateCreated: Scalars['String']['input']
  hideFromGuests: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  required?: InputMaybe<Scalars['Boolean']['input']>
  type: Scalars['String']['input']
  typeConfig: Scalars['JSON']['input']
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTasksCustomFieldObjectEqualityInput = {
  dateCreated: Scalars['String']['input']
  hideFromGuests: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  required?: InputMaybe<Scalars['Boolean']['input']>
  type: Scalars['String']['input']
  typeConfig: Scalars['JSON']['input']
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupTasksCustomFieldOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTasksDueDate = {
  __typename?: 'ClickupTasksDueDate'
  clickupTaskId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  dueDate: Scalars['BigInt']['output']
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ClickupTasksDueDateAvgAggregate = {
  __typename?: 'ClickupTasksDueDateAvgAggregate'
  dueDate?: Maybe<Scalars['Float']['output']>
}

export type ClickupTasksDueDateCountAggregate = {
  __typename?: 'ClickupTasksDueDateCountAggregate'
  _all: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  dueDate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ClickupTasksDueDateCreateInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutClickupTasksDueDatesInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksDueDateCreateManyClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksDueDateCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTasksDueDateCreateManyClickupTaskInput>
}

export type ClickupTasksDueDateCreateManyInput = {
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksDueDateCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTasksDueDateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTasksDueDateCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTasksDueDateCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTasksDueDateCreateManyClickupTaskInputEnvelope>
}

export type ClickupTasksDueDateCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTasksDueDateCreateWithoutClickupTaskInput
  where: ClickupTasksDueDateWhereUniqueInput
}

export type ClickupTasksDueDateCreateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksDueDateListRelationFilter = {
  every?: InputMaybe<ClickupTasksDueDateWhereInput>
  none?: InputMaybe<ClickupTasksDueDateWhereInput>
  some?: InputMaybe<ClickupTasksDueDateWhereInput>
}

export type ClickupTasksDueDateMaxAggregate = {
  __typename?: 'ClickupTasksDueDateMaxAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTasksDueDateMinAggregate = {
  __typename?: 'ClickupTasksDueDateMinAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTasksDueDateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTasksDueDateOrderByWithRelationInput = {
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  dueDate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClickupTasksDueDateScalarFieldEnum {
  ClickupTaskId = 'clickupTaskId',
  CreatedAt = 'createdAt',
  DueDate = 'dueDate',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ClickupTasksDueDateScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTasksDueDateScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksDueDateScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksDueDateScalarWhereInput>>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  dueDate?: InputMaybe<BigIntFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksDueDateSumAggregate = {
  __typename?: 'ClickupTasksDueDateSumAggregate'
  dueDate?: Maybe<Scalars['BigInt']['output']>
}

export type ClickupTasksDueDateUpdateInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutClickupTasksDueDatesNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  dueDate?: InputMaybe<BigIntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksDueDateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  dueDate?: InputMaybe<BigIntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksDueDateUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTasksDueDateUpdateManyMutationInput
  where: ClickupTasksDueDateScalarWhereInput
}

export type ClickupTasksDueDateUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTasksDueDateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTasksDueDateCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTasksDueDateCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTasksDueDateCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTasksDueDateWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTasksDueDateScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTasksDueDateWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTasksDueDateWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTasksDueDateUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTasksDueDateUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTasksDueDateUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTasksDueDateUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTasksDueDateUpdateWithoutClickupTaskInput
  where: ClickupTasksDueDateWhereUniqueInput
}

export type ClickupTasksDueDateUpdateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  dueDate?: InputMaybe<BigIntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksDueDateUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTasksDueDateCreateWithoutClickupTaskInput
  update: ClickupTasksDueDateUpdateWithoutClickupTaskInput
  where: ClickupTasksDueDateWhereUniqueInput
}

export type ClickupTasksDueDateWhereInput = {
  AND?: InputMaybe<Array<ClickupTasksDueDateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksDueDateWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksDueDateWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  dueDate?: InputMaybe<BigIntFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksDueDateWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTasksDueDateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksDueDateWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksDueDateWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  dueDate?: InputMaybe<BigIntFilter>
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksQueue = {
  __typename?: 'ClickupTasksQueue'
  id: Scalars['String']['output']
  taskId: Scalars['String']['output']
}

export type ClickupTasksQueueCountAggregate = {
  __typename?: 'ClickupTasksQueueCountAggregate'
  _all: Scalars['Int']['output']
  id: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
}

export type ClickupTasksQueueCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>
  taskId: Scalars['String']['input']
}

export type ClickupTasksQueueCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>
  taskId: Scalars['String']['input']
}

export type ClickupTasksQueueMaxAggregate = {
  __typename?: 'ClickupTasksQueueMaxAggregate'
  id?: Maybe<Scalars['String']['output']>
  taskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTasksQueueMinAggregate = {
  __typename?: 'ClickupTasksQueueMinAggregate'
  id?: Maybe<Scalars['String']['output']>
  taskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTasksQueueOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>
  taskId?: InputMaybe<SortOrder>
}

export enum ClickupTasksQueueScalarFieldEnum {
  Id = 'id',
  TaskId = 'taskId',
}

export type ClickupTasksQueueUpdateInput = {
  taskId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTasksQueueUpdateManyMutationInput = {
  taskId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTasksQueueWhereInput = {
  AND?: InputMaybe<Array<ClickupTasksQueueWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksQueueWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksQueueWhereInput>>
  id?: InputMaybe<StringFilter>
  taskId?: InputMaybe<StringFilter>
}

export type ClickupTasksQueueWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTasksQueueWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksQueueWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksQueueWhereInput>>
  id?: InputMaybe<Scalars['String']['input']>
  taskId?: InputMaybe<Scalars['String']['input']>
}

export type ClickupTasksStatus = {
  __typename?: 'ClickupTasksStatus'
  clickupTaskId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  status: ClickupStatus
  updatedAt: Scalars['DateTime']['output']
}

export type ClickupTasksStatusCountAggregate = {
  __typename?: 'ClickupTasksStatusCountAggregate'
  _all: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ClickupTasksStatusCreateInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutClickupTasksStatusInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  status: ClickupStatusCreateEnvelopeInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksStatusCreateManyClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  status: ClickupStatusCreateEnvelopeInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksStatusCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTasksStatusCreateManyClickupTaskInput>
}

export type ClickupTasksStatusCreateManyInput = {
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  status: ClickupStatusCreateEnvelopeInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksStatusCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTasksStatusWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTasksStatusCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTasksStatusCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTasksStatusCreateManyClickupTaskInputEnvelope>
}

export type ClickupTasksStatusCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTasksStatusCreateWithoutClickupTaskInput
  where: ClickupTasksStatusWhereUniqueInput
}

export type ClickupTasksStatusCreateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  status: ClickupStatusCreateEnvelopeInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksStatusListRelationFilter = {
  every?: InputMaybe<ClickupTasksStatusWhereInput>
  none?: InputMaybe<ClickupTasksStatusWhereInput>
  some?: InputMaybe<ClickupTasksStatusWhereInput>
}

export type ClickupTasksStatusMaxAggregate = {
  __typename?: 'ClickupTasksStatusMaxAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTasksStatusMinAggregate = {
  __typename?: 'ClickupTasksStatusMinAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTasksStatusOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTasksStatusOrderByWithRelationInput = {
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  status?: InputMaybe<ClickupStatusOrderByInput>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClickupTasksStatusScalarFieldEnum {
  ClickupTaskId = 'clickupTaskId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ClickupTasksStatusScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTasksStatusScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksStatusScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksStatusScalarWhereInput>>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksStatusUpdateInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutClickupTasksStatusNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupStatusUpdateEnvelopeInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksStatusUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupStatusUpdateEnvelopeInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksStatusUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTasksStatusUpdateManyMutationInput
  where: ClickupTasksStatusScalarWhereInput
}

export type ClickupTasksStatusUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTasksStatusWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTasksStatusCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTasksStatusCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTasksStatusCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTasksStatusWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTasksStatusScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTasksStatusWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTasksStatusWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTasksStatusUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTasksStatusUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTasksStatusUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTasksStatusUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTasksStatusUpdateWithoutClickupTaskInput
  where: ClickupTasksStatusWhereUniqueInput
}

export type ClickupTasksStatusUpdateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupStatusUpdateEnvelopeInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksStatusUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTasksStatusCreateWithoutClickupTaskInput
  update: ClickupTasksStatusUpdateWithoutClickupTaskInput
  where: ClickupTasksStatusWhereUniqueInput
}

export type ClickupTasksStatusWhereInput = {
  AND?: InputMaybe<Array<ClickupTasksStatusWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksStatusWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksStatusWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  status?: InputMaybe<ClickupStatusCompositeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksStatusWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTasksStatusWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksStatusWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksStatusWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupStatusCompositeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksTimeEstimate = {
  __typename?: 'ClickupTasksTimeEstimate'
  clickupTaskId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  estimate: Scalars['Int']['output']
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ClickupTasksTimeEstimateAvgAggregate = {
  __typename?: 'ClickupTasksTimeEstimateAvgAggregate'
  estimate?: Maybe<Scalars['Float']['output']>
}

export type ClickupTasksTimeEstimateCountAggregate = {
  __typename?: 'ClickupTasksTimeEstimateCountAggregate'
  _all: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  estimate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ClickupTasksTimeEstimateCreateInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutClickupTasksTimeEstimatesInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksTimeEstimateCreateManyClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksTimeEstimateCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTasksTimeEstimateCreateManyClickupTaskInput>
}

export type ClickupTasksTimeEstimateCreateManyInput = {
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksTimeEstimateCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTasksTimeEstimateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTasksTimeEstimateCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTasksTimeEstimateCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTasksTimeEstimateCreateManyClickupTaskInputEnvelope>
}

export type ClickupTasksTimeEstimateCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTasksTimeEstimateCreateWithoutClickupTaskInput
  where: ClickupTasksTimeEstimateWhereUniqueInput
}

export type ClickupTasksTimeEstimateCreateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTasksTimeEstimateListRelationFilter = {
  every?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
  none?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
  some?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
}

export type ClickupTasksTimeEstimateMaxAggregate = {
  __typename?: 'ClickupTasksTimeEstimateMaxAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  estimate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTasksTimeEstimateMinAggregate = {
  __typename?: 'ClickupTasksTimeEstimateMinAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  estimate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTasksTimeEstimateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTasksTimeEstimateOrderByWithRelationInput = {
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  estimate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClickupTasksTimeEstimateScalarFieldEnum {
  ClickupTaskId = 'clickupTaskId',
  CreatedAt = 'createdAt',
  Estimate = 'estimate',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ClickupTasksTimeEstimateScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTasksTimeEstimateScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksTimeEstimateScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksTimeEstimateScalarWhereInput>>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  estimate?: InputMaybe<IntFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksTimeEstimateSumAggregate = {
  __typename?: 'ClickupTasksTimeEstimateSumAggregate'
  estimate?: Maybe<Scalars['Int']['output']>
}

export type ClickupTasksTimeEstimateUpdateInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutClickupTasksTimeEstimatesNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  estimate?: InputMaybe<IntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksTimeEstimateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  estimate?: InputMaybe<IntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksTimeEstimateUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTasksTimeEstimateUpdateManyMutationInput
  where: ClickupTasksTimeEstimateScalarWhereInput
}

export type ClickupTasksTimeEstimateUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTasksTimeEstimateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTasksTimeEstimateCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTasksTimeEstimateCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTasksTimeEstimateCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTasksTimeEstimateWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTasksTimeEstimateScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTasksTimeEstimateWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTasksTimeEstimateWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTasksTimeEstimateUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTasksTimeEstimateUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTasksTimeEstimateUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTasksTimeEstimateUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTasksTimeEstimateUpdateWithoutClickupTaskInput
  where: ClickupTasksTimeEstimateWhereUniqueInput
}

export type ClickupTasksTimeEstimateUpdateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  estimate?: InputMaybe<IntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTasksTimeEstimateUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTasksTimeEstimateCreateWithoutClickupTaskInput
  update: ClickupTasksTimeEstimateUpdateWithoutClickupTaskInput
  where: ClickupTasksTimeEstimateWhereUniqueInput
}

export type ClickupTasksTimeEstimateWhereInput = {
  AND?: InputMaybe<Array<ClickupTasksTimeEstimateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksTimeEstimateWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksTimeEstimateWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  estimate?: InputMaybe<IntFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTasksTimeEstimateWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTasksTimeEstimateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTasksTimeEstimateWhereInput>>
  OR?: InputMaybe<Array<ClickupTasksTimeEstimateWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  estimate?: InputMaybe<IntFilter>
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupUser = {
  __typename?: 'ClickupUser'
  color: Scalars['String']['output']
  email: Scalars['String']['output']
  id: Scalars['Int']['output']
  initials?: Maybe<Scalars['String']['output']>
  profilePicture?: Maybe<Scalars['String']['output']>
  username: Scalars['String']['output']
}

export type ClickupUserCompositeFilter = {
  equals?: InputMaybe<ClickupUserObjectEqualityInput>
  is?: InputMaybe<ClickupUserWhereInput>
  isNot?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserCreateEnvelopeInput = {
  set?: InputMaybe<ClickupUserCreateInput>
}

export type ClickupUserCreateInput = {
  color: Scalars['String']['input']
  email: Scalars['String']['input']
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  username: Scalars['String']['input']
}

export type ClickupUserObjectEqualityInput = {
  color: Scalars['String']['input']
  email: Scalars['String']['input']
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  username: Scalars['String']['input']
}

export type ClickupUserOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupUserOrderByInput = {
  color?: InputMaybe<SortOrder>
  email?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  initials?: InputMaybe<SortOrder>
  profilePicture?: InputMaybe<SortOrder>
  username?: InputMaybe<SortOrder>
}

export type ClickupUserUpdateEnvelopeInput = {
  set?: InputMaybe<ClickupUserCreateInput>
  update?: InputMaybe<ClickupUserUpdateInput>
}

export type ClickupUserUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupUserWhereInput = {
  AND?: InputMaybe<Array<ClickupUserWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserWhereInput>>
  OR?: InputMaybe<Array<ClickupUserWhereInput>>
  color?: InputMaybe<StringFilter>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  initials?: InputMaybe<StringNullableFilter>
  profilePicture?: InputMaybe<StringNullableFilter>
  username?: InputMaybe<StringFilter>
}

export type ClickupWebhook = {
  __typename?: 'ClickupWebhook'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  secret: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  webhookId: Scalars['String']['output']
}

export type ClickupWebhookCountAggregate = {
  __typename?: 'ClickupWebhookCountAggregate'
  _all: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  id: Scalars['Int']['output']
  secret: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
  webhookId: Scalars['Int']['output']
}

export type ClickupWebhookCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  secret: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  webhookId: Scalars['String']['input']
}

export type ClickupWebhookCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  secret: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  webhookId: Scalars['String']['input']
}

export type ClickupWebhookMaxAggregate = {
  __typename?: 'ClickupWebhookMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  secret?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  webhookId?: Maybe<Scalars['String']['output']>
}

export type ClickupWebhookMinAggregate = {
  __typename?: 'ClickupWebhookMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  secret?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  webhookId?: Maybe<Scalars['String']['output']>
}

export type ClickupWebhookOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  secret?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  webhookId?: InputMaybe<SortOrder>
}

export enum ClickupWebhookScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Secret = 'secret',
  UpdatedAt = 'updatedAt',
  WebhookId = 'webhookId',
}

export type ClickupWebhookUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  secret?: InputMaybe<StringFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  webhookId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupWebhookUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  secret?: InputMaybe<StringFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  webhookId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupWebhookWhereInput = {
  AND?: InputMaybe<Array<ClickupWebhookWhereInput>>
  NOT?: InputMaybe<Array<ClickupWebhookWhereInput>>
  OR?: InputMaybe<Array<ClickupWebhookWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  secret?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  webhookId?: InputMaybe<StringFilter>
}

export type ClickupWebhookWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupWebhookWhereInput>>
  NOT?: InputMaybe<Array<ClickupWebhookWhereInput>>
  OR?: InputMaybe<Array<ClickupWebhookWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['String']['input']>
  secret?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  webhookId?: InputMaybe<Scalars['String']['input']>
}

export type ClockfyTimeEntryProject = {
  __typename?: 'ClockfyTimeEntryProject'
  activeEstimate: Scalars['String']['output']
  archived: Scalars['Boolean']['output']
  billable: Scalars['Boolean']['output']
  budgetEstimate?: Maybe<Scalars['JSON']['output']>
  clientId: Scalars['String']['output']
  clientName: Scalars['String']['output']
  color: Scalars['String']['output']
  duration: Scalars['String']['output']
  estimate: ClockfyTimeEntryProjectEstimate
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  note: Scalars['String']['output']
  public: Scalars['Boolean']['output']
  template: Scalars['Boolean']['output']
  timeEstimate: ClockfyTimeEntryProjectEstimate
  workspaceId: Scalars['String']['output']
}

export type ClockfyTimeEntryProjectCreateInput = {
  activeEstimate: Scalars['String']['input']
  archived: Scalars['Boolean']['input']
  billable: Scalars['Boolean']['input']
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId: Scalars['String']['input']
  clientName: Scalars['String']['input']
  color: Scalars['String']['input']
  duration: Scalars['String']['input']
  estimate: ClockfyTimeEntryProjectEstimateCreateInput
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  note: Scalars['String']['input']
  public: Scalars['Boolean']['input']
  template: Scalars['Boolean']['input']
  timeEstimate: ClockfyTimeEntryProjectEstimateCreateInput
  workspaceId: Scalars['String']['input']
}

export type ClockfyTimeEntryProjectEstimate = {
  __typename?: 'ClockfyTimeEntryProjectEstimate'
  estimate: Scalars['JSON']['output']
  includeNonBillable?: Maybe<Scalars['Boolean']['output']>
  resetOption?: Maybe<Scalars['JSON']['output']>
  type: Scalars['String']['output']
}

export type ClockfyTimeEntryProjectEstimateCompositeFilter = {
  equals?: InputMaybe<ClockfyTimeEntryProjectEstimateObjectEqualityInput>
  is?: InputMaybe<ClockfyTimeEntryProjectEstimateWhereInput>
  isNot?: InputMaybe<ClockfyTimeEntryProjectEstimateWhereInput>
}

export type ClockfyTimeEntryProjectEstimateCreateInput = {
  estimate: Scalars['JSON']['input']
  includeNonBillable?: InputMaybe<Scalars['Boolean']['input']>
  resetOption?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
}

export type ClockfyTimeEntryProjectEstimateObjectEqualityInput = {
  estimate: Scalars['JSON']['input']
  includeNonBillable?: InputMaybe<Scalars['Boolean']['input']>
  resetOption?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
}

export type ClockfyTimeEntryProjectEstimateOrderByInput = {
  estimate?: InputMaybe<SortOrder>
  includeNonBillable?: InputMaybe<SortOrder>
  resetOption?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
}

export type ClockfyTimeEntryProjectEstimateUpdateEnvelopeInput = {
  set?: InputMaybe<ClockfyTimeEntryProjectEstimateCreateInput>
  update?: InputMaybe<ClockfyTimeEntryProjectEstimateUpdateInput>
}

export type ClockfyTimeEntryProjectEstimateUpdateInput = {
  estimate?: InputMaybe<Scalars['JSON']['input']>
  includeNonBillable?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  resetOption?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockfyTimeEntryProjectEstimateWhereInput = {
  AND?: InputMaybe<Array<ClockfyTimeEntryProjectEstimateWhereInput>>
  NOT?: InputMaybe<Array<ClockfyTimeEntryProjectEstimateWhereInput>>
  OR?: InputMaybe<Array<ClockfyTimeEntryProjectEstimateWhereInput>>
  estimate?: InputMaybe<JsonFilter>
  includeNonBillable?: InputMaybe<BoolNullableFilter>
  resetOption?: InputMaybe<JsonNullableFilter>
  type?: InputMaybe<StringFilter>
}

export type ClockfyTimeEntryProjectNullableCompositeFilter = {
  equals?: InputMaybe<ClockfyTimeEntryProjectObjectEqualityInput>
  is?: InputMaybe<ClockfyTimeEntryProjectWhereInput>
  isNot?: InputMaybe<ClockfyTimeEntryProjectWhereInput>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockfyTimeEntryProjectNullableCreateEnvelopeInput = {
  set?: InputMaybe<ClockfyTimeEntryProjectCreateInput>
}

export type ClockfyTimeEntryProjectNullableUpdateEnvelopeInput = {
  set?: InputMaybe<ClockfyTimeEntryProjectCreateInput>
  unset?: InputMaybe<Scalars['Boolean']['input']>
  upsert?: InputMaybe<ClockfyTimeEntryProjectUpsertInput>
}

export type ClockfyTimeEntryProjectObjectEqualityInput = {
  activeEstimate: Scalars['String']['input']
  archived: Scalars['Boolean']['input']
  billable: Scalars['Boolean']['input']
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId: Scalars['String']['input']
  clientName: Scalars['String']['input']
  color: Scalars['String']['input']
  duration: Scalars['String']['input']
  estimate: ClockfyTimeEntryProjectEstimateObjectEqualityInput
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  note: Scalars['String']['input']
  public: Scalars['Boolean']['input']
  template: Scalars['Boolean']['input']
  timeEstimate: ClockfyTimeEntryProjectEstimateObjectEqualityInput
  workspaceId: Scalars['String']['input']
}

export type ClockfyTimeEntryProjectOrderByInput = {
  activeEstimate?: InputMaybe<SortOrder>
  archived?: InputMaybe<SortOrder>
  billable?: InputMaybe<SortOrder>
  budgetEstimate?: InputMaybe<SortOrder>
  clientId?: InputMaybe<SortOrder>
  clientName?: InputMaybe<SortOrder>
  color?: InputMaybe<SortOrder>
  duration?: InputMaybe<SortOrder>
  estimate?: InputMaybe<ClockfyTimeEntryProjectEstimateOrderByInput>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  note?: InputMaybe<SortOrder>
  public?: InputMaybe<SortOrder>
  template?: InputMaybe<SortOrder>
  timeEstimate?: InputMaybe<ClockfyTimeEntryProjectEstimateOrderByInput>
  workspaceId?: InputMaybe<SortOrder>
}

export type ClockfyTimeEntryProjectUpdateInput = {
  activeEstimate?: InputMaybe<StringFieldUpdateOperationsInput>
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId?: InputMaybe<StringFieldUpdateOperationsInput>
  clientName?: InputMaybe<StringFieldUpdateOperationsInput>
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<StringFieldUpdateOperationsInput>
  estimate?: InputMaybe<ClockfyTimeEntryProjectEstimateUpdateEnvelopeInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  note?: InputMaybe<StringFieldUpdateOperationsInput>
  public?: InputMaybe<BoolFieldUpdateOperationsInput>
  template?: InputMaybe<BoolFieldUpdateOperationsInput>
  timeEstimate?: InputMaybe<ClockfyTimeEntryProjectEstimateUpdateEnvelopeInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockfyTimeEntryProjectUpsertInput = {
  set: ClockfyTimeEntryProjectCreateInput
  update: ClockfyTimeEntryProjectUpdateInput
}

export type ClockfyTimeEntryProjectWhereInput = {
  AND?: InputMaybe<Array<ClockfyTimeEntryProjectWhereInput>>
  NOT?: InputMaybe<Array<ClockfyTimeEntryProjectWhereInput>>
  OR?: InputMaybe<Array<ClockfyTimeEntryProjectWhereInput>>
  activeEstimate?: InputMaybe<StringFilter>
  archived?: InputMaybe<BoolFilter>
  billable?: InputMaybe<BoolFilter>
  budgetEstimate?: InputMaybe<JsonNullableFilter>
  clientId?: InputMaybe<StringFilter>
  clientName?: InputMaybe<StringFilter>
  color?: InputMaybe<StringFilter>
  duration?: InputMaybe<StringFilter>
  estimate?: InputMaybe<ClockfyTimeEntryProjectEstimateCompositeFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  note?: InputMaybe<StringFilter>
  public?: InputMaybe<BoolFilter>
  template?: InputMaybe<BoolFilter>
  timeEstimate?: InputMaybe<ClockfyTimeEntryProjectEstimateCompositeFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockfyTimeEntryTag = {
  __typename?: 'ClockfyTimeEntryTag'
  archived: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  workspaceId: Scalars['String']['output']
}

export type ClockfyTimeEntryTagCreateInput = {
  archived: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockfyTimeEntryTagObjectEqualityInput = {
  archived: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockfyTimeEntryTagOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClockfyTimeEntryTimeInterval = {
  __typename?: 'ClockfyTimeEntryTimeInterval'
  duration?: Maybe<Scalars['String']['output']>
  end?: Maybe<Scalars['String']['output']>
  start: Scalars['String']['output']
}

export type ClockfyTimeEntryTimeIntervalCompositeFilter = {
  equals?: InputMaybe<ClockfyTimeEntryTimeIntervalObjectEqualityInput>
  is?: InputMaybe<ClockfyTimeEntryTimeIntervalWhereInput>
  isNot?: InputMaybe<ClockfyTimeEntryTimeIntervalWhereInput>
}

export type ClockfyTimeEntryTimeIntervalCreateEnvelopeInput = {
  set?: InputMaybe<ClockfyTimeEntryTimeIntervalCreateInput>
}

export type ClockfyTimeEntryTimeIntervalCreateInput = {
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  start: Scalars['String']['input']
}

export type ClockfyTimeEntryTimeIntervalObjectEqualityInput = {
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  start: Scalars['String']['input']
}

export type ClockfyTimeEntryTimeIntervalOrderByInput = {
  duration?: InputMaybe<SortOrder>
  end?: InputMaybe<SortOrder>
  start?: InputMaybe<SortOrder>
}

export type ClockfyTimeEntryTimeIntervalUpdateEnvelopeInput = {
  set?: InputMaybe<ClockfyTimeEntryTimeIntervalCreateInput>
  update?: InputMaybe<ClockfyTimeEntryTimeIntervalUpdateInput>
}

export type ClockfyTimeEntryTimeIntervalUpdateInput = {
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockfyTimeEntryTimeIntervalWhereInput = {
  AND?: InputMaybe<Array<ClockfyTimeEntryTimeIntervalWhereInput>>
  NOT?: InputMaybe<Array<ClockfyTimeEntryTimeIntervalWhereInput>>
  OR?: InputMaybe<Array<ClockfyTimeEntryTimeIntervalWhereInput>>
  duration?: InputMaybe<StringNullableFilter>
  end?: InputMaybe<StringNullableFilter>
  start?: InputMaybe<StringFilter>
}

export type ClockfyTimeEntryUser = {
  __typename?: 'ClockfyTimeEntryUser'
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  status: Scalars['String']['output']
}

export type ClockfyTimeEntryUserCompositeFilter = {
  equals?: InputMaybe<ClockfyTimeEntryUserObjectEqualityInput>
  is?: InputMaybe<ClockfyTimeEntryUserWhereInput>
  isNot?: InputMaybe<ClockfyTimeEntryUserWhereInput>
}

export type ClockfyTimeEntryUserCreateEnvelopeInput = {
  set?: InputMaybe<ClockfyTimeEntryUserCreateInput>
}

export type ClockfyTimeEntryUserCreateInput = {
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  status: Scalars['String']['input']
}

export type ClockfyTimeEntryUserObjectEqualityInput = {
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  status: Scalars['String']['input']
}

export type ClockfyTimeEntryUserOrderByInput = {
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
}

export type ClockfyTimeEntryUserUpdateEnvelopeInput = {
  set?: InputMaybe<ClockfyTimeEntryUserCreateInput>
  update?: InputMaybe<ClockfyTimeEntryUserUpdateInput>
}

export type ClockfyTimeEntryUserUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  status?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockfyTimeEntryUserWhereInput = {
  AND?: InputMaybe<Array<ClockfyTimeEntryUserWhereInput>>
  NOT?: InputMaybe<Array<ClockfyTimeEntryUserWhereInput>>
  OR?: InputMaybe<Array<ClockfyTimeEntryUserWhereInput>>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  status?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntry = {
  __typename?: 'ClockifyTimeEntry'
  billable: Scalars['Boolean']['output']
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clockifyId: Scalars['String']['output']
  clockifyProject?: Maybe<ClockfyTimeEntryProject>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  costRate?: Maybe<Scalars['Int']['output']>
  currentlyRunning: Scalars['Boolean']['output']
  customFieldValues?: Maybe<Scalars['JSON']['output']>
  description: Scalars['String']['output']
  hourlyRate?: Maybe<Scalars['Int']['output']>
  id: Scalars['String']['output']
  isLocked: Scalars['Boolean']['output']
  kioskId?: Maybe<Scalars['JSON']['output']>
  projectId?: Maybe<Scalars['String']['output']>
  tags: Array<ClockfyTimeEntryTag>
  task?: Maybe<Scalars['JSON']['output']>
  timeInterval: ClockfyTimeEntryTimeInterval
  type: Scalars['String']['output']
  user: ClockfyTimeEntryUser
  userId: Scalars['String']['output']
  workspaceId: Scalars['String']['output']
}

export type ClockifyTimeEntryAvgAggregate = {
  __typename?: 'ClockifyTimeEntryAvgAggregate'
  costRate?: Maybe<Scalars['Float']['output']>
  hourlyRate?: Maybe<Scalars['Float']['output']>
}

export type ClockifyTimeEntryCountAggregate = {
  __typename?: 'ClockifyTimeEntryCountAggregate'
  _all: Scalars['Int']['output']
  billable: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  clockifyId: Scalars['Int']['output']
  clockifyProjectId: Scalars['Int']['output']
  costRate: Scalars['Int']['output']
  currentlyRunning: Scalars['Int']['output']
  customFieldValues: Scalars['Int']['output']
  description: Scalars['Int']['output']
  hourlyRate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  isLocked: Scalars['Int']['output']
  kioskId: Scalars['Int']['output']
  projectId: Scalars['Int']['output']
  task: Scalars['Int']['output']
  type: Scalars['Int']['output']
  userId: Scalars['Int']['output']
  workspaceId: Scalars['Int']['output']
}

export type ClockifyTimeEntryCreateInput = {
  billable: Scalars['Boolean']['input']
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockfyTimeEntryInput>
  clockifyId: Scalars['String']['input']
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCreateEnvelopeInput>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  project?: InputMaybe<ProjectCreateNestedOneWithoutClockfyTimeEntryInput>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval: ClockfyTimeEntryTimeIntervalCreateEnvelopeInput
  type: Scalars['String']['input']
  user: ClockfyTimeEntryUserCreateEnvelopeInput
  userId: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyClickupTaskInput = {
  billable: Scalars['Boolean']['input']
  clockifyId: Scalars['String']['input']
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCreateEnvelopeInput>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  projectId?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval: ClockfyTimeEntryTimeIntervalCreateEnvelopeInput
  type: Scalars['String']['input']
  user: ClockfyTimeEntryUserCreateEnvelopeInput
  userId: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyClickupTaskInputEnvelope = {
  data: Array<ClockifyTimeEntryCreateManyClickupTaskInput>
}

export type ClockifyTimeEntryCreateManyInput = {
  billable: Scalars['Boolean']['input']
  clickupTaskId?: InputMaybe<Scalars['String']['input']>
  clockifyId: Scalars['String']['input']
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCreateEnvelopeInput>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  projectId?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval: ClockfyTimeEntryTimeIntervalCreateEnvelopeInput
  type: Scalars['String']['input']
  user: ClockfyTimeEntryUserCreateEnvelopeInput
  userId: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyProjectInput = {
  billable: Scalars['Boolean']['input']
  clickupTaskId?: InputMaybe<Scalars['String']['input']>
  clockifyId: Scalars['String']['input']
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCreateEnvelopeInput>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval: ClockfyTimeEntryTimeIntervalCreateEnvelopeInput
  type: Scalars['String']['input']
  user: ClockfyTimeEntryUserCreateEnvelopeInput
  userId: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyProjectInputEnvelope = {
  data: Array<ClockifyTimeEntryCreateManyProjectInput>
}

export type ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClickupTaskInputEnvelope>
}

export type ClockifyTimeEntryCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutProjectInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutProjectInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyProjectInputEnvelope>
}

export type ClockifyTimeEntryCreateOrConnectWithoutClickupTaskInput = {
  create: ClockifyTimeEntryCreateWithoutClickupTaskInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateOrConnectWithoutProjectInput = {
  create: ClockifyTimeEntryCreateWithoutProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateWithoutClickupTaskInput = {
  billable: Scalars['Boolean']['input']
  clockifyId: Scalars['String']['input']
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCreateEnvelopeInput>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  project?: InputMaybe<ProjectCreateNestedOneWithoutClockfyTimeEntryInput>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval: ClockfyTimeEntryTimeIntervalCreateEnvelopeInput
  type: Scalars['String']['input']
  user: ClockfyTimeEntryUserCreateEnvelopeInput
  userId: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateWithoutProjectInput = {
  billable: Scalars['Boolean']['input']
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockfyTimeEntryInput>
  clockifyId: Scalars['String']['input']
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCreateEnvelopeInput>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval: ClockfyTimeEntryTimeIntervalCreateEnvelopeInput
  type: Scalars['String']['input']
  user: ClockfyTimeEntryUserCreateEnvelopeInput
  userId: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryListRelationFilter = {
  every?: InputMaybe<ClockifyTimeEntryWhereInput>
  none?: InputMaybe<ClockifyTimeEntryWhereInput>
  some?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClockifyTimeEntryMaxAggregate = {
  __typename?: 'ClockifyTimeEntryMaxAggregate'
  billable?: Maybe<Scalars['Boolean']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clockifyId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  costRate?: Maybe<Scalars['Int']['output']>
  currentlyRunning?: Maybe<Scalars['Boolean']['output']>
  description?: Maybe<Scalars['String']['output']>
  hourlyRate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  isLocked?: Maybe<Scalars['Boolean']['output']>
  projectId?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['String']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryMinAggregate = {
  __typename?: 'ClockifyTimeEntryMinAggregate'
  billable?: Maybe<Scalars['Boolean']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clockifyId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  costRate?: Maybe<Scalars['Int']['output']>
  currentlyRunning?: Maybe<Scalars['Boolean']['output']>
  description?: Maybe<Scalars['String']['output']>
  hourlyRate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  isLocked?: Maybe<Scalars['Boolean']['output']>
  projectId?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['String']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClockifyTimeEntryOrderByWithRelationInput = {
  billable?: InputMaybe<SortOrder>
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  clockifyId?: InputMaybe<SortOrder>
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectOrderByInput>
  clockifyProjectId?: InputMaybe<SortOrder>
  costRate?: InputMaybe<SortOrder>
  currentlyRunning?: InputMaybe<SortOrder>
  customFieldValues?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  hourlyRate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  isLocked?: InputMaybe<SortOrder>
  kioskId?: InputMaybe<SortOrder>
  project?: InputMaybe<ProjectOrderByWithRelationInput>
  projectId?: InputMaybe<SortOrder>
  tags?: InputMaybe<ClockfyTimeEntryTagOrderByCompositeAggregateInput>
  task?: InputMaybe<SortOrder>
  timeInterval?: InputMaybe<ClockfyTimeEntryTimeIntervalOrderByInput>
  type?: InputMaybe<SortOrder>
  user?: InputMaybe<ClockfyTimeEntryUserOrderByInput>
  userId?: InputMaybe<SortOrder>
  workspaceId?: InputMaybe<SortOrder>
}

export enum ClockifyTimeEntryScalarFieldEnum {
  Billable = 'billable',
  ClickupTaskId = 'clickupTaskId',
  ClockifyId = 'clockifyId',
  ClockifyProjectId = 'clockifyProjectId',
  CostRate = 'costRate',
  CurrentlyRunning = 'currentlyRunning',
  CustomFieldValues = 'customFieldValues',
  Description = 'description',
  HourlyRate = 'hourlyRate',
  Id = 'id',
  IsLocked = 'isLocked',
  KioskId = 'kioskId',
  ProjectId = 'projectId',
  Task = 'task',
  Type = 'type',
  UserId = 'userId',
  WorkspaceId = 'workspaceId',
}

export type ClockifyTimeEntryScalarWhereInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  billable?: InputMaybe<BoolFilter>
  clickupTaskId?: InputMaybe<StringNullableFilter>
  clockifyId?: InputMaybe<StringFilter>
  clockifyProjectId?: InputMaybe<StringNullableFilter>
  costRate?: InputMaybe<IntNullableFilter>
  currentlyRunning?: InputMaybe<BoolFilter>
  customFieldValues?: InputMaybe<JsonNullableFilter>
  description?: InputMaybe<StringFilter>
  hourlyRate?: InputMaybe<IntNullableFilter>
  id?: InputMaybe<StringFilter>
  isLocked?: InputMaybe<BoolFilter>
  kioskId?: InputMaybe<JsonNullableFilter>
  projectId?: InputMaybe<StringNullableFilter>
  task?: InputMaybe<JsonNullableFilter>
  type?: InputMaybe<StringFilter>
  userId?: InputMaybe<StringFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntrySumAggregate = {
  __typename?: 'ClockifyTimeEntrySumAggregate'
  costRate?: Maybe<Scalars['Int']['output']>
  hourlyRate?: Maybe<Scalars['Int']['output']>
}

export type ClockifyTimeEntryUpdateInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockfyTimeEntryNestedInput>
  clockifyId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableUpdateEnvelopeInput>
  clockifyProjectId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  project?: InputMaybe<ProjectUpdateOneWithoutClockfyTimeEntryNestedInput>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval?: InputMaybe<ClockfyTimeEntryTimeIntervalUpdateEnvelopeInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<ClockfyTimeEntryUserUpdateEnvelopeInput>
  userId?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateManyMutationInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clockifyId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableUpdateEnvelopeInput>
  clockifyProjectId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval?: InputMaybe<ClockfyTimeEntryTimeIntervalUpdateEnvelopeInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<ClockfyTimeEntryUserUpdateEnvelopeInput>
  userId?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where: ClockifyTimeEntryScalarWhereInput
}

export type ClockifyTimeEntryUpdateManyWithWhereWithoutProjectInput = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where: ClockifyTimeEntryScalarWhereInput
}

export type ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTimeEntryUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClockifyTimeEntryUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClockifyTimeEntryUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClockifyTimeEntryUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutProjectInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutProjectInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyProjectInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTimeEntryUpdateWithWhereUniqueWithoutProjectInput>>
  updateMany?: InputMaybe<Array<ClockifyTimeEntryUpdateManyWithWhereWithoutProjectInput>>
  upsert?: InputMaybe<Array<ClockifyTimeEntryUpsertWithWhereUniqueWithoutProjectInput>>
}

export type ClockifyTimeEntryUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClockifyTimeEntryUpdateWithoutClickupTaskInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpdateWithWhereUniqueWithoutProjectInput = {
  data: ClockifyTimeEntryUpdateWithoutProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpdateWithoutClickupTaskInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clockifyId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableUpdateEnvelopeInput>
  clockifyProjectId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  project?: InputMaybe<ProjectUpdateOneWithoutClockfyTimeEntryNestedInput>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval?: InputMaybe<ClockfyTimeEntryTimeIntervalUpdateEnvelopeInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<ClockfyTimeEntryUserUpdateEnvelopeInput>
  userId?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateWithoutProjectInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockfyTimeEntryNestedInput>
  clockifyId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableUpdateEnvelopeInput>
  clockifyProjectId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagCreateInput>>
  task?: InputMaybe<Scalars['JSON']['input']>
  timeInterval?: InputMaybe<ClockfyTimeEntryTimeIntervalUpdateEnvelopeInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<ClockfyTimeEntryUserUpdateEnvelopeInput>
  userId?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClockifyTimeEntryCreateWithoutClickupTaskInput
  update: ClockifyTimeEntryUpdateWithoutClickupTaskInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpsertWithWhereUniqueWithoutProjectInput = {
  create: ClockifyTimeEntryCreateWithoutProjectInput
  update: ClockifyTimeEntryUpdateWithoutProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryWhereInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  billable?: InputMaybe<BoolFilter>
  clickupTask?: InputMaybe<ClickupTaskNullableRelationFilter>
  clickupTaskId?: InputMaybe<StringNullableFilter>
  clockifyId?: InputMaybe<StringFilter>
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCompositeFilter>
  clockifyProjectId?: InputMaybe<StringNullableFilter>
  costRate?: InputMaybe<IntNullableFilter>
  currentlyRunning?: InputMaybe<BoolFilter>
  customFieldValues?: InputMaybe<JsonNullableFilter>
  description?: InputMaybe<StringFilter>
  hourlyRate?: InputMaybe<IntNullableFilter>
  id?: InputMaybe<StringFilter>
  isLocked?: InputMaybe<BoolFilter>
  kioskId?: InputMaybe<JsonNullableFilter>
  project?: InputMaybe<ProjectNullableRelationFilter>
  projectId?: InputMaybe<StringNullableFilter>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagObjectEqualityInput>>
  task?: InputMaybe<JsonNullableFilter>
  timeInterval?: InputMaybe<ClockfyTimeEntryTimeIntervalCompositeFilter>
  type?: InputMaybe<StringFilter>
  user?: InputMaybe<ClockfyTimeEntryUserCompositeFilter>
  userId?: InputMaybe<StringFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntryWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  billable?: InputMaybe<BoolFilter>
  clickupTask?: InputMaybe<ClickupTaskNullableRelationFilter>
  clickupTaskId?: InputMaybe<StringNullableFilter>
  clockifyId?: InputMaybe<Scalars['String']['input']>
  clockifyProject?: InputMaybe<ClockfyTimeEntryProjectNullableCompositeFilter>
  clockifyProjectId?: InputMaybe<StringNullableFilter>
  costRate?: InputMaybe<IntNullableFilter>
  currentlyRunning?: InputMaybe<BoolFilter>
  customFieldValues?: InputMaybe<JsonNullableFilter>
  description?: InputMaybe<StringFilter>
  hourlyRate?: InputMaybe<IntNullableFilter>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked?: InputMaybe<BoolFilter>
  kioskId?: InputMaybe<JsonNullableFilter>
  project?: InputMaybe<ProjectNullableRelationFilter>
  projectId?: InputMaybe<StringNullableFilter>
  tags?: InputMaybe<Array<ClockfyTimeEntryTagObjectEqualityInput>>
  task?: InputMaybe<JsonNullableFilter>
  timeInterval?: InputMaybe<ClockfyTimeEntryTimeIntervalCompositeFilter>
  type?: InputMaybe<StringFilter>
  user?: InputMaybe<ClockfyTimeEntryUserCompositeFilter>
  userId?: InputMaybe<StringFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyWebhook = {
  __typename?: 'ClockifyWebhook'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  secret: Scalars['String']['output']
  webhookEvent: Scalars['String']['output']
  webhookId: Scalars['String']['output']
}

export type ClockifyWebhookCountAggregate = {
  __typename?: 'ClockifyWebhookCountAggregate'
  _all: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  id: Scalars['Int']['output']
  secret: Scalars['Int']['output']
  webhookEvent: Scalars['Int']['output']
  webhookId: Scalars['Int']['output']
}

export type ClockifyWebhookCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  secret: Scalars['String']['input']
  webhookEvent: Scalars['String']['input']
  webhookId: Scalars['String']['input']
}

export type ClockifyWebhookCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  secret: Scalars['String']['input']
  webhookEvent: Scalars['String']['input']
  webhookId: Scalars['String']['input']
}

export type ClockifyWebhookMaxAggregate = {
  __typename?: 'ClockifyWebhookMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  secret?: Maybe<Scalars['String']['output']>
  webhookEvent?: Maybe<Scalars['String']['output']>
  webhookId?: Maybe<Scalars['String']['output']>
}

export type ClockifyWebhookMinAggregate = {
  __typename?: 'ClockifyWebhookMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  secret?: Maybe<Scalars['String']['output']>
  webhookEvent?: Maybe<Scalars['String']['output']>
  webhookId?: Maybe<Scalars['String']['output']>
}

export type ClockifyWebhookOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  secret?: InputMaybe<SortOrder>
  webhookEvent?: InputMaybe<SortOrder>
  webhookId?: InputMaybe<SortOrder>
}

export enum ClockifyWebhookScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Secret = 'secret',
  WebhookEvent = 'webhookEvent',
  WebhookId = 'webhookId',
}

export type ClockifyWebhookUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  secret?: InputMaybe<StringFieldUpdateOperationsInput>
  webhookEvent?: InputMaybe<StringFieldUpdateOperationsInput>
  webhookId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyWebhookUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  secret?: InputMaybe<StringFieldUpdateOperationsInput>
  webhookEvent?: InputMaybe<StringFieldUpdateOperationsInput>
  webhookId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyWebhookWhereInput = {
  AND?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  NOT?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  OR?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  secret?: InputMaybe<StringFilter>
  webhookEvent?: InputMaybe<StringFilter>
  webhookId?: InputMaybe<StringFilter>
}

export type ClockifyWebhookWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  NOT?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  OR?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['String']['input']>
  secret?: InputMaybe<StringFilter>
  webhookEvent?: InputMaybe<Scalars['String']['input']>
  webhookId?: InputMaybe<Scalars['String']['input']>
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<NestedDateTimeFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>
  divide?: InputMaybe<Scalars['Int']['input']>
  increment?: InputMaybe<Scalars['Int']['input']>
  multiply?: InputMaybe<Scalars['Int']['input']>
  set?: InputMaybe<Scalars['Int']['input']>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<NestedIntFilter>
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<NestedIntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<Scalars['JSON']['input']>
}

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['JSON']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createManyClickupTask: AffectedRowsOutput
  createManyClickupTasksDueDate: AffectedRowsOutput
  createManyClickupTasksQueue: AffectedRowsOutput
  createManyClickupTasksStatus: AffectedRowsOutput
  createManyClickupTasksTimeEstimate: AffectedRowsOutput
  createManyClickupWebhook: AffectedRowsOutput
  createManyClockifyTimeEntry: AffectedRowsOutput
  createManyClockifyWebhook: AffectedRowsOutput
  createManyProject: AffectedRowsOutput
  createManyUser: AffectedRowsOutput
  createOneClickupTask: ClickupTask
  createOneClickupTasksDueDate: ClickupTasksDueDate
  createOneClickupTasksQueue: ClickupTasksQueue
  createOneClickupTasksStatus: ClickupTasksStatus
  createOneClickupTasksTimeEstimate: ClickupTasksTimeEstimate
  createOneClickupWebhook: ClickupWebhook
  createOneClockifyTimeEntry: ClockifyTimeEntry
  createOneClockifyWebhook: ClockifyWebhook
  createOneProject: Project
  createOneUser: User
  deleteManyClickupTask: AffectedRowsOutput
  deleteManyClickupTasksDueDate: AffectedRowsOutput
  deleteManyClickupTasksQueue: AffectedRowsOutput
  deleteManyClickupTasksStatus: AffectedRowsOutput
  deleteManyClickupTasksTimeEstimate: AffectedRowsOutput
  deleteManyClickupWebhook: AffectedRowsOutput
  deleteManyClockifyTimeEntry: AffectedRowsOutput
  deleteManyClockifyWebhook: AffectedRowsOutput
  deleteManyProject: AffectedRowsOutput
  deleteManyUser: AffectedRowsOutput
  deleteOneClickupTask?: Maybe<ClickupTask>
  deleteOneClickupTasksDueDate?: Maybe<ClickupTasksDueDate>
  deleteOneClickupTasksQueue?: Maybe<ClickupTasksQueue>
  deleteOneClickupTasksStatus?: Maybe<ClickupTasksStatus>
  deleteOneClickupTasksTimeEstimate?: Maybe<ClickupTasksTimeEstimate>
  deleteOneClickupWebhook?: Maybe<ClickupWebhook>
  deleteOneClockifyTimeEntry?: Maybe<ClockifyTimeEntry>
  deleteOneClockifyWebhook?: Maybe<ClockifyWebhook>
  deleteOneProject?: Maybe<Project>
  deleteOneUser?: Maybe<User>
  signin: SigninInfo
  updateManyClickupTask: AffectedRowsOutput
  updateManyClickupTasksDueDate: AffectedRowsOutput
  updateManyClickupTasksQueue: AffectedRowsOutput
  updateManyClickupTasksStatus: AffectedRowsOutput
  updateManyClickupTasksTimeEstimate: AffectedRowsOutput
  updateManyClickupWebhook: AffectedRowsOutput
  updateManyClockifyTimeEntry: AffectedRowsOutput
  updateManyClockifyWebhook: AffectedRowsOutput
  updateManyProject: AffectedRowsOutput
  updateManyUser: AffectedRowsOutput
  updateOneClickupTask?: Maybe<ClickupTask>
  updateOneClickupTasksDueDate?: Maybe<ClickupTasksDueDate>
  updateOneClickupTasksQueue?: Maybe<ClickupTasksQueue>
  updateOneClickupTasksStatus?: Maybe<ClickupTasksStatus>
  updateOneClickupTasksTimeEstimate?: Maybe<ClickupTasksTimeEstimate>
  updateOneClickupWebhook?: Maybe<ClickupWebhook>
  updateOneClockifyTimeEntry?: Maybe<ClockifyTimeEntry>
  updateOneClockifyWebhook?: Maybe<ClockifyWebhook>
  updateOneProject?: Maybe<Project>
  updateOneUser?: Maybe<User>
}

export type MutationCreateManyClickupTaskArgs = {
  data: Array<ClickupTaskCreateManyInput>
}

export type MutationCreateManyClickupTasksDueDateArgs = {
  data: Array<ClickupTasksDueDateCreateManyInput>
}

export type MutationCreateManyClickupTasksQueueArgs = {
  data: Array<ClickupTasksQueueCreateManyInput>
}

export type MutationCreateManyClickupTasksStatusArgs = {
  data: Array<ClickupTasksStatusCreateManyInput>
}

export type MutationCreateManyClickupTasksTimeEstimateArgs = {
  data: Array<ClickupTasksTimeEstimateCreateManyInput>
}

export type MutationCreateManyClickupWebhookArgs = {
  data: Array<ClickupWebhookCreateManyInput>
}

export type MutationCreateManyClockifyTimeEntryArgs = {
  data: Array<ClockifyTimeEntryCreateManyInput>
}

export type MutationCreateManyClockifyWebhookArgs = {
  data: Array<ClockifyWebhookCreateManyInput>
}

export type MutationCreateManyProjectArgs = {
  data: Array<ProjectCreateManyInput>
}

export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>
}

export type MutationCreateOneClickupTaskArgs = {
  data: ClickupTaskCreateInput
}

export type MutationCreateOneClickupTasksDueDateArgs = {
  data: ClickupTasksDueDateCreateInput
}

export type MutationCreateOneClickupTasksQueueArgs = {
  data: ClickupTasksQueueCreateInput
}

export type MutationCreateOneClickupTasksStatusArgs = {
  data: ClickupTasksStatusCreateInput
}

export type MutationCreateOneClickupTasksTimeEstimateArgs = {
  data: ClickupTasksTimeEstimateCreateInput
}

export type MutationCreateOneClickupWebhookArgs = {
  data: ClickupWebhookCreateInput
}

export type MutationCreateOneClockifyTimeEntryArgs = {
  data: ClockifyTimeEntryCreateInput
}

export type MutationCreateOneClockifyWebhookArgs = {
  data: ClockifyWebhookCreateInput
}

export type MutationCreateOneProjectArgs = {
  data: ProjectCreateInput
}

export type MutationCreateOneUserArgs = {
  data: UserCreateInput
}

export type MutationDeleteManyClickupTaskArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type MutationDeleteManyClickupTasksDueDateArgs = {
  where?: InputMaybe<ClickupTasksDueDateWhereInput>
}

export type MutationDeleteManyClickupTasksQueueArgs = {
  where?: InputMaybe<ClickupTasksQueueWhereInput>
}

export type MutationDeleteManyClickupTasksStatusArgs = {
  where?: InputMaybe<ClickupTasksStatusWhereInput>
}

export type MutationDeleteManyClickupTasksTimeEstimateArgs = {
  where?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
}

export type MutationDeleteManyClickupWebhookArgs = {
  where?: InputMaybe<ClickupWebhookWhereInput>
}

export type MutationDeleteManyClockifyTimeEntryArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type MutationDeleteManyClockifyWebhookArgs = {
  where?: InputMaybe<ClockifyWebhookWhereInput>
}

export type MutationDeleteManyProjectArgs = {
  where?: InputMaybe<ProjectWhereInput>
}

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>
}

export type MutationDeleteOneClickupTaskArgs = {
  where: ClickupTaskWhereUniqueInput
}

export type MutationDeleteOneClickupTasksDueDateArgs = {
  where: ClickupTasksDueDateWhereUniqueInput
}

export type MutationDeleteOneClickupTasksQueueArgs = {
  where: ClickupTasksQueueWhereUniqueInput
}

export type MutationDeleteOneClickupTasksStatusArgs = {
  where: ClickupTasksStatusWhereUniqueInput
}

export type MutationDeleteOneClickupTasksTimeEstimateArgs = {
  where: ClickupTasksTimeEstimateWhereUniqueInput
}

export type MutationDeleteOneClickupWebhookArgs = {
  where: ClickupWebhookWhereUniqueInput
}

export type MutationDeleteOneClockifyTimeEntryArgs = {
  where: ClockifyTimeEntryWhereUniqueInput
}

export type MutationDeleteOneClockifyWebhookArgs = {
  where: ClockifyWebhookWhereUniqueInput
}

export type MutationDeleteOneProjectArgs = {
  where: ProjectWhereUniqueInput
}

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationSigninArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationUpdateManyClickupTaskArgs = {
  data: ClickupTaskUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type MutationUpdateManyClickupTasksDueDateArgs = {
  data: ClickupTasksDueDateUpdateManyMutationInput
  where?: InputMaybe<ClickupTasksDueDateWhereInput>
}

export type MutationUpdateManyClickupTasksQueueArgs = {
  data: ClickupTasksQueueUpdateManyMutationInput
  where?: InputMaybe<ClickupTasksQueueWhereInput>
}

export type MutationUpdateManyClickupTasksStatusArgs = {
  data: ClickupTasksStatusUpdateManyMutationInput
  where?: InputMaybe<ClickupTasksStatusWhereInput>
}

export type MutationUpdateManyClickupTasksTimeEstimateArgs = {
  data: ClickupTasksTimeEstimateUpdateManyMutationInput
  where?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
}

export type MutationUpdateManyClickupWebhookArgs = {
  data: ClickupWebhookUpdateManyMutationInput
  where?: InputMaybe<ClickupWebhookWhereInput>
}

export type MutationUpdateManyClockifyTimeEntryArgs = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type MutationUpdateManyClockifyWebhookArgs = {
  data: ClockifyWebhookUpdateManyMutationInput
  where?: InputMaybe<ClockifyWebhookWhereInput>
}

export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput
  where?: InputMaybe<ProjectWhereInput>
}

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: InputMaybe<UserWhereInput>
}

export type MutationUpdateOneClickupTaskArgs = {
  data: ClickupTaskUpdateInput
  where: ClickupTaskWhereUniqueInput
}

export type MutationUpdateOneClickupTasksDueDateArgs = {
  data: ClickupTasksDueDateUpdateInput
  where: ClickupTasksDueDateWhereUniqueInput
}

export type MutationUpdateOneClickupTasksQueueArgs = {
  data: ClickupTasksQueueUpdateInput
  where: ClickupTasksQueueWhereUniqueInput
}

export type MutationUpdateOneClickupTasksStatusArgs = {
  data: ClickupTasksStatusUpdateInput
  where: ClickupTasksStatusWhereUniqueInput
}

export type MutationUpdateOneClickupTasksTimeEstimateArgs = {
  data: ClickupTasksTimeEstimateUpdateInput
  where: ClickupTasksTimeEstimateWhereUniqueInput
}

export type MutationUpdateOneClickupWebhookArgs = {
  data: ClickupWebhookUpdateInput
  where: ClickupWebhookWhereUniqueInput
}

export type MutationUpdateOneClockifyTimeEntryArgs = {
  data: ClockifyTimeEntryUpdateInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type MutationUpdateOneClockifyWebhookArgs = {
  data: ClockifyWebhookUpdateInput
  where: ClockifyWebhookWhereUniqueInput
}

export type MutationUpdateOneProjectArgs = {
  data: ProjectUpdateInput
  where: ProjectWhereUniqueInput
}

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  not?: InputMaybe<NestedBigIntFilter>
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  not?: InputMaybe<NestedBigIntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<NestedBoolFilter>
}

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<NestedBoolNullableFilter>
}

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<NestedDateTimeFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>
}

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<NestedIntFilter>
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<NestedIntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<NestedStringNullableFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type NullableBigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']['input']>
  divide?: InputMaybe<Scalars['BigInt']['input']>
  increment?: InputMaybe<Scalars['BigInt']['input']>
  multiply?: InputMaybe<Scalars['BigInt']['input']>
  set?: InputMaybe<Scalars['BigInt']['input']>
  unset?: InputMaybe<Scalars['Boolean']['input']>
}

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>
  unset?: InputMaybe<Scalars['Boolean']['input']>
}

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>
  divide?: InputMaybe<Scalars['Int']['input']>
  increment?: InputMaybe<Scalars['Int']['input']>
  multiply?: InputMaybe<Scalars['Int']['input']>
  set?: InputMaybe<Scalars['Int']['input']>
  unset?: InputMaybe<Scalars['Boolean']['input']>
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>
  unset?: InputMaybe<Scalars['Boolean']['input']>
}

export type Project = {
  __typename?: 'Project'
  _count?: Maybe<ProjectCount>
  clickupProjectId: Scalars['String']['output']
  clockifyProjectId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ProjectCount = {
  __typename?: 'ProjectCount'
  clickupTasks: Scalars['Int']['output']
  clockfyTimeEntry: Scalars['Int']['output']
}

export type ProjectCountClickupTasksArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ProjectCountClockfyTimeEntryArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate'
  _all: Scalars['Int']['output']
  clickupProjectId: Scalars['Int']['output']
  clockifyProjectId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ProjectCreateInput = {
  clickupProjectId: Scalars['String']['input']
  clickupTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutProjectInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutProjectInput>
  clockifyProjectId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProjectCreateManyInput = {
  clickupProjectId: Scalars['String']['input']
  clockifyProjectId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProjectCreateNestedOneWithoutClickupTasksInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutClickupTasksInput>
  create?: InputMaybe<ProjectCreateWithoutClickupTasksInput>
}

export type ProjectCreateNestedOneWithoutClockfyTimeEntryInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutClockfyTimeEntryInput>
  create?: InputMaybe<ProjectCreateWithoutClockfyTimeEntryInput>
}

export type ProjectCreateOrConnectWithoutClickupTasksInput = {
  create: ProjectCreateWithoutClickupTasksInput
  where: ProjectWhereUniqueInput
}

export type ProjectCreateOrConnectWithoutClockfyTimeEntryInput = {
  create: ProjectCreateWithoutClockfyTimeEntryInput
  where: ProjectWhereUniqueInput
}

export type ProjectCreateWithoutClickupTasksInput = {
  clickupProjectId: Scalars['String']['input']
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutProjectInput>
  clockifyProjectId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProjectCreateWithoutClockfyTimeEntryInput = {
  clickupProjectId: Scalars['String']['input']
  clickupTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutProjectInput>
  clockifyProjectId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate'
  clickupProjectId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate'
  clickupProjectId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ProjectNullableRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>
  isNot?: InputMaybe<ProjectWhereInput>
}

export type ProjectOrderByWithRelationInput = {
  clickupProjectId?: InputMaybe<SortOrder>
  clickupTasks?: InputMaybe<ClickupTaskOrderByRelationAggregateInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryOrderByRelationAggregateInput>
  clockifyProjectId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ProjectScalarFieldEnum {
  ClickupProjectId = 'clickupProjectId',
  ClockifyProjectId = 'clockifyProjectId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ProjectUpdateInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupTasks?: InputMaybe<ClickupTaskUpdateManyWithoutProjectNestedInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutProjectNestedInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProjectUpdateManyMutationInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProjectUpdateOneWithoutClickupTasksNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutClickupTasksInput>
  create?: InputMaybe<ProjectCreateWithoutClickupTasksInput>
  delete?: InputMaybe<ProjectWhereInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  update?: InputMaybe<ProjectUpdateToOneWithWhereWithoutClickupTasksInput>
  upsert?: InputMaybe<ProjectUpsertWithoutClickupTasksInput>
}

export type ProjectUpdateOneWithoutClockfyTimeEntryNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutClockfyTimeEntryInput>
  create?: InputMaybe<ProjectCreateWithoutClockfyTimeEntryInput>
  delete?: InputMaybe<ProjectWhereInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  update?: InputMaybe<ProjectUpdateToOneWithWhereWithoutClockfyTimeEntryInput>
  upsert?: InputMaybe<ProjectUpsertWithoutClockfyTimeEntryInput>
}

export type ProjectUpdateToOneWithWhereWithoutClickupTasksInput = {
  data: ProjectUpdateWithoutClickupTasksInput
  where?: InputMaybe<ProjectWhereInput>
}

export type ProjectUpdateToOneWithWhereWithoutClockfyTimeEntryInput = {
  data: ProjectUpdateWithoutClockfyTimeEntryInput
  where?: InputMaybe<ProjectWhereInput>
}

export type ProjectUpdateWithoutClickupTasksInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutProjectNestedInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProjectUpdateWithoutClockfyTimeEntryInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupTasks?: InputMaybe<ClickupTaskUpdateManyWithoutProjectNestedInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProjectUpsertWithoutClickupTasksInput = {
  create: ProjectCreateWithoutClickupTasksInput
  update: ProjectUpdateWithoutClickupTasksInput
  where?: InputMaybe<ProjectWhereInput>
}

export type ProjectUpsertWithoutClockfyTimeEntryInput = {
  create: ProjectCreateWithoutClockfyTimeEntryInput
  update: ProjectUpdateWithoutClockfyTimeEntryInput
  where?: InputMaybe<ProjectWhereInput>
}

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>
  NOT?: InputMaybe<Array<ProjectWhereInput>>
  OR?: InputMaybe<Array<ProjectWhereInput>>
  clickupProjectId?: InputMaybe<StringFilter>
  clickupTasks?: InputMaybe<ClickupTaskListRelationFilter>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  clockifyProjectId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>
  NOT?: InputMaybe<Array<ProjectWhereInput>>
  OR?: InputMaybe<Array<ProjectWhereInput>>
  clickupProjectId?: InputMaybe<Scalars['String']['input']>
  clickupTasks?: InputMaybe<ClickupTaskListRelationFilter>
  clockfyTimeEntry?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type Query = {
  __typename?: 'Query'
  aggregateClickupTask: AggregateClickupTask
  aggregateClickupTasksDueDate: AggregateClickupTasksDueDate
  aggregateClickupTasksQueue: AggregateClickupTasksQueue
  aggregateClickupTasksStatus: AggregateClickupTasksStatus
  aggregateClickupTasksTimeEstimate: AggregateClickupTasksTimeEstimate
  aggregateClickupWebhook: AggregateClickupWebhook
  aggregateClockifyTimeEntry: AggregateClockifyTimeEntry
  aggregateClockifyWebhook: AggregateClockifyWebhook
  aggregateProject: AggregateProject
  aggregateUser: AggregateUser
  clickupTask?: Maybe<ClickupTask>
  clickupTasks: Array<ClickupTask>
  clickupTasksDueDate?: Maybe<ClickupTasksDueDate>
  clickupTasksDueDates: Array<ClickupTasksDueDate>
  clickupTasksQueue?: Maybe<ClickupTasksQueue>
  clickupTasksQueues: Array<ClickupTasksQueue>
  clickupTasksStatus?: Maybe<ClickupTasksStatus>
  clickupTasksStatuses: Array<ClickupTasksStatus>
  clickupTasksTimeEstimate?: Maybe<ClickupTasksTimeEstimate>
  clickupTasksTimeEstimates: Array<ClickupTasksTimeEstimate>
  clickupWebhook?: Maybe<ClickupWebhook>
  clickupWebhooks: Array<ClickupWebhook>
  clockifyTimeEntries: Array<ClockifyTimeEntry>
  clockifyTimeEntry?: Maybe<ClockifyTimeEntry>
  clockifyWebhook?: Maybe<ClockifyWebhook>
  clockifyWebhooks: Array<ClockifyWebhook>
  project?: Maybe<Project>
  projects: Array<Project>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryAggregateClickupTaskArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type QueryAggregateClickupTasksDueDateArgs = {
  cursor?: InputMaybe<ClickupTasksDueDateWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTasksDueDateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksDueDateWhereInput>
}

export type QueryAggregateClickupTasksQueueArgs = {
  cursor?: InputMaybe<ClickupTasksQueueWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTasksQueueOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksQueueWhereInput>
}

export type QueryAggregateClickupTasksStatusArgs = {
  cursor?: InputMaybe<ClickupTasksStatusWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTasksStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksStatusWhereInput>
}

export type QueryAggregateClickupTasksTimeEstimateArgs = {
  cursor?: InputMaybe<ClickupTasksTimeEstimateWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTasksTimeEstimateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
}

export type QueryAggregateClickupWebhookArgs = {
  cursor?: InputMaybe<ClickupWebhookWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupWebhookOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupWebhookWhereInput>
}

export type QueryAggregateClockifyTimeEntryArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type QueryAggregateClockifyWebhookArgs = {
  cursor?: InputMaybe<ClockifyWebhookWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyWebhookOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyWebhookWhereInput>
}

export type QueryAggregateProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectWhereInput>
}

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryClickupTaskArgs = {
  where: ClickupTaskWhereUniqueInput
}

export type QueryClickupTasksArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type QueryClickupTasksDueDateArgs = {
  where: ClickupTasksDueDateWhereUniqueInput
}

export type QueryClickupTasksDueDatesArgs = {
  cursor?: InputMaybe<ClickupTasksDueDateWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTasksDueDateScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTasksDueDateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksDueDateWhereInput>
}

export type QueryClickupTasksQueueArgs = {
  where: ClickupTasksQueueWhereUniqueInput
}

export type QueryClickupTasksQueuesArgs = {
  cursor?: InputMaybe<ClickupTasksQueueWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTasksQueueScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTasksQueueOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksQueueWhereInput>
}

export type QueryClickupTasksStatusArgs = {
  where: ClickupTasksStatusWhereUniqueInput
}

export type QueryClickupTasksStatusesArgs = {
  cursor?: InputMaybe<ClickupTasksStatusWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTasksStatusScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTasksStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksStatusWhereInput>
}

export type QueryClickupTasksTimeEstimateArgs = {
  where: ClickupTasksTimeEstimateWhereUniqueInput
}

export type QueryClickupTasksTimeEstimatesArgs = {
  cursor?: InputMaybe<ClickupTasksTimeEstimateWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTasksTimeEstimateScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTasksTimeEstimateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTasksTimeEstimateWhereInput>
}

export type QueryClickupWebhookArgs = {
  where: ClickupWebhookWhereUniqueInput
}

export type QueryClickupWebhooksArgs = {
  cursor?: InputMaybe<ClickupWebhookWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupWebhookScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupWebhookOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupWebhookWhereInput>
}

export type QueryClockifyTimeEntriesArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type QueryClockifyTimeEntryArgs = {
  where: ClockifyTimeEntryWhereUniqueInput
}

export type QueryClockifyWebhookArgs = {
  where: ClockifyWebhookWhereUniqueInput
}

export type QueryClockifyWebhooksArgs = {
  cursor?: InputMaybe<ClockifyWebhookWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyWebhookScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyWebhookOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyWebhookWhereInput>
}

export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput
}

export type QueryProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type SigninInfo = {
  __typename?: 'SigninInfo'
  token: Scalars['String']['output']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  isSet?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringNullableFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>
  has?: InputMaybe<Scalars['String']['input']>
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>
}

export type User = {
  __typename?: 'User'
  clickupId?: Maybe<Scalars['String']['output']>
  clockifyId?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  githubId?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  password: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  username: Scalars['String']['output']
}

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate'
  _all: Scalars['Int']['output']
  clickupId: Scalars['Int']['output']
  clockifyId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  email: Scalars['Int']['output']
  githubId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  password: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
  username: Scalars['Int']['output']
}

export type UserCreateInput = {
  clickupId?: InputMaybe<Scalars['String']['input']>
  clockifyId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type UserCreateManyInput = {
  clickupId?: InputMaybe<Scalars['String']['input']>
  clockifyId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate'
  clickupId?: Maybe<Scalars['String']['output']>
  clockifyId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  githubId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  password?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate'
  clickupId?: Maybe<Scalars['String']['output']>
  clockifyId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  githubId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  password?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserOrderByWithRelationInput = {
  clickupId?: InputMaybe<SortOrder>
  clockifyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  email?: InputMaybe<SortOrder>
  githubId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  password?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  username?: InputMaybe<SortOrder>
}

export enum UserScalarFieldEnum {
  ClickupId = 'clickupId',
  ClockifyId = 'clockifyId',
  CreatedAt = 'createdAt',
  Email = 'email',
  GithubId = 'githubId',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  Username = 'username',
}

export type UserUpdateInput = {
  clickupId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  clockifyId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateManyMutationInput = {
  clickupId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  clockifyId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  clickupId?: InputMaybe<StringNullableFilter>
  clockifyId?: InputMaybe<StringNullableFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  email?: InputMaybe<StringFilter>
  githubId?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<StringFilter>
  password?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  username?: InputMaybe<StringFilter>
}

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  clickupId?: InputMaybe<StringNullableFilter>
  clockifyId?: InputMaybe<StringNullableFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  email?: InputMaybe<Scalars['String']['input']>
  githubId?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  username?: InputMaybe<StringFilter>
}

export type UsersQueryVariables = Exact<{
  where: UserWhereInput
}>

export type UsersQuery = { __typename?: 'Query'; users: Array<{ __typename?: 'User'; id: string }> }

export type SigninMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type SigninMutation = { __typename?: 'Mutation'; signin: { __typename?: 'SigninInfo'; token: string } }

export const UsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'users' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserWhereInput' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
export const SigninDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'signin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'token' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SigninMutation, SigninMutationVariables>
