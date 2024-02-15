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

export type AggregateClickupClockifyProject = {
  __typename?: 'AggregateClickupClockifyProject'
  _avg?: Maybe<ClickupClockifyProjectAvgAggregate>
  _count?: Maybe<ClickupClockifyProjectCountAggregate>
  _max?: Maybe<ClickupClockifyProjectMaxAggregate>
  _min?: Maybe<ClickupClockifyProjectMinAggregate>
  _sum?: Maybe<ClickupClockifyProjectSumAggregate>
}

export type AggregateClickupCustomField = {
  __typename?: 'AggregateClickupCustomField'
  _count?: Maybe<ClickupCustomFieldCountAggregate>
  _max?: Maybe<ClickupCustomFieldMaxAggregate>
  _min?: Maybe<ClickupCustomFieldMinAggregate>
}

export type AggregateClickupFolder = {
  __typename?: 'AggregateClickupFolder'
  _count?: Maybe<ClickupFolderCountAggregate>
  _max?: Maybe<ClickupFolderMaxAggregate>
  _min?: Maybe<ClickupFolderMinAggregate>
}

export type AggregateClickupList = {
  __typename?: 'AggregateClickupList'
  _avg?: Maybe<ClickupListAvgAggregate>
  _count?: Maybe<ClickupListCountAggregate>
  _max?: Maybe<ClickupListMaxAggregate>
  _min?: Maybe<ClickupListMinAggregate>
  _sum?: Maybe<ClickupListSumAggregate>
}

export type AggregateClickupProject = {
  __typename?: 'AggregateClickupProject'
  _count?: Maybe<ClickupProjectCountAggregate>
  _max?: Maybe<ClickupProjectMaxAggregate>
  _min?: Maybe<ClickupProjectMinAggregate>
}

export type AggregateClickupTask = {
  __typename?: 'AggregateClickupTask'
  _avg?: Maybe<ClickupTaskAvgAggregate>
  _count?: Maybe<ClickupTaskCountAggregate>
  _max?: Maybe<ClickupTaskMaxAggregate>
  _min?: Maybe<ClickupTaskMinAggregate>
  _sum?: Maybe<ClickupTaskSumAggregate>
}

export type AggregateClickupTaskAttachment = {
  __typename?: 'AggregateClickupTaskAttachment'
  _avg?: Maybe<ClickupTaskAttachmentAvgAggregate>
  _count?: Maybe<ClickupTaskAttachmentCountAggregate>
  _max?: Maybe<ClickupTaskAttachmentMaxAggregate>
  _min?: Maybe<ClickupTaskAttachmentMinAggregate>
  _sum?: Maybe<ClickupTaskAttachmentSumAggregate>
}

export type AggregateClickupTaskChecklist = {
  __typename?: 'AggregateClickupTaskChecklist'
  _avg?: Maybe<ClickupTaskChecklistAvgAggregate>
  _count?: Maybe<ClickupTaskChecklistCountAggregate>
  _max?: Maybe<ClickupTaskChecklistMaxAggregate>
  _min?: Maybe<ClickupTaskChecklistMinAggregate>
  _sum?: Maybe<ClickupTaskChecklistSumAggregate>
}

export type AggregateClickupTaskChecklistItem = {
  __typename?: 'AggregateClickupTaskChecklistItem'
  _avg?: Maybe<ClickupTaskChecklistItemAvgAggregate>
  _count?: Maybe<ClickupTaskChecklistItemCountAggregate>
  _max?: Maybe<ClickupTaskChecklistItemMaxAggregate>
  _min?: Maybe<ClickupTaskChecklistItemMinAggregate>
  _sum?: Maybe<ClickupTaskChecklistItemSumAggregate>
}

export type AggregateClickupTaskCustomField = {
  __typename?: 'AggregateClickupTaskCustomField'
  _count?: Maybe<ClickupTaskCustomFieldCountAggregate>
  _max?: Maybe<ClickupTaskCustomFieldMaxAggregate>
  _min?: Maybe<ClickupTaskCustomFieldMinAggregate>
}

export type AggregateClickupTaskDependency = {
  __typename?: 'AggregateClickupTaskDependency'
  _avg?: Maybe<ClickupTaskDependencyAvgAggregate>
  _count?: Maybe<ClickupTaskDependencyCountAggregate>
  _max?: Maybe<ClickupTaskDependencyMaxAggregate>
  _min?: Maybe<ClickupTaskDependencyMinAggregate>
  _sum?: Maybe<ClickupTaskDependencySumAggregate>
}

export type AggregateClickupTaskDueDate = {
  __typename?: 'AggregateClickupTaskDueDate'
  _avg?: Maybe<ClickupTaskDueDateAvgAggregate>
  _count?: Maybe<ClickupTaskDueDateCountAggregate>
  _max?: Maybe<ClickupTaskDueDateMaxAggregate>
  _min?: Maybe<ClickupTaskDueDateMinAggregate>
  _sum?: Maybe<ClickupTaskDueDateSumAggregate>
}

export type AggregateClickupTaskFolder = {
  __typename?: 'AggregateClickupTaskFolder'
  _count?: Maybe<ClickupTaskFolderCountAggregate>
  _max?: Maybe<ClickupTaskFolderMaxAggregate>
  _min?: Maybe<ClickupTaskFolderMinAggregate>
}

export type AggregateClickupTaskList = {
  __typename?: 'AggregateClickupTaskList'
  _count?: Maybe<ClickupTaskListCountAggregate>
  _max?: Maybe<ClickupTaskListMaxAggregate>
  _min?: Maybe<ClickupTaskListMinAggregate>
}

export type AggregateClickupTaskLocationHistory = {
  __typename?: 'AggregateClickupTaskLocationHistory'
  _avg?: Maybe<ClickupTaskLocationHistoryAvgAggregate>
  _count?: Maybe<ClickupTaskLocationHistoryCountAggregate>
  _max?: Maybe<ClickupTaskLocationHistoryMaxAggregate>
  _min?: Maybe<ClickupTaskLocationHistoryMinAggregate>
  _sum?: Maybe<ClickupTaskLocationHistorySumAggregate>
}

export type AggregateClickupTaskPriority = {
  __typename?: 'AggregateClickupTaskPriority'
  _count?: Maybe<ClickupTaskPriorityCountAggregate>
  _max?: Maybe<ClickupTaskPriorityMaxAggregate>
  _min?: Maybe<ClickupTaskPriorityMinAggregate>
}

export type AggregateClickupTaskProject = {
  __typename?: 'AggregateClickupTaskProject'
  _count?: Maybe<ClickupTaskProjectCountAggregate>
  _max?: Maybe<ClickupTaskProjectMaxAggregate>
  _min?: Maybe<ClickupTaskProjectMinAggregate>
}

export type AggregateClickupTaskQueue = {
  __typename?: 'AggregateClickupTaskQueue'
  _count?: Maybe<ClickupTaskQueueCountAggregate>
  _max?: Maybe<ClickupTaskQueueMaxAggregate>
  _min?: Maybe<ClickupTaskQueueMinAggregate>
}

export type AggregateClickupTaskSpace = {
  __typename?: 'AggregateClickupTaskSpace'
  _count?: Maybe<ClickupTaskSpaceCountAggregate>
  _max?: Maybe<ClickupTaskSpaceMaxAggregate>
  _min?: Maybe<ClickupTaskSpaceMinAggregate>
}

export type AggregateClickupTaskStatus = {
  __typename?: 'AggregateClickupTaskStatus'
  _count?: Maybe<ClickupTaskStatusCountAggregate>
  _max?: Maybe<ClickupTaskStatusMaxAggregate>
  _min?: Maybe<ClickupTaskStatusMinAggregate>
}

export type AggregateClickupTaskStatusOnTask = {
  __typename?: 'AggregateClickupTaskStatusOnTask'
  _avg?: Maybe<ClickupTaskStatusOnTaskAvgAggregate>
  _count?: Maybe<ClickupTaskStatusOnTaskCountAggregate>
  _max?: Maybe<ClickupTaskStatusOnTaskMaxAggregate>
  _min?: Maybe<ClickupTaskStatusOnTaskMinAggregate>
  _sum?: Maybe<ClickupTaskStatusOnTaskSumAggregate>
}

export type AggregateClickupTaskTag = {
  __typename?: 'AggregateClickupTaskTag'
  _avg?: Maybe<ClickupTaskTagAvgAggregate>
  _count?: Maybe<ClickupTaskTagCountAggregate>
  _max?: Maybe<ClickupTaskTagMaxAggregate>
  _min?: Maybe<ClickupTaskTagMinAggregate>
  _sum?: Maybe<ClickupTaskTagSumAggregate>
}

export type AggregateClickupTaskTimeEstimate = {
  __typename?: 'AggregateClickupTaskTimeEstimate'
  _avg?: Maybe<ClickupTaskTimeEstimateAvgAggregate>
  _count?: Maybe<ClickupTaskTimeEstimateCountAggregate>
  _max?: Maybe<ClickupTaskTimeEstimateMaxAggregate>
  _min?: Maybe<ClickupTaskTimeEstimateMinAggregate>
  _sum?: Maybe<ClickupTaskTimeEstimateSumAggregate>
}

export type AggregateClickupUser = {
  __typename?: 'AggregateClickupUser'
  _avg?: Maybe<ClickupUserAvgAggregate>
  _count?: Maybe<ClickupUserCountAggregate>
  _max?: Maybe<ClickupUserMaxAggregate>
  _min?: Maybe<ClickupUserMinAggregate>
  _sum?: Maybe<ClickupUserSumAggregate>
}

export type AggregateClickupUserTaskAssignee = {
  __typename?: 'AggregateClickupUserTaskAssignee'
  _avg?: Maybe<ClickupUserTaskAssigneeAvgAggregate>
  _count?: Maybe<ClickupUserTaskAssigneeCountAggregate>
  _max?: Maybe<ClickupUserTaskAssigneeMaxAggregate>
  _min?: Maybe<ClickupUserTaskAssigneeMinAggregate>
  _sum?: Maybe<ClickupUserTaskAssigneeSumAggregate>
}

export type AggregateClickupUserTaskWatchers = {
  __typename?: 'AggregateClickupUserTaskWatchers'
  _avg?: Maybe<ClickupUserTaskWatchersAvgAggregate>
  _count?: Maybe<ClickupUserTaskWatchersCountAggregate>
  _max?: Maybe<ClickupUserTaskWatchersMaxAggregate>
  _min?: Maybe<ClickupUserTaskWatchersMinAggregate>
  _sum?: Maybe<ClickupUserTaskWatchersSumAggregate>
}

export type AggregateClickupWebhook = {
  __typename?: 'AggregateClickupWebhook'
  _avg?: Maybe<ClickupWebhookAvgAggregate>
  _count?: Maybe<ClickupWebhookCountAggregate>
  _max?: Maybe<ClickupWebhookMaxAggregate>
  _min?: Maybe<ClickupWebhookMinAggregate>
  _sum?: Maybe<ClickupWebhookSumAggregate>
}

export type AggregateClockifyTagOnTimeEntry = {
  __typename?: 'AggregateClockifyTagOnTimeEntry'
  _count?: Maybe<ClockifyTagOnTimeEntryCountAggregate>
  _max?: Maybe<ClockifyTagOnTimeEntryMaxAggregate>
  _min?: Maybe<ClockifyTagOnTimeEntryMinAggregate>
}

export type AggregateClockifyTimeEntry = {
  __typename?: 'AggregateClockifyTimeEntry'
  _avg?: Maybe<ClockifyTimeEntryAvgAggregate>
  _count?: Maybe<ClockifyTimeEntryCountAggregate>
  _max?: Maybe<ClockifyTimeEntryMaxAggregate>
  _min?: Maybe<ClockifyTimeEntryMinAggregate>
  _sum?: Maybe<ClockifyTimeEntrySumAggregate>
}

export type AggregateClockifyTimeEntryProject = {
  __typename?: 'AggregateClockifyTimeEntryProject'
  _count?: Maybe<ClockifyTimeEntryProjectCountAggregate>
  _max?: Maybe<ClockifyTimeEntryProjectMaxAggregate>
  _min?: Maybe<ClockifyTimeEntryProjectMinAggregate>
}

export type AggregateClockifyTimeEntryTag = {
  __typename?: 'AggregateClockifyTimeEntryTag'
  _count?: Maybe<ClockifyTimeEntryTagCountAggregate>
  _max?: Maybe<ClockifyTimeEntryTagMaxAggregate>
  _min?: Maybe<ClockifyTimeEntryTagMinAggregate>
}

export type AggregateClockifyUser = {
  __typename?: 'AggregateClockifyUser'
  _count?: Maybe<ClockifyUserCountAggregate>
  _max?: Maybe<ClockifyUserMaxAggregate>
  _min?: Maybe<ClockifyUserMinAggregate>
}

export type AggregateClockifyWebhook = {
  __typename?: 'AggregateClockifyWebhook'
  _avg?: Maybe<ClockifyWebhookAvgAggregate>
  _count?: Maybe<ClockifyWebhookCountAggregate>
  _max?: Maybe<ClockifyWebhookMaxAggregate>
  _min?: Maybe<ClockifyWebhookMinAggregate>
  _sum?: Maybe<ClockifyWebhookSumAggregate>
}

export type AggregateRole = {
  __typename?: 'AggregateRole'
  _avg?: Maybe<RoleAvgAggregate>
  _count?: Maybe<RoleCountAggregate>
  _max?: Maybe<RoleMaxAggregate>
  _min?: Maybe<RoleMinAggregate>
  _sum?: Maybe<RoleSumAggregate>
}

export type AggregateTaskPeriodData = {
  __typename?: 'AggregateTaskPeriodData'
  _avg?: Maybe<TaskPeriodDataAvgAggregate>
  _count?: Maybe<TaskPeriodDataCountAggregate>
  _max?: Maybe<TaskPeriodDataMaxAggregate>
  _min?: Maybe<TaskPeriodDataMinAggregate>
  _sum?: Maybe<TaskPeriodDataSumAggregate>
}

export type AggregateUser = {
  __typename?: 'AggregateUser'
  _avg?: Maybe<UserAvgAggregate>
  _count?: Maybe<UserCountAggregate>
  _max?: Maybe<UserMaxAggregate>
  _min?: Maybe<UserMinAggregate>
  _sum?: Maybe<UserSumAggregate>
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
  not?: InputMaybe<NestedBoolNullableFilter>
}

export type ClickupClockifyProject = {
  __typename?: 'ClickupClockifyProject'
  _count?: Maybe<ClickupClockifyProjectCount>
  clickupProjectId: Scalars['String']['output']
  clickupTasks: Array<ClickupTask>
  clockifyProjectId: Scalars['String']['output']
  clockifyTimeEntries: Array<ClockifyTimeEntry>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ClickupClockifyProjectClickupTasksArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupClockifyProjectClockifyTimeEntriesArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClickupClockifyProjectAvgAggregate = {
  __typename?: 'ClickupClockifyProjectAvgAggregate'
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupClockifyProjectCount = {
  __typename?: 'ClickupClockifyProjectCount'
  clickupTasks: Scalars['Int']['output']
  clockifyTimeEntries: Scalars['Int']['output']
}

export type ClickupClockifyProjectCountClickupTasksArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupClockifyProjectCountClockifyTimeEntriesArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClickupClockifyProjectCountAggregate = {
  __typename?: 'ClickupClockifyProjectCountAggregate'
  _all: Scalars['Int']['output']
  clickupProjectId: Scalars['Int']['output']
  clockifyProjectId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ClickupClockifyProjectCreateInput = {
  clickupProjectId: Scalars['String']['input']
  clickupTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutClickupClockifyProjectInput>
  clockifyProjectId: Scalars['String']['input']
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupClockifyProjectInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupClockifyProjectCreateManyInput = {
  clickupProjectId: Scalars['String']['input']
  clockifyProjectId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput = {
  connect?: InputMaybe<ClickupClockifyProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupClockifyProjectCreateOrConnectWithoutClickupTasksInput>
  create?: InputMaybe<ClickupClockifyProjectCreateWithoutClickupTasksInput>
}

export type ClickupClockifyProjectCreateNestedOneWithoutClockifyTimeEntriesInput = {
  connect?: InputMaybe<ClickupClockifyProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupClockifyProjectCreateOrConnectWithoutClockifyTimeEntriesInput>
  create?: InputMaybe<ClickupClockifyProjectCreateWithoutClockifyTimeEntriesInput>
}

export type ClickupClockifyProjectCreateOrConnectWithoutClickupTasksInput = {
  create: ClickupClockifyProjectCreateWithoutClickupTasksInput
  where: ClickupClockifyProjectWhereUniqueInput
}

export type ClickupClockifyProjectCreateOrConnectWithoutClockifyTimeEntriesInput = {
  create: ClickupClockifyProjectCreateWithoutClockifyTimeEntriesInput
  where: ClickupClockifyProjectWhereUniqueInput
}

export type ClickupClockifyProjectCreateWithoutClickupTasksInput = {
  clickupProjectId: Scalars['String']['input']
  clockifyProjectId: Scalars['String']['input']
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupClockifyProjectInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupClockifyProjectCreateWithoutClockifyTimeEntriesInput = {
  clickupProjectId: Scalars['String']['input']
  clickupTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutClickupClockifyProjectInput>
  clockifyProjectId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupClockifyProjectMaxAggregate = {
  __typename?: 'ClickupClockifyProjectMaxAggregate'
  clickupProjectId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupClockifyProjectMinAggregate = {
  __typename?: 'ClickupClockifyProjectMinAggregate'
  clickupProjectId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupClockifyProjectNullableRelationFilter = {
  is?: InputMaybe<ClickupClockifyProjectWhereInput>
  isNot?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type ClickupClockifyProjectOrderByWithRelationInput = {
  clickupProjectId?: InputMaybe<SortOrder>
  clickupTasks?: InputMaybe<ClickupTaskOrderByRelationAggregateInput>
  clockifyProjectId?: InputMaybe<SortOrder>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClickupClockifyProjectScalarFieldEnum {
  ClickupProjectId = 'clickupProjectId',
  ClockifyProjectId = 'clockifyProjectId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ClickupClockifyProjectSumAggregate = {
  __typename?: 'ClickupClockifyProjectSumAggregate'
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupClockifyProjectUpdateInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupTasks?: InputMaybe<ClickupTaskUpdateManyWithoutClickupClockifyProjectNestedInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupClockifyProjectNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupClockifyProjectUpdateManyMutationInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput = {
  connect?: InputMaybe<ClickupClockifyProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupClockifyProjectCreateOrConnectWithoutClickupTasksInput>
  create?: InputMaybe<ClickupClockifyProjectCreateWithoutClickupTasksInput>
  delete?: InputMaybe<ClickupClockifyProjectWhereInput>
  disconnect?: InputMaybe<ClickupClockifyProjectWhereInput>
  update?: InputMaybe<ClickupClockifyProjectUpdateToOneWithWhereWithoutClickupTasksInput>
  upsert?: InputMaybe<ClickupClockifyProjectUpsertWithoutClickupTasksInput>
}

export type ClickupClockifyProjectUpdateOneWithoutClockifyTimeEntriesNestedInput = {
  connect?: InputMaybe<ClickupClockifyProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupClockifyProjectCreateOrConnectWithoutClockifyTimeEntriesInput>
  create?: InputMaybe<ClickupClockifyProjectCreateWithoutClockifyTimeEntriesInput>
  delete?: InputMaybe<ClickupClockifyProjectWhereInput>
  disconnect?: InputMaybe<ClickupClockifyProjectWhereInput>
  update?: InputMaybe<ClickupClockifyProjectUpdateToOneWithWhereWithoutClockifyTimeEntriesInput>
  upsert?: InputMaybe<ClickupClockifyProjectUpsertWithoutClockifyTimeEntriesInput>
}

export type ClickupClockifyProjectUpdateToOneWithWhereWithoutClickupTasksInput = {
  data: ClickupClockifyProjectUpdateWithoutClickupTasksInput
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type ClickupClockifyProjectUpdateToOneWithWhereWithoutClockifyTimeEntriesInput = {
  data: ClickupClockifyProjectUpdateWithoutClockifyTimeEntriesInput
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type ClickupClockifyProjectUpdateWithoutClickupTasksInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupClockifyProjectNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupClockifyProjectUpdateWithoutClockifyTimeEntriesInput = {
  clickupProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  clickupTasks?: InputMaybe<ClickupTaskUpdateManyWithoutClickupClockifyProjectNestedInput>
  clockifyProjectId?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupClockifyProjectUpsertWithoutClickupTasksInput = {
  create: ClickupClockifyProjectCreateWithoutClickupTasksInput
  update: ClickupClockifyProjectUpdateWithoutClickupTasksInput
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type ClickupClockifyProjectUpsertWithoutClockifyTimeEntriesInput = {
  create: ClickupClockifyProjectCreateWithoutClockifyTimeEntriesInput
  update: ClickupClockifyProjectUpdateWithoutClockifyTimeEntriesInput
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type ClickupClockifyProjectWhereInput = {
  AND?: InputMaybe<Array<ClickupClockifyProjectWhereInput>>
  NOT?: InputMaybe<Array<ClickupClockifyProjectWhereInput>>
  OR?: InputMaybe<Array<ClickupClockifyProjectWhereInput>>
  clickupProjectId?: InputMaybe<StringFilter>
  clickupTasks?: InputMaybe<ClickupTaskListRelationFilter>
  clockifyProjectId?: InputMaybe<StringFilter>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupClockifyProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupClockifyProjectWhereInput>>
  NOT?: InputMaybe<Array<ClickupClockifyProjectWhereInput>>
  OR?: InputMaybe<Array<ClickupClockifyProjectWhereInput>>
  clickupProjectId?: InputMaybe<Scalars['String']['input']>
  clickupTasks?: InputMaybe<ClickupTaskListRelationFilter>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupCustomField = {
  __typename?: 'ClickupCustomField'
  _count?: Maybe<ClickupCustomFieldCount>
  clickupTaskCustomField: Array<ClickupTaskCustomField>
  dateCreated: Scalars['String']['output']
  hideFromGuests: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  type: Scalars['String']['output']
  typeConfig: Scalars['JSON']['output']
  value?: Maybe<Scalars['JSON']['output']>
}

export type ClickupCustomFieldClickupTaskCustomFieldArgs = {
  cursor?: InputMaybe<ClickupTaskCustomFieldWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskCustomFieldScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskCustomFieldOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type ClickupCustomFieldCount = {
  __typename?: 'ClickupCustomFieldCount'
  clickupTaskCustomField: Scalars['Int']['output']
}

export type ClickupCustomFieldCountClickupTaskCustomFieldArgs = {
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type ClickupCustomFieldCountAggregate = {
  __typename?: 'ClickupCustomFieldCountAggregate'
  _all: Scalars['Int']['output']
  dateCreated: Scalars['Int']['output']
  hideFromGuests: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  required: Scalars['Int']['output']
  type: Scalars['Int']['output']
  typeConfig: Scalars['Int']['output']
  value: Scalars['Int']['output']
}

export type ClickupCustomFieldCreateInput = {
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupCustomFieldInput>
  dateCreated: Scalars['String']['input']
  hideFromGuests: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  required?: InputMaybe<Scalars['Boolean']['input']>
  type: Scalars['String']['input']
  typeConfig: Scalars['JSON']['input']
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupCustomFieldCreateManyInput = {
  dateCreated: Scalars['String']['input']
  hideFromGuests: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  required?: InputMaybe<Scalars['Boolean']['input']>
  type: Scalars['String']['input']
  typeConfig: Scalars['JSON']['input']
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupCustomFieldCreateNestedOneWithoutClickupTaskCustomFieldInput = {
  connect?: InputMaybe<ClickupCustomFieldWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupCustomFieldCreateOrConnectWithoutClickupTaskCustomFieldInput>
  create?: InputMaybe<ClickupCustomFieldCreateWithoutClickupTaskCustomFieldInput>
}

export type ClickupCustomFieldCreateOrConnectWithoutClickupTaskCustomFieldInput = {
  create: ClickupCustomFieldCreateWithoutClickupTaskCustomFieldInput
  where: ClickupCustomFieldWhereUniqueInput
}

export type ClickupCustomFieldCreateWithoutClickupTaskCustomFieldInput = {
  dateCreated: Scalars['String']['input']
  hideFromGuests: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  required?: InputMaybe<Scalars['Boolean']['input']>
  type: Scalars['String']['input']
  typeConfig: Scalars['JSON']['input']
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupCustomFieldMaxAggregate = {
  __typename?: 'ClickupCustomFieldMaxAggregate'
  dateCreated?: Maybe<Scalars['String']['output']>
  hideFromGuests?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  required?: Maybe<Scalars['Boolean']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type ClickupCustomFieldMinAggregate = {
  __typename?: 'ClickupCustomFieldMinAggregate'
  dateCreated?: Maybe<Scalars['String']['output']>
  hideFromGuests?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  required?: Maybe<Scalars['Boolean']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type ClickupCustomFieldOrderByWithRelationInput = {
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldOrderByRelationAggregateInput>
  dateCreated?: InputMaybe<SortOrder>
  hideFromGuests?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  required?: InputMaybe<SortOrderInput>
  type?: InputMaybe<SortOrder>
  typeConfig?: InputMaybe<SortOrder>
  value?: InputMaybe<SortOrderInput>
}

export type ClickupCustomFieldRelationFilter = {
  is?: InputMaybe<ClickupCustomFieldWhereInput>
  isNot?: InputMaybe<ClickupCustomFieldWhereInput>
}

export enum ClickupCustomFieldScalarFieldEnum {
  DateCreated = 'dateCreated',
  HideFromGuests = 'hideFromGuests',
  Id = 'id',
  Name = 'name',
  Required = 'required',
  Type = 'type',
  TypeConfig = 'typeConfig',
  Value = 'value',
}

export type ClickupCustomFieldUpdateInput = {
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupCustomFieldNestedInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  hideFromGuests?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  typeConfig?: InputMaybe<Scalars['JSON']['input']>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupCustomFieldUpdateManyMutationInput = {
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  hideFromGuests?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  typeConfig?: InputMaybe<Scalars['JSON']['input']>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupCustomFieldUpdateOneRequiredWithoutClickupTaskCustomFieldNestedInput = {
  connect?: InputMaybe<ClickupCustomFieldWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupCustomFieldCreateOrConnectWithoutClickupTaskCustomFieldInput>
  create?: InputMaybe<ClickupCustomFieldCreateWithoutClickupTaskCustomFieldInput>
  update?: InputMaybe<ClickupCustomFieldUpdateToOneWithWhereWithoutClickupTaskCustomFieldInput>
  upsert?: InputMaybe<ClickupCustomFieldUpsertWithoutClickupTaskCustomFieldInput>
}

export type ClickupCustomFieldUpdateToOneWithWhereWithoutClickupTaskCustomFieldInput = {
  data: ClickupCustomFieldUpdateWithoutClickupTaskCustomFieldInput
  where?: InputMaybe<ClickupCustomFieldWhereInput>
}

export type ClickupCustomFieldUpdateWithoutClickupTaskCustomFieldInput = {
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  hideFromGuests?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  typeConfig?: InputMaybe<Scalars['JSON']['input']>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type ClickupCustomFieldUpsertWithoutClickupTaskCustomFieldInput = {
  create: ClickupCustomFieldCreateWithoutClickupTaskCustomFieldInput
  update: ClickupCustomFieldUpdateWithoutClickupTaskCustomFieldInput
  where?: InputMaybe<ClickupCustomFieldWhereInput>
}

export type ClickupCustomFieldWhereInput = {
  AND?: InputMaybe<Array<ClickupCustomFieldWhereInput>>
  NOT?: InputMaybe<Array<ClickupCustomFieldWhereInput>>
  OR?: InputMaybe<Array<ClickupCustomFieldWhereInput>>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldListRelationFilter>
  dateCreated?: InputMaybe<StringFilter>
  hideFromGuests?: InputMaybe<BoolFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  required?: InputMaybe<BoolNullableFilter>
  type?: InputMaybe<StringFilter>
  typeConfig?: InputMaybe<JsonFilter>
  value?: InputMaybe<JsonNullableFilter>
}

export type ClickupCustomFieldWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupCustomFieldWhereInput>>
  NOT?: InputMaybe<Array<ClickupCustomFieldWhereInput>>
  OR?: InputMaybe<Array<ClickupCustomFieldWhereInput>>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldListRelationFilter>
  dateCreated?: InputMaybe<StringFilter>
  hideFromGuests?: InputMaybe<BoolFilter>
  id?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<StringFilter>
  required?: InputMaybe<BoolNullableFilter>
  type?: InputMaybe<StringFilter>
  typeConfig?: InputMaybe<JsonFilter>
  value?: InputMaybe<JsonNullableFilter>
}

export type ClickupFolder = {
  __typename?: 'ClickupFolder'
  ClickupTaskFolder: Array<ClickupTaskFolder>
  _count?: Maybe<ClickupFolderCount>
  hidden: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type ClickupFolderClickupTaskFolderArgs = {
  cursor?: InputMaybe<ClickupTaskFolderWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskFolderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskFolderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type ClickupFolderCount = {
  __typename?: 'ClickupFolderCount'
  ClickupTaskFolder: Scalars['Int']['output']
}

export type ClickupFolderCountClickupTaskFolderArgs = {
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type ClickupFolderCountAggregate = {
  __typename?: 'ClickupFolderCountAggregate'
  _all: Scalars['Int']['output']
  hidden: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
}

export type ClickupFolderCreateInput = {
  ClickupTaskFolder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupFolderInput>
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupFolderCreateManyInput = {
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupFolderCreateNestedOneWithoutClickupTaskFolderInput = {
  connect?: InputMaybe<ClickupFolderWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupFolderCreateOrConnectWithoutClickupTaskFolderInput>
  create?: InputMaybe<ClickupFolderCreateWithoutClickupTaskFolderInput>
}

export type ClickupFolderCreateOrConnectWithoutClickupTaskFolderInput = {
  create: ClickupFolderCreateWithoutClickupTaskFolderInput
  where: ClickupFolderWhereUniqueInput
}

export type ClickupFolderCreateWithoutClickupTaskFolderInput = {
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupFolderMaxAggregate = {
  __typename?: 'ClickupFolderMaxAggregate'
  hidden?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ClickupFolderMinAggregate = {
  __typename?: 'ClickupFolderMinAggregate'
  hidden?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ClickupFolderOrderByWithRelationInput = {
  ClickupTaskFolder?: InputMaybe<ClickupTaskFolderOrderByRelationAggregateInput>
  hidden?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
}

export type ClickupFolderRelationFilter = {
  is?: InputMaybe<ClickupFolderWhereInput>
  isNot?: InputMaybe<ClickupFolderWhereInput>
}

export enum ClickupFolderScalarFieldEnum {
  Hidden = 'hidden',
  Id = 'id',
  Name = 'name',
}

export type ClickupFolderUpdateInput = {
  ClickupTaskFolder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupFolderNestedInput>
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupFolderUpdateManyMutationInput = {
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupFolderUpdateOneRequiredWithoutClickupTaskFolderNestedInput = {
  connect?: InputMaybe<ClickupFolderWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupFolderCreateOrConnectWithoutClickupTaskFolderInput>
  create?: InputMaybe<ClickupFolderCreateWithoutClickupTaskFolderInput>
  update?: InputMaybe<ClickupFolderUpdateToOneWithWhereWithoutClickupTaskFolderInput>
  upsert?: InputMaybe<ClickupFolderUpsertWithoutClickupTaskFolderInput>
}

export type ClickupFolderUpdateToOneWithWhereWithoutClickupTaskFolderInput = {
  data: ClickupFolderUpdateWithoutClickupTaskFolderInput
  where?: InputMaybe<ClickupFolderWhereInput>
}

export type ClickupFolderUpdateWithoutClickupTaskFolderInput = {
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupFolderUpsertWithoutClickupTaskFolderInput = {
  create: ClickupFolderCreateWithoutClickupTaskFolderInput
  update: ClickupFolderUpdateWithoutClickupTaskFolderInput
  where?: InputMaybe<ClickupFolderWhereInput>
}

export type ClickupFolderWhereInput = {
  AND?: InputMaybe<Array<ClickupFolderWhereInput>>
  ClickupTaskFolder?: InputMaybe<ClickupTaskFolderListRelationFilter>
  NOT?: InputMaybe<Array<ClickupFolderWhereInput>>
  OR?: InputMaybe<Array<ClickupFolderWhereInput>>
  hidden?: InputMaybe<BoolFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
}

export type ClickupFolderWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupFolderWhereInput>>
  ClickupTaskFolder?: InputMaybe<ClickupTaskFolderListRelationFilter>
  NOT?: InputMaybe<Array<ClickupFolderWhereInput>>
  OR?: InputMaybe<Array<ClickupFolderWhereInput>>
  hidden?: InputMaybe<BoolFilter>
  id?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<StringFilter>
}

export type ClickupList = {
  __typename?: 'ClickupList'
  ClickupTaskList: Array<ClickupTaskList>
  _count?: Maybe<ClickupListCount>
  archived: Scalars['Boolean']['output']
  clickupTaskLocationHistory: Array<ClickupTaskLocationHistory>
  content: Scalars['String']['output']
  deleted: Scalars['Boolean']['output']
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id: Scalars['String']['output']
  inboundAddress: Scalars['String']['output']
  name: Scalars['String']['output']
  orderIndex: Scalars['Int']['output']
  overrideStatuses: Scalars['Boolean']['output']
  permissionLevel: Scalars['String']['output']
  startDate?: Maybe<Scalars['BigInt']['output']>
}

export type ClickupListClickupTaskListArgs = {
  cursor?: InputMaybe<ClickupTaskListWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskListScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskListOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type ClickupListClickupTaskLocationHistoryArgs = {
  cursor?: InputMaybe<ClickupTaskLocationHistoryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskLocationHistoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskLocationHistoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type ClickupListAvgAggregate = {
  __typename?: 'ClickupListAvgAggregate'
  dueDate?: Maybe<Scalars['Float']['output']>
  orderIndex?: Maybe<Scalars['Float']['output']>
  startDate?: Maybe<Scalars['Float']['output']>
}

export type ClickupListCount = {
  __typename?: 'ClickupListCount'
  ClickupTaskList: Scalars['Int']['output']
  clickupTaskLocationHistory: Scalars['Int']['output']
}

export type ClickupListCountClickupTaskListArgs = {
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type ClickupListCountClickupTaskLocationHistoryArgs = {
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type ClickupListCountAggregate = {
  __typename?: 'ClickupListCountAggregate'
  _all: Scalars['Int']['output']
  archived: Scalars['Int']['output']
  content: Scalars['Int']['output']
  deleted: Scalars['Int']['output']
  dueDate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  inboundAddress: Scalars['Int']['output']
  name: Scalars['Int']['output']
  orderIndex: Scalars['Int']['output']
  overrideStatuses: Scalars['Int']['output']
  permissionLevel: Scalars['Int']['output']
  startDate: Scalars['Int']['output']
}

export type ClickupListCreateInput = {
  ClickupTaskList?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupListInput>
  archived: Scalars['Boolean']['input']
  clickupTaskLocationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupListInput>
  content: Scalars['String']['input']
  deleted: Scalars['Boolean']['input']
  dueDate?: InputMaybe<Scalars['BigInt']['input']>
  id: Scalars['String']['input']
  inboundAddress: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  overrideStatuses: Scalars['Boolean']['input']
  permissionLevel: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['BigInt']['input']>
}

export type ClickupListCreateManyInput = {
  archived: Scalars['Boolean']['input']
  content: Scalars['String']['input']
  deleted: Scalars['Boolean']['input']
  dueDate?: InputMaybe<Scalars['BigInt']['input']>
  id: Scalars['String']['input']
  inboundAddress: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  overrideStatuses: Scalars['Boolean']['input']
  permissionLevel: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['BigInt']['input']>
}

export type ClickupListCreateNestedOneWithoutClickupTaskListInput = {
  connect?: InputMaybe<ClickupListWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupListCreateOrConnectWithoutClickupTaskListInput>
  create?: InputMaybe<ClickupListCreateWithoutClickupTaskListInput>
}

export type ClickupListCreateNestedOneWithoutClickupTaskLocationHistoryInput = {
  connect?: InputMaybe<ClickupListWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupListCreateOrConnectWithoutClickupTaskLocationHistoryInput>
  create?: InputMaybe<ClickupListCreateWithoutClickupTaskLocationHistoryInput>
}

export type ClickupListCreateOrConnectWithoutClickupTaskListInput = {
  create: ClickupListCreateWithoutClickupTaskListInput
  where: ClickupListWhereUniqueInput
}

export type ClickupListCreateOrConnectWithoutClickupTaskLocationHistoryInput = {
  create: ClickupListCreateWithoutClickupTaskLocationHistoryInput
  where: ClickupListWhereUniqueInput
}

export type ClickupListCreateWithoutClickupTaskListInput = {
  archived: Scalars['Boolean']['input']
  clickupTaskLocationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupListInput>
  content: Scalars['String']['input']
  deleted: Scalars['Boolean']['input']
  dueDate?: InputMaybe<Scalars['BigInt']['input']>
  id: Scalars['String']['input']
  inboundAddress: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  overrideStatuses: Scalars['Boolean']['input']
  permissionLevel: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['BigInt']['input']>
}

export type ClickupListCreateWithoutClickupTaskLocationHistoryInput = {
  ClickupTaskList?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupListInput>
  archived: Scalars['Boolean']['input']
  content: Scalars['String']['input']
  deleted: Scalars['Boolean']['input']
  dueDate?: InputMaybe<Scalars['BigInt']['input']>
  id: Scalars['String']['input']
  inboundAddress: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  overrideStatuses: Scalars['Boolean']['input']
  permissionLevel: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['BigInt']['input']>
}

export type ClickupListMaxAggregate = {
  __typename?: 'ClickupListMaxAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  content?: Maybe<Scalars['String']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id?: Maybe<Scalars['String']['output']>
  inboundAddress?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  overrideStatuses?: Maybe<Scalars['Boolean']['output']>
  permissionLevel?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['BigInt']['output']>
}

export type ClickupListMinAggregate = {
  __typename?: 'ClickupListMinAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  content?: Maybe<Scalars['String']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id?: Maybe<Scalars['String']['output']>
  inboundAddress?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  overrideStatuses?: Maybe<Scalars['Boolean']['output']>
  permissionLevel?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['BigInt']['output']>
}

export type ClickupListOrderByWithRelationInput = {
  ClickupTaskList?: InputMaybe<ClickupTaskListOrderByRelationAggregateInput>
  archived?: InputMaybe<SortOrder>
  clickupTaskLocationHistory?: InputMaybe<ClickupTaskLocationHistoryOrderByRelationAggregateInput>
  content?: InputMaybe<SortOrder>
  deleted?: InputMaybe<SortOrder>
  dueDate?: InputMaybe<SortOrderInput>
  id?: InputMaybe<SortOrder>
  inboundAddress?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  orderIndex?: InputMaybe<SortOrder>
  overrideStatuses?: InputMaybe<SortOrder>
  permissionLevel?: InputMaybe<SortOrder>
  startDate?: InputMaybe<SortOrderInput>
}

export type ClickupListRelationFilter = {
  is?: InputMaybe<ClickupListWhereInput>
  isNot?: InputMaybe<ClickupListWhereInput>
}

export enum ClickupListScalarFieldEnum {
  Archived = 'archived',
  Content = 'content',
  Deleted = 'deleted',
  DueDate = 'dueDate',
  Id = 'id',
  InboundAddress = 'inboundAddress',
  Name = 'name',
  OrderIndex = 'orderIndex',
  OverrideStatuses = 'overrideStatuses',
  PermissionLevel = 'permissionLevel',
  StartDate = 'startDate',
}

export type ClickupListSumAggregate = {
  __typename?: 'ClickupListSumAggregate'
  dueDate?: Maybe<Scalars['BigInt']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  startDate?: Maybe<Scalars['BigInt']['output']>
}

export type ClickupListUpdateInput = {
  ClickupTaskList?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupListNestedInput>
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTaskLocationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupListNestedInput>
  content?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  dueDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  inboundAddress?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  overrideStatuses?: InputMaybe<BoolFieldUpdateOperationsInput>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  startDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
}

export type ClickupListUpdateManyMutationInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  content?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  dueDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  inboundAddress?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  overrideStatuses?: InputMaybe<BoolFieldUpdateOperationsInput>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  startDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
}

export type ClickupListUpdateOneRequiredWithoutClickupTaskListNestedInput = {
  connect?: InputMaybe<ClickupListWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupListCreateOrConnectWithoutClickupTaskListInput>
  create?: InputMaybe<ClickupListCreateWithoutClickupTaskListInput>
  update?: InputMaybe<ClickupListUpdateToOneWithWhereWithoutClickupTaskListInput>
  upsert?: InputMaybe<ClickupListUpsertWithoutClickupTaskListInput>
}

export type ClickupListUpdateOneRequiredWithoutClickupTaskLocationHistoryNestedInput = {
  connect?: InputMaybe<ClickupListWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupListCreateOrConnectWithoutClickupTaskLocationHistoryInput>
  create?: InputMaybe<ClickupListCreateWithoutClickupTaskLocationHistoryInput>
  update?: InputMaybe<ClickupListUpdateToOneWithWhereWithoutClickupTaskLocationHistoryInput>
  upsert?: InputMaybe<ClickupListUpsertWithoutClickupTaskLocationHistoryInput>
}

export type ClickupListUpdateToOneWithWhereWithoutClickupTaskListInput = {
  data: ClickupListUpdateWithoutClickupTaskListInput
  where?: InputMaybe<ClickupListWhereInput>
}

export type ClickupListUpdateToOneWithWhereWithoutClickupTaskLocationHistoryInput = {
  data: ClickupListUpdateWithoutClickupTaskLocationHistoryInput
  where?: InputMaybe<ClickupListWhereInput>
}

export type ClickupListUpdateWithoutClickupTaskListInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTaskLocationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupListNestedInput>
  content?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  dueDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  inboundAddress?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  overrideStatuses?: InputMaybe<BoolFieldUpdateOperationsInput>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  startDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
}

export type ClickupListUpdateWithoutClickupTaskLocationHistoryInput = {
  ClickupTaskList?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupListNestedInput>
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  content?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  dueDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  inboundAddress?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  overrideStatuses?: InputMaybe<BoolFieldUpdateOperationsInput>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  startDate?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
}

export type ClickupListUpsertWithoutClickupTaskListInput = {
  create: ClickupListCreateWithoutClickupTaskListInput
  update: ClickupListUpdateWithoutClickupTaskListInput
  where?: InputMaybe<ClickupListWhereInput>
}

export type ClickupListUpsertWithoutClickupTaskLocationHistoryInput = {
  create: ClickupListCreateWithoutClickupTaskLocationHistoryInput
  update: ClickupListUpdateWithoutClickupTaskLocationHistoryInput
  where?: InputMaybe<ClickupListWhereInput>
}

export type ClickupListWhereInput = {
  AND?: InputMaybe<Array<ClickupListWhereInput>>
  ClickupTaskList?: InputMaybe<ClickupTaskListListRelationFilter>
  NOT?: InputMaybe<Array<ClickupListWhereInput>>
  OR?: InputMaybe<Array<ClickupListWhereInput>>
  archived?: InputMaybe<BoolFilter>
  clickupTaskLocationHistory?: InputMaybe<ClickupTaskLocationHistoryListRelationFilter>
  content?: InputMaybe<StringFilter>
  deleted?: InputMaybe<BoolFilter>
  dueDate?: InputMaybe<BigIntNullableFilter>
  id?: InputMaybe<StringFilter>
  inboundAddress?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  overrideStatuses?: InputMaybe<BoolFilter>
  permissionLevel?: InputMaybe<StringFilter>
  startDate?: InputMaybe<BigIntNullableFilter>
}

export type ClickupListWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupListWhereInput>>
  ClickupTaskList?: InputMaybe<ClickupTaskListListRelationFilter>
  NOT?: InputMaybe<Array<ClickupListWhereInput>>
  OR?: InputMaybe<Array<ClickupListWhereInput>>
  archived?: InputMaybe<BoolFilter>
  clickupTaskLocationHistory?: InputMaybe<ClickupTaskLocationHistoryListRelationFilter>
  content?: InputMaybe<StringFilter>
  deleted?: InputMaybe<BoolFilter>
  dueDate?: InputMaybe<BigIntNullableFilter>
  id?: InputMaybe<Scalars['String']['input']>
  inboundAddress?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  overrideStatuses?: InputMaybe<BoolFilter>
  permissionLevel?: InputMaybe<StringFilter>
  startDate?: InputMaybe<BigIntNullableFilter>
}

export type ClickupProject = {
  __typename?: 'ClickupProject'
  ClickupTaskProject: Array<ClickupTaskProject>
  _count?: Maybe<ClickupProjectCount>
  hidden: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type ClickupProjectClickupTaskProjectArgs = {
  cursor?: InputMaybe<ClickupTaskProjectWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskProjectScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type ClickupProjectCount = {
  __typename?: 'ClickupProjectCount'
  ClickupTaskProject: Scalars['Int']['output']
}

export type ClickupProjectCountClickupTaskProjectArgs = {
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type ClickupProjectCountAggregate = {
  __typename?: 'ClickupProjectCountAggregate'
  _all: Scalars['Int']['output']
  hidden: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
}

export type ClickupProjectCreateInput = {
  ClickupTaskProject?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupProjectInput>
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupProjectCreateManyInput = {
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupProjectCreateNestedOneWithoutClickupTaskProjectInput = {
  connect?: InputMaybe<ClickupProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupProjectCreateOrConnectWithoutClickupTaskProjectInput>
  create?: InputMaybe<ClickupProjectCreateWithoutClickupTaskProjectInput>
}

export type ClickupProjectCreateOrConnectWithoutClickupTaskProjectInput = {
  create: ClickupProjectCreateWithoutClickupTaskProjectInput
  where: ClickupProjectWhereUniqueInput
}

export type ClickupProjectCreateWithoutClickupTaskProjectInput = {
  hidden: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupProjectMaxAggregate = {
  __typename?: 'ClickupProjectMaxAggregate'
  hidden?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ClickupProjectMinAggregate = {
  __typename?: 'ClickupProjectMinAggregate'
  hidden?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ClickupProjectOrderByWithRelationInput = {
  ClickupTaskProject?: InputMaybe<ClickupTaskProjectOrderByRelationAggregateInput>
  hidden?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
}

export type ClickupProjectRelationFilter = {
  is?: InputMaybe<ClickupProjectWhereInput>
  isNot?: InputMaybe<ClickupProjectWhereInput>
}

export enum ClickupProjectScalarFieldEnum {
  Hidden = 'hidden',
  Id = 'id',
  Name = 'name',
}

export type ClickupProjectUpdateInput = {
  ClickupTaskProject?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupProjectNestedInput>
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupProjectUpdateManyMutationInput = {
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupProjectUpdateOneRequiredWithoutClickupTaskProjectNestedInput = {
  connect?: InputMaybe<ClickupProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupProjectCreateOrConnectWithoutClickupTaskProjectInput>
  create?: InputMaybe<ClickupProjectCreateWithoutClickupTaskProjectInput>
  update?: InputMaybe<ClickupProjectUpdateToOneWithWhereWithoutClickupTaskProjectInput>
  upsert?: InputMaybe<ClickupProjectUpsertWithoutClickupTaskProjectInput>
}

export type ClickupProjectUpdateToOneWithWhereWithoutClickupTaskProjectInput = {
  data: ClickupProjectUpdateWithoutClickupTaskProjectInput
  where?: InputMaybe<ClickupProjectWhereInput>
}

export type ClickupProjectUpdateWithoutClickupTaskProjectInput = {
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupProjectUpsertWithoutClickupTaskProjectInput = {
  create: ClickupProjectCreateWithoutClickupTaskProjectInput
  update: ClickupProjectUpdateWithoutClickupTaskProjectInput
  where?: InputMaybe<ClickupProjectWhereInput>
}

export type ClickupProjectWhereInput = {
  AND?: InputMaybe<Array<ClickupProjectWhereInput>>
  ClickupTaskProject?: InputMaybe<ClickupTaskProjectListRelationFilter>
  NOT?: InputMaybe<Array<ClickupProjectWhereInput>>
  OR?: InputMaybe<Array<ClickupProjectWhereInput>>
  hidden?: InputMaybe<BoolFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
}

export type ClickupProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupProjectWhereInput>>
  ClickupTaskProject?: InputMaybe<ClickupTaskProjectListRelationFilter>
  NOT?: InputMaybe<Array<ClickupProjectWhereInput>>
  OR?: InputMaybe<Array<ClickupProjectWhereInput>>
  hidden?: InputMaybe<BoolFilter>
  id?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<StringFilter>
}

export type ClickupTask = {
  __typename?: 'ClickupTask'
  _count?: Maybe<ClickupTaskCount>
  archived: Scalars['Boolean']['output']
  assignees: Array<ClickupUserTaskAssignee>
  attachments: Array<ClickupTaskAttachment>
  checklists: Array<ClickupTaskChecklist>
  clickupClockifyProject?: Maybe<ClickupClockifyProject>
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  clickupTaskCustomField: Array<ClickupTaskCustomField>
  clockifyTimeEntries: Array<ClockifyTimeEntry>
  creator: ClickupUser
  creatorId: Scalars['Int']['output']
  customId?: Maybe<Scalars['String']['output']>
  dateClosed?: Maybe<Scalars['String']['output']>
  dateCreated: Scalars['String']['output']
  dateDone?: Maybe<Scalars['String']['output']>
  dateUpdated: Scalars['String']['output']
  dependentTasks: Array<ClickupTaskDependency>
  description?: Maybe<Scalars['String']['output']>
  dueDates: Array<ClickupTaskDueDate>
  folder: Array<ClickupTaskFolder>
  id: Scalars['String']['output']
  linkedTasks: Scalars['JSON']['output']
  list: Array<ClickupTaskList>
  locationHistory: Array<ClickupTaskLocationHistory>
  name: Scalars['String']['output']
  orderIndex: Scalars['String']['output']
  parent?: Maybe<Scalars['JSON']['output']>
  permissionLevel: Scalars['String']['output']
  points?: Maybe<Scalars['BigInt']['output']>
  priority?: Maybe<ClickupTaskPriority>
  priorityId?: Maybe<Scalars['String']['output']>
  project: Array<ClickupTaskProject>
  sharing: Scalars['JSON']['output']
  space: ClickupTaskSpace
  spaceId: Scalars['String']['output']
  startDate?: Maybe<Scalars['String']['output']>
  status: Array<ClickupTaskStatusOnTask>
  tags: Array<ClickupTaskTag>
  taskDependencies: Array<ClickupTaskDependency>
  taskPeriodData: Array<TaskPeriodData>
  teamId: Scalars['String']['output']
  textContent?: Maybe<Scalars['String']['output']>
  timeEstimates: Array<ClickupTaskTimeEstimate>
  timeSpent?: Maybe<Scalars['BigInt']['output']>
  url: Scalars['String']['output']
  watchers: Array<ClickupUserTaskWatchers>
}

export type ClickupTaskAssigneesArgs = {
  cursor?: InputMaybe<ClickupUserTaskAssigneeWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupUserTaskAssigneeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupUserTaskAssigneeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type ClickupTaskAttachmentsArgs = {
  cursor?: InputMaybe<ClickupTaskAttachmentWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskAttachmentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskAttachmentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type ClickupTaskChecklistsArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskChecklistScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupTaskClickupClockifyProjectArgs = {
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type ClickupTaskClickupTaskCustomFieldArgs = {
  cursor?: InputMaybe<ClickupTaskCustomFieldWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskCustomFieldScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskCustomFieldOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type ClickupTaskClockifyTimeEntriesArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClickupTaskDependentTasksArgs = {
  cursor?: InputMaybe<ClickupTaskDependencyWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskDependencyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskDependencyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type ClickupTaskDueDatesArgs = {
  cursor?: InputMaybe<ClickupTaskDueDateWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskDueDateScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskDueDateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDueDateWhereInput>
}

export type ClickupTaskFolderArgs = {
  cursor?: InputMaybe<ClickupTaskFolderWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskFolderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskFolderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type ClickupTaskListArgs = {
  cursor?: InputMaybe<ClickupTaskListWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskListScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskListOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type ClickupTaskLocationHistoryArgs = {
  cursor?: InputMaybe<ClickupTaskLocationHistoryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskLocationHistoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskLocationHistoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type ClickupTaskPriorityArgs = {
  where?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type ClickupTaskProjectArgs = {
  cursor?: InputMaybe<ClickupTaskProjectWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskProjectScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type ClickupTaskStatusArgs = {
  cursor?: InputMaybe<ClickupTaskStatusOnTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskStatusOnTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type ClickupTaskTagsArgs = {
  cursor?: InputMaybe<ClickupTaskTagWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskTagScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskTagOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type ClickupTaskTaskDependenciesArgs = {
  cursor?: InputMaybe<ClickupTaskDependencyWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskDependencyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskDependencyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type ClickupTaskTaskPeriodDataArgs = {
  cursor?: InputMaybe<TaskPeriodDataWhereUniqueInput>
  distinct?: InputMaybe<Array<TaskPeriodDataScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TaskPeriodDataOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TaskPeriodDataWhereInput>
}

export type ClickupTaskTimeEstimatesArgs = {
  cursor?: InputMaybe<ClickupTaskTimeEstimateWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskTimeEstimateScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskTimeEstimateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
}

export type ClickupTaskWatchersArgs = {
  cursor?: InputMaybe<ClickupUserTaskWatchersWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupUserTaskWatchersScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupUserTaskWatchersOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type ClickupTaskAttachment = {
  __typename?: 'ClickupTaskAttachment'
  creator: ClickupUser
  creatorId: Scalars['Int']['output']
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
  task: ClickupTask
  taskId: Scalars['String']['output']
  thumbnailLarge?: Maybe<Scalars['String']['output']>
  thumbnailMedium?: Maybe<Scalars['String']['output']>
  thumbnailSmall?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  totalComments: Scalars['Int']['output']
  type: Scalars['Int']['output']
  url: Scalars['String']['output']
  urlWHost: Scalars['String']['output']
  urlWQuery: Scalars['String']['output']
  version: Scalars['Int']['output']
}

export type ClickupTaskAttachmentAvgAggregate = {
  __typename?: 'ClickupTaskAttachmentAvgAggregate'
  creatorId?: Maybe<Scalars['Float']['output']>
  resolvedComments?: Maybe<Scalars['Float']['output']>
  size?: Maybe<Scalars['Float']['output']>
  source?: Maybe<Scalars['Float']['output']>
  totalComments?: Maybe<Scalars['Float']['output']>
  type?: Maybe<Scalars['Float']['output']>
  version?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskAttachmentCountAggregate = {
  __typename?: 'ClickupTaskAttachmentCountAggregate'
  _all: Scalars['Int']['output']
  creatorId: Scalars['Int']['output']
  date: Scalars['Int']['output']
  deleted: Scalars['Int']['output']
  emailData: Scalars['Int']['output']
  extension: Scalars['Int']['output']
  hidden: Scalars['Int']['output']
  id: Scalars['Int']['output']
  isFolder: Scalars['Int']['output']
  mimetype: Scalars['Int']['output']
  orientation: Scalars['Int']['output']
  parentId: Scalars['Int']['output']
  resolvedComments: Scalars['Int']['output']
  size: Scalars['Int']['output']
  source: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
  thumbnailLarge: Scalars['Int']['output']
  thumbnailMedium: Scalars['Int']['output']
  thumbnailSmall: Scalars['Int']['output']
  title: Scalars['Int']['output']
  totalComments: Scalars['Int']['output']
  type: Scalars['Int']['output']
  url: Scalars['Int']['output']
  urlWHost: Scalars['Int']['output']
  urlWQuery: Scalars['Int']['output']
  version: Scalars['Int']['output']
}

export type ClickupTaskAttachmentCreateInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskAttachmentsInput
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
  task: ClickupTaskCreateNestedOneWithoutAttachmentsInput
  thumbnailLarge?: InputMaybe<Scalars['String']['input']>
  thumbnailMedium?: InputMaybe<Scalars['String']['input']>
  thumbnailSmall?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  totalComments: Scalars['Int']['input']
  type: Scalars['Int']['input']
  url: Scalars['String']['input']
  urlWHost: Scalars['String']['input']
  urlWQuery: Scalars['String']['input']
  version: Scalars['Int']['input']
}

export type ClickupTaskAttachmentCreateManyCreatorInput = {
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
  taskId: Scalars['String']['input']
  thumbnailLarge?: InputMaybe<Scalars['String']['input']>
  thumbnailMedium?: InputMaybe<Scalars['String']['input']>
  thumbnailSmall?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  totalComments: Scalars['Int']['input']
  type: Scalars['Int']['input']
  url: Scalars['String']['input']
  urlWHost: Scalars['String']['input']
  urlWQuery: Scalars['String']['input']
  version: Scalars['Int']['input']
}

export type ClickupTaskAttachmentCreateManyCreatorInputEnvelope = {
  data: Array<ClickupTaskAttachmentCreateManyCreatorInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskAttachmentCreateManyInput = {
  creatorId: Scalars['Int']['input']
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
  taskId: Scalars['String']['input']
  thumbnailLarge?: InputMaybe<Scalars['String']['input']>
  thumbnailMedium?: InputMaybe<Scalars['String']['input']>
  thumbnailSmall?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  totalComments: Scalars['Int']['input']
  type: Scalars['Int']['input']
  url: Scalars['String']['input']
  urlWHost: Scalars['String']['input']
  urlWQuery: Scalars['String']['input']
  version: Scalars['Int']['input']
}

export type ClickupTaskAttachmentCreateManyTaskInput = {
  creatorId: Scalars['Int']['input']
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
  version: Scalars['Int']['input']
}

export type ClickupTaskAttachmentCreateManyTaskInputEnvelope = {
  data: Array<ClickupTaskAttachmentCreateManyTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskAttachmentCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskAttachmentCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskAttachmentCreateManyCreatorInputEnvelope>
}

export type ClickupTaskAttachmentCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskAttachmentCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskAttachmentCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskAttachmentCreateManyTaskInputEnvelope>
}

export type ClickupTaskAttachmentCreateOrConnectWithoutCreatorInput = {
  create: ClickupTaskAttachmentCreateWithoutCreatorInput
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type ClickupTaskAttachmentCreateOrConnectWithoutTaskInput = {
  create: ClickupTaskAttachmentCreateWithoutTaskInput
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type ClickupTaskAttachmentCreateWithoutCreatorInput = {
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
  task: ClickupTaskCreateNestedOneWithoutAttachmentsInput
  thumbnailLarge?: InputMaybe<Scalars['String']['input']>
  thumbnailMedium?: InputMaybe<Scalars['String']['input']>
  thumbnailSmall?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  totalComments: Scalars['Int']['input']
  type: Scalars['Int']['input']
  url: Scalars['String']['input']
  urlWHost: Scalars['String']['input']
  urlWQuery: Scalars['String']['input']
  version: Scalars['Int']['input']
}

export type ClickupTaskAttachmentCreateWithoutTaskInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskAttachmentsInput
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
  version: Scalars['Int']['input']
}

export type ClickupTaskAttachmentListRelationFilter = {
  every?: InputMaybe<ClickupTaskAttachmentWhereInput>
  none?: InputMaybe<ClickupTaskAttachmentWhereInput>
  some?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type ClickupTaskAttachmentMaxAggregate = {
  __typename?: 'ClickupTaskAttachmentMaxAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  date?: Maybe<Scalars['String']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  extension?: Maybe<Scalars['String']['output']>
  hidden?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  isFolder?: Maybe<Scalars['Boolean']['output']>
  mimetype?: Maybe<Scalars['String']['output']>
  parentId?: Maybe<Scalars['String']['output']>
  resolvedComments?: Maybe<Scalars['Int']['output']>
  size?: Maybe<Scalars['Int']['output']>
  source?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  thumbnailLarge?: Maybe<Scalars['String']['output']>
  thumbnailMedium?: Maybe<Scalars['String']['output']>
  thumbnailSmall?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  totalComments?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['String']['output']>
  urlWHost?: Maybe<Scalars['String']['output']>
  urlWQuery?: Maybe<Scalars['String']['output']>
  version?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskAttachmentMinAggregate = {
  __typename?: 'ClickupTaskAttachmentMinAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  date?: Maybe<Scalars['String']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  extension?: Maybe<Scalars['String']['output']>
  hidden?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  isFolder?: Maybe<Scalars['Boolean']['output']>
  mimetype?: Maybe<Scalars['String']['output']>
  parentId?: Maybe<Scalars['String']['output']>
  resolvedComments?: Maybe<Scalars['Int']['output']>
  size?: Maybe<Scalars['Int']['output']>
  source?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  thumbnailLarge?: Maybe<Scalars['String']['output']>
  thumbnailMedium?: Maybe<Scalars['String']['output']>
  thumbnailSmall?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  totalComments?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['String']['output']>
  urlWHost?: Maybe<Scalars['String']['output']>
  urlWQuery?: Maybe<Scalars['String']['output']>
  version?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskAttachmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskAttachmentOrderByWithRelationInput = {
  creator?: InputMaybe<ClickupUserOrderByWithRelationInput>
  creatorId?: InputMaybe<SortOrder>
  date?: InputMaybe<SortOrder>
  deleted?: InputMaybe<SortOrder>
  emailData?: InputMaybe<SortOrderInput>
  extension?: InputMaybe<SortOrder>
  hidden?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  isFolder?: InputMaybe<SortOrderInput>
  mimetype?: InputMaybe<SortOrder>
  orientation?: InputMaybe<SortOrderInput>
  parentId?: InputMaybe<SortOrder>
  resolvedComments?: InputMaybe<SortOrder>
  size?: InputMaybe<SortOrder>
  source?: InputMaybe<SortOrder>
  task?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  taskId?: InputMaybe<SortOrder>
  thumbnailLarge?: InputMaybe<SortOrderInput>
  thumbnailMedium?: InputMaybe<SortOrderInput>
  thumbnailSmall?: InputMaybe<SortOrderInput>
  title?: InputMaybe<SortOrder>
  totalComments?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
  urlWHost?: InputMaybe<SortOrder>
  urlWQuery?: InputMaybe<SortOrder>
  version?: InputMaybe<SortOrder>
}

export enum ClickupTaskAttachmentScalarFieldEnum {
  CreatorId = 'creatorId',
  Date = 'date',
  Deleted = 'deleted',
  EmailData = 'emailData',
  Extension = 'extension',
  Hidden = 'hidden',
  Id = 'id',
  IsFolder = 'isFolder',
  Mimetype = 'mimetype',
  Orientation = 'orientation',
  ParentId = 'parentId',
  ResolvedComments = 'resolvedComments',
  Size = 'size',
  Source = 'source',
  TaskId = 'taskId',
  ThumbnailLarge = 'thumbnailLarge',
  ThumbnailMedium = 'thumbnailMedium',
  ThumbnailSmall = 'thumbnailSmall',
  Title = 'title',
  TotalComments = 'totalComments',
  Type = 'type',
  Url = 'url',
  UrlWHost = 'urlWHost',
  UrlWQuery = 'urlWQuery',
  Version = 'version',
}

export type ClickupTaskAttachmentScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskAttachmentScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskAttachmentScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskAttachmentScalarWhereInput>>
  creatorId?: InputMaybe<IntFilter>
  date?: InputMaybe<StringFilter>
  deleted?: InputMaybe<BoolFilter>
  emailData?: InputMaybe<JsonNullableFilter>
  extension?: InputMaybe<StringFilter>
  hidden?: InputMaybe<BoolFilter>
  id?: InputMaybe<StringFilter>
  isFolder?: InputMaybe<BoolNullableFilter>
  mimetype?: InputMaybe<StringFilter>
  orientation?: InputMaybe<JsonNullableFilter>
  parentId?: InputMaybe<StringFilter>
  resolvedComments?: InputMaybe<IntFilter>
  size?: InputMaybe<IntFilter>
  source?: InputMaybe<IntFilter>
  taskId?: InputMaybe<StringFilter>
  thumbnailLarge?: InputMaybe<StringNullableFilter>
  thumbnailMedium?: InputMaybe<StringNullableFilter>
  thumbnailSmall?: InputMaybe<StringNullableFilter>
  title?: InputMaybe<StringFilter>
  totalComments?: InputMaybe<IntFilter>
  type?: InputMaybe<IntFilter>
  url?: InputMaybe<StringFilter>
  urlWHost?: InputMaybe<StringFilter>
  urlWQuery?: InputMaybe<StringFilter>
  version?: InputMaybe<IntFilter>
}

export type ClickupTaskAttachmentSumAggregate = {
  __typename?: 'ClickupTaskAttachmentSumAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  resolvedComments?: Maybe<Scalars['Int']['output']>
  size?: Maybe<Scalars['Int']['output']>
  source?: Maybe<Scalars['Int']['output']>
  totalComments?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
  version?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskAttachmentUpdateInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskAttachmentsNestedInput>
  date?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  emailData?: InputMaybe<Scalars['JSON']['input']>
  extension?: InputMaybe<StringFieldUpdateOperationsInput>
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isFolder?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  mimetype?: InputMaybe<StringFieldUpdateOperationsInput>
  orientation?: InputMaybe<Scalars['JSON']['input']>
  parentId?: InputMaybe<StringFieldUpdateOperationsInput>
  resolvedComments?: InputMaybe<IntFieldUpdateOperationsInput>
  size?: InputMaybe<IntFieldUpdateOperationsInput>
  source?: InputMaybe<IntFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutAttachmentsNestedInput>
  thumbnailLarge?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailMedium?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailSmall?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
  totalComments?: InputMaybe<IntFieldUpdateOperationsInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWHost?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWQuery?: InputMaybe<StringFieldUpdateOperationsInput>
  version?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskAttachmentUpdateManyMutationInput = {
  date?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  emailData?: InputMaybe<Scalars['JSON']['input']>
  extension?: InputMaybe<StringFieldUpdateOperationsInput>
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isFolder?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  mimetype?: InputMaybe<StringFieldUpdateOperationsInput>
  orientation?: InputMaybe<Scalars['JSON']['input']>
  parentId?: InputMaybe<StringFieldUpdateOperationsInput>
  resolvedComments?: InputMaybe<IntFieldUpdateOperationsInput>
  size?: InputMaybe<IntFieldUpdateOperationsInput>
  source?: InputMaybe<IntFieldUpdateOperationsInput>
  thumbnailLarge?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailMedium?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailSmall?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
  totalComments?: InputMaybe<IntFieldUpdateOperationsInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWHost?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWQuery?: InputMaybe<StringFieldUpdateOperationsInput>
  version?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskAttachmentUpdateManyWithWhereWithoutCreatorInput = {
  data: ClickupTaskAttachmentUpdateManyMutationInput
  where: ClickupTaskAttachmentScalarWhereInput
}

export type ClickupTaskAttachmentUpdateManyWithWhereWithoutTaskInput = {
  data: ClickupTaskAttachmentUpdateManyMutationInput
  where: ClickupTaskAttachmentScalarWhereInput
}

export type ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskAttachmentCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskAttachmentCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskAttachmentCreateManyCreatorInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskAttachmentScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskAttachmentUpdateWithWhereUniqueWithoutCreatorInput>>
  updateMany?: InputMaybe<Array<ClickupTaskAttachmentUpdateManyWithWhereWithoutCreatorInput>>
  upsert?: InputMaybe<Array<ClickupTaskAttachmentUpsertWithWhereUniqueWithoutCreatorInput>>
}

export type ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskAttachmentCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskAttachmentCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskAttachmentCreateManyTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskAttachmentScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskAttachmentWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskAttachmentUpdateWithWhereUniqueWithoutTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskAttachmentUpdateManyWithWhereWithoutTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskAttachmentUpsertWithWhereUniqueWithoutTaskInput>>
}

export type ClickupTaskAttachmentUpdateWithWhereUniqueWithoutCreatorInput = {
  data: ClickupTaskAttachmentUpdateWithoutCreatorInput
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type ClickupTaskAttachmentUpdateWithWhereUniqueWithoutTaskInput = {
  data: ClickupTaskAttachmentUpdateWithoutTaskInput
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type ClickupTaskAttachmentUpdateWithoutCreatorInput = {
  date?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  emailData?: InputMaybe<Scalars['JSON']['input']>
  extension?: InputMaybe<StringFieldUpdateOperationsInput>
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isFolder?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  mimetype?: InputMaybe<StringFieldUpdateOperationsInput>
  orientation?: InputMaybe<Scalars['JSON']['input']>
  parentId?: InputMaybe<StringFieldUpdateOperationsInput>
  resolvedComments?: InputMaybe<IntFieldUpdateOperationsInput>
  size?: InputMaybe<IntFieldUpdateOperationsInput>
  source?: InputMaybe<IntFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutAttachmentsNestedInput>
  thumbnailLarge?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailMedium?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailSmall?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
  totalComments?: InputMaybe<IntFieldUpdateOperationsInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWHost?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWQuery?: InputMaybe<StringFieldUpdateOperationsInput>
  version?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskAttachmentUpdateWithoutTaskInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskAttachmentsNestedInput>
  date?: InputMaybe<StringFieldUpdateOperationsInput>
  deleted?: InputMaybe<BoolFieldUpdateOperationsInput>
  emailData?: InputMaybe<Scalars['JSON']['input']>
  extension?: InputMaybe<StringFieldUpdateOperationsInput>
  hidden?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isFolder?: InputMaybe<NullableBoolFieldUpdateOperationsInput>
  mimetype?: InputMaybe<StringFieldUpdateOperationsInput>
  orientation?: InputMaybe<Scalars['JSON']['input']>
  parentId?: InputMaybe<StringFieldUpdateOperationsInput>
  resolvedComments?: InputMaybe<IntFieldUpdateOperationsInput>
  size?: InputMaybe<IntFieldUpdateOperationsInput>
  source?: InputMaybe<IntFieldUpdateOperationsInput>
  thumbnailLarge?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailMedium?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  thumbnailSmall?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
  totalComments?: InputMaybe<IntFieldUpdateOperationsInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWHost?: InputMaybe<StringFieldUpdateOperationsInput>
  urlWQuery?: InputMaybe<StringFieldUpdateOperationsInput>
  version?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskAttachmentUpsertWithWhereUniqueWithoutCreatorInput = {
  create: ClickupTaskAttachmentCreateWithoutCreatorInput
  update: ClickupTaskAttachmentUpdateWithoutCreatorInput
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type ClickupTaskAttachmentUpsertWithWhereUniqueWithoutTaskInput = {
  create: ClickupTaskAttachmentCreateWithoutTaskInput
  update: ClickupTaskAttachmentUpdateWithoutTaskInput
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type ClickupTaskAttachmentWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskAttachmentWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskAttachmentWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskAttachmentWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  date?: InputMaybe<StringFilter>
  deleted?: InputMaybe<BoolFilter>
  emailData?: InputMaybe<JsonNullableFilter>
  extension?: InputMaybe<StringFilter>
  hidden?: InputMaybe<BoolFilter>
  id?: InputMaybe<StringFilter>
  isFolder?: InputMaybe<BoolNullableFilter>
  mimetype?: InputMaybe<StringFilter>
  orientation?: InputMaybe<JsonNullableFilter>
  parentId?: InputMaybe<StringFilter>
  resolvedComments?: InputMaybe<IntFilter>
  size?: InputMaybe<IntFilter>
  source?: InputMaybe<IntFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  thumbnailLarge?: InputMaybe<StringNullableFilter>
  thumbnailMedium?: InputMaybe<StringNullableFilter>
  thumbnailSmall?: InputMaybe<StringNullableFilter>
  title?: InputMaybe<StringFilter>
  totalComments?: InputMaybe<IntFilter>
  type?: InputMaybe<IntFilter>
  url?: InputMaybe<StringFilter>
  urlWHost?: InputMaybe<StringFilter>
  urlWQuery?: InputMaybe<StringFilter>
  version?: InputMaybe<IntFilter>
}

export type ClickupTaskAttachmentWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskAttachmentWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskAttachmentWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskAttachmentWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  date?: InputMaybe<StringFilter>
  deleted?: InputMaybe<BoolFilter>
  emailData?: InputMaybe<JsonNullableFilter>
  extension?: InputMaybe<StringFilter>
  hidden?: InputMaybe<BoolFilter>
  id?: InputMaybe<Scalars['String']['input']>
  isFolder?: InputMaybe<BoolNullableFilter>
  mimetype?: InputMaybe<StringFilter>
  orientation?: InputMaybe<JsonNullableFilter>
  parentId?: InputMaybe<StringFilter>
  resolvedComments?: InputMaybe<IntFilter>
  size?: InputMaybe<IntFilter>
  source?: InputMaybe<IntFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  thumbnailLarge?: InputMaybe<StringNullableFilter>
  thumbnailMedium?: InputMaybe<StringNullableFilter>
  thumbnailSmall?: InputMaybe<StringNullableFilter>
  title?: InputMaybe<StringFilter>
  totalComments?: InputMaybe<IntFilter>
  type?: InputMaybe<IntFilter>
  url?: InputMaybe<StringFilter>
  urlWHost?: InputMaybe<StringFilter>
  urlWQuery?: InputMaybe<StringFilter>
  version?: InputMaybe<IntFilter>
}

export type ClickupTaskAvgAggregate = {
  __typename?: 'ClickupTaskAvgAggregate'
  clickupClockifyProjectId?: Maybe<Scalars['Float']['output']>
  creatorId?: Maybe<Scalars['Float']['output']>
  points?: Maybe<Scalars['Float']['output']>
  timeSpent?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskChecklist = {
  __typename?: 'ClickupTaskChecklist'
  _count?: Maybe<ClickupTaskChecklistCount>
  creator: ClickupUser
  creatorId: Scalars['Int']['output']
  dateCreated: Scalars['String']['output']
  id: Scalars['String']['output']
  items: Array<ClickupTaskChecklistItem>
  name: Scalars['String']['output']
  orderIndex: Scalars['Int']['output']
  resolved: Scalars['Int']['output']
  task: ClickupTask
  taskId: Scalars['String']['output']
  unresolved: Scalars['Int']['output']
}

export type ClickupTaskChecklistItemsArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistItemWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskChecklistItemScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistItemOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type ClickupTaskChecklistAvgAggregate = {
  __typename?: 'ClickupTaskChecklistAvgAggregate'
  creatorId?: Maybe<Scalars['Float']['output']>
  orderIndex?: Maybe<Scalars['Float']['output']>
  resolved?: Maybe<Scalars['Float']['output']>
  unresolved?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskChecklistCount = {
  __typename?: 'ClickupTaskChecklistCount'
  items: Scalars['Int']['output']
}

export type ClickupTaskChecklistCountItemsArgs = {
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type ClickupTaskChecklistCountAggregate = {
  __typename?: 'ClickupTaskChecklistCountAggregate'
  _all: Scalars['Int']['output']
  creatorId: Scalars['Int']['output']
  dateCreated: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  orderIndex: Scalars['Int']['output']
  resolved: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
  unresolved: Scalars['Int']['output']
}

export type ClickupTaskChecklistCreateInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskChecklistInput
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  items?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutChecklistInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  task: ClickupTaskCreateNestedOneWithoutChecklistsInput
  unresolved: Scalars['Int']['input']
}

export type ClickupTaskChecklistCreateManyCreatorInput = {
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  taskId: Scalars['String']['input']
  unresolved: Scalars['Int']['input']
}

export type ClickupTaskChecklistCreateManyCreatorInputEnvelope = {
  data: Array<ClickupTaskChecklistCreateManyCreatorInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskChecklistCreateManyInput = {
  creatorId: Scalars['Int']['input']
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  taskId: Scalars['String']['input']
  unresolved: Scalars['Int']['input']
}

export type ClickupTaskChecklistCreateManyTaskInput = {
  creatorId: Scalars['Int']['input']
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  unresolved: Scalars['Int']['input']
}

export type ClickupTaskChecklistCreateManyTaskInputEnvelope = {
  data: Array<ClickupTaskChecklistCreateManyTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskChecklistCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskChecklistCreateManyCreatorInputEnvelope>
}

export type ClickupTaskChecklistCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskChecklistCreateManyTaskInputEnvelope>
}

export type ClickupTaskChecklistCreateNestedOneWithoutItemsInput = {
  connect?: InputMaybe<ClickupTaskChecklistWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskChecklistCreateOrConnectWithoutItemsInput>
  create?: InputMaybe<ClickupTaskChecklistCreateWithoutItemsInput>
}

export type ClickupTaskChecklistCreateOrConnectWithoutCreatorInput = {
  create: ClickupTaskChecklistCreateWithoutCreatorInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type ClickupTaskChecklistCreateOrConnectWithoutItemsInput = {
  create: ClickupTaskChecklistCreateWithoutItemsInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type ClickupTaskChecklistCreateOrConnectWithoutTaskInput = {
  create: ClickupTaskChecklistCreateWithoutTaskInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type ClickupTaskChecklistCreateWithoutCreatorInput = {
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  items?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutChecklistInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  task: ClickupTaskCreateNestedOneWithoutChecklistsInput
  unresolved: Scalars['Int']['input']
}

export type ClickupTaskChecklistCreateWithoutItemsInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskChecklistInput
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  task: ClickupTaskCreateNestedOneWithoutChecklistsInput
  unresolved: Scalars['Int']['input']
}

export type ClickupTaskChecklistCreateWithoutTaskInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskChecklistInput
  dateCreated: Scalars['String']['input']
  id: Scalars['String']['input']
  items?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutChecklistInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  resolved: Scalars['Int']['input']
  unresolved: Scalars['Int']['input']
}

export type ClickupTaskChecklistItem = {
  __typename?: 'ClickupTaskChecklistItem'
  assignee?: Maybe<ClickupUser>
  assigneeId?: Maybe<Scalars['Int']['output']>
  checklist?: Maybe<ClickupTaskChecklist>
  checklistId?: Maybe<Scalars['String']['output']>
  children?: Maybe<Scalars['JSON']['output']>
  dateCreated: Scalars['String']['output']
  groupAssignee?: Maybe<Scalars['JSON']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  orderIndex: Scalars['Int']['output']
  parentId?: Maybe<Scalars['String']['output']>
  resolved: Scalars['Boolean']['output']
}

export type ClickupTaskChecklistItemAssigneeArgs = {
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupTaskChecklistItemChecklistArgs = {
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupTaskChecklistItemAvgAggregate = {
  __typename?: 'ClickupTaskChecklistItemAvgAggregate'
  assigneeId?: Maybe<Scalars['Float']['output']>
  orderIndex?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskChecklistItemCountAggregate = {
  __typename?: 'ClickupTaskChecklistItemCountAggregate'
  _all: Scalars['Int']['output']
  assigneeId: Scalars['Int']['output']
  checklistId: Scalars['Int']['output']
  children: Scalars['Int']['output']
  dateCreated: Scalars['Int']['output']
  groupAssignee: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  orderIndex: Scalars['Int']['output']
  parentId: Scalars['Int']['output']
  resolved: Scalars['Int']['output']
}

export type ClickupTaskChecklistItemCreateInput = {
  assignee?: InputMaybe<ClickupUserCreateNestedOneWithoutAssignedTaskChecklistItemsInput>
  checklist?: InputMaybe<ClickupTaskChecklistCreateNestedOneWithoutItemsInput>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  parentId?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupTaskChecklistItemCreateManyAssigneeInput = {
  checklistId?: InputMaybe<Scalars['String']['input']>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  parentId?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupTaskChecklistItemCreateManyAssigneeInputEnvelope = {
  data: Array<ClickupTaskChecklistItemCreateManyAssigneeInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskChecklistItemCreateManyChecklistInput = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  parentId?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupTaskChecklistItemCreateManyChecklistInputEnvelope = {
  data: Array<ClickupTaskChecklistItemCreateManyChecklistInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskChecklistItemCreateManyInput = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>
  checklistId?: InputMaybe<Scalars['String']['input']>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  parentId?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistItemCreateOrConnectWithoutAssigneeInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistItemCreateWithoutAssigneeInput>>
  createMany?: InputMaybe<ClickupTaskChecklistItemCreateManyAssigneeInputEnvelope>
}

export type ClickupTaskChecklistItemCreateNestedManyWithoutChecklistInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistItemCreateOrConnectWithoutChecklistInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistItemCreateWithoutChecklistInput>>
  createMany?: InputMaybe<ClickupTaskChecklistItemCreateManyChecklistInputEnvelope>
}

export type ClickupTaskChecklistItemCreateOrConnectWithoutAssigneeInput = {
  create: ClickupTaskChecklistItemCreateWithoutAssigneeInput
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type ClickupTaskChecklistItemCreateOrConnectWithoutChecklistInput = {
  create: ClickupTaskChecklistItemCreateWithoutChecklistInput
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type ClickupTaskChecklistItemCreateWithoutAssigneeInput = {
  checklist?: InputMaybe<ClickupTaskChecklistCreateNestedOneWithoutItemsInput>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  parentId?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupTaskChecklistItemCreateWithoutChecklistInput = {
  assignee?: InputMaybe<ClickupUserCreateNestedOneWithoutAssignedTaskChecklistItemsInput>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated: Scalars['String']['input']
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['Int']['input']
  parentId?: InputMaybe<Scalars['String']['input']>
  resolved: Scalars['Boolean']['input']
}

export type ClickupTaskChecklistItemListRelationFilter = {
  every?: InputMaybe<ClickupTaskChecklistItemWhereInput>
  none?: InputMaybe<ClickupTaskChecklistItemWhereInput>
  some?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type ClickupTaskChecklistItemMaxAggregate = {
  __typename?: 'ClickupTaskChecklistItemMaxAggregate'
  assigneeId?: Maybe<Scalars['Int']['output']>
  checklistId?: Maybe<Scalars['String']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  parentId?: Maybe<Scalars['String']['output']>
  resolved?: Maybe<Scalars['Boolean']['output']>
}

export type ClickupTaskChecklistItemMinAggregate = {
  __typename?: 'ClickupTaskChecklistItemMinAggregate'
  assigneeId?: Maybe<Scalars['Int']['output']>
  checklistId?: Maybe<Scalars['String']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  parentId?: Maybe<Scalars['String']['output']>
  resolved?: Maybe<Scalars['Boolean']['output']>
}

export type ClickupTaskChecklistItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskChecklistItemOrderByWithRelationInput = {
  assignee?: InputMaybe<ClickupUserOrderByWithRelationInput>
  assigneeId?: InputMaybe<SortOrderInput>
  checklist?: InputMaybe<ClickupTaskChecklistOrderByWithRelationInput>
  checklistId?: InputMaybe<SortOrderInput>
  children?: InputMaybe<SortOrderInput>
  dateCreated?: InputMaybe<SortOrder>
  groupAssignee?: InputMaybe<SortOrderInput>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  orderIndex?: InputMaybe<SortOrder>
  parentId?: InputMaybe<SortOrderInput>
  resolved?: InputMaybe<SortOrder>
}

export enum ClickupTaskChecklistItemScalarFieldEnum {
  AssigneeId = 'assigneeId',
  ChecklistId = 'checklistId',
  Children = 'children',
  DateCreated = 'dateCreated',
  GroupAssignee = 'groupAssignee',
  Id = 'id',
  Name = 'name',
  OrderIndex = 'orderIndex',
  ParentId = 'parentId',
  Resolved = 'resolved',
}

export type ClickupTaskChecklistItemScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskChecklistItemScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskChecklistItemScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskChecklistItemScalarWhereInput>>
  assigneeId?: InputMaybe<IntNullableFilter>
  checklistId?: InputMaybe<StringNullableFilter>
  children?: InputMaybe<JsonNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  groupAssignee?: InputMaybe<JsonNullableFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  parentId?: InputMaybe<StringNullableFilter>
  resolved?: InputMaybe<BoolFilter>
}

export type ClickupTaskChecklistItemSumAggregate = {
  __typename?: 'ClickupTaskChecklistItemSumAggregate'
  assigneeId?: Maybe<Scalars['Int']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskChecklistItemUpdateInput = {
  assignee?: InputMaybe<ClickupUserUpdateOneWithoutAssignedTaskChecklistItemsNestedInput>
  checklist?: InputMaybe<ClickupTaskChecklistUpdateOneWithoutItemsNestedInput>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistItemUpdateManyMutationInput = {
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistItemUpdateManyWithWhereWithoutAssigneeInput = {
  data: ClickupTaskChecklistItemUpdateManyMutationInput
  where: ClickupTaskChecklistItemScalarWhereInput
}

export type ClickupTaskChecklistItemUpdateManyWithWhereWithoutChecklistInput = {
  data: ClickupTaskChecklistItemUpdateManyMutationInput
  where: ClickupTaskChecklistItemScalarWhereInput
}

export type ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistItemCreateOrConnectWithoutAssigneeInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistItemCreateWithoutAssigneeInput>>
  createMany?: InputMaybe<ClickupTaskChecklistItemCreateManyAssigneeInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskChecklistItemScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskChecklistItemUpdateWithWhereUniqueWithoutAssigneeInput>>
  updateMany?: InputMaybe<Array<ClickupTaskChecklistItemUpdateManyWithWhereWithoutAssigneeInput>>
  upsert?: InputMaybe<Array<ClickupTaskChecklistItemUpsertWithWhereUniqueWithoutAssigneeInput>>
}

export type ClickupTaskChecklistItemUpdateManyWithoutChecklistNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistItemCreateOrConnectWithoutChecklistInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistItemCreateWithoutChecklistInput>>
  createMany?: InputMaybe<ClickupTaskChecklistItemCreateManyChecklistInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskChecklistItemScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskChecklistItemWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskChecklistItemUpdateWithWhereUniqueWithoutChecklistInput>>
  updateMany?: InputMaybe<Array<ClickupTaskChecklistItemUpdateManyWithWhereWithoutChecklistInput>>
  upsert?: InputMaybe<Array<ClickupTaskChecklistItemUpsertWithWhereUniqueWithoutChecklistInput>>
}

export type ClickupTaskChecklistItemUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: ClickupTaskChecklistItemUpdateWithoutAssigneeInput
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type ClickupTaskChecklistItemUpdateWithWhereUniqueWithoutChecklistInput = {
  data: ClickupTaskChecklistItemUpdateWithoutChecklistInput
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type ClickupTaskChecklistItemUpdateWithoutAssigneeInput = {
  checklist?: InputMaybe<ClickupTaskChecklistUpdateOneWithoutItemsNestedInput>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistItemUpdateWithoutChecklistInput = {
  assignee?: InputMaybe<ClickupUserUpdateOneWithoutAssignedTaskChecklistItemsNestedInput>
  children?: InputMaybe<Scalars['JSON']['input']>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  groupAssignee?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistItemUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: ClickupTaskChecklistItemCreateWithoutAssigneeInput
  update: ClickupTaskChecklistItemUpdateWithoutAssigneeInput
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type ClickupTaskChecklistItemUpsertWithWhereUniqueWithoutChecklistInput = {
  create: ClickupTaskChecklistItemCreateWithoutChecklistInput
  update: ClickupTaskChecklistItemUpdateWithoutChecklistInput
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type ClickupTaskChecklistItemWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskChecklistItemWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskChecklistItemWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskChecklistItemWhereInput>>
  assignee?: InputMaybe<ClickupUserNullableRelationFilter>
  assigneeId?: InputMaybe<IntNullableFilter>
  checklist?: InputMaybe<ClickupTaskChecklistNullableRelationFilter>
  checklistId?: InputMaybe<StringNullableFilter>
  children?: InputMaybe<JsonNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  groupAssignee?: InputMaybe<JsonNullableFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  parentId?: InputMaybe<StringNullableFilter>
  resolved?: InputMaybe<BoolFilter>
}

export type ClickupTaskChecklistItemWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskChecklistItemWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskChecklistItemWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskChecklistItemWhereInput>>
  assignee?: InputMaybe<ClickupUserNullableRelationFilter>
  assigneeId?: InputMaybe<IntNullableFilter>
  checklist?: InputMaybe<ClickupTaskChecklistNullableRelationFilter>
  checklistId?: InputMaybe<StringNullableFilter>
  children?: InputMaybe<JsonNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  groupAssignee?: InputMaybe<JsonNullableFilter>
  id?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  parentId?: InputMaybe<StringNullableFilter>
  resolved?: InputMaybe<BoolFilter>
}

export type ClickupTaskChecklistListRelationFilter = {
  every?: InputMaybe<ClickupTaskChecklistWhereInput>
  none?: InputMaybe<ClickupTaskChecklistWhereInput>
  some?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupTaskChecklistMaxAggregate = {
  __typename?: 'ClickupTaskChecklistMaxAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  resolved?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  unresolved?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskChecklistMinAggregate = {
  __typename?: 'ClickupTaskChecklistMinAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  resolved?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  unresolved?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskChecklistNullableRelationFilter = {
  is?: InputMaybe<ClickupTaskChecklistWhereInput>
  isNot?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupTaskChecklistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskChecklistOrderByWithRelationInput = {
  creator?: InputMaybe<ClickupUserOrderByWithRelationInput>
  creatorId?: InputMaybe<SortOrder>
  dateCreated?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  items?: InputMaybe<ClickupTaskChecklistItemOrderByRelationAggregateInput>
  name?: InputMaybe<SortOrder>
  orderIndex?: InputMaybe<SortOrder>
  resolved?: InputMaybe<SortOrder>
  task?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  taskId?: InputMaybe<SortOrder>
  unresolved?: InputMaybe<SortOrder>
}

export enum ClickupTaskChecklistScalarFieldEnum {
  CreatorId = 'creatorId',
  DateCreated = 'dateCreated',
  Id = 'id',
  Name = 'name',
  OrderIndex = 'orderIndex',
  Resolved = 'resolved',
  TaskId = 'taskId',
  Unresolved = 'unresolved',
}

export type ClickupTaskChecklistScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskChecklistScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskChecklistScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskChecklistScalarWhereInput>>
  creatorId?: InputMaybe<IntFilter>
  dateCreated?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  resolved?: InputMaybe<IntFilter>
  taskId?: InputMaybe<StringFilter>
  unresolved?: InputMaybe<IntFilter>
}

export type ClickupTaskChecklistSumAggregate = {
  __typename?: 'ClickupTaskChecklistSumAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  orderIndex?: Maybe<Scalars['Int']['output']>
  resolved?: Maybe<Scalars['Int']['output']>
  unresolved?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskChecklistUpdateInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskChecklistNestedInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  items?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutChecklistNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  resolved?: InputMaybe<IntFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutChecklistsNestedInput>
  unresolved?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistUpdateManyMutationInput = {
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  resolved?: InputMaybe<IntFieldUpdateOperationsInput>
  unresolved?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistUpdateManyWithWhereWithoutCreatorInput = {
  data: ClickupTaskChecklistUpdateManyMutationInput
  where: ClickupTaskChecklistScalarWhereInput
}

export type ClickupTaskChecklistUpdateManyWithWhereWithoutTaskInput = {
  data: ClickupTaskChecklistUpdateManyMutationInput
  where: ClickupTaskChecklistScalarWhereInput
}

export type ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskChecklistCreateManyCreatorInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskChecklistScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskChecklistUpdateWithWhereUniqueWithoutCreatorInput>>
  updateMany?: InputMaybe<Array<ClickupTaskChecklistUpdateManyWithWhereWithoutCreatorInput>>
  upsert?: InputMaybe<Array<ClickupTaskChecklistUpsertWithWhereUniqueWithoutCreatorInput>>
}

export type ClickupTaskChecklistUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskChecklistCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskChecklistCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskChecklistCreateManyTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskChecklistScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskChecklistWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskChecklistUpdateWithWhereUniqueWithoutTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskChecklistUpdateManyWithWhereWithoutTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskChecklistUpsertWithWhereUniqueWithoutTaskInput>>
}

export type ClickupTaskChecklistUpdateOneWithoutItemsNestedInput = {
  connect?: InputMaybe<ClickupTaskChecklistWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskChecklistCreateOrConnectWithoutItemsInput>
  create?: InputMaybe<ClickupTaskChecklistCreateWithoutItemsInput>
  delete?: InputMaybe<ClickupTaskChecklistWhereInput>
  disconnect?: InputMaybe<ClickupTaskChecklistWhereInput>
  update?: InputMaybe<ClickupTaskChecklistUpdateToOneWithWhereWithoutItemsInput>
  upsert?: InputMaybe<ClickupTaskChecklistUpsertWithoutItemsInput>
}

export type ClickupTaskChecklistUpdateToOneWithWhereWithoutItemsInput = {
  data: ClickupTaskChecklistUpdateWithoutItemsInput
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupTaskChecklistUpdateWithWhereUniqueWithoutCreatorInput = {
  data: ClickupTaskChecklistUpdateWithoutCreatorInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type ClickupTaskChecklistUpdateWithWhereUniqueWithoutTaskInput = {
  data: ClickupTaskChecklistUpdateWithoutTaskInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type ClickupTaskChecklistUpdateWithoutCreatorInput = {
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  items?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutChecklistNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  resolved?: InputMaybe<IntFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutChecklistsNestedInput>
  unresolved?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistUpdateWithoutItemsInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskChecklistNestedInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  resolved?: InputMaybe<IntFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutChecklistsNestedInput>
  unresolved?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistUpdateWithoutTaskInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskChecklistNestedInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  items?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutChecklistNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>
  resolved?: InputMaybe<IntFieldUpdateOperationsInput>
  unresolved?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ClickupTaskChecklistUpsertWithWhereUniqueWithoutCreatorInput = {
  create: ClickupTaskChecklistCreateWithoutCreatorInput
  update: ClickupTaskChecklistUpdateWithoutCreatorInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type ClickupTaskChecklistUpsertWithWhereUniqueWithoutTaskInput = {
  create: ClickupTaskChecklistCreateWithoutTaskInput
  update: ClickupTaskChecklistUpdateWithoutTaskInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type ClickupTaskChecklistUpsertWithoutItemsInput = {
  create: ClickupTaskChecklistCreateWithoutItemsInput
  update: ClickupTaskChecklistUpdateWithoutItemsInput
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupTaskChecklistWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskChecklistWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskChecklistWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskChecklistWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  dateCreated?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  items?: InputMaybe<ClickupTaskChecklistItemListRelationFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  resolved?: InputMaybe<IntFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  unresolved?: InputMaybe<IntFilter>
}

export type ClickupTaskChecklistWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskChecklistWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskChecklistWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskChecklistWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  dateCreated?: InputMaybe<StringFilter>
  id?: InputMaybe<Scalars['String']['input']>
  items?: InputMaybe<ClickupTaskChecklistItemListRelationFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<IntFilter>
  resolved?: InputMaybe<IntFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  unresolved?: InputMaybe<IntFilter>
}

export type ClickupTaskCount = {
  __typename?: 'ClickupTaskCount'
  assignees: Scalars['Int']['output']
  attachments: Scalars['Int']['output']
  checklists: Scalars['Int']['output']
  clickupTaskCustomField: Scalars['Int']['output']
  clockifyTimeEntries: Scalars['Int']['output']
  dependentTasks: Scalars['Int']['output']
  dueDates: Scalars['Int']['output']
  folder: Scalars['Int']['output']
  list: Scalars['Int']['output']
  locationHistory: Scalars['Int']['output']
  project: Scalars['Int']['output']
  status: Scalars['Int']['output']
  tags: Scalars['Int']['output']
  taskDependencies: Scalars['Int']['output']
  taskPeriodData: Scalars['Int']['output']
  timeEstimates: Scalars['Int']['output']
  watchers: Scalars['Int']['output']
}

export type ClickupTaskCountAssigneesArgs = {
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type ClickupTaskCountAttachmentsArgs = {
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type ClickupTaskCountChecklistsArgs = {
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupTaskCountClickupTaskCustomFieldArgs = {
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type ClickupTaskCountClockifyTimeEntriesArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClickupTaskCountDependentTasksArgs = {
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type ClickupTaskCountDueDatesArgs = {
  where?: InputMaybe<ClickupTaskDueDateWhereInput>
}

export type ClickupTaskCountFolderArgs = {
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type ClickupTaskCountListArgs = {
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type ClickupTaskCountLocationHistoryArgs = {
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type ClickupTaskCountProjectArgs = {
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type ClickupTaskCountStatusArgs = {
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type ClickupTaskCountTagsArgs = {
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type ClickupTaskCountTaskDependenciesArgs = {
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type ClickupTaskCountTaskPeriodDataArgs = {
  where?: InputMaybe<TaskPeriodDataWhereInput>
}

export type ClickupTaskCountTimeEstimatesArgs = {
  where?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
}

export type ClickupTaskCountWatchersArgs = {
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type ClickupTaskCountAggregate = {
  __typename?: 'ClickupTaskCountAggregate'
  _all: Scalars['Int']['output']
  archived: Scalars['Int']['output']
  clickupClockifyProjectId: Scalars['Int']['output']
  creatorId: Scalars['Int']['output']
  customId: Scalars['Int']['output']
  dateClosed: Scalars['Int']['output']
  dateCreated: Scalars['Int']['output']
  dateDone: Scalars['Int']['output']
  dateUpdated: Scalars['Int']['output']
  description: Scalars['Int']['output']
  id: Scalars['Int']['output']
  linkedTasks: Scalars['Int']['output']
  name: Scalars['Int']['output']
  orderIndex: Scalars['Int']['output']
  parent: Scalars['Int']['output']
  permissionLevel: Scalars['Int']['output']
  points: Scalars['Int']['output']
  priorityId: Scalars['Int']['output']
  sharing: Scalars['Int']['output']
  spaceId: Scalars['Int']['output']
  startDate: Scalars['Int']['output']
  teamId: Scalars['Int']['output']
  textContent: Scalars['Int']['output']
  timeSpent: Scalars['Int']['output']
  url: Scalars['Int']['output']
}

export type ClickupTaskCreateInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateManyClickupClockifyProjectInput = {
  archived: Scalars['Boolean']['input']
  creatorId: Scalars['Int']['input']
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priorityId?: InputMaybe<Scalars['String']['input']>
  sharing: Scalars['JSON']['input']
  spaceId: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['String']['input']>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
}

export type ClickupTaskCreateManyClickupClockifyProjectInputEnvelope = {
  data: Array<ClickupTaskCreateManyClickupClockifyProjectInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskCreateManyCreatorInput = {
  archived: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priorityId?: InputMaybe<Scalars['String']['input']>
  sharing: Scalars['JSON']['input']
  spaceId: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['String']['input']>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
}

export type ClickupTaskCreateManyCreatorInputEnvelope = {
  data: Array<ClickupTaskCreateManyCreatorInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskCreateManyInput = {
  archived: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  creatorId: Scalars['Int']['input']
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priorityId?: InputMaybe<Scalars['String']['input']>
  sharing: Scalars['JSON']['input']
  spaceId: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['String']['input']>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
}

export type ClickupTaskCreateManyPriorityInput = {
  archived: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  creatorId: Scalars['Int']['input']
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  sharing: Scalars['JSON']['input']
  spaceId: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['String']['input']>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
}

export type ClickupTaskCreateManyPriorityInputEnvelope = {
  data: Array<ClickupTaskCreateManyPriorityInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskCreateManySpaceInput = {
  archived: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  creatorId: Scalars['Int']['input']
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priorityId?: InputMaybe<Scalars['String']['input']>
  sharing: Scalars['JSON']['input']
  startDate?: InputMaybe<Scalars['String']['input']>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
}

export type ClickupTaskCreateManySpaceInputEnvelope = {
  data: Array<ClickupTaskCreateManySpaceInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskCreateNestedManyWithoutClickupClockifyProjectInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutClickupClockifyProjectInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutClickupClockifyProjectInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyClickupClockifyProjectInputEnvelope>
}

export type ClickupTaskCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyCreatorInputEnvelope>
}

export type ClickupTaskCreateNestedManyWithoutPriorityInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutPriorityInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutPriorityInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyPriorityInputEnvelope>
}

export type ClickupTaskCreateNestedManyWithoutSpaceInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutSpaceInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutSpaceInput>>
  createMany?: InputMaybe<ClickupTaskCreateManySpaceInputEnvelope>
}

export type ClickupTaskCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutTagsInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutTagsInput>>
}

export type ClickupTaskCreateNestedOneWithoutAssigneesInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutAssigneesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutAssigneesInput>
}

export type ClickupTaskCreateNestedOneWithoutAttachmentsInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutAttachmentsInput>
  create?: InputMaybe<ClickupTaskCreateWithoutAttachmentsInput>
}

export type ClickupTaskCreateNestedOneWithoutChecklistsInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutChecklistsInput>
  create?: InputMaybe<ClickupTaskCreateWithoutChecklistsInput>
}

export type ClickupTaskCreateNestedOneWithoutClickupTaskCustomFieldInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTaskCustomFieldInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTaskCustomFieldInput>
}

export type ClickupTaskCreateNestedOneWithoutClockifyTimeEntriesInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClockifyTimeEntriesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClockifyTimeEntriesInput>
}

export type ClickupTaskCreateNestedOneWithoutDependentTasksInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutDependentTasksInput>
  create?: InputMaybe<ClickupTaskCreateWithoutDependentTasksInput>
}

export type ClickupTaskCreateNestedOneWithoutDueDatesInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutDueDatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutDueDatesInput>
}

export type ClickupTaskCreateNestedOneWithoutFolderInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutFolderInput>
  create?: InputMaybe<ClickupTaskCreateWithoutFolderInput>
}

export type ClickupTaskCreateNestedOneWithoutListInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutListInput>
  create?: InputMaybe<ClickupTaskCreateWithoutListInput>
}

export type ClickupTaskCreateNestedOneWithoutLocationHistoryInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutLocationHistoryInput>
  create?: InputMaybe<ClickupTaskCreateWithoutLocationHistoryInput>
}

export type ClickupTaskCreateNestedOneWithoutProjectInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutProjectInput>
  create?: InputMaybe<ClickupTaskCreateWithoutProjectInput>
}

export type ClickupTaskCreateNestedOneWithoutStatusInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutStatusInput>
  create?: InputMaybe<ClickupTaskCreateWithoutStatusInput>
}

export type ClickupTaskCreateNestedOneWithoutTaskDependenciesInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutTaskDependenciesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutTaskDependenciesInput>
}

export type ClickupTaskCreateNestedOneWithoutTaskPeriodDataInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutTaskPeriodDataInput>
  create?: InputMaybe<ClickupTaskCreateWithoutTaskPeriodDataInput>
}

export type ClickupTaskCreateNestedOneWithoutTimeEstimatesInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutTimeEstimatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutTimeEstimatesInput>
}

export type ClickupTaskCreateNestedOneWithoutWatchersInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutWatchersInput>
  create?: InputMaybe<ClickupTaskCreateWithoutWatchersInput>
}

export type ClickupTaskCreateOrConnectWithoutAssigneesInput = {
  create: ClickupTaskCreateWithoutAssigneesInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutAttachmentsInput = {
  create: ClickupTaskCreateWithoutAttachmentsInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutChecklistsInput = {
  create: ClickupTaskCreateWithoutChecklistsInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutClickupClockifyProjectInput = {
  create: ClickupTaskCreateWithoutClickupClockifyProjectInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutClickupTaskCustomFieldInput = {
  create: ClickupTaskCreateWithoutClickupTaskCustomFieldInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutClockifyTimeEntriesInput = {
  create: ClickupTaskCreateWithoutClockifyTimeEntriesInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutCreatorInput = {
  create: ClickupTaskCreateWithoutCreatorInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutDependentTasksInput = {
  create: ClickupTaskCreateWithoutDependentTasksInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutDueDatesInput = {
  create: ClickupTaskCreateWithoutDueDatesInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutFolderInput = {
  create: ClickupTaskCreateWithoutFolderInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutListInput = {
  create: ClickupTaskCreateWithoutListInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutLocationHistoryInput = {
  create: ClickupTaskCreateWithoutLocationHistoryInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutPriorityInput = {
  create: ClickupTaskCreateWithoutPriorityInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutProjectInput = {
  create: ClickupTaskCreateWithoutProjectInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutSpaceInput = {
  create: ClickupTaskCreateWithoutSpaceInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutStatusInput = {
  create: ClickupTaskCreateWithoutStatusInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutTagsInput = {
  create: ClickupTaskCreateWithoutTagsInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutTaskDependenciesInput = {
  create: ClickupTaskCreateWithoutTaskDependenciesInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutTaskPeriodDataInput = {
  create: ClickupTaskCreateWithoutTaskPeriodDataInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutTimeEstimatesInput = {
  create: ClickupTaskCreateWithoutTimeEstimatesInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateOrConnectWithoutWatchersInput = {
  create: ClickupTaskCreateWithoutWatchersInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskCreateWithoutAssigneesInput = {
  archived: Scalars['Boolean']['input']
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutAttachmentsInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutChecklistsInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutClickupClockifyProjectInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutClickupTaskCustomFieldInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutClockifyTimeEntriesInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutCreatorInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutDependentTasksInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutDueDatesInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutFolderInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutListInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutLocationHistoryInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutPriorityInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutProjectInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutSpaceInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutStatusInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutTagsInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutTaskDependenciesInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutTaskPeriodDataInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutTimeEstimatesInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
  watchers?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput>
}

export type ClickupTaskCreateWithoutWatchersInput = {
  archived: Scalars['Boolean']['input']
  assignees?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput>
  attachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutTaskInput>
  checklists?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutTaskInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClickupTasksInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput>
  creator: ClickupUserCreateNestedOneWithoutCreatedTasksInput
  customId?: InputMaybe<Scalars['String']['input']>
  dateClosed?: InputMaybe<Scalars['String']['input']>
  dateCreated: Scalars['String']['input']
  dateDone?: InputMaybe<Scalars['String']['input']>
  dateUpdated: Scalars['String']['input']
  dependentTasks?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput>
  description?: InputMaybe<Scalars['String']['input']>
  dueDates?: InputMaybe<ClickupTaskDueDateCreateNestedManyWithoutTaskInput>
  folder?: InputMaybe<ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput>
  id: Scalars['String']['input']
  linkedTasks: Scalars['JSON']['input']
  list?: InputMaybe<ClickupTaskListCreateNestedManyWithoutClickupTaskInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput>
  name: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel: Scalars['String']['input']
  points?: InputMaybe<Scalars['BigInt']['input']>
  priority?: InputMaybe<ClickupTaskPriorityCreateNestedOneWithoutTasksInput>
  project?: InputMaybe<ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput>
  sharing: Scalars['JSON']['input']
  space: ClickupTaskSpaceCreateNestedOneWithoutTasksInput
  startDate?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput>
  tags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutTasksInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutTaskInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataCreateNestedManyWithoutClickupTaskInput>
  teamId: Scalars['String']['input']
  textContent?: InputMaybe<Scalars['String']['input']>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput>
  timeSpent?: InputMaybe<Scalars['BigInt']['input']>
  url: Scalars['String']['input']
}

export type ClickupTaskCustomField = {
  __typename?: 'ClickupTaskCustomField'
  clickupCustomField: ClickupCustomField
  clickupCustomFieldId: Scalars['String']['output']
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
}

export type ClickupTaskCustomFieldClickupTaskIdClickupCustomFieldIdCompoundUniqueInput = {
  clickupCustomFieldId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskCustomFieldCountAggregate = {
  __typename?: 'ClickupTaskCustomFieldCountAggregate'
  _all: Scalars['Int']['output']
  clickupCustomFieldId: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
}

export type ClickupTaskCustomFieldCreateInput = {
  clickupCustomField: ClickupCustomFieldCreateNestedOneWithoutClickupTaskCustomFieldInput
  clickupTask: ClickupTaskCreateNestedOneWithoutClickupTaskCustomFieldInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskCustomFieldCreateManyClickupCustomFieldInput = {
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskCustomFieldCreateManyClickupCustomFieldInputEnvelope = {
  data: Array<ClickupTaskCustomFieldCreateManyClickupCustomFieldInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskCustomFieldCreateManyClickupTaskInput = {
  clickupCustomFieldId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskCustomFieldCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTaskCustomFieldCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskCustomFieldCreateManyInput = {
  clickupCustomFieldId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskCustomFieldCreateNestedManyWithoutClickupCustomFieldInput = {
  connect?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCustomFieldCreateOrConnectWithoutClickupCustomFieldInput>>
  create?: InputMaybe<Array<ClickupTaskCustomFieldCreateWithoutClickupCustomFieldInput>>
  createMany?: InputMaybe<ClickupTaskCustomFieldCreateManyClickupCustomFieldInputEnvelope>
}

export type ClickupTaskCustomFieldCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCustomFieldCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskCustomFieldCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskCustomFieldCreateManyClickupTaskInputEnvelope>
}

export type ClickupTaskCustomFieldCreateOrConnectWithoutClickupCustomFieldInput = {
  create: ClickupTaskCustomFieldCreateWithoutClickupCustomFieldInput
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type ClickupTaskCustomFieldCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTaskCustomFieldCreateWithoutClickupTaskInput
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type ClickupTaskCustomFieldCreateWithoutClickupCustomFieldInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutClickupTaskCustomFieldInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskCustomFieldCreateWithoutClickupTaskInput = {
  clickupCustomField: ClickupCustomFieldCreateNestedOneWithoutClickupTaskCustomFieldInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskCustomFieldListRelationFilter = {
  every?: InputMaybe<ClickupTaskCustomFieldWhereInput>
  none?: InputMaybe<ClickupTaskCustomFieldWhereInput>
  some?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type ClickupTaskCustomFieldMaxAggregate = {
  __typename?: 'ClickupTaskCustomFieldMaxAggregate'
  clickupCustomFieldId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskCustomFieldMinAggregate = {
  __typename?: 'ClickupTaskCustomFieldMinAggregate'
  clickupCustomFieldId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskCustomFieldOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskCustomFieldOrderByWithRelationInput = {
  clickupCustomField?: InputMaybe<ClickupCustomFieldOrderByWithRelationInput>
  clickupCustomFieldId?: InputMaybe<SortOrder>
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
}

export enum ClickupTaskCustomFieldScalarFieldEnum {
  ClickupCustomFieldId = 'clickupCustomFieldId',
  ClickupTaskId = 'clickupTaskId',
  CreatedAt = 'createdAt',
}

export type ClickupTaskCustomFieldScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskCustomFieldScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskCustomFieldScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskCustomFieldScalarWhereInput>>
  clickupCustomFieldId?: InputMaybe<StringFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskCustomFieldUpdateInput = {
  clickupCustomField?: InputMaybe<ClickupCustomFieldUpdateOneRequiredWithoutClickupTaskCustomFieldNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutClickupTaskCustomFieldNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskCustomFieldUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskCustomFieldUpdateManyWithWhereWithoutClickupCustomFieldInput = {
  data: ClickupTaskCustomFieldUpdateManyMutationInput
  where: ClickupTaskCustomFieldScalarWhereInput
}

export type ClickupTaskCustomFieldUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTaskCustomFieldUpdateManyMutationInput
  where: ClickupTaskCustomFieldScalarWhereInput
}

export type ClickupTaskCustomFieldUpdateManyWithoutClickupCustomFieldNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCustomFieldCreateOrConnectWithoutClickupCustomFieldInput>>
  create?: InputMaybe<Array<ClickupTaskCustomFieldCreateWithoutClickupCustomFieldInput>>
  createMany?: InputMaybe<ClickupTaskCustomFieldCreateManyClickupCustomFieldInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskCustomFieldScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskCustomFieldUpdateWithWhereUniqueWithoutClickupCustomFieldInput>>
  updateMany?: InputMaybe<Array<ClickupTaskCustomFieldUpdateManyWithWhereWithoutClickupCustomFieldInput>>
  upsert?: InputMaybe<Array<ClickupTaskCustomFieldUpsertWithWhereUniqueWithoutClickupCustomFieldInput>>
}

export type ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCustomFieldCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskCustomFieldCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskCustomFieldCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskCustomFieldScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskCustomFieldWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskCustomFieldUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskCustomFieldUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskCustomFieldUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTaskCustomFieldUpdateWithWhereUniqueWithoutClickupCustomFieldInput = {
  data: ClickupTaskCustomFieldUpdateWithoutClickupCustomFieldInput
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type ClickupTaskCustomFieldUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTaskCustomFieldUpdateWithoutClickupTaskInput
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type ClickupTaskCustomFieldUpdateWithoutClickupCustomFieldInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutClickupTaskCustomFieldNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskCustomFieldUpdateWithoutClickupTaskInput = {
  clickupCustomField?: InputMaybe<ClickupCustomFieldUpdateOneRequiredWithoutClickupTaskCustomFieldNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskCustomFieldUpsertWithWhereUniqueWithoutClickupCustomFieldInput = {
  create: ClickupTaskCustomFieldCreateWithoutClickupCustomFieldInput
  update: ClickupTaskCustomFieldUpdateWithoutClickupCustomFieldInput
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type ClickupTaskCustomFieldUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTaskCustomFieldCreateWithoutClickupTaskInput
  update: ClickupTaskCustomFieldUpdateWithoutClickupTaskInput
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type ClickupTaskCustomFieldWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskCustomFieldWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskCustomFieldWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskCustomFieldWhereInput>>
  clickupCustomField?: InputMaybe<ClickupCustomFieldRelationFilter>
  clickupCustomFieldId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskCustomFieldWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskCustomFieldWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskCustomFieldWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskCustomFieldWhereInput>>
  clickupCustomField?: InputMaybe<ClickupCustomFieldRelationFilter>
  clickupCustomFieldId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupTaskId_clickupCustomFieldId?: InputMaybe<ClickupTaskCustomFieldClickupTaskIdClickupCustomFieldIdCompoundUniqueInput>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskDependency = {
  __typename?: 'ClickupTaskDependency'
  creator: ClickupUser
  creatorId: Scalars['Int']['output']
  dateCreated: Scalars['String']['output']
  dependsOnTask: ClickupTask
  dependsOnTaskId: Scalars['String']['output']
  id: Scalars['Int']['output']
  task: ClickupTask
  taskId: Scalars['String']['output']
  type: Scalars['Int']['output']
  workspaceId: Scalars['String']['output']
}

export type ClickupTaskDependencyAvgAggregate = {
  __typename?: 'ClickupTaskDependencyAvgAggregate'
  creatorId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  type?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskDependencyCountAggregate = {
  __typename?: 'ClickupTaskDependencyCountAggregate'
  _all: Scalars['Int']['output']
  creatorId: Scalars['Int']['output']
  dateCreated: Scalars['Int']['output']
  dependsOnTaskId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
  type: Scalars['Int']['output']
  workspaceId: Scalars['Int']['output']
}

export type ClickupTaskDependencyCreateInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskDependencyInput
  dateCreated: Scalars['String']['input']
  dependsOnTask: ClickupTaskCreateNestedOneWithoutDependentTasksInput
  task: ClickupTaskCreateNestedOneWithoutTaskDependenciesInput
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyCreateManyCreatorInput = {
  dateCreated: Scalars['String']['input']
  dependsOnTaskId: Scalars['String']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  taskId: Scalars['String']['input']
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyCreateManyCreatorInputEnvelope = {
  data: Array<ClickupTaskDependencyCreateManyCreatorInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskDependencyCreateManyDependsOnTaskInput = {
  creatorId: Scalars['Int']['input']
  dateCreated: Scalars['String']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  taskId: Scalars['String']['input']
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyCreateManyDependsOnTaskInputEnvelope = {
  data: Array<ClickupTaskDependencyCreateManyDependsOnTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskDependencyCreateManyInput = {
  creatorId: Scalars['Int']['input']
  dateCreated: Scalars['String']['input']
  dependsOnTaskId: Scalars['String']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  taskId: Scalars['String']['input']
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyCreateManyTaskInput = {
  creatorId: Scalars['Int']['input']
  dateCreated: Scalars['String']['input']
  dependsOnTaskId: Scalars['String']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyCreateManyTaskInputEnvelope = {
  data: Array<ClickupTaskDependencyCreateManyTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskDependencyCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDependencyCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskDependencyCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskDependencyCreateManyCreatorInputEnvelope>
}

export type ClickupTaskDependencyCreateNestedManyWithoutDependsOnTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDependencyCreateOrConnectWithoutDependsOnTaskInput>>
  create?: InputMaybe<Array<ClickupTaskDependencyCreateWithoutDependsOnTaskInput>>
  createMany?: InputMaybe<ClickupTaskDependencyCreateManyDependsOnTaskInputEnvelope>
}

export type ClickupTaskDependencyCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDependencyCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskDependencyCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskDependencyCreateManyTaskInputEnvelope>
}

export type ClickupTaskDependencyCreateOrConnectWithoutCreatorInput = {
  create: ClickupTaskDependencyCreateWithoutCreatorInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyCreateOrConnectWithoutDependsOnTaskInput = {
  create: ClickupTaskDependencyCreateWithoutDependsOnTaskInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyCreateOrConnectWithoutTaskInput = {
  create: ClickupTaskDependencyCreateWithoutTaskInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyCreateWithoutCreatorInput = {
  dateCreated: Scalars['String']['input']
  dependsOnTask: ClickupTaskCreateNestedOneWithoutDependentTasksInput
  task: ClickupTaskCreateNestedOneWithoutTaskDependenciesInput
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyCreateWithoutDependsOnTaskInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskDependencyInput
  dateCreated: Scalars['String']['input']
  task: ClickupTaskCreateNestedOneWithoutTaskDependenciesInput
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyCreateWithoutTaskInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskDependencyInput
  dateCreated: Scalars['String']['input']
  dependsOnTask: ClickupTaskCreateNestedOneWithoutDependentTasksInput
  type: Scalars['Int']['input']
  workspaceId: Scalars['String']['input']
}

export type ClickupTaskDependencyListRelationFilter = {
  every?: InputMaybe<ClickupTaskDependencyWhereInput>
  none?: InputMaybe<ClickupTaskDependencyWhereInput>
  some?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type ClickupTaskDependencyMaxAggregate = {
  __typename?: 'ClickupTaskDependencyMaxAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  dependsOnTaskId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['Int']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskDependencyMinAggregate = {
  __typename?: 'ClickupTaskDependencyMinAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  dependsOnTaskId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['Int']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskDependencyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskDependencyOrderByWithRelationInput = {
  creator?: InputMaybe<ClickupUserOrderByWithRelationInput>
  creatorId?: InputMaybe<SortOrder>
  dateCreated?: InputMaybe<SortOrder>
  dependsOnTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  dependsOnTaskId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  task?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  taskId?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  workspaceId?: InputMaybe<SortOrder>
}

export enum ClickupTaskDependencyScalarFieldEnum {
  CreatorId = 'creatorId',
  DateCreated = 'dateCreated',
  DependsOnTaskId = 'dependsOnTaskId',
  Id = 'id',
  TaskId = 'taskId',
  Type = 'type',
  WorkspaceId = 'workspaceId',
}

export type ClickupTaskDependencyScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskDependencyScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskDependencyScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskDependencyScalarWhereInput>>
  creatorId?: InputMaybe<IntFilter>
  dateCreated?: InputMaybe<StringFilter>
  dependsOnTaskId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  taskId?: InputMaybe<StringFilter>
  type?: InputMaybe<IntFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClickupTaskDependencySumAggregate = {
  __typename?: 'ClickupTaskDependencySumAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskDependencyUpdateInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskDependencyNestedInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependsOnTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutDependentTasksNestedInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutTaskDependenciesNestedInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskDependencyUpdateManyMutationInput = {
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskDependencyUpdateManyWithWhereWithoutCreatorInput = {
  data: ClickupTaskDependencyUpdateManyMutationInput
  where: ClickupTaskDependencyScalarWhereInput
}

export type ClickupTaskDependencyUpdateManyWithWhereWithoutDependsOnTaskInput = {
  data: ClickupTaskDependencyUpdateManyMutationInput
  where: ClickupTaskDependencyScalarWhereInput
}

export type ClickupTaskDependencyUpdateManyWithWhereWithoutTaskInput = {
  data: ClickupTaskDependencyUpdateManyMutationInput
  where: ClickupTaskDependencyScalarWhereInput
}

export type ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDependencyCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskDependencyCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskDependencyCreateManyCreatorInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskDependencyScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskDependencyUpdateWithWhereUniqueWithoutCreatorInput>>
  updateMany?: InputMaybe<Array<ClickupTaskDependencyUpdateManyWithWhereWithoutCreatorInput>>
  upsert?: InputMaybe<Array<ClickupTaskDependencyUpsertWithWhereUniqueWithoutCreatorInput>>
}

export type ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDependencyCreateOrConnectWithoutDependsOnTaskInput>>
  create?: InputMaybe<Array<ClickupTaskDependencyCreateWithoutDependsOnTaskInput>>
  createMany?: InputMaybe<ClickupTaskDependencyCreateManyDependsOnTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskDependencyScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskDependencyUpdateWithWhereUniqueWithoutDependsOnTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskDependencyUpdateManyWithWhereWithoutDependsOnTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskDependencyUpsertWithWhereUniqueWithoutDependsOnTaskInput>>
}

export type ClickupTaskDependencyUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDependencyCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskDependencyCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskDependencyCreateManyTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskDependencyScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskDependencyWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskDependencyUpdateWithWhereUniqueWithoutTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskDependencyUpdateManyWithWhereWithoutTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskDependencyUpsertWithWhereUniqueWithoutTaskInput>>
}

export type ClickupTaskDependencyUpdateWithWhereUniqueWithoutCreatorInput = {
  data: ClickupTaskDependencyUpdateWithoutCreatorInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyUpdateWithWhereUniqueWithoutDependsOnTaskInput = {
  data: ClickupTaskDependencyUpdateWithoutDependsOnTaskInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyUpdateWithWhereUniqueWithoutTaskInput = {
  data: ClickupTaskDependencyUpdateWithoutTaskInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyUpdateWithoutCreatorInput = {
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependsOnTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutDependentTasksNestedInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutTaskDependenciesNestedInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskDependencyUpdateWithoutDependsOnTaskInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskDependencyNestedInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutTaskDependenciesNestedInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskDependencyUpdateWithoutTaskInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskDependencyNestedInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependsOnTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutDependentTasksNestedInput>
  type?: InputMaybe<IntFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskDependencyUpsertWithWhereUniqueWithoutCreatorInput = {
  create: ClickupTaskDependencyCreateWithoutCreatorInput
  update: ClickupTaskDependencyUpdateWithoutCreatorInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyUpsertWithWhereUniqueWithoutDependsOnTaskInput = {
  create: ClickupTaskDependencyCreateWithoutDependsOnTaskInput
  update: ClickupTaskDependencyUpdateWithoutDependsOnTaskInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyUpsertWithWhereUniqueWithoutTaskInput = {
  create: ClickupTaskDependencyCreateWithoutTaskInput
  update: ClickupTaskDependencyUpdateWithoutTaskInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type ClickupTaskDependencyWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskDependencyWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskDependencyWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskDependencyWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  dateCreated?: InputMaybe<StringFilter>
  dependsOnTask?: InputMaybe<ClickupTaskRelationFilter>
  dependsOnTaskId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  type?: InputMaybe<IntFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClickupTaskDependencyWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskDependencyWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskDependencyWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskDependencyWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  dateCreated?: InputMaybe<StringFilter>
  dependsOnTask?: InputMaybe<ClickupTaskRelationFilter>
  dependsOnTaskId?: InputMaybe<StringFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  type?: InputMaybe<IntFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClickupTaskDueDate = {
  __typename?: 'ClickupTaskDueDate'
  createdAt: Scalars['DateTime']['output']
  dueDate: Scalars['BigInt']['output']
  id: Scalars['Int']['output']
  task: ClickupTask
  taskId: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ClickupTaskDueDateAvgAggregate = {
  __typename?: 'ClickupTaskDueDateAvgAggregate'
  dueDate?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskDueDateCountAggregate = {
  __typename?: 'ClickupTaskDueDateCountAggregate'
  _all: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  dueDate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ClickupTaskDueDateCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  task: ClickupTaskCreateNestedOneWithoutDueDatesInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskDueDateCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  taskId: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskDueDateCreateManyTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskDueDateCreateManyTaskInputEnvelope = {
  data: Array<ClickupTaskDueDateCreateManyTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskDueDateCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskDueDateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDueDateCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskDueDateCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskDueDateCreateManyTaskInputEnvelope>
}

export type ClickupTaskDueDateCreateOrConnectWithoutTaskInput = {
  create: ClickupTaskDueDateCreateWithoutTaskInput
  where: ClickupTaskDueDateWhereUniqueInput
}

export type ClickupTaskDueDateCreateWithoutTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  dueDate: Scalars['BigInt']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskDueDateListRelationFilter = {
  every?: InputMaybe<ClickupTaskDueDateWhereInput>
  none?: InputMaybe<ClickupTaskDueDateWhereInput>
  some?: InputMaybe<ClickupTaskDueDateWhereInput>
}

export type ClickupTaskDueDateMaxAggregate = {
  __typename?: 'ClickupTaskDueDateMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskDueDateMinAggregate = {
  __typename?: 'ClickupTaskDueDateMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskDueDateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskDueDateOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  dueDate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  task?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  taskId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClickupTaskDueDateScalarFieldEnum {
  CreatedAt = 'createdAt',
  DueDate = 'dueDate',
  Id = 'id',
  TaskId = 'taskId',
  UpdatedAt = 'updatedAt',
}

export type ClickupTaskDueDateScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskDueDateScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskDueDateScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskDueDateScalarWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  dueDate?: InputMaybe<BigIntFilter>
  id?: InputMaybe<IntFilter>
  taskId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskDueDateSumAggregate = {
  __typename?: 'ClickupTaskDueDateSumAggregate'
  dueDate?: Maybe<Scalars['BigInt']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskDueDateUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  dueDate?: InputMaybe<BigIntFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutDueDatesNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskDueDateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  dueDate?: InputMaybe<BigIntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskDueDateUpdateManyWithWhereWithoutTaskInput = {
  data: ClickupTaskDueDateUpdateManyMutationInput
  where: ClickupTaskDueDateScalarWhereInput
}

export type ClickupTaskDueDateUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskDueDateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskDueDateCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskDueDateCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskDueDateCreateManyTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskDueDateWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskDueDateScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskDueDateWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskDueDateWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskDueDateUpdateWithWhereUniqueWithoutTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskDueDateUpdateManyWithWhereWithoutTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskDueDateUpsertWithWhereUniqueWithoutTaskInput>>
}

export type ClickupTaskDueDateUpdateWithWhereUniqueWithoutTaskInput = {
  data: ClickupTaskDueDateUpdateWithoutTaskInput
  where: ClickupTaskDueDateWhereUniqueInput
}

export type ClickupTaskDueDateUpdateWithoutTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  dueDate?: InputMaybe<BigIntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskDueDateUpsertWithWhereUniqueWithoutTaskInput = {
  create: ClickupTaskDueDateCreateWithoutTaskInput
  update: ClickupTaskDueDateUpdateWithoutTaskInput
  where: ClickupTaskDueDateWhereUniqueInput
}

export type ClickupTaskDueDateWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskDueDateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskDueDateWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskDueDateWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  dueDate?: InputMaybe<BigIntFilter>
  id?: InputMaybe<IntFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskDueDateWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskDueDateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskDueDateWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskDueDateWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  dueDate?: InputMaybe<BigIntFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskFolder = {
  __typename?: 'ClickupTaskFolder'
  access: Scalars['Boolean']['output']
  clickupFolder: ClickupFolder
  clickupFolderId: Scalars['String']['output']
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
}

export type ClickupTaskFolderClickupTaskIdClickupFolderIdCompoundUniqueInput = {
  clickupFolderId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskFolderCountAggregate = {
  __typename?: 'ClickupTaskFolderCountAggregate'
  _all: Scalars['Int']['output']
  access: Scalars['Int']['output']
  clickupFolderId: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
}

export type ClickupTaskFolderCreateInput = {
  access: Scalars['Boolean']['input']
  clickupFolder: ClickupFolderCreateNestedOneWithoutClickupTaskFolderInput
  clickupTask: ClickupTaskCreateNestedOneWithoutFolderInput
}

export type ClickupTaskFolderCreateManyClickupFolderInput = {
  access: Scalars['Boolean']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskFolderCreateManyClickupFolderInputEnvelope = {
  data: Array<ClickupTaskFolderCreateManyClickupFolderInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskFolderCreateManyClickupTaskInput = {
  access: Scalars['Boolean']['input']
  clickupFolderId: Scalars['String']['input']
}

export type ClickupTaskFolderCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTaskFolderCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskFolderCreateManyInput = {
  access: Scalars['Boolean']['input']
  clickupFolderId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskFolderCreateNestedManyWithoutClickupFolderInput = {
  connect?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskFolderCreateOrConnectWithoutClickupFolderInput>>
  create?: InputMaybe<Array<ClickupTaskFolderCreateWithoutClickupFolderInput>>
  createMany?: InputMaybe<ClickupTaskFolderCreateManyClickupFolderInputEnvelope>
}

export type ClickupTaskFolderCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskFolderCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskFolderCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskFolderCreateManyClickupTaskInputEnvelope>
}

export type ClickupTaskFolderCreateOrConnectWithoutClickupFolderInput = {
  create: ClickupTaskFolderCreateWithoutClickupFolderInput
  where: ClickupTaskFolderWhereUniqueInput
}

export type ClickupTaskFolderCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTaskFolderCreateWithoutClickupTaskInput
  where: ClickupTaskFolderWhereUniqueInput
}

export type ClickupTaskFolderCreateWithoutClickupFolderInput = {
  access: Scalars['Boolean']['input']
  clickupTask: ClickupTaskCreateNestedOneWithoutFolderInput
}

export type ClickupTaskFolderCreateWithoutClickupTaskInput = {
  access: Scalars['Boolean']['input']
  clickupFolder: ClickupFolderCreateNestedOneWithoutClickupTaskFolderInput
}

export type ClickupTaskFolderListRelationFilter = {
  every?: InputMaybe<ClickupTaskFolderWhereInput>
  none?: InputMaybe<ClickupTaskFolderWhereInput>
  some?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type ClickupTaskFolderMaxAggregate = {
  __typename?: 'ClickupTaskFolderMaxAggregate'
  access?: Maybe<Scalars['Boolean']['output']>
  clickupFolderId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskFolderMinAggregate = {
  __typename?: 'ClickupTaskFolderMinAggregate'
  access?: Maybe<Scalars['Boolean']['output']>
  clickupFolderId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskFolderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskFolderOrderByWithRelationInput = {
  access?: InputMaybe<SortOrder>
  clickupFolder?: InputMaybe<ClickupFolderOrderByWithRelationInput>
  clickupFolderId?: InputMaybe<SortOrder>
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
}

export enum ClickupTaskFolderScalarFieldEnum {
  Access = 'access',
  ClickupFolderId = 'clickupFolderId',
  ClickupTaskId = 'clickupTaskId',
}

export type ClickupTaskFolderScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskFolderScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskFolderScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskFolderScalarWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupFolderId?: InputMaybe<StringFilter>
  clickupTaskId?: InputMaybe<StringFilter>
}

export type ClickupTaskFolderUpdateInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupFolder?: InputMaybe<ClickupFolderUpdateOneRequiredWithoutClickupTaskFolderNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutFolderNestedInput>
}

export type ClickupTaskFolderUpdateManyMutationInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupTaskFolderUpdateManyWithWhereWithoutClickupFolderInput = {
  data: ClickupTaskFolderUpdateManyMutationInput
  where: ClickupTaskFolderScalarWhereInput
}

export type ClickupTaskFolderUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTaskFolderUpdateManyMutationInput
  where: ClickupTaskFolderScalarWhereInput
}

export type ClickupTaskFolderUpdateManyWithoutClickupFolderNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskFolderCreateOrConnectWithoutClickupFolderInput>>
  create?: InputMaybe<Array<ClickupTaskFolderCreateWithoutClickupFolderInput>>
  createMany?: InputMaybe<ClickupTaskFolderCreateManyClickupFolderInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskFolderScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskFolderUpdateWithWhereUniqueWithoutClickupFolderInput>>
  updateMany?: InputMaybe<Array<ClickupTaskFolderUpdateManyWithWhereWithoutClickupFolderInput>>
  upsert?: InputMaybe<Array<ClickupTaskFolderUpsertWithWhereUniqueWithoutClickupFolderInput>>
}

export type ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskFolderCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskFolderCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskFolderCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskFolderScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskFolderWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskFolderUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskFolderUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskFolderUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTaskFolderUpdateWithWhereUniqueWithoutClickupFolderInput = {
  data: ClickupTaskFolderUpdateWithoutClickupFolderInput
  where: ClickupTaskFolderWhereUniqueInput
}

export type ClickupTaskFolderUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTaskFolderUpdateWithoutClickupTaskInput
  where: ClickupTaskFolderWhereUniqueInput
}

export type ClickupTaskFolderUpdateWithoutClickupFolderInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutFolderNestedInput>
}

export type ClickupTaskFolderUpdateWithoutClickupTaskInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupFolder?: InputMaybe<ClickupFolderUpdateOneRequiredWithoutClickupTaskFolderNestedInput>
}

export type ClickupTaskFolderUpsertWithWhereUniqueWithoutClickupFolderInput = {
  create: ClickupTaskFolderCreateWithoutClickupFolderInput
  update: ClickupTaskFolderUpdateWithoutClickupFolderInput
  where: ClickupTaskFolderWhereUniqueInput
}

export type ClickupTaskFolderUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTaskFolderCreateWithoutClickupTaskInput
  update: ClickupTaskFolderUpdateWithoutClickupTaskInput
  where: ClickupTaskFolderWhereUniqueInput
}

export type ClickupTaskFolderWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskFolderWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskFolderWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskFolderWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupFolder?: InputMaybe<ClickupFolderRelationFilter>
  clickupFolderId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
}

export type ClickupTaskFolderWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskFolderWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskFolderWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskFolderWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupFolder?: InputMaybe<ClickupFolderRelationFilter>
  clickupFolderId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupTaskId_clickupFolderId?: InputMaybe<ClickupTaskFolderClickupTaskIdClickupFolderIdCompoundUniqueInput>
}

export type ClickupTaskList = {
  __typename?: 'ClickupTaskList'
  access: Scalars['Boolean']['output']
  clickupList: ClickupList
  clickupListId: Scalars['String']['output']
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
}

export type ClickupTaskListClickupTaskIdClickupListIdCompoundUniqueInput = {
  clickupListId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskListCountAggregate = {
  __typename?: 'ClickupTaskListCountAggregate'
  _all: Scalars['Int']['output']
  access: Scalars['Int']['output']
  clickupListId: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
}

export type ClickupTaskListCreateInput = {
  access: Scalars['Boolean']['input']
  clickupList: ClickupListCreateNestedOneWithoutClickupTaskListInput
  clickupTask: ClickupTaskCreateNestedOneWithoutListInput
}

export type ClickupTaskListCreateManyClickupListInput = {
  access: Scalars['Boolean']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskListCreateManyClickupListInputEnvelope = {
  data: Array<ClickupTaskListCreateManyClickupListInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskListCreateManyClickupTaskInput = {
  access: Scalars['Boolean']['input']
  clickupListId: Scalars['String']['input']
}

export type ClickupTaskListCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTaskListCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskListCreateManyInput = {
  access: Scalars['Boolean']['input']
  clickupListId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskListCreateNestedManyWithoutClickupListInput = {
  connect?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskListCreateOrConnectWithoutClickupListInput>>
  create?: InputMaybe<Array<ClickupTaskListCreateWithoutClickupListInput>>
  createMany?: InputMaybe<ClickupTaskListCreateManyClickupListInputEnvelope>
}

export type ClickupTaskListCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskListCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskListCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskListCreateManyClickupTaskInputEnvelope>
}

export type ClickupTaskListCreateOrConnectWithoutClickupListInput = {
  create: ClickupTaskListCreateWithoutClickupListInput
  where: ClickupTaskListWhereUniqueInput
}

export type ClickupTaskListCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTaskListCreateWithoutClickupTaskInput
  where: ClickupTaskListWhereUniqueInput
}

export type ClickupTaskListCreateWithoutClickupListInput = {
  access: Scalars['Boolean']['input']
  clickupTask: ClickupTaskCreateNestedOneWithoutListInput
}

export type ClickupTaskListCreateWithoutClickupTaskInput = {
  access: Scalars['Boolean']['input']
  clickupList: ClickupListCreateNestedOneWithoutClickupTaskListInput
}

export type ClickupTaskListListRelationFilter = {
  every?: InputMaybe<ClickupTaskListWhereInput>
  none?: InputMaybe<ClickupTaskListWhereInput>
  some?: InputMaybe<ClickupTaskListWhereInput>
}

export type ClickupTaskListMaxAggregate = {
  __typename?: 'ClickupTaskListMaxAggregate'
  access?: Maybe<Scalars['Boolean']['output']>
  clickupListId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskListMinAggregate = {
  __typename?: 'ClickupTaskListMinAggregate'
  access?: Maybe<Scalars['Boolean']['output']>
  clickupListId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskListOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskListOrderByWithRelationInput = {
  access?: InputMaybe<SortOrder>
  clickupList?: InputMaybe<ClickupListOrderByWithRelationInput>
  clickupListId?: InputMaybe<SortOrder>
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
}

export type ClickupTaskListRelationFilter = {
  every?: InputMaybe<ClickupTaskWhereInput>
  none?: InputMaybe<ClickupTaskWhereInput>
  some?: InputMaybe<ClickupTaskWhereInput>
}

export enum ClickupTaskListScalarFieldEnum {
  Access = 'access',
  ClickupListId = 'clickupListId',
  ClickupTaskId = 'clickupTaskId',
}

export type ClickupTaskListScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskListScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskListScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskListScalarWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupListId?: InputMaybe<StringFilter>
  clickupTaskId?: InputMaybe<StringFilter>
}

export type ClickupTaskListUpdateInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupList?: InputMaybe<ClickupListUpdateOneRequiredWithoutClickupTaskListNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutListNestedInput>
}

export type ClickupTaskListUpdateManyMutationInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupTaskListUpdateManyWithWhereWithoutClickupListInput = {
  data: ClickupTaskListUpdateManyMutationInput
  where: ClickupTaskListScalarWhereInput
}

export type ClickupTaskListUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTaskListUpdateManyMutationInput
  where: ClickupTaskListScalarWhereInput
}

export type ClickupTaskListUpdateManyWithoutClickupListNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskListCreateOrConnectWithoutClickupListInput>>
  create?: InputMaybe<Array<ClickupTaskListCreateWithoutClickupListInput>>
  createMany?: InputMaybe<ClickupTaskListCreateManyClickupListInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskListScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskListUpdateWithWhereUniqueWithoutClickupListInput>>
  updateMany?: InputMaybe<Array<ClickupTaskListUpdateManyWithWhereWithoutClickupListInput>>
  upsert?: InputMaybe<Array<ClickupTaskListUpsertWithWhereUniqueWithoutClickupListInput>>
}

export type ClickupTaskListUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskListCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskListCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskListCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskListScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskListWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskListUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskListUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskListUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTaskListUpdateWithWhereUniqueWithoutClickupListInput = {
  data: ClickupTaskListUpdateWithoutClickupListInput
  where: ClickupTaskListWhereUniqueInput
}

export type ClickupTaskListUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTaskListUpdateWithoutClickupTaskInput
  where: ClickupTaskListWhereUniqueInput
}

export type ClickupTaskListUpdateWithoutClickupListInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutListNestedInput>
}

export type ClickupTaskListUpdateWithoutClickupTaskInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupList?: InputMaybe<ClickupListUpdateOneRequiredWithoutClickupTaskListNestedInput>
}

export type ClickupTaskListUpsertWithWhereUniqueWithoutClickupListInput = {
  create: ClickupTaskListCreateWithoutClickupListInput
  update: ClickupTaskListUpdateWithoutClickupListInput
  where: ClickupTaskListWhereUniqueInput
}

export type ClickupTaskListUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTaskListCreateWithoutClickupTaskInput
  update: ClickupTaskListUpdateWithoutClickupTaskInput
  where: ClickupTaskListWhereUniqueInput
}

export type ClickupTaskListWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskListWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskListWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskListWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupList?: InputMaybe<ClickupListRelationFilter>
  clickupListId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
}

export type ClickupTaskListWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskListWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskListWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskListWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupList?: InputMaybe<ClickupListRelationFilter>
  clickupListId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupTaskId_clickupListId?: InputMaybe<ClickupTaskListClickupTaskIdClickupListIdCompoundUniqueInput>
}

export type ClickupTaskLocationHistory = {
  __typename?: 'ClickupTaskLocationHistory'
  added: Scalars['Boolean']['output']
  clickupList: ClickupList
  clickupListId: Scalars['String']['output']
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ClickupTaskLocationHistoryAvgAggregate = {
  __typename?: 'ClickupTaskLocationHistoryAvgAggregate'
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskLocationHistoryCountAggregate = {
  __typename?: 'ClickupTaskLocationHistoryCountAggregate'
  _all: Scalars['Int']['output']
  added: Scalars['Int']['output']
  clickupListId: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ClickupTaskLocationHistoryCreateInput = {
  added: Scalars['Boolean']['input']
  clickupList: ClickupListCreateNestedOneWithoutClickupTaskLocationHistoryInput
  clickupTask: ClickupTaskCreateNestedOneWithoutLocationHistoryInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskLocationHistoryCreateManyClickupListInput = {
  added: Scalars['Boolean']['input']
  clickupTaskId: Scalars['String']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskLocationHistoryCreateManyClickupListInputEnvelope = {
  data: Array<ClickupTaskLocationHistoryCreateManyClickupListInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskLocationHistoryCreateManyClickupTaskInput = {
  added: Scalars['Boolean']['input']
  clickupListId: Scalars['String']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskLocationHistoryCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTaskLocationHistoryCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskLocationHistoryCreateManyInput = {
  added: Scalars['Boolean']['input']
  clickupListId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskLocationHistoryCreateNestedManyWithoutClickupListInput = {
  connect?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskLocationHistoryCreateOrConnectWithoutClickupListInput>>
  create?: InputMaybe<Array<ClickupTaskLocationHistoryCreateWithoutClickupListInput>>
  createMany?: InputMaybe<ClickupTaskLocationHistoryCreateManyClickupListInputEnvelope>
}

export type ClickupTaskLocationHistoryCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskLocationHistoryCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskLocationHistoryCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskLocationHistoryCreateManyClickupTaskInputEnvelope>
}

export type ClickupTaskLocationHistoryCreateOrConnectWithoutClickupListInput = {
  create: ClickupTaskLocationHistoryCreateWithoutClickupListInput
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type ClickupTaskLocationHistoryCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTaskLocationHistoryCreateWithoutClickupTaskInput
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type ClickupTaskLocationHistoryCreateWithoutClickupListInput = {
  added: Scalars['Boolean']['input']
  clickupTask: ClickupTaskCreateNestedOneWithoutLocationHistoryInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskLocationHistoryCreateWithoutClickupTaskInput = {
  added: Scalars['Boolean']['input']
  clickupList: ClickupListCreateNestedOneWithoutClickupTaskLocationHistoryInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskLocationHistoryListRelationFilter = {
  every?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
  none?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
  some?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type ClickupTaskLocationHistoryMaxAggregate = {
  __typename?: 'ClickupTaskLocationHistoryMaxAggregate'
  added?: Maybe<Scalars['Boolean']['output']>
  clickupListId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskLocationHistoryMinAggregate = {
  __typename?: 'ClickupTaskLocationHistoryMinAggregate'
  added?: Maybe<Scalars['Boolean']['output']>
  clickupListId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskLocationHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskLocationHistoryOrderByWithRelationInput = {
  added?: InputMaybe<SortOrder>
  clickupList?: InputMaybe<ClickupListOrderByWithRelationInput>
  clickupListId?: InputMaybe<SortOrder>
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClickupTaskLocationHistoryScalarFieldEnum {
  Added = 'added',
  ClickupListId = 'clickupListId',
  ClickupTaskId = 'clickupTaskId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ClickupTaskLocationHistoryScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskLocationHistoryScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskLocationHistoryScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskLocationHistoryScalarWhereInput>>
  added?: InputMaybe<BoolFilter>
  clickupListId?: InputMaybe<StringFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskLocationHistorySumAggregate = {
  __typename?: 'ClickupTaskLocationHistorySumAggregate'
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskLocationHistoryUpdateInput = {
  added?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupList?: InputMaybe<ClickupListUpdateOneRequiredWithoutClickupTaskLocationHistoryNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutLocationHistoryNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskLocationHistoryUpdateManyMutationInput = {
  added?: InputMaybe<BoolFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskLocationHistoryUpdateManyWithWhereWithoutClickupListInput = {
  data: ClickupTaskLocationHistoryUpdateManyMutationInput
  where: ClickupTaskLocationHistoryScalarWhereInput
}

export type ClickupTaskLocationHistoryUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTaskLocationHistoryUpdateManyMutationInput
  where: ClickupTaskLocationHistoryScalarWhereInput
}

export type ClickupTaskLocationHistoryUpdateManyWithoutClickupListNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskLocationHistoryCreateOrConnectWithoutClickupListInput>>
  create?: InputMaybe<Array<ClickupTaskLocationHistoryCreateWithoutClickupListInput>>
  createMany?: InputMaybe<ClickupTaskLocationHistoryCreateManyClickupListInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskLocationHistoryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskLocationHistoryUpdateWithWhereUniqueWithoutClickupListInput>>
  updateMany?: InputMaybe<Array<ClickupTaskLocationHistoryUpdateManyWithWhereWithoutClickupListInput>>
  upsert?: InputMaybe<Array<ClickupTaskLocationHistoryUpsertWithWhereUniqueWithoutClickupListInput>>
}

export type ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskLocationHistoryCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskLocationHistoryCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskLocationHistoryCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskLocationHistoryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskLocationHistoryWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskLocationHistoryUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskLocationHistoryUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskLocationHistoryUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTaskLocationHistoryUpdateWithWhereUniqueWithoutClickupListInput = {
  data: ClickupTaskLocationHistoryUpdateWithoutClickupListInput
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type ClickupTaskLocationHistoryUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTaskLocationHistoryUpdateWithoutClickupTaskInput
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type ClickupTaskLocationHistoryUpdateWithoutClickupListInput = {
  added?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutLocationHistoryNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskLocationHistoryUpdateWithoutClickupTaskInput = {
  added?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupList?: InputMaybe<ClickupListUpdateOneRequiredWithoutClickupTaskLocationHistoryNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskLocationHistoryUpsertWithWhereUniqueWithoutClickupListInput = {
  create: ClickupTaskLocationHistoryCreateWithoutClickupListInput
  update: ClickupTaskLocationHistoryUpdateWithoutClickupListInput
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type ClickupTaskLocationHistoryUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTaskLocationHistoryCreateWithoutClickupTaskInput
  update: ClickupTaskLocationHistoryUpdateWithoutClickupTaskInput
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type ClickupTaskLocationHistoryWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskLocationHistoryWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskLocationHistoryWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskLocationHistoryWhereInput>>
  added?: InputMaybe<BoolFilter>
  clickupList?: InputMaybe<ClickupListRelationFilter>
  clickupListId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskLocationHistoryWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskLocationHistoryWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskLocationHistoryWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskLocationHistoryWhereInput>>
  added?: InputMaybe<BoolFilter>
  clickupList?: InputMaybe<ClickupListRelationFilter>
  clickupListId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskMaxAggregate = {
  __typename?: 'ClickupTaskMaxAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  creatorId?: Maybe<Scalars['Int']['output']>
  customId?: Maybe<Scalars['String']['output']>
  dateClosed?: Maybe<Scalars['String']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  dateDone?: Maybe<Scalars['String']['output']>
  dateUpdated?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['String']['output']>
  permissionLevel?: Maybe<Scalars['String']['output']>
  points?: Maybe<Scalars['BigInt']['output']>
  priorityId?: Maybe<Scalars['String']['output']>
  spaceId?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['String']['output']>
  teamId?: Maybe<Scalars['String']['output']>
  textContent?: Maybe<Scalars['String']['output']>
  timeSpent?: Maybe<Scalars['BigInt']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskMinAggregate = {
  __typename?: 'ClickupTaskMinAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  creatorId?: Maybe<Scalars['Int']['output']>
  customId?: Maybe<Scalars['String']['output']>
  dateClosed?: Maybe<Scalars['String']['output']>
  dateCreated?: Maybe<Scalars['String']['output']>
  dateDone?: Maybe<Scalars['String']['output']>
  dateUpdated?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['String']['output']>
  permissionLevel?: Maybe<Scalars['String']['output']>
  points?: Maybe<Scalars['BigInt']['output']>
  priorityId?: Maybe<Scalars['String']['output']>
  spaceId?: Maybe<Scalars['String']['output']>
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
  assignees?: InputMaybe<ClickupUserTaskAssigneeOrderByRelationAggregateInput>
  attachments?: InputMaybe<ClickupTaskAttachmentOrderByRelationAggregateInput>
  checklists?: InputMaybe<ClickupTaskChecklistOrderByRelationAggregateInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectOrderByWithRelationInput>
  clickupClockifyProjectId?: InputMaybe<SortOrderInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldOrderByRelationAggregateInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryOrderByRelationAggregateInput>
  creator?: InputMaybe<ClickupUserOrderByWithRelationInput>
  creatorId?: InputMaybe<SortOrder>
  customId?: InputMaybe<SortOrderInput>
  dateClosed?: InputMaybe<SortOrderInput>
  dateCreated?: InputMaybe<SortOrder>
  dateDone?: InputMaybe<SortOrderInput>
  dateUpdated?: InputMaybe<SortOrder>
  dependentTasks?: InputMaybe<ClickupTaskDependencyOrderByRelationAggregateInput>
  description?: InputMaybe<SortOrderInput>
  dueDates?: InputMaybe<ClickupTaskDueDateOrderByRelationAggregateInput>
  folder?: InputMaybe<ClickupTaskFolderOrderByRelationAggregateInput>
  id?: InputMaybe<SortOrder>
  linkedTasks?: InputMaybe<SortOrder>
  list?: InputMaybe<ClickupTaskListOrderByRelationAggregateInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryOrderByRelationAggregateInput>
  name?: InputMaybe<SortOrder>
  orderIndex?: InputMaybe<SortOrder>
  parent?: InputMaybe<SortOrderInput>
  permissionLevel?: InputMaybe<SortOrder>
  points?: InputMaybe<SortOrderInput>
  priority?: InputMaybe<ClickupTaskPriorityOrderByWithRelationInput>
  priorityId?: InputMaybe<SortOrderInput>
  project?: InputMaybe<ClickupTaskProjectOrderByRelationAggregateInput>
  sharing?: InputMaybe<SortOrder>
  space?: InputMaybe<ClickupTaskSpaceOrderByWithRelationInput>
  spaceId?: InputMaybe<SortOrder>
  startDate?: InputMaybe<SortOrderInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskOrderByRelationAggregateInput>
  tags?: InputMaybe<ClickupTaskTagOrderByRelationAggregateInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyOrderByRelationAggregateInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataOrderByRelationAggregateInput>
  teamId?: InputMaybe<SortOrder>
  textContent?: InputMaybe<SortOrderInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateOrderByRelationAggregateInput>
  timeSpent?: InputMaybe<SortOrderInput>
  url?: InputMaybe<SortOrder>
  watchers?: InputMaybe<ClickupUserTaskWatchersOrderByRelationAggregateInput>
}

export type ClickupTaskPriority = {
  __typename?: 'ClickupTaskPriority'
  _count?: Maybe<ClickupTaskPriorityCount>
  color: Scalars['String']['output']
  id: Scalars['String']['output']
  orderIndex: Scalars['String']['output']
  priority: Scalars['String']['output']
  tasks: Array<ClickupTask>
}

export type ClickupTaskPriorityTasksArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskPriorityCount = {
  __typename?: 'ClickupTaskPriorityCount'
  tasks: Scalars['Int']['output']
}

export type ClickupTaskPriorityCountTasksArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskPriorityCountAggregate = {
  __typename?: 'ClickupTaskPriorityCountAggregate'
  _all: Scalars['Int']['output']
  color: Scalars['Int']['output']
  id: Scalars['Int']['output']
  orderIndex: Scalars['Int']['output']
  priority: Scalars['Int']['output']
}

export type ClickupTaskPriorityCreateInput = {
  color: Scalars['String']['input']
  id: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  priority: Scalars['String']['input']
  tasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutPriorityInput>
}

export type ClickupTaskPriorityCreateManyInput = {
  color: Scalars['String']['input']
  id: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  priority: Scalars['String']['input']
}

export type ClickupTaskPriorityCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<ClickupTaskPriorityWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskPriorityCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<ClickupTaskPriorityCreateWithoutTasksInput>
}

export type ClickupTaskPriorityCreateOrConnectWithoutTasksInput = {
  create: ClickupTaskPriorityCreateWithoutTasksInput
  where: ClickupTaskPriorityWhereUniqueInput
}

export type ClickupTaskPriorityCreateWithoutTasksInput = {
  color: Scalars['String']['input']
  id: Scalars['String']['input']
  orderIndex: Scalars['String']['input']
  priority: Scalars['String']['input']
}

export type ClickupTaskPriorityMaxAggregate = {
  __typename?: 'ClickupTaskPriorityMaxAggregate'
  color?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['String']['output']>
  priority?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskPriorityMinAggregate = {
  __typename?: 'ClickupTaskPriorityMinAggregate'
  color?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  orderIndex?: Maybe<Scalars['String']['output']>
  priority?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskPriorityNullableRelationFilter = {
  is?: InputMaybe<ClickupTaskPriorityWhereInput>
  isNot?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type ClickupTaskPriorityOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  orderIndex?: InputMaybe<SortOrder>
  priority?: InputMaybe<SortOrder>
  tasks?: InputMaybe<ClickupTaskOrderByRelationAggregateInput>
}

export enum ClickupTaskPriorityScalarFieldEnum {
  Color = 'color',
  Id = 'id',
  OrderIndex = 'orderIndex',
  Priority = 'priority',
}

export type ClickupTaskPriorityUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  priority?: InputMaybe<StringFieldUpdateOperationsInput>
  tasks?: InputMaybe<ClickupTaskUpdateManyWithoutPriorityNestedInput>
}

export type ClickupTaskPriorityUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  priority?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskPriorityUpdateOneWithoutTasksNestedInput = {
  connect?: InputMaybe<ClickupTaskPriorityWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskPriorityCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<ClickupTaskPriorityCreateWithoutTasksInput>
  delete?: InputMaybe<ClickupTaskPriorityWhereInput>
  disconnect?: InputMaybe<ClickupTaskPriorityWhereInput>
  update?: InputMaybe<ClickupTaskPriorityUpdateToOneWithWhereWithoutTasksInput>
  upsert?: InputMaybe<ClickupTaskPriorityUpsertWithoutTasksInput>
}

export type ClickupTaskPriorityUpdateToOneWithWhereWithoutTasksInput = {
  data: ClickupTaskPriorityUpdateWithoutTasksInput
  where?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type ClickupTaskPriorityUpdateWithoutTasksInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  priority?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskPriorityUpsertWithoutTasksInput = {
  create: ClickupTaskPriorityCreateWithoutTasksInput
  update: ClickupTaskPriorityUpdateWithoutTasksInput
  where?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type ClickupTaskPriorityWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskPriorityWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskPriorityWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskPriorityWhereInput>>
  color?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<StringFilter>
  priority?: InputMaybe<StringFilter>
  tasks?: InputMaybe<ClickupTaskListRelationFilter>
}

export type ClickupTaskPriorityWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskPriorityWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskPriorityWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskPriorityWhereInput>>
  color?: InputMaybe<StringFilter>
  id?: InputMaybe<Scalars['String']['input']>
  orderIndex?: InputMaybe<StringFilter>
  priority?: InputMaybe<StringFilter>
  tasks?: InputMaybe<ClickupTaskListRelationFilter>
}

export type ClickupTaskProject = {
  __typename?: 'ClickupTaskProject'
  access: Scalars['Boolean']['output']
  clickupProject: ClickupProject
  clickupProjectId: Scalars['String']['output']
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
}

export type ClickupTaskProjectClickupTaskIdClickupProjectIdCompoundUniqueInput = {
  clickupProjectId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskProjectCountAggregate = {
  __typename?: 'ClickupTaskProjectCountAggregate'
  _all: Scalars['Int']['output']
  access: Scalars['Int']['output']
  clickupProjectId: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
}

export type ClickupTaskProjectCreateInput = {
  access: Scalars['Boolean']['input']
  clickupProject: ClickupProjectCreateNestedOneWithoutClickupTaskProjectInput
  clickupTask: ClickupTaskCreateNestedOneWithoutProjectInput
}

export type ClickupTaskProjectCreateManyClickupProjectInput = {
  access: Scalars['Boolean']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskProjectCreateManyClickupProjectInputEnvelope = {
  data: Array<ClickupTaskProjectCreateManyClickupProjectInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskProjectCreateManyClickupTaskInput = {
  access: Scalars['Boolean']['input']
  clickupProjectId: Scalars['String']['input']
}

export type ClickupTaskProjectCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupTaskProjectCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskProjectCreateManyInput = {
  access: Scalars['Boolean']['input']
  clickupProjectId: Scalars['String']['input']
  clickupTaskId: Scalars['String']['input']
}

export type ClickupTaskProjectCreateNestedManyWithoutClickupProjectInput = {
  connect?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskProjectCreateOrConnectWithoutClickupProjectInput>>
  create?: InputMaybe<Array<ClickupTaskProjectCreateWithoutClickupProjectInput>>
  createMany?: InputMaybe<ClickupTaskProjectCreateManyClickupProjectInputEnvelope>
}

export type ClickupTaskProjectCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskProjectCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskProjectCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskProjectCreateManyClickupTaskInputEnvelope>
}

export type ClickupTaskProjectCreateOrConnectWithoutClickupProjectInput = {
  create: ClickupTaskProjectCreateWithoutClickupProjectInput
  where: ClickupTaskProjectWhereUniqueInput
}

export type ClickupTaskProjectCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupTaskProjectCreateWithoutClickupTaskInput
  where: ClickupTaskProjectWhereUniqueInput
}

export type ClickupTaskProjectCreateWithoutClickupProjectInput = {
  access: Scalars['Boolean']['input']
  clickupTask: ClickupTaskCreateNestedOneWithoutProjectInput
}

export type ClickupTaskProjectCreateWithoutClickupTaskInput = {
  access: Scalars['Boolean']['input']
  clickupProject: ClickupProjectCreateNestedOneWithoutClickupTaskProjectInput
}

export type ClickupTaskProjectListRelationFilter = {
  every?: InputMaybe<ClickupTaskProjectWhereInput>
  none?: InputMaybe<ClickupTaskProjectWhereInput>
  some?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type ClickupTaskProjectMaxAggregate = {
  __typename?: 'ClickupTaskProjectMaxAggregate'
  access?: Maybe<Scalars['Boolean']['output']>
  clickupProjectId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskProjectMinAggregate = {
  __typename?: 'ClickupTaskProjectMinAggregate'
  access?: Maybe<Scalars['Boolean']['output']>
  clickupProjectId?: Maybe<Scalars['String']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskProjectOrderByWithRelationInput = {
  access?: InputMaybe<SortOrder>
  clickupProject?: InputMaybe<ClickupProjectOrderByWithRelationInput>
  clickupProjectId?: InputMaybe<SortOrder>
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
}

export enum ClickupTaskProjectScalarFieldEnum {
  Access = 'access',
  ClickupProjectId = 'clickupProjectId',
  ClickupTaskId = 'clickupTaskId',
}

export type ClickupTaskProjectScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskProjectScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskProjectScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskProjectScalarWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupProjectId?: InputMaybe<StringFilter>
  clickupTaskId?: InputMaybe<StringFilter>
}

export type ClickupTaskProjectUpdateInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupProjectUpdateOneRequiredWithoutClickupTaskProjectNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutProjectNestedInput>
}

export type ClickupTaskProjectUpdateManyMutationInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupTaskProjectUpdateManyWithWhereWithoutClickupProjectInput = {
  data: ClickupTaskProjectUpdateManyMutationInput
  where: ClickupTaskProjectScalarWhereInput
}

export type ClickupTaskProjectUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupTaskProjectUpdateManyMutationInput
  where: ClickupTaskProjectScalarWhereInput
}

export type ClickupTaskProjectUpdateManyWithoutClickupProjectNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskProjectCreateOrConnectWithoutClickupProjectInput>>
  create?: InputMaybe<Array<ClickupTaskProjectCreateWithoutClickupProjectInput>>
  createMany?: InputMaybe<ClickupTaskProjectCreateManyClickupProjectInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskProjectScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskProjectUpdateWithWhereUniqueWithoutClickupProjectInput>>
  updateMany?: InputMaybe<Array<ClickupTaskProjectUpdateManyWithWhereWithoutClickupProjectInput>>
  upsert?: InputMaybe<Array<ClickupTaskProjectUpsertWithWhereUniqueWithoutClickupProjectInput>>
}

export type ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskProjectCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupTaskProjectCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupTaskProjectCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskProjectScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskProjectWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskProjectUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskProjectUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskProjectUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupTaskProjectUpdateWithWhereUniqueWithoutClickupProjectInput = {
  data: ClickupTaskProjectUpdateWithoutClickupProjectInput
  where: ClickupTaskProjectWhereUniqueInput
}

export type ClickupTaskProjectUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupTaskProjectUpdateWithoutClickupTaskInput
  where: ClickupTaskProjectWhereUniqueInput
}

export type ClickupTaskProjectUpdateWithoutClickupProjectInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutProjectNestedInput>
}

export type ClickupTaskProjectUpdateWithoutClickupTaskInput = {
  access?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupProject?: InputMaybe<ClickupProjectUpdateOneRequiredWithoutClickupTaskProjectNestedInput>
}

export type ClickupTaskProjectUpsertWithWhereUniqueWithoutClickupProjectInput = {
  create: ClickupTaskProjectCreateWithoutClickupProjectInput
  update: ClickupTaskProjectUpdateWithoutClickupProjectInput
  where: ClickupTaskProjectWhereUniqueInput
}

export type ClickupTaskProjectUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupTaskProjectCreateWithoutClickupTaskInput
  update: ClickupTaskProjectUpdateWithoutClickupTaskInput
  where: ClickupTaskProjectWhereUniqueInput
}

export type ClickupTaskProjectWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskProjectWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskProjectWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskProjectWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupProject?: InputMaybe<ClickupProjectRelationFilter>
  clickupProjectId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
}

export type ClickupTaskProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskProjectWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskProjectWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskProjectWhereInput>>
  access?: InputMaybe<BoolFilter>
  clickupProject?: InputMaybe<ClickupProjectRelationFilter>
  clickupProjectId?: InputMaybe<StringFilter>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupTaskId_clickupProjectId?: InputMaybe<ClickupTaskProjectClickupTaskIdClickupProjectIdCompoundUniqueInput>
}

export type ClickupTaskQueue = {
  __typename?: 'ClickupTaskQueue'
  taskId: Scalars['String']['output']
}

export type ClickupTaskQueueCountAggregate = {
  __typename?: 'ClickupTaskQueueCountAggregate'
  _all: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
}

export type ClickupTaskQueueCreateInput = {
  taskId: Scalars['String']['input']
}

export type ClickupTaskQueueCreateManyInput = {
  taskId: Scalars['String']['input']
}

export type ClickupTaskQueueMaxAggregate = {
  __typename?: 'ClickupTaskQueueMaxAggregate'
  taskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskQueueMinAggregate = {
  __typename?: 'ClickupTaskQueueMinAggregate'
  taskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskQueueOrderByWithRelationInput = {
  taskId?: InputMaybe<SortOrder>
}

export enum ClickupTaskQueueScalarFieldEnum {
  TaskId = 'taskId',
}

export type ClickupTaskQueueUpdateInput = {
  taskId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskQueueUpdateManyMutationInput = {
  taskId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskQueueWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskQueueWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskQueueWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskQueueWhereInput>>
  taskId?: InputMaybe<StringFilter>
}

export type ClickupTaskQueueWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskQueueWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskQueueWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskQueueWhereInput>>
  taskId?: InputMaybe<Scalars['String']['input']>
}

export type ClickupTaskRelationFilter = {
  is?: InputMaybe<ClickupTaskWhereInput>
  isNot?: InputMaybe<ClickupTaskWhereInput>
}

export enum ClickupTaskScalarFieldEnum {
  Archived = 'archived',
  ClickupClockifyProjectId = 'clickupClockifyProjectId',
  CreatorId = 'creatorId',
  CustomId = 'customId',
  DateClosed = 'dateClosed',
  DateCreated = 'dateCreated',
  DateDone = 'dateDone',
  DateUpdated = 'dateUpdated',
  Description = 'description',
  Id = 'id',
  LinkedTasks = 'linkedTasks',
  Name = 'name',
  OrderIndex = 'orderIndex',
  Parent = 'parent',
  PermissionLevel = 'permissionLevel',
  Points = 'points',
  PriorityId = 'priorityId',
  Sharing = 'sharing',
  SpaceId = 'spaceId',
  StartDate = 'startDate',
  TeamId = 'teamId',
  TextContent = 'textContent',
  TimeSpent = 'timeSpent',
  Url = 'url',
}

export type ClickupTaskScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  archived?: InputMaybe<BoolFilter>
  clickupClockifyProjectId?: InputMaybe<IntNullableFilter>
  creatorId?: InputMaybe<IntFilter>
  customId?: InputMaybe<StringNullableFilter>
  dateClosed?: InputMaybe<StringNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  dateDone?: InputMaybe<StringNullableFilter>
  dateUpdated?: InputMaybe<StringFilter>
  description?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<StringFilter>
  linkedTasks?: InputMaybe<JsonFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<StringFilter>
  parent?: InputMaybe<JsonNullableFilter>
  permissionLevel?: InputMaybe<StringFilter>
  points?: InputMaybe<BigIntNullableFilter>
  priorityId?: InputMaybe<StringNullableFilter>
  sharing?: InputMaybe<JsonFilter>
  spaceId?: InputMaybe<StringFilter>
  startDate?: InputMaybe<StringNullableFilter>
  teamId?: InputMaybe<StringFilter>
  textContent?: InputMaybe<StringNullableFilter>
  timeSpent?: InputMaybe<BigIntNullableFilter>
  url?: InputMaybe<StringFilter>
}

export type ClickupTaskSpace = {
  __typename?: 'ClickupTaskSpace'
  _count?: Maybe<ClickupTaskSpaceCount>
  id: Scalars['String']['output']
  tasks: Array<ClickupTask>
}

export type ClickupTaskSpaceTasksArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskSpaceCount = {
  __typename?: 'ClickupTaskSpaceCount'
  tasks: Scalars['Int']['output']
}

export type ClickupTaskSpaceCountTasksArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskSpaceCountAggregate = {
  __typename?: 'ClickupTaskSpaceCountAggregate'
  _all: Scalars['Int']['output']
  id: Scalars['Int']['output']
}

export type ClickupTaskSpaceCreateInput = {
  id: Scalars['String']['input']
  tasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutSpaceInput>
}

export type ClickupTaskSpaceCreateManyInput = {
  id: Scalars['String']['input']
}

export type ClickupTaskSpaceCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<ClickupTaskSpaceWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskSpaceCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<ClickupTaskSpaceCreateWithoutTasksInput>
}

export type ClickupTaskSpaceCreateOrConnectWithoutTasksInput = {
  create: ClickupTaskSpaceCreateWithoutTasksInput
  where: ClickupTaskSpaceWhereUniqueInput
}

export type ClickupTaskSpaceCreateWithoutTasksInput = {
  id: Scalars['String']['input']
}

export type ClickupTaskSpaceMaxAggregate = {
  __typename?: 'ClickupTaskSpaceMaxAggregate'
  id?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskSpaceMinAggregate = {
  __typename?: 'ClickupTaskSpaceMinAggregate'
  id?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskSpaceOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>
  tasks?: InputMaybe<ClickupTaskOrderByRelationAggregateInput>
}

export type ClickupTaskSpaceRelationFilter = {
  is?: InputMaybe<ClickupTaskSpaceWhereInput>
  isNot?: InputMaybe<ClickupTaskSpaceWhereInput>
}

export enum ClickupTaskSpaceScalarFieldEnum {
  Id = 'id',
}

export type ClickupTaskSpaceUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  tasks?: InputMaybe<ClickupTaskUpdateManyWithoutSpaceNestedInput>
}

export type ClickupTaskSpaceUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput = {
  connect?: InputMaybe<ClickupTaskSpaceWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskSpaceCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<ClickupTaskSpaceCreateWithoutTasksInput>
  update?: InputMaybe<ClickupTaskSpaceUpdateToOneWithWhereWithoutTasksInput>
  upsert?: InputMaybe<ClickupTaskSpaceUpsertWithoutTasksInput>
}

export type ClickupTaskSpaceUpdateToOneWithWhereWithoutTasksInput = {
  data: ClickupTaskSpaceUpdateWithoutTasksInput
  where?: InputMaybe<ClickupTaskSpaceWhereInput>
}

export type ClickupTaskSpaceUpdateWithoutTasksInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskSpaceUpsertWithoutTasksInput = {
  create: ClickupTaskSpaceCreateWithoutTasksInput
  update: ClickupTaskSpaceUpdateWithoutTasksInput
  where?: InputMaybe<ClickupTaskSpaceWhereInput>
}

export type ClickupTaskSpaceWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskSpaceWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskSpaceWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskSpaceWhereInput>>
  id?: InputMaybe<StringFilter>
  tasks?: InputMaybe<ClickupTaskListRelationFilter>
}

export type ClickupTaskSpaceWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskSpaceWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskSpaceWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskSpaceWhereInput>>
  id?: InputMaybe<Scalars['String']['input']>
  tasks?: InputMaybe<ClickupTaskListRelationFilter>
}

export type ClickupTaskStatus = {
  __typename?: 'ClickupTaskStatus'
  _count?: Maybe<ClickupTaskStatusCount>
  color: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  name: Scalars['String']['output']
  tasks: Array<ClickupTaskStatusOnTask>
}

export type ClickupTaskStatusTasksArgs = {
  cursor?: InputMaybe<ClickupTaskStatusOnTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskStatusOnTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type ClickupTaskStatusColorNameCompoundUniqueInput = {
  color: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type ClickupTaskStatusCount = {
  __typename?: 'ClickupTaskStatusCount'
  tasks: Scalars['Int']['output']
}

export type ClickupTaskStatusCountTasksArgs = {
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type ClickupTaskStatusCountAggregate = {
  __typename?: 'ClickupTaskStatusCountAggregate'
  _all: Scalars['Int']['output']
  color: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  name: Scalars['Int']['output']
}

export type ClickupTaskStatusCreateInput = {
  color: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  name: Scalars['String']['input']
  tasks?: InputMaybe<ClickupTaskStatusOnTaskCreateNestedManyWithoutStatusInput>
}

export type ClickupTaskStatusCreateManyInput = {
  color: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  name: Scalars['String']['input']
}

export type ClickupTaskStatusCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<ClickupTaskStatusWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskStatusCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<ClickupTaskStatusCreateWithoutTasksInput>
}

export type ClickupTaskStatusCreateOrConnectWithoutTasksInput = {
  create: ClickupTaskStatusCreateWithoutTasksInput
  where: ClickupTaskStatusWhereUniqueInput
}

export type ClickupTaskStatusCreateWithoutTasksInput = {
  color: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  name: Scalars['String']['input']
}

export type ClickupTaskStatusMaxAggregate = {
  __typename?: 'ClickupTaskStatusMaxAggregate'
  color?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskStatusMinAggregate = {
  __typename?: 'ClickupTaskStatusMinAggregate'
  color?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskStatusOnTask = {
  __typename?: 'ClickupTaskStatusOnTask'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  status: ClickupTaskStatus
  statusColor: Scalars['String']['output']
  statusName: Scalars['String']['output']
  task: ClickupTask
  taskId: Scalars['String']['output']
}

export type ClickupTaskStatusOnTaskAvgAggregate = {
  __typename?: 'ClickupTaskStatusOnTaskAvgAggregate'
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskStatusOnTaskCountAggregate = {
  __typename?: 'ClickupTaskStatusOnTaskCountAggregate'
  _all: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  id: Scalars['Int']['output']
  statusColor: Scalars['Int']['output']
  statusName: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
}

export type ClickupTaskStatusOnTaskCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  status: ClickupTaskStatusCreateNestedOneWithoutTasksInput
  task: ClickupTaskCreateNestedOneWithoutStatusInput
}

export type ClickupTaskStatusOnTaskCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  statusColor: Scalars['String']['input']
  statusName: Scalars['String']['input']
  taskId: Scalars['String']['input']
}

export type ClickupTaskStatusOnTaskCreateManyStatusInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  taskId: Scalars['String']['input']
}

export type ClickupTaskStatusOnTaskCreateManyStatusInputEnvelope = {
  data: Array<ClickupTaskStatusOnTaskCreateManyStatusInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskStatusOnTaskCreateManyTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  statusColor: Scalars['String']['input']
  statusName: Scalars['String']['input']
}

export type ClickupTaskStatusOnTaskCreateManyTaskInputEnvelope = {
  data: Array<ClickupTaskStatusOnTaskCreateManyTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskStatusOnTaskCreateNestedManyWithoutStatusInput = {
  connect?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateOrConnectWithoutStatusInput>>
  create?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateWithoutStatusInput>>
  createMany?: InputMaybe<ClickupTaskStatusOnTaskCreateManyStatusInputEnvelope>
}

export type ClickupTaskStatusOnTaskCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskStatusOnTaskCreateManyTaskInputEnvelope>
}

export type ClickupTaskStatusOnTaskCreateOrConnectWithoutStatusInput = {
  create: ClickupTaskStatusOnTaskCreateWithoutStatusInput
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type ClickupTaskStatusOnTaskCreateOrConnectWithoutTaskInput = {
  create: ClickupTaskStatusOnTaskCreateWithoutTaskInput
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type ClickupTaskStatusOnTaskCreateWithoutStatusInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  task: ClickupTaskCreateNestedOneWithoutStatusInput
}

export type ClickupTaskStatusOnTaskCreateWithoutTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  status: ClickupTaskStatusCreateNestedOneWithoutTasksInput
}

export type ClickupTaskStatusOnTaskListRelationFilter = {
  every?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
  none?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
  some?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type ClickupTaskStatusOnTaskMaxAggregate = {
  __typename?: 'ClickupTaskStatusOnTaskMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  statusColor?: Maybe<Scalars['String']['output']>
  statusName?: Maybe<Scalars['String']['output']>
  taskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskStatusOnTaskMinAggregate = {
  __typename?: 'ClickupTaskStatusOnTaskMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  statusColor?: Maybe<Scalars['String']['output']>
  statusName?: Maybe<Scalars['String']['output']>
  taskId?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskStatusOnTaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskStatusOnTaskOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  status?: InputMaybe<ClickupTaskStatusOrderByWithRelationInput>
  statusColor?: InputMaybe<SortOrder>
  statusName?: InputMaybe<SortOrder>
  task?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  taskId?: InputMaybe<SortOrder>
}

export enum ClickupTaskStatusOnTaskScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  StatusColor = 'statusColor',
  StatusName = 'statusName',
  TaskId = 'taskId',
}

export type ClickupTaskStatusOnTaskScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  statusColor?: InputMaybe<StringFilter>
  statusName?: InputMaybe<StringFilter>
  taskId?: InputMaybe<StringFilter>
}

export type ClickupTaskStatusOnTaskSumAggregate = {
  __typename?: 'ClickupTaskStatusOnTaskSumAggregate'
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskStatusOnTaskUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusUpdateOneRequiredWithoutTasksNestedInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutStatusNestedInput>
}

export type ClickupTaskStatusOnTaskUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskStatusOnTaskUpdateManyWithWhereWithoutStatusInput = {
  data: ClickupTaskStatusOnTaskUpdateManyMutationInput
  where: ClickupTaskStatusOnTaskScalarWhereInput
}

export type ClickupTaskStatusOnTaskUpdateManyWithWhereWithoutTaskInput = {
  data: ClickupTaskStatusOnTaskUpdateManyMutationInput
  where: ClickupTaskStatusOnTaskScalarWhereInput
}

export type ClickupTaskStatusOnTaskUpdateManyWithoutStatusNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateOrConnectWithoutStatusInput>>
  create?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateWithoutStatusInput>>
  createMany?: InputMaybe<ClickupTaskStatusOnTaskCreateManyStatusInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskStatusOnTaskUpdateWithWhereUniqueWithoutStatusInput>>
  updateMany?: InputMaybe<Array<ClickupTaskStatusOnTaskUpdateManyWithWhereWithoutStatusInput>>
  upsert?: InputMaybe<Array<ClickupTaskStatusOnTaskUpsertWithWhereUniqueWithoutStatusInput>>
}

export type ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskStatusOnTaskCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskStatusOnTaskCreateManyTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskStatusOnTaskUpdateWithWhereUniqueWithoutTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskStatusOnTaskUpdateManyWithWhereWithoutTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskStatusOnTaskUpsertWithWhereUniqueWithoutTaskInput>>
}

export type ClickupTaskStatusOnTaskUpdateWithWhereUniqueWithoutStatusInput = {
  data: ClickupTaskStatusOnTaskUpdateWithoutStatusInput
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type ClickupTaskStatusOnTaskUpdateWithWhereUniqueWithoutTaskInput = {
  data: ClickupTaskStatusOnTaskUpdateWithoutTaskInput
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type ClickupTaskStatusOnTaskUpdateWithoutStatusInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutStatusNestedInput>
}

export type ClickupTaskStatusOnTaskUpdateWithoutTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusUpdateOneRequiredWithoutTasksNestedInput>
}

export type ClickupTaskStatusOnTaskUpsertWithWhereUniqueWithoutStatusInput = {
  create: ClickupTaskStatusOnTaskCreateWithoutStatusInput
  update: ClickupTaskStatusOnTaskUpdateWithoutStatusInput
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type ClickupTaskStatusOnTaskUpsertWithWhereUniqueWithoutTaskInput = {
  create: ClickupTaskStatusOnTaskCreateWithoutTaskInput
  update: ClickupTaskStatusOnTaskUpdateWithoutTaskInput
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type ClickupTaskStatusOnTaskWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  status?: InputMaybe<ClickupTaskStatusRelationFilter>
  statusColor?: InputMaybe<StringFilter>
  statusName?: InputMaybe<StringFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
}

export type ClickupTaskStatusOnTaskWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskStatusOnTaskWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<ClickupTaskStatusRelationFilter>
  statusColor?: InputMaybe<StringFilter>
  statusName?: InputMaybe<StringFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
}

export type ClickupTaskStatusOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  tasks?: InputMaybe<ClickupTaskStatusOnTaskOrderByRelationAggregateInput>
}

export type ClickupTaskStatusRelationFilter = {
  is?: InputMaybe<ClickupTaskStatusWhereInput>
  isNot?: InputMaybe<ClickupTaskStatusWhereInput>
}

export enum ClickupTaskStatusScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Name = 'name',
}

export type ClickupTaskStatusUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  tasks?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutStatusNestedInput>
}

export type ClickupTaskStatusUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskStatusUpdateOneRequiredWithoutTasksNestedInput = {
  connect?: InputMaybe<ClickupTaskStatusWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskStatusCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<ClickupTaskStatusCreateWithoutTasksInput>
  update?: InputMaybe<ClickupTaskStatusUpdateToOneWithWhereWithoutTasksInput>
  upsert?: InputMaybe<ClickupTaskStatusUpsertWithoutTasksInput>
}

export type ClickupTaskStatusUpdateToOneWithWhereWithoutTasksInput = {
  data: ClickupTaskStatusUpdateWithoutTasksInput
  where?: InputMaybe<ClickupTaskStatusWhereInput>
}

export type ClickupTaskStatusUpdateWithoutTasksInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskStatusUpsertWithoutTasksInput = {
  create: ClickupTaskStatusCreateWithoutTasksInput
  update: ClickupTaskStatusUpdateWithoutTasksInput
  where?: InputMaybe<ClickupTaskStatusWhereInput>
}

export type ClickupTaskStatusWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskStatusWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskStatusWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskStatusWhereInput>>
  color?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  tasks?: InputMaybe<ClickupTaskStatusOnTaskListRelationFilter>
}

export type ClickupTaskStatusWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskStatusWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskStatusWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskStatusWhereInput>>
  color?: InputMaybe<StringFilter>
  color_name?: InputMaybe<ClickupTaskStatusColorNameCompoundUniqueInput>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  tasks?: InputMaybe<ClickupTaskStatusOnTaskListRelationFilter>
}

export type ClickupTaskSumAggregate = {
  __typename?: 'ClickupTaskSumAggregate'
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  creatorId?: Maybe<Scalars['Int']['output']>
  points?: Maybe<Scalars['BigInt']['output']>
  timeSpent?: Maybe<Scalars['BigInt']['output']>
}

export type ClickupTaskTag = {
  __typename?: 'ClickupTaskTag'
  _count?: Maybe<ClickupTaskTagCount>
  creator: ClickupUser
  creatorId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  tagBg: Scalars['String']['output']
  tagFg: Scalars['String']['output']
  tasks: Array<ClickupTask>
}

export type ClickupTaskTagTasksArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskTagAvgAggregate = {
  __typename?: 'ClickupTaskTagAvgAggregate'
  creatorId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskTagCount = {
  __typename?: 'ClickupTaskTagCount'
  tasks: Scalars['Int']['output']
}

export type ClickupTaskTagCountTasksArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskTagCountAggregate = {
  __typename?: 'ClickupTaskTagCountAggregate'
  _all: Scalars['Int']['output']
  creatorId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  tagBg: Scalars['Int']['output']
  tagFg: Scalars['Int']['output']
}

export type ClickupTaskTagCreateInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskTagsInput
  name: Scalars['String']['input']
  tagBg: Scalars['String']['input']
  tagFg: Scalars['String']['input']
  tasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutTagsInput>
}

export type ClickupTaskTagCreateManyCreatorInput = {
  id?: InputMaybe<Scalars['Int']['input']>
  name: Scalars['String']['input']
  tagBg: Scalars['String']['input']
  tagFg: Scalars['String']['input']
}

export type ClickupTaskTagCreateManyCreatorInputEnvelope = {
  data: Array<ClickupTaskTagCreateManyCreatorInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskTagCreateManyInput = {
  creatorId: Scalars['Int']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  name: Scalars['String']['input']
  tagBg: Scalars['String']['input']
  tagFg: Scalars['String']['input']
}

export type ClickupTaskTagCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskTagCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskTagCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskTagCreateManyCreatorInputEnvelope>
}

export type ClickupTaskTagCreateNestedManyWithoutTasksInput = {
  connect?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskTagCreateOrConnectWithoutTasksInput>>
  create?: InputMaybe<Array<ClickupTaskTagCreateWithoutTasksInput>>
}

export type ClickupTaskTagCreateOrConnectWithoutCreatorInput = {
  create: ClickupTaskTagCreateWithoutCreatorInput
  where: ClickupTaskTagWhereUniqueInput
}

export type ClickupTaskTagCreateOrConnectWithoutTasksInput = {
  create: ClickupTaskTagCreateWithoutTasksInput
  where: ClickupTaskTagWhereUniqueInput
}

export type ClickupTaskTagCreateWithoutCreatorInput = {
  name: Scalars['String']['input']
  tagBg: Scalars['String']['input']
  tagFg: Scalars['String']['input']
  tasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutTagsInput>
}

export type ClickupTaskTagCreateWithoutTasksInput = {
  creator: ClickupUserCreateNestedOneWithoutCreatedTaskTagsInput
  name: Scalars['String']['input']
  tagBg: Scalars['String']['input']
  tagFg: Scalars['String']['input']
}

export type ClickupTaskTagListRelationFilter = {
  every?: InputMaybe<ClickupTaskTagWhereInput>
  none?: InputMaybe<ClickupTaskTagWhereInput>
  some?: InputMaybe<ClickupTaskTagWhereInput>
}

export type ClickupTaskTagMaxAggregate = {
  __typename?: 'ClickupTaskTagMaxAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  tagBg?: Maybe<Scalars['String']['output']>
  tagFg?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskTagMinAggregate = {
  __typename?: 'ClickupTaskTagMinAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  tagBg?: Maybe<Scalars['String']['output']>
  tagFg?: Maybe<Scalars['String']['output']>
}

export type ClickupTaskTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskTagOrderByWithRelationInput = {
  creator?: InputMaybe<ClickupUserOrderByWithRelationInput>
  creatorId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  tagBg?: InputMaybe<SortOrder>
  tagFg?: InputMaybe<SortOrder>
  tasks?: InputMaybe<ClickupTaskOrderByRelationAggregateInput>
}

export enum ClickupTaskTagScalarFieldEnum {
  CreatorId = 'creatorId',
  Id = 'id',
  Name = 'name',
  TagBg = 'tagBg',
  TagFg = 'tagFg',
}

export type ClickupTaskTagScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskTagScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskTagScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskTagScalarWhereInput>>
  creatorId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  tagBg?: InputMaybe<StringFilter>
  tagFg?: InputMaybe<StringFilter>
}

export type ClickupTaskTagSumAggregate = {
  __typename?: 'ClickupTaskTagSumAggregate'
  creatorId?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskTagUpdateInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskTagsNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  tagBg?: InputMaybe<StringFieldUpdateOperationsInput>
  tagFg?: InputMaybe<StringFieldUpdateOperationsInput>
  tasks?: InputMaybe<ClickupTaskUpdateManyWithoutTagsNestedInput>
}

export type ClickupTaskTagUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  tagBg?: InputMaybe<StringFieldUpdateOperationsInput>
  tagFg?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskTagUpdateManyWithWhereWithoutCreatorInput = {
  data: ClickupTaskTagUpdateManyMutationInput
  where: ClickupTaskTagScalarWhereInput
}

export type ClickupTaskTagUpdateManyWithWhereWithoutTasksInput = {
  data: ClickupTaskTagUpdateManyMutationInput
  where: ClickupTaskTagScalarWhereInput
}

export type ClickupTaskTagUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskTagCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskTagCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskTagCreateManyCreatorInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskTagScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskTagUpdateWithWhereUniqueWithoutCreatorInput>>
  updateMany?: InputMaybe<Array<ClickupTaskTagUpdateManyWithWhereWithoutCreatorInput>>
  upsert?: InputMaybe<Array<ClickupTaskTagUpsertWithWhereUniqueWithoutCreatorInput>>
}

export type ClickupTaskTagUpdateManyWithoutTasksNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskTagCreateOrConnectWithoutTasksInput>>
  create?: InputMaybe<Array<ClickupTaskTagCreateWithoutTasksInput>>
  delete?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskTagScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskTagWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskTagUpdateWithWhereUniqueWithoutTasksInput>>
  updateMany?: InputMaybe<Array<ClickupTaskTagUpdateManyWithWhereWithoutTasksInput>>
  upsert?: InputMaybe<Array<ClickupTaskTagUpsertWithWhereUniqueWithoutTasksInput>>
}

export type ClickupTaskTagUpdateWithWhereUniqueWithoutCreatorInput = {
  data: ClickupTaskTagUpdateWithoutCreatorInput
  where: ClickupTaskTagWhereUniqueInput
}

export type ClickupTaskTagUpdateWithWhereUniqueWithoutTasksInput = {
  data: ClickupTaskTagUpdateWithoutTasksInput
  where: ClickupTaskTagWhereUniqueInput
}

export type ClickupTaskTagUpdateWithoutCreatorInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  tagBg?: InputMaybe<StringFieldUpdateOperationsInput>
  tagFg?: InputMaybe<StringFieldUpdateOperationsInput>
  tasks?: InputMaybe<ClickupTaskUpdateManyWithoutTagsNestedInput>
}

export type ClickupTaskTagUpdateWithoutTasksInput = {
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTaskTagsNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  tagBg?: InputMaybe<StringFieldUpdateOperationsInput>
  tagFg?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskTagUpsertWithWhereUniqueWithoutCreatorInput = {
  create: ClickupTaskTagCreateWithoutCreatorInput
  update: ClickupTaskTagUpdateWithoutCreatorInput
  where: ClickupTaskTagWhereUniqueInput
}

export type ClickupTaskTagUpsertWithWhereUniqueWithoutTasksInput = {
  create: ClickupTaskTagCreateWithoutTasksInput
  update: ClickupTaskTagUpdateWithoutTasksInput
  where: ClickupTaskTagWhereUniqueInput
}

export type ClickupTaskTagWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskTagWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskTagWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskTagWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  tagBg?: InputMaybe<StringFilter>
  tagFg?: InputMaybe<StringFilter>
  tasks?: InputMaybe<ClickupTaskListRelationFilter>
}

export type ClickupTaskTagWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskTagWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskTagWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskTagWhereInput>>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<StringFilter>
  tagBg?: InputMaybe<StringFilter>
  tagFg?: InputMaybe<StringFilter>
  tasks?: InputMaybe<ClickupTaskListRelationFilter>
}

export type ClickupTaskTimeEstimate = {
  __typename?: 'ClickupTaskTimeEstimate'
  createdAt: Scalars['DateTime']['output']
  estimate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  task: ClickupTask
  taskId: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ClickupTaskTimeEstimateAvgAggregate = {
  __typename?: 'ClickupTaskTimeEstimateAvgAggregate'
  estimate?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupTaskTimeEstimateCountAggregate = {
  __typename?: 'ClickupTaskTimeEstimateCountAggregate'
  _all: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  estimate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  taskId: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type ClickupTaskTimeEstimateCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  task: ClickupTaskCreateNestedOneWithoutTimeEstimatesInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskTimeEstimateCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  taskId: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskTimeEstimateCreateManyTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskTimeEstimateCreateManyTaskInputEnvelope = {
  data: Array<ClickupTaskTimeEstimateCreateManyTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupTaskTimeEstimateCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<ClickupTaskTimeEstimateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskTimeEstimateCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskTimeEstimateCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskTimeEstimateCreateManyTaskInputEnvelope>
}

export type ClickupTaskTimeEstimateCreateOrConnectWithoutTaskInput = {
  create: ClickupTaskTimeEstimateCreateWithoutTaskInput
  where: ClickupTaskTimeEstimateWhereUniqueInput
}

export type ClickupTaskTimeEstimateCreateWithoutTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  estimate: Scalars['Int']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupTaskTimeEstimateListRelationFilter = {
  every?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
  none?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
  some?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
}

export type ClickupTaskTimeEstimateMaxAggregate = {
  __typename?: 'ClickupTaskTimeEstimateMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  estimate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskTimeEstimateMinAggregate = {
  __typename?: 'ClickupTaskTimeEstimateMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  estimate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  taskId?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupTaskTimeEstimateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupTaskTimeEstimateOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  estimate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  task?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  taskId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClickupTaskTimeEstimateScalarFieldEnum {
  CreatedAt = 'createdAt',
  Estimate = 'estimate',
  Id = 'id',
  TaskId = 'taskId',
  UpdatedAt = 'updatedAt',
}

export type ClickupTaskTimeEstimateScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskTimeEstimateScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskTimeEstimateScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskTimeEstimateScalarWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  estimate?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  taskId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskTimeEstimateSumAggregate = {
  __typename?: 'ClickupTaskTimeEstimateSumAggregate'
  estimate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupTaskTimeEstimateUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  estimate?: InputMaybe<IntFieldUpdateOperationsInput>
  task?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutTimeEstimatesNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskTimeEstimateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  estimate?: InputMaybe<IntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskTimeEstimateUpdateManyWithWhereWithoutTaskInput = {
  data: ClickupTaskTimeEstimateUpdateManyMutationInput
  where: ClickupTaskTimeEstimateScalarWhereInput
}

export type ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskTimeEstimateWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskTimeEstimateCreateOrConnectWithoutTaskInput>>
  create?: InputMaybe<Array<ClickupTaskTimeEstimateCreateWithoutTaskInput>>
  createMany?: InputMaybe<ClickupTaskTimeEstimateCreateManyTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskTimeEstimateWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskTimeEstimateScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskTimeEstimateWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskTimeEstimateWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskTimeEstimateUpdateWithWhereUniqueWithoutTaskInput>>
  updateMany?: InputMaybe<Array<ClickupTaskTimeEstimateUpdateManyWithWhereWithoutTaskInput>>
  upsert?: InputMaybe<Array<ClickupTaskTimeEstimateUpsertWithWhereUniqueWithoutTaskInput>>
}

export type ClickupTaskTimeEstimateUpdateWithWhereUniqueWithoutTaskInput = {
  data: ClickupTaskTimeEstimateUpdateWithoutTaskInput
  where: ClickupTaskTimeEstimateWhereUniqueInput
}

export type ClickupTaskTimeEstimateUpdateWithoutTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  estimate?: InputMaybe<IntFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupTaskTimeEstimateUpsertWithWhereUniqueWithoutTaskInput = {
  create: ClickupTaskTimeEstimateCreateWithoutTaskInput
  update: ClickupTaskTimeEstimateUpdateWithoutTaskInput
  where: ClickupTaskTimeEstimateWhereUniqueInput
}

export type ClickupTaskTimeEstimateWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskTimeEstimateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskTimeEstimateWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskTimeEstimateWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  estimate?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskTimeEstimateWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskTimeEstimateWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskTimeEstimateWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskTimeEstimateWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  estimate?: InputMaybe<IntFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  task?: InputMaybe<ClickupTaskRelationFilter>
  taskId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ClickupTaskUpdateInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateManyMutationInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskUpdateManyWithWhereWithoutClickupClockifyProjectInput = {
  data: ClickupTaskUpdateManyMutationInput
  where: ClickupTaskScalarWhereInput
}

export type ClickupTaskUpdateManyWithWhereWithoutCreatorInput = {
  data: ClickupTaskUpdateManyMutationInput
  where: ClickupTaskScalarWhereInput
}

export type ClickupTaskUpdateManyWithWhereWithoutPriorityInput = {
  data: ClickupTaskUpdateManyMutationInput
  where: ClickupTaskScalarWhereInput
}

export type ClickupTaskUpdateManyWithWhereWithoutSpaceInput = {
  data: ClickupTaskUpdateManyMutationInput
  where: ClickupTaskScalarWhereInput
}

export type ClickupTaskUpdateManyWithWhereWithoutTagsInput = {
  data: ClickupTaskUpdateManyMutationInput
  where: ClickupTaskScalarWhereInput
}

export type ClickupTaskUpdateManyWithoutClickupClockifyProjectNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutClickupClockifyProjectInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutClickupClockifyProjectInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyClickupClockifyProjectInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskUpdateWithWhereUniqueWithoutClickupClockifyProjectInput>>
  updateMany?: InputMaybe<Array<ClickupTaskUpdateManyWithWhereWithoutClickupClockifyProjectInput>>
  upsert?: InputMaybe<Array<ClickupTaskUpsertWithWhereUniqueWithoutClickupClockifyProjectInput>>
}

export type ClickupTaskUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutCreatorInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutCreatorInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyCreatorInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskUpdateWithWhereUniqueWithoutCreatorInput>>
  updateMany?: InputMaybe<Array<ClickupTaskUpdateManyWithWhereWithoutCreatorInput>>
  upsert?: InputMaybe<Array<ClickupTaskUpsertWithWhereUniqueWithoutCreatorInput>>
}

export type ClickupTaskUpdateManyWithoutPriorityNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutPriorityInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutPriorityInput>>
  createMany?: InputMaybe<ClickupTaskCreateManyPriorityInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskUpdateWithWhereUniqueWithoutPriorityInput>>
  updateMany?: InputMaybe<Array<ClickupTaskUpdateManyWithWhereWithoutPriorityInput>>
  upsert?: InputMaybe<Array<ClickupTaskUpsertWithWhereUniqueWithoutPriorityInput>>
}

export type ClickupTaskUpdateManyWithoutSpaceNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutSpaceInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutSpaceInput>>
  createMany?: InputMaybe<ClickupTaskCreateManySpaceInputEnvelope>
  delete?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskUpdateWithWhereUniqueWithoutSpaceInput>>
  updateMany?: InputMaybe<Array<ClickupTaskUpdateManyWithWhereWithoutSpaceInput>>
  upsert?: InputMaybe<Array<ClickupTaskUpsertWithWhereUniqueWithoutSpaceInput>>
}

export type ClickupTaskUpdateManyWithoutTagsNestedInput = {
  connect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupTaskCreateOrConnectWithoutTagsInput>>
  create?: InputMaybe<Array<ClickupTaskCreateWithoutTagsInput>>
  delete?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupTaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupTaskWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupTaskUpdateWithWhereUniqueWithoutTagsInput>>
  updateMany?: InputMaybe<Array<ClickupTaskUpdateManyWithWhereWithoutTagsInput>>
  upsert?: InputMaybe<Array<ClickupTaskUpsertWithWhereUniqueWithoutTagsInput>>
}

export type ClickupTaskUpdateOneRequiredWithoutAssigneesNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutAssigneesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutAssigneesInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutAssigneesInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutAssigneesInput>
}

export type ClickupTaskUpdateOneRequiredWithoutAttachmentsNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutAttachmentsInput>
  create?: InputMaybe<ClickupTaskCreateWithoutAttachmentsInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutAttachmentsInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutAttachmentsInput>
}

export type ClickupTaskUpdateOneRequiredWithoutChecklistsNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutChecklistsInput>
  create?: InputMaybe<ClickupTaskCreateWithoutChecklistsInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutChecklistsInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutChecklistsInput>
}

export type ClickupTaskUpdateOneRequiredWithoutClickupTaskCustomFieldNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClickupTaskCustomFieldInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClickupTaskCustomFieldInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutClickupTaskCustomFieldInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutClickupTaskCustomFieldInput>
}

export type ClickupTaskUpdateOneRequiredWithoutDependentTasksNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutDependentTasksInput>
  create?: InputMaybe<ClickupTaskCreateWithoutDependentTasksInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutDependentTasksInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutDependentTasksInput>
}

export type ClickupTaskUpdateOneRequiredWithoutDueDatesNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutDueDatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutDueDatesInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutDueDatesInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutDueDatesInput>
}

export type ClickupTaskUpdateOneRequiredWithoutFolderNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutFolderInput>
  create?: InputMaybe<ClickupTaskCreateWithoutFolderInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutFolderInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutFolderInput>
}

export type ClickupTaskUpdateOneRequiredWithoutListNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutListInput>
  create?: InputMaybe<ClickupTaskCreateWithoutListInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutListInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutListInput>
}

export type ClickupTaskUpdateOneRequiredWithoutLocationHistoryNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutLocationHistoryInput>
  create?: InputMaybe<ClickupTaskCreateWithoutLocationHistoryInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutLocationHistoryInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutLocationHistoryInput>
}

export type ClickupTaskUpdateOneRequiredWithoutProjectNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutProjectInput>
  create?: InputMaybe<ClickupTaskCreateWithoutProjectInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutProjectInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutProjectInput>
}

export type ClickupTaskUpdateOneRequiredWithoutStatusNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutStatusInput>
  create?: InputMaybe<ClickupTaskCreateWithoutStatusInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutStatusInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutStatusInput>
}

export type ClickupTaskUpdateOneRequiredWithoutTaskDependenciesNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutTaskDependenciesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutTaskDependenciesInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutTaskDependenciesInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutTaskDependenciesInput>
}

export type ClickupTaskUpdateOneRequiredWithoutTaskPeriodDataNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutTaskPeriodDataInput>
  create?: InputMaybe<ClickupTaskCreateWithoutTaskPeriodDataInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutTaskPeriodDataInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutTaskPeriodDataInput>
}

export type ClickupTaskUpdateOneRequiredWithoutTimeEstimatesNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutTimeEstimatesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutTimeEstimatesInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutTimeEstimatesInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutTimeEstimatesInput>
}

export type ClickupTaskUpdateOneRequiredWithoutWatchersNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutWatchersInput>
  create?: InputMaybe<ClickupTaskCreateWithoutWatchersInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutWatchersInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutWatchersInput>
}

export type ClickupTaskUpdateOneWithoutClockifyTimeEntriesNestedInput = {
  connect?: InputMaybe<ClickupTaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupTaskCreateOrConnectWithoutClockifyTimeEntriesInput>
  create?: InputMaybe<ClickupTaskCreateWithoutClockifyTimeEntriesInput>
  delete?: InputMaybe<ClickupTaskWhereInput>
  disconnect?: InputMaybe<ClickupTaskWhereInput>
  update?: InputMaybe<ClickupTaskUpdateToOneWithWhereWithoutClockifyTimeEntriesInput>
  upsert?: InputMaybe<ClickupTaskUpsertWithoutClockifyTimeEntriesInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutAssigneesInput = {
  data: ClickupTaskUpdateWithoutAssigneesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutAttachmentsInput = {
  data: ClickupTaskUpdateWithoutAttachmentsInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutChecklistsInput = {
  data: ClickupTaskUpdateWithoutChecklistsInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutClickupTaskCustomFieldInput = {
  data: ClickupTaskUpdateWithoutClickupTaskCustomFieldInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutClockifyTimeEntriesInput = {
  data: ClickupTaskUpdateWithoutClockifyTimeEntriesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutDependentTasksInput = {
  data: ClickupTaskUpdateWithoutDependentTasksInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutDueDatesInput = {
  data: ClickupTaskUpdateWithoutDueDatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutFolderInput = {
  data: ClickupTaskUpdateWithoutFolderInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutListInput = {
  data: ClickupTaskUpdateWithoutListInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutLocationHistoryInput = {
  data: ClickupTaskUpdateWithoutLocationHistoryInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutProjectInput = {
  data: ClickupTaskUpdateWithoutProjectInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutStatusInput = {
  data: ClickupTaskUpdateWithoutStatusInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutTaskDependenciesInput = {
  data: ClickupTaskUpdateWithoutTaskDependenciesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutTaskPeriodDataInput = {
  data: ClickupTaskUpdateWithoutTaskPeriodDataInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutTimeEstimatesInput = {
  data: ClickupTaskUpdateWithoutTimeEstimatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateToOneWithWhereWithoutWatchersInput = {
  data: ClickupTaskUpdateWithoutWatchersInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpdateWithWhereUniqueWithoutClickupClockifyProjectInput = {
  data: ClickupTaskUpdateWithoutClickupClockifyProjectInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpdateWithWhereUniqueWithoutCreatorInput = {
  data: ClickupTaskUpdateWithoutCreatorInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpdateWithWhereUniqueWithoutPriorityInput = {
  data: ClickupTaskUpdateWithoutPriorityInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpdateWithWhereUniqueWithoutSpaceInput = {
  data: ClickupTaskUpdateWithoutSpaceInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpdateWithWhereUniqueWithoutTagsInput = {
  data: ClickupTaskUpdateWithoutTagsInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpdateWithoutAssigneesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutAttachmentsInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutChecklistsInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutClickupClockifyProjectInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutClickupTaskCustomFieldInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutClockifyTimeEntriesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutCreatorInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutDependentTasksInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutDueDatesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutFolderInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutListInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutLocationHistoryInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutPriorityInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutProjectInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutSpaceInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutStatusInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutTagsInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutTaskDependenciesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutTaskPeriodDataInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutTimeEstimatesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
  watchers?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput>
}

export type ClickupTaskUpdateWithoutWatchersInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  assignees?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput>
  attachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutTaskNestedInput>
  checklists?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutTaskNestedInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClickupTasksNestedInput>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldUpdateManyWithoutClickupTaskNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClickupTaskNestedInput>
  creator?: InputMaybe<ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput>
  customId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateClosed?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateCreated?: InputMaybe<StringFieldUpdateOperationsInput>
  dateDone?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dateUpdated?: InputMaybe<StringFieldUpdateOperationsInput>
  dependentTasks?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutDependsOnTaskNestedInput>
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  dueDates?: InputMaybe<ClickupTaskDueDateUpdateManyWithoutTaskNestedInput>
  folder?: InputMaybe<ClickupTaskFolderUpdateManyWithoutClickupTaskNestedInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  linkedTasks?: InputMaybe<Scalars['JSON']['input']>
  list?: InputMaybe<ClickupTaskListUpdateManyWithoutClickupTaskNestedInput>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryUpdateManyWithoutClickupTaskNestedInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  orderIndex?: InputMaybe<StringFieldUpdateOperationsInput>
  parent?: InputMaybe<Scalars['JSON']['input']>
  permissionLevel?: InputMaybe<StringFieldUpdateOperationsInput>
  points?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  priority?: InputMaybe<ClickupTaskPriorityUpdateOneWithoutTasksNestedInput>
  project?: InputMaybe<ClickupTaskProjectUpdateManyWithoutClickupTaskNestedInput>
  sharing?: InputMaybe<Scalars['JSON']['input']>
  space?: InputMaybe<ClickupTaskSpaceUpdateOneRequiredWithoutTasksNestedInput>
  startDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  status?: InputMaybe<ClickupTaskStatusOnTaskUpdateManyWithoutTaskNestedInput>
  tags?: InputMaybe<ClickupTaskTagUpdateManyWithoutTasksNestedInput>
  taskDependencies?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutTaskNestedInput>
  taskPeriodData?: InputMaybe<TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput>
  teamId?: InputMaybe<StringFieldUpdateOperationsInput>
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateUpdateManyWithoutTaskNestedInput>
  timeSpent?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>
  url?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClickupTaskUpsertWithWhereUniqueWithoutClickupClockifyProjectInput = {
  create: ClickupTaskCreateWithoutClickupClockifyProjectInput
  update: ClickupTaskUpdateWithoutClickupClockifyProjectInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpsertWithWhereUniqueWithoutCreatorInput = {
  create: ClickupTaskCreateWithoutCreatorInput
  update: ClickupTaskUpdateWithoutCreatorInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpsertWithWhereUniqueWithoutPriorityInput = {
  create: ClickupTaskCreateWithoutPriorityInput
  update: ClickupTaskUpdateWithoutPriorityInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpsertWithWhereUniqueWithoutSpaceInput = {
  create: ClickupTaskCreateWithoutSpaceInput
  update: ClickupTaskUpdateWithoutSpaceInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpsertWithWhereUniqueWithoutTagsInput = {
  create: ClickupTaskCreateWithoutTagsInput
  update: ClickupTaskUpdateWithoutTagsInput
  where: ClickupTaskWhereUniqueInput
}

export type ClickupTaskUpsertWithoutAssigneesInput = {
  create: ClickupTaskCreateWithoutAssigneesInput
  update: ClickupTaskUpdateWithoutAssigneesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutAttachmentsInput = {
  create: ClickupTaskCreateWithoutAttachmentsInput
  update: ClickupTaskUpdateWithoutAttachmentsInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutChecklistsInput = {
  create: ClickupTaskCreateWithoutChecklistsInput
  update: ClickupTaskUpdateWithoutChecklistsInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutClickupTaskCustomFieldInput = {
  create: ClickupTaskCreateWithoutClickupTaskCustomFieldInput
  update: ClickupTaskUpdateWithoutClickupTaskCustomFieldInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutClockifyTimeEntriesInput = {
  create: ClickupTaskCreateWithoutClockifyTimeEntriesInput
  update: ClickupTaskUpdateWithoutClockifyTimeEntriesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutDependentTasksInput = {
  create: ClickupTaskCreateWithoutDependentTasksInput
  update: ClickupTaskUpdateWithoutDependentTasksInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutDueDatesInput = {
  create: ClickupTaskCreateWithoutDueDatesInput
  update: ClickupTaskUpdateWithoutDueDatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutFolderInput = {
  create: ClickupTaskCreateWithoutFolderInput
  update: ClickupTaskUpdateWithoutFolderInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutListInput = {
  create: ClickupTaskCreateWithoutListInput
  update: ClickupTaskUpdateWithoutListInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutLocationHistoryInput = {
  create: ClickupTaskCreateWithoutLocationHistoryInput
  update: ClickupTaskUpdateWithoutLocationHistoryInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutProjectInput = {
  create: ClickupTaskCreateWithoutProjectInput
  update: ClickupTaskUpdateWithoutProjectInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutStatusInput = {
  create: ClickupTaskCreateWithoutStatusInput
  update: ClickupTaskUpdateWithoutStatusInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutTaskDependenciesInput = {
  create: ClickupTaskCreateWithoutTaskDependenciesInput
  update: ClickupTaskUpdateWithoutTaskDependenciesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutTaskPeriodDataInput = {
  create: ClickupTaskCreateWithoutTaskPeriodDataInput
  update: ClickupTaskUpdateWithoutTaskPeriodDataInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutTimeEstimatesInput = {
  create: ClickupTaskCreateWithoutTimeEstimatesInput
  update: ClickupTaskUpdateWithoutTimeEstimatesInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskUpsertWithoutWatchersInput = {
  create: ClickupTaskCreateWithoutWatchersInput
  update: ClickupTaskUpdateWithoutWatchersInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupTaskWhereInput = {
  AND?: InputMaybe<Array<ClickupTaskWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskWhereInput>>
  archived?: InputMaybe<BoolFilter>
  assignees?: InputMaybe<ClickupUserTaskAssigneeListRelationFilter>
  attachments?: InputMaybe<ClickupTaskAttachmentListRelationFilter>
  checklists?: InputMaybe<ClickupTaskChecklistListRelationFilter>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectNullableRelationFilter>
  clickupClockifyProjectId?: InputMaybe<IntNullableFilter>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldListRelationFilter>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  customId?: InputMaybe<StringNullableFilter>
  dateClosed?: InputMaybe<StringNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  dateDone?: InputMaybe<StringNullableFilter>
  dateUpdated?: InputMaybe<StringFilter>
  dependentTasks?: InputMaybe<ClickupTaskDependencyListRelationFilter>
  description?: InputMaybe<StringNullableFilter>
  dueDates?: InputMaybe<ClickupTaskDueDateListRelationFilter>
  folder?: InputMaybe<ClickupTaskFolderListRelationFilter>
  id?: InputMaybe<StringFilter>
  linkedTasks?: InputMaybe<JsonFilter>
  list?: InputMaybe<ClickupTaskListListRelationFilter>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryListRelationFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<StringFilter>
  parent?: InputMaybe<JsonNullableFilter>
  permissionLevel?: InputMaybe<StringFilter>
  points?: InputMaybe<BigIntNullableFilter>
  priority?: InputMaybe<ClickupTaskPriorityNullableRelationFilter>
  priorityId?: InputMaybe<StringNullableFilter>
  project?: InputMaybe<ClickupTaskProjectListRelationFilter>
  sharing?: InputMaybe<JsonFilter>
  space?: InputMaybe<ClickupTaskSpaceRelationFilter>
  spaceId?: InputMaybe<StringFilter>
  startDate?: InputMaybe<StringNullableFilter>
  status?: InputMaybe<ClickupTaskStatusOnTaskListRelationFilter>
  tags?: InputMaybe<ClickupTaskTagListRelationFilter>
  taskDependencies?: InputMaybe<ClickupTaskDependencyListRelationFilter>
  taskPeriodData?: InputMaybe<TaskPeriodDataListRelationFilter>
  teamId?: InputMaybe<StringFilter>
  textContent?: InputMaybe<StringNullableFilter>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateListRelationFilter>
  timeSpent?: InputMaybe<BigIntNullableFilter>
  url?: InputMaybe<StringFilter>
  watchers?: InputMaybe<ClickupUserTaskWatchersListRelationFilter>
}

export type ClickupTaskWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupTaskWhereInput>>
  NOT?: InputMaybe<Array<ClickupTaskWhereInput>>
  OR?: InputMaybe<Array<ClickupTaskWhereInput>>
  archived?: InputMaybe<BoolFilter>
  assignees?: InputMaybe<ClickupUserTaskAssigneeListRelationFilter>
  attachments?: InputMaybe<ClickupTaskAttachmentListRelationFilter>
  checklists?: InputMaybe<ClickupTaskChecklistListRelationFilter>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectNullableRelationFilter>
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  clickupTaskCustomField?: InputMaybe<ClickupTaskCustomFieldListRelationFilter>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  creator?: InputMaybe<ClickupUserRelationFilter>
  creatorId?: InputMaybe<IntFilter>
  customId?: InputMaybe<StringNullableFilter>
  dateClosed?: InputMaybe<StringNullableFilter>
  dateCreated?: InputMaybe<StringFilter>
  dateDone?: InputMaybe<StringNullableFilter>
  dateUpdated?: InputMaybe<StringFilter>
  dependentTasks?: InputMaybe<ClickupTaskDependencyListRelationFilter>
  description?: InputMaybe<StringNullableFilter>
  dueDates?: InputMaybe<ClickupTaskDueDateListRelationFilter>
  folder?: InputMaybe<ClickupTaskFolderListRelationFilter>
  id?: InputMaybe<Scalars['String']['input']>
  linkedTasks?: InputMaybe<JsonFilter>
  list?: InputMaybe<ClickupTaskListListRelationFilter>
  locationHistory?: InputMaybe<ClickupTaskLocationHistoryListRelationFilter>
  name?: InputMaybe<StringFilter>
  orderIndex?: InputMaybe<StringFilter>
  parent?: InputMaybe<JsonNullableFilter>
  permissionLevel?: InputMaybe<StringFilter>
  points?: InputMaybe<BigIntNullableFilter>
  priority?: InputMaybe<ClickupTaskPriorityNullableRelationFilter>
  priorityId?: InputMaybe<StringNullableFilter>
  project?: InputMaybe<ClickupTaskProjectListRelationFilter>
  sharing?: InputMaybe<JsonFilter>
  space?: InputMaybe<ClickupTaskSpaceRelationFilter>
  spaceId?: InputMaybe<StringFilter>
  startDate?: InputMaybe<StringNullableFilter>
  status?: InputMaybe<ClickupTaskStatusOnTaskListRelationFilter>
  tags?: InputMaybe<ClickupTaskTagListRelationFilter>
  taskDependencies?: InputMaybe<ClickupTaskDependencyListRelationFilter>
  taskPeriodData?: InputMaybe<TaskPeriodDataListRelationFilter>
  teamId?: InputMaybe<StringFilter>
  textContent?: InputMaybe<StringNullableFilter>
  timeEstimates?: InputMaybe<ClickupTaskTimeEstimateListRelationFilter>
  timeSpent?: InputMaybe<BigIntNullableFilter>
  url?: InputMaybe<StringFilter>
  watchers?: InputMaybe<ClickupUserTaskWatchersListRelationFilter>
}

export type ClickupUser = {
  __typename?: 'ClickupUser'
  _count?: Maybe<ClickupUserCount>
  assignedTaskChecklistItems: Array<ClickupTaskChecklistItem>
  assignedTasks: Array<ClickupUserTaskAssignee>
  color?: Maybe<Scalars['String']['output']>
  createdTaskAttachments: Array<ClickupTaskAttachment>
  createdTaskChecklist: Array<ClickupTaskChecklist>
  createdTaskDependency: Array<ClickupTaskDependency>
  createdTaskTags: Array<ClickupTaskTag>
  createdTasks: Array<ClickupTask>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  initials?: Maybe<Scalars['String']['output']>
  profilePicture?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
  username?: Maybe<Scalars['String']['output']>
  watchedTasks: Array<ClickupUserTaskWatchers>
}

export type ClickupUserAssignedTaskChecklistItemsArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistItemWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskChecklistItemScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistItemOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type ClickupUserAssignedTasksArgs = {
  cursor?: InputMaybe<ClickupUserTaskAssigneeWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupUserTaskAssigneeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupUserTaskAssigneeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type ClickupUserCreatedTaskAttachmentsArgs = {
  cursor?: InputMaybe<ClickupTaskAttachmentWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskAttachmentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskAttachmentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type ClickupUserCreatedTaskChecklistArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskChecklistScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupUserCreatedTaskDependencyArgs = {
  cursor?: InputMaybe<ClickupTaskDependencyWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskDependencyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskDependencyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type ClickupUserCreatedTaskTagsArgs = {
  cursor?: InputMaybe<ClickupTaskTagWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskTagScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskTagOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type ClickupUserCreatedTasksArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupUserUserArgs = {
  where?: InputMaybe<UserWhereInput>
}

export type ClickupUserWatchedTasksArgs = {
  cursor?: InputMaybe<ClickupUserTaskWatchersWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupUserTaskWatchersScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupUserTaskWatchersOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type ClickupUserAvgAggregate = {
  __typename?: 'ClickupUserAvgAggregate'
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupUserCount = {
  __typename?: 'ClickupUserCount'
  assignedTaskChecklistItems: Scalars['Int']['output']
  assignedTasks: Scalars['Int']['output']
  createdTaskAttachments: Scalars['Int']['output']
  createdTaskChecklist: Scalars['Int']['output']
  createdTaskDependency: Scalars['Int']['output']
  createdTaskTags: Scalars['Int']['output']
  createdTasks: Scalars['Int']['output']
  watchedTasks: Scalars['Int']['output']
}

export type ClickupUserCountAssignedTaskChecklistItemsArgs = {
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type ClickupUserCountAssignedTasksArgs = {
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type ClickupUserCountCreatedTaskAttachmentsArgs = {
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type ClickupUserCountCreatedTaskChecklistArgs = {
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type ClickupUserCountCreatedTaskDependencyArgs = {
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type ClickupUserCountCreatedTaskTagsArgs = {
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type ClickupUserCountCreatedTasksArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClickupUserCountWatchedTasksArgs = {
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type ClickupUserCountAggregate = {
  __typename?: 'ClickupUserCountAggregate'
  _all: Scalars['Int']['output']
  color: Scalars['Int']['output']
  email: Scalars['Int']['output']
  id: Scalars['Int']['output']
  initials: Scalars['Int']['output']
  profilePicture: Scalars['Int']['output']
  username: Scalars['Int']['output']
}

export type ClickupUserCreateInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateManyInput = {
  color?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type ClickupUserCreateNestedOneWithoutAssignedTaskChecklistItemsInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutAssignedTaskChecklistItemsInput>
  create?: InputMaybe<ClickupUserCreateWithoutAssignedTaskChecklistItemsInput>
}

export type ClickupUserCreateNestedOneWithoutAssignedTasksInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutAssignedTasksInput>
  create?: InputMaybe<ClickupUserCreateWithoutAssignedTasksInput>
}

export type ClickupUserCreateNestedOneWithoutCreatedTaskAttachmentsInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskAttachmentsInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskAttachmentsInput>
}

export type ClickupUserCreateNestedOneWithoutCreatedTaskChecklistInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskChecklistInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskChecklistInput>
}

export type ClickupUserCreateNestedOneWithoutCreatedTaskDependencyInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskDependencyInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskDependencyInput>
}

export type ClickupUserCreateNestedOneWithoutCreatedTaskTagsInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskTagsInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskTagsInput>
}

export type ClickupUserCreateNestedOneWithoutCreatedTasksInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTasksInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTasksInput>
}

export type ClickupUserCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutUserInput>
  create?: InputMaybe<ClickupUserCreateWithoutUserInput>
}

export type ClickupUserCreateNestedOneWithoutWatchedTasksInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutWatchedTasksInput>
  create?: InputMaybe<ClickupUserCreateWithoutWatchedTasksInput>
}

export type ClickupUserCreateOrConnectWithoutAssignedTaskChecklistItemsInput = {
  create: ClickupUserCreateWithoutAssignedTaskChecklistItemsInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutAssignedTasksInput = {
  create: ClickupUserCreateWithoutAssignedTasksInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutCreatedTaskAttachmentsInput = {
  create: ClickupUserCreateWithoutCreatedTaskAttachmentsInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutCreatedTaskChecklistInput = {
  create: ClickupUserCreateWithoutCreatedTaskChecklistInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutCreatedTaskDependencyInput = {
  create: ClickupUserCreateWithoutCreatedTaskDependencyInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutCreatedTaskTagsInput = {
  create: ClickupUserCreateWithoutCreatedTaskTagsInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutCreatedTasksInput = {
  create: ClickupUserCreateWithoutCreatedTasksInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutUserInput = {
  create: ClickupUserCreateWithoutUserInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateOrConnectWithoutWatchedTasksInput = {
  create: ClickupUserCreateWithoutWatchedTasksInput
  where: ClickupUserWhereUniqueInput
}

export type ClickupUserCreateWithoutAssignedTaskChecklistItemsInput = {
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutAssignedTasksInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutCreatedTaskAttachmentsInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutCreatedTaskChecklistInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutCreatedTaskDependencyInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutCreatedTaskTagsInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutCreatedTasksInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutUserInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  username?: InputMaybe<Scalars['String']['input']>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput>
}

export type ClickupUserCreateWithoutWatchedTasksInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemCreateNestedManyWithoutAssigneeInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentCreateNestedManyWithoutCreatorInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistCreateNestedManyWithoutCreatorInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyCreateNestedManyWithoutCreatorInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagCreateNestedManyWithoutCreatorInput>
  createdTasks?: InputMaybe<ClickupTaskCreateNestedManyWithoutCreatorInput>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  initials?: InputMaybe<Scalars['String']['input']>
  profilePicture?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<UserCreateNestedOneWithoutClickupUserInput>
  username?: InputMaybe<Scalars['String']['input']>
}

export type ClickupUserMaxAggregate = {
  __typename?: 'ClickupUserMaxAggregate'
  color?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  initials?: Maybe<Scalars['String']['output']>
  profilePicture?: Maybe<Scalars['String']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type ClickupUserMinAggregate = {
  __typename?: 'ClickupUserMinAggregate'
  color?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  initials?: Maybe<Scalars['String']['output']>
  profilePicture?: Maybe<Scalars['String']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type ClickupUserNullableRelationFilter = {
  is?: InputMaybe<ClickupUserWhereInput>
  isNot?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserOrderByWithRelationInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemOrderByRelationAggregateInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeOrderByRelationAggregateInput>
  color?: InputMaybe<SortOrderInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentOrderByRelationAggregateInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistOrderByRelationAggregateInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyOrderByRelationAggregateInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagOrderByRelationAggregateInput>
  createdTasks?: InputMaybe<ClickupTaskOrderByRelationAggregateInput>
  email?: InputMaybe<SortOrderInput>
  id?: InputMaybe<SortOrder>
  initials?: InputMaybe<SortOrderInput>
  profilePicture?: InputMaybe<SortOrderInput>
  user?: InputMaybe<UserOrderByWithRelationInput>
  username?: InputMaybe<SortOrderInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersOrderByRelationAggregateInput>
}

export type ClickupUserRelationFilter = {
  is?: InputMaybe<ClickupUserWhereInput>
  isNot?: InputMaybe<ClickupUserWhereInput>
}

export enum ClickupUserScalarFieldEnum {
  Color = 'color',
  Email = 'email',
  Id = 'id',
  Initials = 'initials',
  ProfilePicture = 'profilePicture',
  Username = 'username',
}

export type ClickupUserSumAggregate = {
  __typename?: 'ClickupUserSumAggregate'
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupUserTaskAssignee = {
  __typename?: 'ClickupUserTaskAssignee'
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
  clickupUser: ClickupUser
  clickupUserId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  isAssigned: Scalars['Boolean']['output']
}

export type ClickupUserTaskAssigneeAvgAggregate = {
  __typename?: 'ClickupUserTaskAssigneeAvgAggregate'
  clickupUserId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type ClickupUserTaskAssigneeCountAggregate = {
  __typename?: 'ClickupUserTaskAssigneeCountAggregate'
  _all: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  clickupUserId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  id: Scalars['Int']['output']
  isAssigned: Scalars['Int']['output']
}

export type ClickupUserTaskAssigneeCreateInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutAssigneesInput
  clickupUser: ClickupUserCreateNestedOneWithoutAssignedTasksInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeCreateManyClickupTaskInput = {
  clickupUserId: Scalars['Int']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupUserTaskAssigneeCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeCreateManyClickupUserInput = {
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeCreateManyClickupUserInputEnvelope = {
  data: Array<ClickupUserTaskAssigneeCreateManyClickupUserInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeCreateManyInput = {
  clickupTaskId: Scalars['String']['input']
  clickupUserId: Scalars['Int']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskAssigneeCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupUserTaskAssigneeCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupUserTaskAssigneeCreateManyClickupTaskInputEnvelope>
}

export type ClickupUserTaskAssigneeCreateNestedManyWithoutClickupUserInput = {
  connect?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskAssigneeCreateOrConnectWithoutClickupUserInput>>
  create?: InputMaybe<Array<ClickupUserTaskAssigneeCreateWithoutClickupUserInput>>
  createMany?: InputMaybe<ClickupUserTaskAssigneeCreateManyClickupUserInputEnvelope>
}

export type ClickupUserTaskAssigneeCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupUserTaskAssigneeCreateWithoutClickupTaskInput
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type ClickupUserTaskAssigneeCreateOrConnectWithoutClickupUserInput = {
  create: ClickupUserTaskAssigneeCreateWithoutClickupUserInput
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type ClickupUserTaskAssigneeCreateWithoutClickupTaskInput = {
  clickupUser: ClickupUserCreateNestedOneWithoutAssignedTasksInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeCreateWithoutClickupUserInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutAssigneesInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskAssigneeListRelationFilter = {
  every?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
  none?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
  some?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type ClickupUserTaskAssigneeMaxAggregate = {
  __typename?: 'ClickupUserTaskAssigneeMaxAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clickupUserId?: Maybe<Scalars['Int']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  isAssigned?: Maybe<Scalars['Boolean']['output']>
}

export type ClickupUserTaskAssigneeMinAggregate = {
  __typename?: 'ClickupUserTaskAssigneeMinAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clickupUserId?: Maybe<Scalars['Int']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  isAssigned?: Maybe<Scalars['Boolean']['output']>
}

export type ClickupUserTaskAssigneeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupUserTaskAssigneeOrderByWithRelationInput = {
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  clickupUser?: InputMaybe<ClickupUserOrderByWithRelationInput>
  clickupUserId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  isAssigned?: InputMaybe<SortOrder>
}

export enum ClickupUserTaskAssigneeScalarFieldEnum {
  ClickupTaskId = 'clickupTaskId',
  ClickupUserId = 'clickupUserId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsAssigned = 'isAssigned',
}

export type ClickupUserTaskAssigneeScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupUserTaskAssigneeScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserTaskAssigneeScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupUserTaskAssigneeScalarWhereInput>>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupUserId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  isAssigned?: InputMaybe<BoolFilter>
}

export type ClickupUserTaskAssigneeSumAggregate = {
  __typename?: 'ClickupUserTaskAssigneeSumAggregate'
  clickupUserId?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type ClickupUserTaskAssigneeUpdateInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutAssigneesNestedInput>
  clickupUser?: InputMaybe<ClickupUserUpdateOneRequiredWithoutAssignedTasksNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  isAssigned?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupUserTaskAssigneeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  isAssigned?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupUserTaskAssigneeUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupUserTaskAssigneeUpdateManyMutationInput
  where: ClickupUserTaskAssigneeScalarWhereInput
}

export type ClickupUserTaskAssigneeUpdateManyWithWhereWithoutClickupUserInput = {
  data: ClickupUserTaskAssigneeUpdateManyMutationInput
  where: ClickupUserTaskAssigneeScalarWhereInput
}

export type ClickupUserTaskAssigneeUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskAssigneeCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupUserTaskAssigneeCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupUserTaskAssigneeCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupUserTaskAssigneeScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupUserTaskAssigneeUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupUserTaskAssigneeUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupUserTaskAssigneeUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput = {
  connect?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskAssigneeCreateOrConnectWithoutClickupUserInput>>
  create?: InputMaybe<Array<ClickupUserTaskAssigneeCreateWithoutClickupUserInput>>
  createMany?: InputMaybe<ClickupUserTaskAssigneeCreateManyClickupUserInputEnvelope>
  delete?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupUserTaskAssigneeScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupUserTaskAssigneeWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupUserTaskAssigneeUpdateWithWhereUniqueWithoutClickupUserInput>>
  updateMany?: InputMaybe<Array<ClickupUserTaskAssigneeUpdateManyWithWhereWithoutClickupUserInput>>
  upsert?: InputMaybe<Array<ClickupUserTaskAssigneeUpsertWithWhereUniqueWithoutClickupUserInput>>
}

export type ClickupUserTaskAssigneeUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupUserTaskAssigneeUpdateWithoutClickupTaskInput
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type ClickupUserTaskAssigneeUpdateWithWhereUniqueWithoutClickupUserInput = {
  data: ClickupUserTaskAssigneeUpdateWithoutClickupUserInput
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type ClickupUserTaskAssigneeUpdateWithoutClickupTaskInput = {
  clickupUser?: InputMaybe<ClickupUserUpdateOneRequiredWithoutAssignedTasksNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  isAssigned?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupUserTaskAssigneeUpdateWithoutClickupUserInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutAssigneesNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  isAssigned?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type ClickupUserTaskAssigneeUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupUserTaskAssigneeCreateWithoutClickupTaskInput
  update: ClickupUserTaskAssigneeUpdateWithoutClickupTaskInput
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type ClickupUserTaskAssigneeUpsertWithWhereUniqueWithoutClickupUserInput = {
  create: ClickupUserTaskAssigneeCreateWithoutClickupUserInput
  update: ClickupUserTaskAssigneeUpdateWithoutClickupUserInput
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type ClickupUserTaskAssigneeWhereInput = {
  AND?: InputMaybe<Array<ClickupUserTaskAssigneeWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserTaskAssigneeWhereInput>>
  OR?: InputMaybe<Array<ClickupUserTaskAssigneeWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupUser?: InputMaybe<ClickupUserRelationFilter>
  clickupUserId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  isAssigned?: InputMaybe<BoolFilter>
}

export type ClickupUserTaskAssigneeWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupUserTaskAssigneeWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserTaskAssigneeWhereInput>>
  OR?: InputMaybe<Array<ClickupUserTaskAssigneeWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupUser?: InputMaybe<ClickupUserRelationFilter>
  clickupUserId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  isAssigned?: InputMaybe<BoolFilter>
}

export type ClickupUserTaskWatchers = {
  __typename?: 'ClickupUserTaskWatchers'
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
  clickupUser: ClickupUser
  clickupUserId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
}

export type ClickupUserTaskWatchersAvgAggregate = {
  __typename?: 'ClickupUserTaskWatchersAvgAggregate'
  clickupUserId?: Maybe<Scalars['Float']['output']>
}

export type ClickupUserTaskWatchersClickupUserIdClickupTaskIdCompoundUniqueInput = {
  clickupTaskId: Scalars['String']['input']
  clickupUserId: Scalars['Int']['input']
}

export type ClickupUserTaskWatchersCountAggregate = {
  __typename?: 'ClickupUserTaskWatchersCountAggregate'
  _all: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  clickupUserId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
}

export type ClickupUserTaskWatchersCreateInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutWatchersInput
  clickupUser: ClickupUserCreateNestedOneWithoutWatchedTasksInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupUserTaskWatchersCreateManyClickupTaskInput = {
  clickupUserId: Scalars['Int']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupUserTaskWatchersCreateManyClickupTaskInputEnvelope = {
  data: Array<ClickupUserTaskWatchersCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskWatchersCreateManyClickupUserInput = {
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupUserTaskWatchersCreateManyClickupUserInputEnvelope = {
  data: Array<ClickupUserTaskWatchersCreateManyClickupUserInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClickupUserTaskWatchersCreateManyInput = {
  clickupTaskId: Scalars['String']['input']
  clickupUserId: Scalars['Int']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupUserTaskWatchersCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskWatchersCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupUserTaskWatchersCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupUserTaskWatchersCreateManyClickupTaskInputEnvelope>
}

export type ClickupUserTaskWatchersCreateNestedManyWithoutClickupUserInput = {
  connect?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskWatchersCreateOrConnectWithoutClickupUserInput>>
  create?: InputMaybe<Array<ClickupUserTaskWatchersCreateWithoutClickupUserInput>>
  createMany?: InputMaybe<ClickupUserTaskWatchersCreateManyClickupUserInputEnvelope>
}

export type ClickupUserTaskWatchersCreateOrConnectWithoutClickupTaskInput = {
  create: ClickupUserTaskWatchersCreateWithoutClickupTaskInput
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type ClickupUserTaskWatchersCreateOrConnectWithoutClickupUserInput = {
  create: ClickupUserTaskWatchersCreateWithoutClickupUserInput
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type ClickupUserTaskWatchersCreateWithoutClickupTaskInput = {
  clickupUser: ClickupUserCreateNestedOneWithoutWatchedTasksInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupUserTaskWatchersCreateWithoutClickupUserInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutWatchersInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClickupUserTaskWatchersListRelationFilter = {
  every?: InputMaybe<ClickupUserTaskWatchersWhereInput>
  none?: InputMaybe<ClickupUserTaskWatchersWhereInput>
  some?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type ClickupUserTaskWatchersMaxAggregate = {
  __typename?: 'ClickupUserTaskWatchersMaxAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clickupUserId?: Maybe<Scalars['Int']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupUserTaskWatchersMinAggregate = {
  __typename?: 'ClickupUserTaskWatchersMinAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clickupUserId?: Maybe<Scalars['Int']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClickupUserTaskWatchersOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClickupUserTaskWatchersOrderByWithRelationInput = {
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  clickupUser?: InputMaybe<ClickupUserOrderByWithRelationInput>
  clickupUserId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
}

export enum ClickupUserTaskWatchersScalarFieldEnum {
  ClickupTaskId = 'clickupTaskId',
  ClickupUserId = 'clickupUserId',
  CreatedAt = 'createdAt',
}

export type ClickupUserTaskWatchersScalarWhereInput = {
  AND?: InputMaybe<Array<ClickupUserTaskWatchersScalarWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserTaskWatchersScalarWhereInput>>
  OR?: InputMaybe<Array<ClickupUserTaskWatchersScalarWhereInput>>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupUserId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClickupUserTaskWatchersSumAggregate = {
  __typename?: 'ClickupUserTaskWatchersSumAggregate'
  clickupUserId?: Maybe<Scalars['Int']['output']>
}

export type ClickupUserTaskWatchersUpdateInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutWatchersNestedInput>
  clickupUser?: InputMaybe<ClickupUserUpdateOneRequiredWithoutWatchedTasksNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupUserTaskWatchersUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupUserTaskWatchersUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClickupUserTaskWatchersUpdateManyMutationInput
  where: ClickupUserTaskWatchersScalarWhereInput
}

export type ClickupUserTaskWatchersUpdateManyWithWhereWithoutClickupUserInput = {
  data: ClickupUserTaskWatchersUpdateManyMutationInput
  where: ClickupUserTaskWatchersScalarWhereInput
}

export type ClickupUserTaskWatchersUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskWatchersCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClickupUserTaskWatchersCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClickupUserTaskWatchersCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupUserTaskWatchersScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupUserTaskWatchersUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<ClickupUserTaskWatchersUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<ClickupUserTaskWatchersUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput = {
  connect?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClickupUserTaskWatchersCreateOrConnectWithoutClickupUserInput>>
  create?: InputMaybe<Array<ClickupUserTaskWatchersCreateWithoutClickupUserInput>>
  createMany?: InputMaybe<ClickupUserTaskWatchersCreateManyClickupUserInputEnvelope>
  delete?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClickupUserTaskWatchersScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  set?: InputMaybe<Array<ClickupUserTaskWatchersWhereUniqueInput>>
  update?: InputMaybe<Array<ClickupUserTaskWatchersUpdateWithWhereUniqueWithoutClickupUserInput>>
  updateMany?: InputMaybe<Array<ClickupUserTaskWatchersUpdateManyWithWhereWithoutClickupUserInput>>
  upsert?: InputMaybe<Array<ClickupUserTaskWatchersUpsertWithWhereUniqueWithoutClickupUserInput>>
}

export type ClickupUserTaskWatchersUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClickupUserTaskWatchersUpdateWithoutClickupTaskInput
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type ClickupUserTaskWatchersUpdateWithWhereUniqueWithoutClickupUserInput = {
  data: ClickupUserTaskWatchersUpdateWithoutClickupUserInput
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type ClickupUserTaskWatchersUpdateWithoutClickupTaskInput = {
  clickupUser?: InputMaybe<ClickupUserUpdateOneRequiredWithoutWatchedTasksNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupUserTaskWatchersUpdateWithoutClickupUserInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutWatchersNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClickupUserTaskWatchersUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClickupUserTaskWatchersCreateWithoutClickupTaskInput
  update: ClickupUserTaskWatchersUpdateWithoutClickupTaskInput
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type ClickupUserTaskWatchersUpsertWithWhereUniqueWithoutClickupUserInput = {
  create: ClickupUserTaskWatchersCreateWithoutClickupUserInput
  update: ClickupUserTaskWatchersUpdateWithoutClickupUserInput
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type ClickupUserTaskWatchersWhereInput = {
  AND?: InputMaybe<Array<ClickupUserTaskWatchersWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserTaskWatchersWhereInput>>
  OR?: InputMaybe<Array<ClickupUserTaskWatchersWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupUser?: InputMaybe<ClickupUserRelationFilter>
  clickupUserId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClickupUserTaskWatchersWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupUserTaskWatchersWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserTaskWatchersWhereInput>>
  OR?: InputMaybe<Array<ClickupUserTaskWatchersWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupUser?: InputMaybe<ClickupUserRelationFilter>
  clickupUserId?: InputMaybe<IntFilter>
  clickupUserId_clickupTaskId?: InputMaybe<ClickupUserTaskWatchersClickupUserIdClickupTaskIdCompoundUniqueInput>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClickupUserUpdateInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateManyMutationInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
}

export type ClickupUserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutAssignedTasksInput>
  create?: InputMaybe<ClickupUserCreateWithoutAssignedTasksInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutAssignedTasksInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutAssignedTasksInput>
}

export type ClickupUserUpdateOneRequiredWithoutCreatedTaskAttachmentsNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskAttachmentsInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskAttachmentsInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutCreatedTaskAttachmentsInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutCreatedTaskAttachmentsInput>
}

export type ClickupUserUpdateOneRequiredWithoutCreatedTaskChecklistNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskChecklistInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskChecklistInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutCreatedTaskChecklistInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutCreatedTaskChecklistInput>
}

export type ClickupUserUpdateOneRequiredWithoutCreatedTaskDependencyNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskDependencyInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskDependencyInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutCreatedTaskDependencyInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutCreatedTaskDependencyInput>
}

export type ClickupUserUpdateOneRequiredWithoutCreatedTaskTagsNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTaskTagsInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTaskTagsInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutCreatedTaskTagsInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutCreatedTaskTagsInput>
}

export type ClickupUserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutCreatedTasksInput>
  create?: InputMaybe<ClickupUserCreateWithoutCreatedTasksInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutCreatedTasksInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutCreatedTasksInput>
}

export type ClickupUserUpdateOneRequiredWithoutWatchedTasksNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutWatchedTasksInput>
  create?: InputMaybe<ClickupUserCreateWithoutWatchedTasksInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutWatchedTasksInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutWatchedTasksInput>
}

export type ClickupUserUpdateOneWithoutAssignedTaskChecklistItemsNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutAssignedTaskChecklistItemsInput>
  create?: InputMaybe<ClickupUserCreateWithoutAssignedTaskChecklistItemsInput>
  delete?: InputMaybe<ClickupUserWhereInput>
  disconnect?: InputMaybe<ClickupUserWhereInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutAssignedTaskChecklistItemsInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutAssignedTaskChecklistItemsInput>
}

export type ClickupUserUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ClickupUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClickupUserCreateOrConnectWithoutUserInput>
  create?: InputMaybe<ClickupUserCreateWithoutUserInput>
  delete?: InputMaybe<ClickupUserWhereInput>
  disconnect?: InputMaybe<ClickupUserWhereInput>
  update?: InputMaybe<ClickupUserUpdateToOneWithWhereWithoutUserInput>
  upsert?: InputMaybe<ClickupUserUpsertWithoutUserInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutAssignedTaskChecklistItemsInput = {
  data: ClickupUserUpdateWithoutAssignedTaskChecklistItemsInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutAssignedTasksInput = {
  data: ClickupUserUpdateWithoutAssignedTasksInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutCreatedTaskAttachmentsInput = {
  data: ClickupUserUpdateWithoutCreatedTaskAttachmentsInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutCreatedTaskChecklistInput = {
  data: ClickupUserUpdateWithoutCreatedTaskChecklistInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutCreatedTaskDependencyInput = {
  data: ClickupUserUpdateWithoutCreatedTaskDependencyInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutCreatedTaskTagsInput = {
  data: ClickupUserUpdateWithoutCreatedTaskTagsInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutCreatedTasksInput = {
  data: ClickupUserUpdateWithoutCreatedTasksInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutUserInput = {
  data: ClickupUserUpdateWithoutUserInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateToOneWithWhereWithoutWatchedTasksInput = {
  data: ClickupUserUpdateWithoutWatchedTasksInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpdateWithoutAssignedTaskChecklistItemsInput = {
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutAssignedTasksInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutCreatedTaskAttachmentsInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutCreatedTaskChecklistInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutCreatedTaskDependencyInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutCreatedTaskTagsInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutCreatedTasksInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutUserInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersUpdateManyWithoutClickupUserNestedInput>
}

export type ClickupUserUpdateWithoutWatchedTasksInput = {
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemUpdateManyWithoutAssigneeNestedInput>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeUpdateManyWithoutClickupUserNestedInput>
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentUpdateManyWithoutCreatorNestedInput>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistUpdateManyWithoutCreatorNestedInput>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyUpdateManyWithoutCreatorNestedInput>
  createdTaskTags?: InputMaybe<ClickupTaskTagUpdateManyWithoutCreatorNestedInput>
  createdTasks?: InputMaybe<ClickupTaskUpdateManyWithoutCreatorNestedInput>
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  id?: InputMaybe<IntFieldUpdateOperationsInput>
  initials?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClickupUserNestedInput>
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>
}

export type ClickupUserUpsertWithoutAssignedTaskChecklistItemsInput = {
  create: ClickupUserCreateWithoutAssignedTaskChecklistItemsInput
  update: ClickupUserUpdateWithoutAssignedTaskChecklistItemsInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutAssignedTasksInput = {
  create: ClickupUserCreateWithoutAssignedTasksInput
  update: ClickupUserUpdateWithoutAssignedTasksInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutCreatedTaskAttachmentsInput = {
  create: ClickupUserCreateWithoutCreatedTaskAttachmentsInput
  update: ClickupUserUpdateWithoutCreatedTaskAttachmentsInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutCreatedTaskChecklistInput = {
  create: ClickupUserCreateWithoutCreatedTaskChecklistInput
  update: ClickupUserUpdateWithoutCreatedTaskChecklistInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutCreatedTaskDependencyInput = {
  create: ClickupUserCreateWithoutCreatedTaskDependencyInput
  update: ClickupUserUpdateWithoutCreatedTaskDependencyInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutCreatedTaskTagsInput = {
  create: ClickupUserCreateWithoutCreatedTaskTagsInput
  update: ClickupUserUpdateWithoutCreatedTaskTagsInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutCreatedTasksInput = {
  create: ClickupUserCreateWithoutCreatedTasksInput
  update: ClickupUserUpdateWithoutCreatedTasksInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutUserInput = {
  create: ClickupUserCreateWithoutUserInput
  update: ClickupUserUpdateWithoutUserInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserUpsertWithoutWatchedTasksInput = {
  create: ClickupUserCreateWithoutWatchedTasksInput
  update: ClickupUserUpdateWithoutWatchedTasksInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type ClickupUserWhereInput = {
  AND?: InputMaybe<Array<ClickupUserWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserWhereInput>>
  OR?: InputMaybe<Array<ClickupUserWhereInput>>
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemListRelationFilter>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeListRelationFilter>
  color?: InputMaybe<StringNullableFilter>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentListRelationFilter>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistListRelationFilter>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyListRelationFilter>
  createdTaskTags?: InputMaybe<ClickupTaskTagListRelationFilter>
  createdTasks?: InputMaybe<ClickupTaskListRelationFilter>
  email?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<IntFilter>
  initials?: InputMaybe<StringNullableFilter>
  profilePicture?: InputMaybe<StringNullableFilter>
  user?: InputMaybe<UserNullableRelationFilter>
  username?: InputMaybe<StringNullableFilter>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersListRelationFilter>
}

export type ClickupUserWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupUserWhereInput>>
  NOT?: InputMaybe<Array<ClickupUserWhereInput>>
  OR?: InputMaybe<Array<ClickupUserWhereInput>>
  assignedTaskChecklistItems?: InputMaybe<ClickupTaskChecklistItemListRelationFilter>
  assignedTasks?: InputMaybe<ClickupUserTaskAssigneeListRelationFilter>
  color?: InputMaybe<StringNullableFilter>
  createdTaskAttachments?: InputMaybe<ClickupTaskAttachmentListRelationFilter>
  createdTaskChecklist?: InputMaybe<ClickupTaskChecklistListRelationFilter>
  createdTaskDependency?: InputMaybe<ClickupTaskDependencyListRelationFilter>
  createdTaskTags?: InputMaybe<ClickupTaskTagListRelationFilter>
  createdTasks?: InputMaybe<ClickupTaskListRelationFilter>
  email?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  initials?: InputMaybe<StringNullableFilter>
  profilePicture?: InputMaybe<StringNullableFilter>
  user?: InputMaybe<UserNullableRelationFilter>
  username?: InputMaybe<StringNullableFilter>
  watchedTasks?: InputMaybe<ClickupUserTaskWatchersListRelationFilter>
}

export type ClickupWebhook = {
  __typename?: 'ClickupWebhook'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  secret: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  webhookId: Scalars['String']['output']
}

export type ClickupWebhookAvgAggregate = {
  __typename?: 'ClickupWebhookAvgAggregate'
  id?: Maybe<Scalars['Float']['output']>
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
  secret: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  webhookId: Scalars['String']['input']
}

export type ClickupWebhookCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  secret: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  webhookId: Scalars['String']['input']
}

export type ClickupWebhookMaxAggregate = {
  __typename?: 'ClickupWebhookMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  secret?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  webhookId?: Maybe<Scalars['String']['output']>
}

export type ClickupWebhookMinAggregate = {
  __typename?: 'ClickupWebhookMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
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

export type ClickupWebhookSumAggregate = {
  __typename?: 'ClickupWebhookSumAggregate'
  id?: Maybe<Scalars['Int']['output']>
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
  id?: InputMaybe<IntFilter>
  secret?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  webhookId?: InputMaybe<StringFilter>
}

export type ClickupWebhookWhereUniqueInput = {
  AND?: InputMaybe<Array<ClickupWebhookWhereInput>>
  NOT?: InputMaybe<Array<ClickupWebhookWhereInput>>
  OR?: InputMaybe<Array<ClickupWebhookWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  secret?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  webhookId?: InputMaybe<Scalars['String']['input']>
}

export type ClockifyTagOnTimeEntry = {
  __typename?: 'ClockifyTagOnTimeEntry'
  clockifyTag: ClockifyTimeEntryTag
  clockifyTagId: Scalars['String']['output']
  clockifyTimeEntry: ClockifyTimeEntry
  clockifyTimeEntryId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
}

export type ClockifyTagOnTimeEntryClockifyTagIdClockifyTimeEntryIdCompoundUniqueInput = {
  clockifyTagId: Scalars['String']['input']
  clockifyTimeEntryId: Scalars['String']['input']
}

export type ClockifyTagOnTimeEntryCountAggregate = {
  __typename?: 'ClockifyTagOnTimeEntryCountAggregate'
  _all: Scalars['Int']['output']
  clockifyTagId: Scalars['Int']['output']
  clockifyTimeEntryId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
}

export type ClockifyTagOnTimeEntryCreateInput = {
  clockifyTag: ClockifyTimeEntryTagCreateNestedOneWithoutTimeEntriesInput
  clockifyTimeEntry: ClockifyTimeEntryCreateNestedOneWithoutTagsInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClockifyTagOnTimeEntryCreateManyClockifyTagInput = {
  clockifyTimeEntryId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClockifyTagOnTimeEntryCreateManyClockifyTagInputEnvelope = {
  data: Array<ClockifyTagOnTimeEntryCreateManyClockifyTagInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockifyTagOnTimeEntryCreateManyClockifyTimeEntryInput = {
  clockifyTagId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClockifyTagOnTimeEntryCreateManyClockifyTimeEntryInputEnvelope = {
  data: Array<ClockifyTagOnTimeEntryCreateManyClockifyTimeEntryInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockifyTagOnTimeEntryCreateManyInput = {
  clockifyTagId: Scalars['String']['input']
  clockifyTimeEntryId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTagInput = {
  connect?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateOrConnectWithoutClockifyTagInput>>
  create?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateWithoutClockifyTagInput>>
  createMany?: InputMaybe<ClockifyTagOnTimeEntryCreateManyClockifyTagInputEnvelope>
}

export type ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTimeEntryInput = {
  connect?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateOrConnectWithoutClockifyTimeEntryInput>>
  create?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateWithoutClockifyTimeEntryInput>>
  createMany?: InputMaybe<ClockifyTagOnTimeEntryCreateManyClockifyTimeEntryInputEnvelope>
}

export type ClockifyTagOnTimeEntryCreateOrConnectWithoutClockifyTagInput = {
  create: ClockifyTagOnTimeEntryCreateWithoutClockifyTagInput
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type ClockifyTagOnTimeEntryCreateOrConnectWithoutClockifyTimeEntryInput = {
  create: ClockifyTagOnTimeEntryCreateWithoutClockifyTimeEntryInput
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type ClockifyTagOnTimeEntryCreateWithoutClockifyTagInput = {
  clockifyTimeEntry: ClockifyTimeEntryCreateNestedOneWithoutTagsInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClockifyTagOnTimeEntryCreateWithoutClockifyTimeEntryInput = {
  clockifyTag: ClockifyTimeEntryTagCreateNestedOneWithoutTimeEntriesInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ClockifyTagOnTimeEntryListRelationFilter = {
  every?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
  none?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
  some?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type ClockifyTagOnTimeEntryMaxAggregate = {
  __typename?: 'ClockifyTagOnTimeEntryMaxAggregate'
  clockifyTagId?: Maybe<Scalars['String']['output']>
  clockifyTimeEntryId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClockifyTagOnTimeEntryMinAggregate = {
  __typename?: 'ClockifyTagOnTimeEntryMinAggregate'
  clockifyTagId?: Maybe<Scalars['String']['output']>
  clockifyTimeEntryId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
}

export type ClockifyTagOnTimeEntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClockifyTagOnTimeEntryOrderByWithRelationInput = {
  clockifyTag?: InputMaybe<ClockifyTimeEntryTagOrderByWithRelationInput>
  clockifyTagId?: InputMaybe<SortOrder>
  clockifyTimeEntry?: InputMaybe<ClockifyTimeEntryOrderByWithRelationInput>
  clockifyTimeEntryId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
}

export enum ClockifyTagOnTimeEntryScalarFieldEnum {
  ClockifyTagId = 'clockifyTagId',
  ClockifyTimeEntryId = 'clockifyTimeEntryId',
  CreatedAt = 'createdAt',
}

export type ClockifyTagOnTimeEntryScalarWhereInput = {
  AND?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarWhereInput>>
  OR?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarWhereInput>>
  clockifyTagId?: InputMaybe<StringFilter>
  clockifyTimeEntryId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClockifyTagOnTimeEntryUpdateInput = {
  clockifyTag?: InputMaybe<ClockifyTimeEntryTagUpdateOneRequiredWithoutTimeEntriesNestedInput>
  clockifyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateOneRequiredWithoutTagsNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClockifyTagOnTimeEntryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClockifyTagOnTimeEntryUpdateManyWithWhereWithoutClockifyTagInput = {
  data: ClockifyTagOnTimeEntryUpdateManyMutationInput
  where: ClockifyTagOnTimeEntryScalarWhereInput
}

export type ClockifyTagOnTimeEntryUpdateManyWithWhereWithoutClockifyTimeEntryInput = {
  data: ClockifyTagOnTimeEntryUpdateManyMutationInput
  where: ClockifyTagOnTimeEntryScalarWhereInput
}

export type ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTagNestedInput = {
  connect?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateOrConnectWithoutClockifyTagInput>>
  create?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateWithoutClockifyTagInput>>
  createMany?: InputMaybe<ClockifyTagOnTimeEntryCreateManyClockifyTagInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTagOnTimeEntryUpdateWithWhereUniqueWithoutClockifyTagInput>>
  updateMany?: InputMaybe<Array<ClockifyTagOnTimeEntryUpdateManyWithWhereWithoutClockifyTagInput>>
  upsert?: InputMaybe<Array<ClockifyTagOnTimeEntryUpsertWithWhereUniqueWithoutClockifyTagInput>>
}

export type ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTimeEntryNestedInput = {
  connect?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateOrConnectWithoutClockifyTimeEntryInput>>
  create?: InputMaybe<Array<ClockifyTagOnTimeEntryCreateWithoutClockifyTimeEntryInput>>
  createMany?: InputMaybe<ClockifyTagOnTimeEntryCreateManyClockifyTimeEntryInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTagOnTimeEntryUpdateWithWhereUniqueWithoutClockifyTimeEntryInput>>
  updateMany?: InputMaybe<Array<ClockifyTagOnTimeEntryUpdateManyWithWhereWithoutClockifyTimeEntryInput>>
  upsert?: InputMaybe<Array<ClockifyTagOnTimeEntryUpsertWithWhereUniqueWithoutClockifyTimeEntryInput>>
}

export type ClockifyTagOnTimeEntryUpdateWithWhereUniqueWithoutClockifyTagInput = {
  data: ClockifyTagOnTimeEntryUpdateWithoutClockifyTagInput
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type ClockifyTagOnTimeEntryUpdateWithWhereUniqueWithoutClockifyTimeEntryInput = {
  data: ClockifyTagOnTimeEntryUpdateWithoutClockifyTimeEntryInput
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type ClockifyTagOnTimeEntryUpdateWithoutClockifyTagInput = {
  clockifyTimeEntry?: InputMaybe<ClockifyTimeEntryUpdateOneRequiredWithoutTagsNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClockifyTagOnTimeEntryUpdateWithoutClockifyTimeEntryInput = {
  clockifyTag?: InputMaybe<ClockifyTimeEntryTagUpdateOneRequiredWithoutTimeEntriesNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ClockifyTagOnTimeEntryUpsertWithWhereUniqueWithoutClockifyTagInput = {
  create: ClockifyTagOnTimeEntryCreateWithoutClockifyTagInput
  update: ClockifyTagOnTimeEntryUpdateWithoutClockifyTagInput
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type ClockifyTagOnTimeEntryUpsertWithWhereUniqueWithoutClockifyTimeEntryInput = {
  create: ClockifyTagOnTimeEntryCreateWithoutClockifyTimeEntryInput
  update: ClockifyTagOnTimeEntryUpdateWithoutClockifyTimeEntryInput
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type ClockifyTagOnTimeEntryWhereInput = {
  AND?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereInput>>
  OR?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereInput>>
  clockifyTag?: InputMaybe<ClockifyTimeEntryTagRelationFilter>
  clockifyTagId?: InputMaybe<StringFilter>
  clockifyTimeEntry?: InputMaybe<ClockifyTimeEntryRelationFilter>
  clockifyTimeEntryId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClockifyTagOnTimeEntryWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereInput>>
  OR?: InputMaybe<Array<ClockifyTagOnTimeEntryWhereInput>>
  clockifyTag?: InputMaybe<ClockifyTimeEntryTagRelationFilter>
  clockifyTagId?: InputMaybe<StringFilter>
  clockifyTagId_clockifyTimeEntryId?: InputMaybe<ClockifyTagOnTimeEntryClockifyTagIdClockifyTimeEntryIdCompoundUniqueInput>
  clockifyTimeEntry?: InputMaybe<ClockifyTimeEntryRelationFilter>
  clockifyTimeEntryId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
}

export type ClockifyTimeEntry = {
  __typename?: 'ClockifyTimeEntry'
  _count?: Maybe<ClockifyTimeEntryCount>
  billable: Scalars['Boolean']['output']
  clickupClockifyProject?: Maybe<ClickupClockifyProject>
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  clickupTask?: Maybe<ClickupTask>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clockifyProject?: Maybe<ClockifyTimeEntryProject>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  clockifyUser: ClockifyUser
  clockifyUserId: Scalars['String']['output']
  costRate?: Maybe<Scalars['Int']['output']>
  currentlyRunning: Scalars['Boolean']['output']
  customFieldValues?: Maybe<Scalars['JSON']['output']>
  description: Scalars['String']['output']
  duration?: Maybe<Scalars['String']['output']>
  end?: Maybe<Scalars['String']['output']>
  hourlyRate?: Maybe<Scalars['Int']['output']>
  id: Scalars['String']['output']
  isLocked: Scalars['Boolean']['output']
  kioskId?: Maybe<Scalars['JSON']['output']>
  start: Scalars['String']['output']
  tags: Array<ClockifyTagOnTimeEntry>
  task?: Maybe<Scalars['JSON']['output']>
  type: Scalars['String']['output']
  user?: Maybe<User>
  userId?: Maybe<Scalars['Int']['output']>
  workspaceId: Scalars['String']['output']
}

export type ClockifyTimeEntryClickupClockifyProjectArgs = {
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type ClockifyTimeEntryClickupTaskArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type ClockifyTimeEntryClockifyProjectArgs = {
  where?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type ClockifyTimeEntryTagsArgs = {
  cursor?: InputMaybe<ClockifyTagOnTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTagOnTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type ClockifyTimeEntryUserArgs = {
  where?: InputMaybe<UserWhereInput>
}

export type ClockifyTimeEntryAvgAggregate = {
  __typename?: 'ClockifyTimeEntryAvgAggregate'
  clickupClockifyProjectId?: Maybe<Scalars['Float']['output']>
  costRate?: Maybe<Scalars['Float']['output']>
  hourlyRate?: Maybe<Scalars['Float']['output']>
  userId?: Maybe<Scalars['Float']['output']>
}

export type ClockifyTimeEntryCount = {
  __typename?: 'ClockifyTimeEntryCount'
  tags: Scalars['Int']['output']
}

export type ClockifyTimeEntryCountTagsArgs = {
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type ClockifyTimeEntryCountAggregate = {
  __typename?: 'ClockifyTimeEntryCountAggregate'
  _all: Scalars['Int']['output']
  billable: Scalars['Int']['output']
  clickupClockifyProjectId: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  clockifyProjectId: Scalars['Int']['output']
  clockifyUserId: Scalars['Int']['output']
  costRate: Scalars['Int']['output']
  currentlyRunning: Scalars['Int']['output']
  customFieldValues: Scalars['Int']['output']
  description: Scalars['Int']['output']
  duration: Scalars['Int']['output']
  end: Scalars['Int']['output']
  hourlyRate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  isLocked: Scalars['Int']['output']
  kioskId: Scalars['Int']['output']
  start: Scalars['Int']['output']
  task: Scalars['Int']['output']
  type: Scalars['Int']['output']
  userId: Scalars['Int']['output']
  workspaceId: Scalars['Int']['output']
}

export type ClockifyTimeEntryCreateInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClockifyTimeEntriesInput>
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockifyTimeEntriesInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectCreateNestedOneWithoutTimeEntryInput>
  clockifyUser: ClockifyUserCreateNestedOneWithoutTimeEntriesInput
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  tags?: InputMaybe<ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTimeEntryInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyTimeEntriesInput>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyClickupClockifyProjectInput = {
  billable: Scalars['Boolean']['input']
  clickupTaskId?: InputMaybe<Scalars['String']['input']>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  clockifyUserId: Scalars['String']['input']
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  userId?: InputMaybe<Scalars['Int']['input']>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyClickupClockifyProjectInputEnvelope = {
  data: Array<ClockifyTimeEntryCreateManyClickupClockifyProjectInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockifyTimeEntryCreateManyClickupTaskInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  clockifyUserId: Scalars['String']['input']
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  userId?: InputMaybe<Scalars['Int']['input']>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyClickupTaskInputEnvelope = {
  data: Array<ClockifyTimeEntryCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockifyTimeEntryCreateManyClockifyProjectInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  clickupTaskId?: InputMaybe<Scalars['String']['input']>
  clockifyUserId: Scalars['String']['input']
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  userId?: InputMaybe<Scalars['Int']['input']>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyClockifyProjectInputEnvelope = {
  data: Array<ClockifyTimeEntryCreateManyClockifyProjectInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockifyTimeEntryCreateManyClockifyUserInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  clickupTaskId?: InputMaybe<Scalars['String']['input']>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  userId?: InputMaybe<Scalars['Int']['input']>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyClockifyUserInputEnvelope = {
  data: Array<ClockifyTimeEntryCreateManyClockifyUserInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockifyTimeEntryCreateManyInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  clickupTaskId?: InputMaybe<Scalars['String']['input']>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  clockifyUserId: Scalars['String']['input']
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  userId?: InputMaybe<Scalars['Int']['input']>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyUserInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProjectId?: InputMaybe<Scalars['Int']['input']>
  clickupTaskId?: InputMaybe<Scalars['String']['input']>
  clockifyProjectId?: InputMaybe<Scalars['String']['input']>
  clockifyUserId: Scalars['String']['input']
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateManyUserInputEnvelope = {
  data: Array<ClockifyTimeEntryCreateManyUserInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type ClockifyTimeEntryCreateNestedManyWithoutClickupClockifyProjectInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClickupClockifyProjectInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClickupClockifyProjectInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClickupClockifyProjectInputEnvelope>
}

export type ClockifyTimeEntryCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClickupTaskInputEnvelope>
}

export type ClockifyTimeEntryCreateNestedManyWithoutClockifyProjectInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClockifyProjectInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClockifyProjectInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClockifyProjectInputEnvelope>
}

export type ClockifyTimeEntryCreateNestedManyWithoutClockifyUserInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClockifyUserInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClockifyUserInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClockifyUserInputEnvelope>
}

export type ClockifyTimeEntryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutUserInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutUserInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyUserInputEnvelope>
}

export type ClockifyTimeEntryCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyTimeEntryCreateOrConnectWithoutTagsInput>
  create?: InputMaybe<ClockifyTimeEntryCreateWithoutTagsInput>
}

export type ClockifyTimeEntryCreateOrConnectWithoutClickupClockifyProjectInput = {
  create: ClockifyTimeEntryCreateWithoutClickupClockifyProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateOrConnectWithoutClickupTaskInput = {
  create: ClockifyTimeEntryCreateWithoutClickupTaskInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateOrConnectWithoutClockifyProjectInput = {
  create: ClockifyTimeEntryCreateWithoutClockifyProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateOrConnectWithoutClockifyUserInput = {
  create: ClockifyTimeEntryCreateWithoutClockifyUserInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateOrConnectWithoutTagsInput = {
  create: ClockifyTimeEntryCreateWithoutTagsInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateOrConnectWithoutUserInput = {
  create: ClockifyTimeEntryCreateWithoutUserInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryCreateWithoutClickupClockifyProjectInput = {
  billable: Scalars['Boolean']['input']
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockifyTimeEntriesInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectCreateNestedOneWithoutTimeEntryInput>
  clockifyUser: ClockifyUserCreateNestedOneWithoutTimeEntriesInput
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  tags?: InputMaybe<ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTimeEntryInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyTimeEntriesInput>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateWithoutClickupTaskInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClockifyTimeEntriesInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectCreateNestedOneWithoutTimeEntryInput>
  clockifyUser: ClockifyUserCreateNestedOneWithoutTimeEntriesInput
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  tags?: InputMaybe<ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTimeEntryInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyTimeEntriesInput>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateWithoutClockifyProjectInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClockifyTimeEntriesInput>
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockifyTimeEntriesInput>
  clockifyUser: ClockifyUserCreateNestedOneWithoutTimeEntriesInput
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  tags?: InputMaybe<ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTimeEntryInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyTimeEntriesInput>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateWithoutClockifyUserInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClockifyTimeEntriesInput>
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockifyTimeEntriesInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectCreateNestedOneWithoutTimeEntryInput>
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  tags?: InputMaybe<ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTimeEntryInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyTimeEntriesInput>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateWithoutTagsInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClockifyTimeEntriesInput>
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockifyTimeEntriesInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectCreateNestedOneWithoutTimeEntryInput>
  clockifyUser: ClockifyUserCreateNestedOneWithoutTimeEntriesInput
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyTimeEntriesInput>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryCreateWithoutUserInput = {
  billable: Scalars['Boolean']['input']
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectCreateNestedOneWithoutClockifyTimeEntriesInput>
  clickupTask?: InputMaybe<ClickupTaskCreateNestedOneWithoutClockifyTimeEntriesInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectCreateNestedOneWithoutTimeEntryInput>
  clockifyUser: ClockifyUserCreateNestedOneWithoutTimeEntriesInput
  costRate?: InputMaybe<Scalars['Int']['input']>
  currentlyRunning: Scalars['Boolean']['input']
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description: Scalars['String']['input']
  duration?: InputMaybe<Scalars['String']['input']>
  end?: InputMaybe<Scalars['String']['input']>
  hourlyRate?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['String']['input']
  isLocked: Scalars['Boolean']['input']
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start: Scalars['String']['input']
  tags?: InputMaybe<ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTimeEntryInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
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
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  clockifyUserId?: Maybe<Scalars['String']['output']>
  costRate?: Maybe<Scalars['Int']['output']>
  currentlyRunning?: Maybe<Scalars['Boolean']['output']>
  description?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  end?: Maybe<Scalars['String']['output']>
  hourlyRate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  isLocked?: Maybe<Scalars['Boolean']['output']>
  start?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['Int']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryMinAggregate = {
  __typename?: 'ClockifyTimeEntryMinAggregate'
  billable?: Maybe<Scalars['Boolean']['output']>
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  clickupTaskId?: Maybe<Scalars['String']['output']>
  clockifyProjectId?: Maybe<Scalars['String']['output']>
  clockifyUserId?: Maybe<Scalars['String']['output']>
  costRate?: Maybe<Scalars['Int']['output']>
  currentlyRunning?: Maybe<Scalars['Boolean']['output']>
  description?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  end?: Maybe<Scalars['String']['output']>
  hourlyRate?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  isLocked?: Maybe<Scalars['Boolean']['output']>
  start?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['Int']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ClockifyTimeEntryOrderByWithRelationInput = {
  billable?: InputMaybe<SortOrder>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectOrderByWithRelationInput>
  clickupClockifyProjectId?: InputMaybe<SortOrderInput>
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrderInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectOrderByWithRelationInput>
  clockifyProjectId?: InputMaybe<SortOrderInput>
  clockifyUser?: InputMaybe<ClockifyUserOrderByWithRelationInput>
  clockifyUserId?: InputMaybe<SortOrder>
  costRate?: InputMaybe<SortOrderInput>
  currentlyRunning?: InputMaybe<SortOrder>
  customFieldValues?: InputMaybe<SortOrderInput>
  description?: InputMaybe<SortOrder>
  duration?: InputMaybe<SortOrderInput>
  end?: InputMaybe<SortOrderInput>
  hourlyRate?: InputMaybe<SortOrderInput>
  id?: InputMaybe<SortOrder>
  isLocked?: InputMaybe<SortOrder>
  kioskId?: InputMaybe<SortOrderInput>
  start?: InputMaybe<SortOrder>
  tags?: InputMaybe<ClockifyTagOnTimeEntryOrderByRelationAggregateInput>
  task?: InputMaybe<SortOrderInput>
  type?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrderInput>
  workspaceId?: InputMaybe<SortOrder>
}

export type ClockifyTimeEntryProject = {
  __typename?: 'ClockifyTimeEntryProject'
  _count?: Maybe<ClockifyTimeEntryProjectCount>
  activeEstimate: Scalars['String']['output']
  archived: Scalars['Boolean']['output']
  billable: Scalars['Boolean']['output']
  budgetEstimate?: Maybe<Scalars['JSON']['output']>
  clientId: Scalars['String']['output']
  clientName: Scalars['String']['output']
  color: Scalars['String']['output']
  duration: Scalars['String']['output']
  estimate: Scalars['JSON']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  note: Scalars['String']['output']
  public: Scalars['Boolean']['output']
  template: Scalars['Boolean']['output']
  timeEntry: Array<ClockifyTimeEntry>
  timeEstimate: Scalars['JSON']['output']
  workspaceId: Scalars['String']['output']
}

export type ClockifyTimeEntryProjectTimeEntryArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClockifyTimeEntryProjectCount = {
  __typename?: 'ClockifyTimeEntryProjectCount'
  timeEntry: Scalars['Int']['output']
}

export type ClockifyTimeEntryProjectCountTimeEntryArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClockifyTimeEntryProjectCountAggregate = {
  __typename?: 'ClockifyTimeEntryProjectCountAggregate'
  _all: Scalars['Int']['output']
  activeEstimate: Scalars['Int']['output']
  archived: Scalars['Int']['output']
  billable: Scalars['Int']['output']
  budgetEstimate: Scalars['Int']['output']
  clientId: Scalars['Int']['output']
  clientName: Scalars['Int']['output']
  color: Scalars['Int']['output']
  duration: Scalars['Int']['output']
  estimate: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  note: Scalars['Int']['output']
  public: Scalars['Int']['output']
  template: Scalars['Int']['output']
  timeEstimate: Scalars['Int']['output']
  workspaceId: Scalars['Int']['output']
}

export type ClockifyTimeEntryProjectCreateInput = {
  activeEstimate: Scalars['String']['input']
  archived: Scalars['Boolean']['input']
  billable: Scalars['Boolean']['input']
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId: Scalars['String']['input']
  clientName: Scalars['String']['input']
  color: Scalars['String']['input']
  duration: Scalars['String']['input']
  estimate: Scalars['JSON']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  note: Scalars['String']['input']
  public: Scalars['Boolean']['input']
  template: Scalars['Boolean']['input']
  timeEntry?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClockifyProjectInput>
  timeEstimate: Scalars['JSON']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryProjectCreateManyInput = {
  activeEstimate: Scalars['String']['input']
  archived: Scalars['Boolean']['input']
  billable: Scalars['Boolean']['input']
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId: Scalars['String']['input']
  clientName: Scalars['String']['input']
  color: Scalars['String']['input']
  duration: Scalars['String']['input']
  estimate: Scalars['JSON']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  note: Scalars['String']['input']
  public: Scalars['Boolean']['input']
  template: Scalars['Boolean']['input']
  timeEstimate: Scalars['JSON']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryProjectCreateNestedOneWithoutTimeEntryInput = {
  connect?: InputMaybe<ClockifyTimeEntryProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyTimeEntryProjectCreateOrConnectWithoutTimeEntryInput>
  create?: InputMaybe<ClockifyTimeEntryProjectCreateWithoutTimeEntryInput>
}

export type ClockifyTimeEntryProjectCreateOrConnectWithoutTimeEntryInput = {
  create: ClockifyTimeEntryProjectCreateWithoutTimeEntryInput
  where: ClockifyTimeEntryProjectWhereUniqueInput
}

export type ClockifyTimeEntryProjectCreateWithoutTimeEntryInput = {
  activeEstimate: Scalars['String']['input']
  archived: Scalars['Boolean']['input']
  billable: Scalars['Boolean']['input']
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId: Scalars['String']['input']
  clientName: Scalars['String']['input']
  color: Scalars['String']['input']
  duration: Scalars['String']['input']
  estimate: Scalars['JSON']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  note: Scalars['String']['input']
  public: Scalars['Boolean']['input']
  template: Scalars['Boolean']['input']
  timeEstimate: Scalars['JSON']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryProjectMaxAggregate = {
  __typename?: 'ClockifyTimeEntryProjectMaxAggregate'
  activeEstimate?: Maybe<Scalars['String']['output']>
  archived?: Maybe<Scalars['Boolean']['output']>
  billable?: Maybe<Scalars['Boolean']['output']>
  clientId?: Maybe<Scalars['String']['output']>
  clientName?: Maybe<Scalars['String']['output']>
  color?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  note?: Maybe<Scalars['String']['output']>
  public?: Maybe<Scalars['Boolean']['output']>
  template?: Maybe<Scalars['Boolean']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryProjectMinAggregate = {
  __typename?: 'ClockifyTimeEntryProjectMinAggregate'
  activeEstimate?: Maybe<Scalars['String']['output']>
  archived?: Maybe<Scalars['Boolean']['output']>
  billable?: Maybe<Scalars['Boolean']['output']>
  clientId?: Maybe<Scalars['String']['output']>
  clientName?: Maybe<Scalars['String']['output']>
  color?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  note?: Maybe<Scalars['String']['output']>
  public?: Maybe<Scalars['Boolean']['output']>
  template?: Maybe<Scalars['Boolean']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryProjectNullableRelationFilter = {
  is?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
  isNot?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type ClockifyTimeEntryProjectOrderByWithRelationInput = {
  activeEstimate?: InputMaybe<SortOrder>
  archived?: InputMaybe<SortOrder>
  billable?: InputMaybe<SortOrder>
  budgetEstimate?: InputMaybe<SortOrderInput>
  clientId?: InputMaybe<SortOrder>
  clientName?: InputMaybe<SortOrder>
  color?: InputMaybe<SortOrder>
  duration?: InputMaybe<SortOrder>
  estimate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  note?: InputMaybe<SortOrder>
  public?: InputMaybe<SortOrder>
  template?: InputMaybe<SortOrder>
  timeEntry?: InputMaybe<ClockifyTimeEntryOrderByRelationAggregateInput>
  timeEstimate?: InputMaybe<SortOrder>
  workspaceId?: InputMaybe<SortOrder>
}

export enum ClockifyTimeEntryProjectScalarFieldEnum {
  ActiveEstimate = 'activeEstimate',
  Archived = 'archived',
  Billable = 'billable',
  BudgetEstimate = 'budgetEstimate',
  ClientId = 'clientId',
  ClientName = 'clientName',
  Color = 'color',
  Duration = 'duration',
  Estimate = 'estimate',
  Id = 'id',
  Name = 'name',
  Note = 'note',
  Public = 'public',
  Template = 'template',
  TimeEstimate = 'timeEstimate',
  WorkspaceId = 'workspaceId',
}

export type ClockifyTimeEntryProjectUpdateInput = {
  activeEstimate?: InputMaybe<StringFieldUpdateOperationsInput>
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId?: InputMaybe<StringFieldUpdateOperationsInput>
  clientName?: InputMaybe<StringFieldUpdateOperationsInput>
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<StringFieldUpdateOperationsInput>
  estimate?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  note?: InputMaybe<StringFieldUpdateOperationsInput>
  public?: InputMaybe<BoolFieldUpdateOperationsInput>
  template?: InputMaybe<BoolFieldUpdateOperationsInput>
  timeEntry?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClockifyProjectNestedInput>
  timeEstimate?: InputMaybe<Scalars['JSON']['input']>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryProjectUpdateManyMutationInput = {
  activeEstimate?: InputMaybe<StringFieldUpdateOperationsInput>
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId?: InputMaybe<StringFieldUpdateOperationsInput>
  clientName?: InputMaybe<StringFieldUpdateOperationsInput>
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<StringFieldUpdateOperationsInput>
  estimate?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  note?: InputMaybe<StringFieldUpdateOperationsInput>
  public?: InputMaybe<BoolFieldUpdateOperationsInput>
  template?: InputMaybe<BoolFieldUpdateOperationsInput>
  timeEstimate?: InputMaybe<Scalars['JSON']['input']>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryProjectUpdateOneWithoutTimeEntryNestedInput = {
  connect?: InputMaybe<ClockifyTimeEntryProjectWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyTimeEntryProjectCreateOrConnectWithoutTimeEntryInput>
  create?: InputMaybe<ClockifyTimeEntryProjectCreateWithoutTimeEntryInput>
  delete?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
  disconnect?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
  update?: InputMaybe<ClockifyTimeEntryProjectUpdateToOneWithWhereWithoutTimeEntryInput>
  upsert?: InputMaybe<ClockifyTimeEntryProjectUpsertWithoutTimeEntryInput>
}

export type ClockifyTimeEntryProjectUpdateToOneWithWhereWithoutTimeEntryInput = {
  data: ClockifyTimeEntryProjectUpdateWithoutTimeEntryInput
  where?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type ClockifyTimeEntryProjectUpdateWithoutTimeEntryInput = {
  activeEstimate?: InputMaybe<StringFieldUpdateOperationsInput>
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  budgetEstimate?: InputMaybe<Scalars['JSON']['input']>
  clientId?: InputMaybe<StringFieldUpdateOperationsInput>
  clientName?: InputMaybe<StringFieldUpdateOperationsInput>
  color?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<StringFieldUpdateOperationsInput>
  estimate?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  note?: InputMaybe<StringFieldUpdateOperationsInput>
  public?: InputMaybe<BoolFieldUpdateOperationsInput>
  template?: InputMaybe<BoolFieldUpdateOperationsInput>
  timeEstimate?: InputMaybe<Scalars['JSON']['input']>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryProjectUpsertWithoutTimeEntryInput = {
  create: ClockifyTimeEntryProjectCreateWithoutTimeEntryInput
  update: ClockifyTimeEntryProjectUpdateWithoutTimeEntryInput
  where?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type ClockifyTimeEntryProjectWhereInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryProjectWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryProjectWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryProjectWhereInput>>
  activeEstimate?: InputMaybe<StringFilter>
  archived?: InputMaybe<BoolFilter>
  billable?: InputMaybe<BoolFilter>
  budgetEstimate?: InputMaybe<JsonNullableFilter>
  clientId?: InputMaybe<StringFilter>
  clientName?: InputMaybe<StringFilter>
  color?: InputMaybe<StringFilter>
  duration?: InputMaybe<StringFilter>
  estimate?: InputMaybe<JsonFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  note?: InputMaybe<StringFilter>
  public?: InputMaybe<BoolFilter>
  template?: InputMaybe<BoolFilter>
  timeEntry?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  timeEstimate?: InputMaybe<JsonFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntryProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryProjectWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryProjectWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryProjectWhereInput>>
  activeEstimate?: InputMaybe<StringFilter>
  archived?: InputMaybe<BoolFilter>
  billable?: InputMaybe<BoolFilter>
  budgetEstimate?: InputMaybe<JsonNullableFilter>
  clientId?: InputMaybe<StringFilter>
  clientName?: InputMaybe<StringFilter>
  color?: InputMaybe<StringFilter>
  duration?: InputMaybe<StringFilter>
  estimate?: InputMaybe<JsonFilter>
  id?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<StringFilter>
  note?: InputMaybe<StringFilter>
  public?: InputMaybe<BoolFilter>
  template?: InputMaybe<BoolFilter>
  timeEntry?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  timeEstimate?: InputMaybe<JsonFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntryRelationFilter = {
  is?: InputMaybe<ClockifyTimeEntryWhereInput>
  isNot?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export enum ClockifyTimeEntryScalarFieldEnum {
  Billable = 'billable',
  ClickupClockifyProjectId = 'clickupClockifyProjectId',
  ClickupTaskId = 'clickupTaskId',
  ClockifyProjectId = 'clockifyProjectId',
  ClockifyUserId = 'clockifyUserId',
  CostRate = 'costRate',
  CurrentlyRunning = 'currentlyRunning',
  CustomFieldValues = 'customFieldValues',
  Description = 'description',
  Duration = 'duration',
  End = 'end',
  HourlyRate = 'hourlyRate',
  Id = 'id',
  IsLocked = 'isLocked',
  KioskId = 'kioskId',
  Start = 'start',
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
  clickupClockifyProjectId?: InputMaybe<IntNullableFilter>
  clickupTaskId?: InputMaybe<StringNullableFilter>
  clockifyProjectId?: InputMaybe<StringNullableFilter>
  clockifyUserId?: InputMaybe<StringFilter>
  costRate?: InputMaybe<IntNullableFilter>
  currentlyRunning?: InputMaybe<BoolFilter>
  customFieldValues?: InputMaybe<JsonNullableFilter>
  description?: InputMaybe<StringFilter>
  duration?: InputMaybe<StringNullableFilter>
  end?: InputMaybe<StringNullableFilter>
  hourlyRate?: InputMaybe<IntNullableFilter>
  id?: InputMaybe<StringFilter>
  isLocked?: InputMaybe<BoolFilter>
  kioskId?: InputMaybe<JsonNullableFilter>
  start?: InputMaybe<StringFilter>
  task?: InputMaybe<JsonNullableFilter>
  type?: InputMaybe<StringFilter>
  userId?: InputMaybe<IntNullableFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntrySumAggregate = {
  __typename?: 'ClockifyTimeEntrySumAggregate'
  clickupClockifyProjectId?: Maybe<Scalars['Int']['output']>
  costRate?: Maybe<Scalars['Int']['output']>
  hourlyRate?: Maybe<Scalars['Int']['output']>
  userId?: Maybe<Scalars['Int']['output']>
}

export type ClockifyTimeEntryTag = {
  __typename?: 'ClockifyTimeEntryTag'
  _count?: Maybe<ClockifyTimeEntryTagCount>
  archived: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  timeEntries: Array<ClockifyTagOnTimeEntry>
  workspaceId: Scalars['String']['output']
}

export type ClockifyTimeEntryTagTimeEntriesArgs = {
  cursor?: InputMaybe<ClockifyTagOnTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTagOnTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type ClockifyTimeEntryTagCount = {
  __typename?: 'ClockifyTimeEntryTagCount'
  timeEntries: Scalars['Int']['output']
}

export type ClockifyTimeEntryTagCountTimeEntriesArgs = {
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type ClockifyTimeEntryTagCountAggregate = {
  __typename?: 'ClockifyTimeEntryTagCountAggregate'
  _all: Scalars['Int']['output']
  archived: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  workspaceId: Scalars['Int']['output']
}

export type ClockifyTimeEntryTagCreateInput = {
  archived: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  timeEntries?: InputMaybe<ClockifyTagOnTimeEntryCreateNestedManyWithoutClockifyTagInput>
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryTagCreateManyInput = {
  archived: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryTagCreateNestedOneWithoutTimeEntriesInput = {
  connect?: InputMaybe<ClockifyTimeEntryTagWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyTimeEntryTagCreateOrConnectWithoutTimeEntriesInput>
  create?: InputMaybe<ClockifyTimeEntryTagCreateWithoutTimeEntriesInput>
}

export type ClockifyTimeEntryTagCreateOrConnectWithoutTimeEntriesInput = {
  create: ClockifyTimeEntryTagCreateWithoutTimeEntriesInput
  where: ClockifyTimeEntryTagWhereUniqueInput
}

export type ClockifyTimeEntryTagCreateWithoutTimeEntriesInput = {
  archived: Scalars['Boolean']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  workspaceId: Scalars['String']['input']
}

export type ClockifyTimeEntryTagMaxAggregate = {
  __typename?: 'ClockifyTimeEntryTagMaxAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryTagMinAggregate = {
  __typename?: 'ClockifyTimeEntryTagMinAggregate'
  archived?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  workspaceId?: Maybe<Scalars['String']['output']>
}

export type ClockifyTimeEntryTagOrderByWithRelationInput = {
  archived?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  timeEntries?: InputMaybe<ClockifyTagOnTimeEntryOrderByRelationAggregateInput>
  workspaceId?: InputMaybe<SortOrder>
}

export type ClockifyTimeEntryTagRelationFilter = {
  is?: InputMaybe<ClockifyTimeEntryTagWhereInput>
  isNot?: InputMaybe<ClockifyTimeEntryTagWhereInput>
}

export enum ClockifyTimeEntryTagScalarFieldEnum {
  Archived = 'archived',
  Id = 'id',
  Name = 'name',
  WorkspaceId = 'workspaceId',
}

export type ClockifyTimeEntryTagUpdateInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  timeEntries?: InputMaybe<ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTagNestedInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryTagUpdateManyMutationInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryTagUpdateOneRequiredWithoutTimeEntriesNestedInput = {
  connect?: InputMaybe<ClockifyTimeEntryTagWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyTimeEntryTagCreateOrConnectWithoutTimeEntriesInput>
  create?: InputMaybe<ClockifyTimeEntryTagCreateWithoutTimeEntriesInput>
  update?: InputMaybe<ClockifyTimeEntryTagUpdateToOneWithWhereWithoutTimeEntriesInput>
  upsert?: InputMaybe<ClockifyTimeEntryTagUpsertWithoutTimeEntriesInput>
}

export type ClockifyTimeEntryTagUpdateToOneWithWhereWithoutTimeEntriesInput = {
  data: ClockifyTimeEntryTagUpdateWithoutTimeEntriesInput
  where?: InputMaybe<ClockifyTimeEntryTagWhereInput>
}

export type ClockifyTimeEntryTagUpdateWithoutTimeEntriesInput = {
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryTagUpsertWithoutTimeEntriesInput = {
  create: ClockifyTimeEntryTagCreateWithoutTimeEntriesInput
  update: ClockifyTimeEntryTagUpdateWithoutTimeEntriesInput
  where?: InputMaybe<ClockifyTimeEntryTagWhereInput>
}

export type ClockifyTimeEntryTagWhereInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryTagWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryTagWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryTagWhereInput>>
  archived?: InputMaybe<BoolFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  timeEntries?: InputMaybe<ClockifyTagOnTimeEntryListRelationFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntryTagWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryTagWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryTagWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryTagWhereInput>>
  archived?: InputMaybe<BoolFilter>
  id?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<StringFilter>
  timeEntries?: InputMaybe<ClockifyTagOnTimeEntryListRelationFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntryUpdateInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectUpdateOneWithoutTimeEntryNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneRequiredWithoutTimeEntriesNestedInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  tags?: InputMaybe<ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTimeEntryNestedInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyTimeEntriesNestedInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateManyMutationInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateManyWithWhereWithoutClickupClockifyProjectInput = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where: ClockifyTimeEntryScalarWhereInput
}

export type ClockifyTimeEntryUpdateManyWithWhereWithoutClickupTaskInput = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where: ClockifyTimeEntryScalarWhereInput
}

export type ClockifyTimeEntryUpdateManyWithWhereWithoutClockifyProjectInput = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where: ClockifyTimeEntryScalarWhereInput
}

export type ClockifyTimeEntryUpdateManyWithWhereWithoutClockifyUserInput = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where: ClockifyTimeEntryScalarWhereInput
}

export type ClockifyTimeEntryUpdateManyWithWhereWithoutUserInput = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where: ClockifyTimeEntryScalarWhereInput
}

export type ClockifyTimeEntryUpdateManyWithoutClickupClockifyProjectNestedInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClickupClockifyProjectInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClickupClockifyProjectInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClickupClockifyProjectInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTimeEntryUpdateWithWhereUniqueWithoutClickupClockifyProjectInput>>
  updateMany?: InputMaybe<Array<ClockifyTimeEntryUpdateManyWithWhereWithoutClickupClockifyProjectInput>>
  upsert?: InputMaybe<Array<ClockifyTimeEntryUpsertWithWhereUniqueWithoutClickupClockifyProjectInput>>
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

export type ClockifyTimeEntryUpdateManyWithoutClockifyProjectNestedInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClockifyProjectInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClockifyProjectInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClockifyProjectInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTimeEntryUpdateWithWhereUniqueWithoutClockifyProjectInput>>
  updateMany?: InputMaybe<Array<ClockifyTimeEntryUpdateManyWithWhereWithoutClockifyProjectInput>>
  upsert?: InputMaybe<Array<ClockifyTimeEntryUpsertWithWhereUniqueWithoutClockifyProjectInput>>
}

export type ClockifyTimeEntryUpdateManyWithoutClockifyUserNestedInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutClockifyUserInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutClockifyUserInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyClockifyUserInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTimeEntryUpdateWithWhereUniqueWithoutClockifyUserInput>>
  updateMany?: InputMaybe<Array<ClockifyTimeEntryUpdateManyWithWhereWithoutClockifyUserInput>>
  upsert?: InputMaybe<Array<ClockifyTimeEntryUpsertWithWhereUniqueWithoutClockifyUserInput>>
}

export type ClockifyTimeEntryUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<ClockifyTimeEntryCreateOrConnectWithoutUserInput>>
  create?: InputMaybe<Array<ClockifyTimeEntryCreateWithoutUserInput>>
  createMany?: InputMaybe<ClockifyTimeEntryCreateManyUserInputEnvelope>
  delete?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<ClockifyTimeEntryScalarWhereInput>>
  disconnect?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  set?: InputMaybe<Array<ClockifyTimeEntryWhereUniqueInput>>
  update?: InputMaybe<Array<ClockifyTimeEntryUpdateWithWhereUniqueWithoutUserInput>>
  updateMany?: InputMaybe<Array<ClockifyTimeEntryUpdateManyWithWhereWithoutUserInput>>
  upsert?: InputMaybe<Array<ClockifyTimeEntryUpsertWithWhereUniqueWithoutUserInput>>
}

export type ClockifyTimeEntryUpdateOneRequiredWithoutTagsNestedInput = {
  connect?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyTimeEntryCreateOrConnectWithoutTagsInput>
  create?: InputMaybe<ClockifyTimeEntryCreateWithoutTagsInput>
  update?: InputMaybe<ClockifyTimeEntryUpdateToOneWithWhereWithoutTagsInput>
  upsert?: InputMaybe<ClockifyTimeEntryUpsertWithoutTagsInput>
}

export type ClockifyTimeEntryUpdateToOneWithWhereWithoutTagsInput = {
  data: ClockifyTimeEntryUpdateWithoutTagsInput
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClockifyTimeEntryUpdateWithWhereUniqueWithoutClickupClockifyProjectInput = {
  data: ClockifyTimeEntryUpdateWithoutClickupClockifyProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: ClockifyTimeEntryUpdateWithoutClickupTaskInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpdateWithWhereUniqueWithoutClockifyProjectInput = {
  data: ClockifyTimeEntryUpdateWithoutClockifyProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpdateWithWhereUniqueWithoutClockifyUserInput = {
  data: ClockifyTimeEntryUpdateWithoutClockifyUserInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpdateWithWhereUniqueWithoutUserInput = {
  data: ClockifyTimeEntryUpdateWithoutUserInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpdateWithoutClickupClockifyProjectInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectUpdateOneWithoutTimeEntryNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneRequiredWithoutTimeEntriesNestedInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  tags?: InputMaybe<ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTimeEntryNestedInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyTimeEntriesNestedInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateWithoutClickupTaskInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectUpdateOneWithoutTimeEntryNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneRequiredWithoutTimeEntriesNestedInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  tags?: InputMaybe<ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTimeEntryNestedInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyTimeEntriesNestedInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateWithoutClockifyProjectInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneRequiredWithoutTimeEntriesNestedInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  tags?: InputMaybe<ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTimeEntryNestedInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyTimeEntriesNestedInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateWithoutClockifyUserInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectUpdateOneWithoutTimeEntryNestedInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  tags?: InputMaybe<ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTimeEntryNestedInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyTimeEntriesNestedInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateWithoutTagsInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectUpdateOneWithoutTimeEntryNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneRequiredWithoutTimeEntriesNestedInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyTimeEntriesNestedInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpdateWithoutUserInput = {
  billable?: InputMaybe<BoolFieldUpdateOperationsInput>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clickupTask?: InputMaybe<ClickupTaskUpdateOneWithoutClockifyTimeEntriesNestedInput>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectUpdateOneWithoutTimeEntryNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneRequiredWithoutTimeEntriesNestedInput>
  costRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  currentlyRunning?: InputMaybe<BoolFieldUpdateOperationsInput>
  customFieldValues?: InputMaybe<Scalars['JSON']['input']>
  description?: InputMaybe<StringFieldUpdateOperationsInput>
  duration?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  end?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  hourlyRate?: InputMaybe<NullableIntFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>
  kioskId?: InputMaybe<Scalars['JSON']['input']>
  start?: InputMaybe<StringFieldUpdateOperationsInput>
  tags?: InputMaybe<ClockifyTagOnTimeEntryUpdateManyWithoutClockifyTimeEntryNestedInput>
  task?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<StringFieldUpdateOperationsInput>
  workspaceId?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyTimeEntryUpsertWithWhereUniqueWithoutClickupClockifyProjectInput = {
  create: ClockifyTimeEntryCreateWithoutClickupClockifyProjectInput
  update: ClockifyTimeEntryUpdateWithoutClickupClockifyProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: ClockifyTimeEntryCreateWithoutClickupTaskInput
  update: ClockifyTimeEntryUpdateWithoutClickupTaskInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpsertWithWhereUniqueWithoutClockifyProjectInput = {
  create: ClockifyTimeEntryCreateWithoutClockifyProjectInput
  update: ClockifyTimeEntryUpdateWithoutClockifyProjectInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpsertWithWhereUniqueWithoutClockifyUserInput = {
  create: ClockifyTimeEntryCreateWithoutClockifyUserInput
  update: ClockifyTimeEntryUpdateWithoutClockifyUserInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpsertWithWhereUniqueWithoutUserInput = {
  create: ClockifyTimeEntryCreateWithoutUserInput
  update: ClockifyTimeEntryUpdateWithoutUserInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type ClockifyTimeEntryUpsertWithoutTagsInput = {
  create: ClockifyTimeEntryCreateWithoutTagsInput
  update: ClockifyTimeEntryUpdateWithoutTagsInput
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClockifyTimeEntryWhereInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  billable?: InputMaybe<BoolFilter>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectNullableRelationFilter>
  clickupClockifyProjectId?: InputMaybe<IntNullableFilter>
  clickupTask?: InputMaybe<ClickupTaskNullableRelationFilter>
  clickupTaskId?: InputMaybe<StringNullableFilter>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectNullableRelationFilter>
  clockifyProjectId?: InputMaybe<StringNullableFilter>
  clockifyUser?: InputMaybe<ClockifyUserRelationFilter>
  clockifyUserId?: InputMaybe<StringFilter>
  costRate?: InputMaybe<IntNullableFilter>
  currentlyRunning?: InputMaybe<BoolFilter>
  customFieldValues?: InputMaybe<JsonNullableFilter>
  description?: InputMaybe<StringFilter>
  duration?: InputMaybe<StringNullableFilter>
  end?: InputMaybe<StringNullableFilter>
  hourlyRate?: InputMaybe<IntNullableFilter>
  id?: InputMaybe<StringFilter>
  isLocked?: InputMaybe<BoolFilter>
  kioskId?: InputMaybe<JsonNullableFilter>
  start?: InputMaybe<StringFilter>
  tags?: InputMaybe<ClockifyTagOnTimeEntryListRelationFilter>
  task?: InputMaybe<JsonNullableFilter>
  type?: InputMaybe<StringFilter>
  user?: InputMaybe<UserNullableRelationFilter>
  userId?: InputMaybe<IntNullableFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntryWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  NOT?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  OR?: InputMaybe<Array<ClockifyTimeEntryWhereInput>>
  billable?: InputMaybe<BoolFilter>
  clickupClockifyProject?: InputMaybe<ClickupClockifyProjectNullableRelationFilter>
  clickupClockifyProjectId?: InputMaybe<IntNullableFilter>
  clickupTask?: InputMaybe<ClickupTaskNullableRelationFilter>
  clickupTaskId?: InputMaybe<StringNullableFilter>
  clockifyProject?: InputMaybe<ClockifyTimeEntryProjectNullableRelationFilter>
  clockifyProjectId?: InputMaybe<StringNullableFilter>
  clockifyUser?: InputMaybe<ClockifyUserRelationFilter>
  clockifyUserId?: InputMaybe<StringFilter>
  costRate?: InputMaybe<IntNullableFilter>
  currentlyRunning?: InputMaybe<BoolFilter>
  customFieldValues?: InputMaybe<JsonNullableFilter>
  description?: InputMaybe<StringFilter>
  duration?: InputMaybe<StringNullableFilter>
  end?: InputMaybe<StringNullableFilter>
  hourlyRate?: InputMaybe<IntNullableFilter>
  id?: InputMaybe<Scalars['String']['input']>
  isLocked?: InputMaybe<BoolFilter>
  kioskId?: InputMaybe<JsonNullableFilter>
  start?: InputMaybe<StringFilter>
  tags?: InputMaybe<ClockifyTagOnTimeEntryListRelationFilter>
  task?: InputMaybe<JsonNullableFilter>
  type?: InputMaybe<StringFilter>
  user?: InputMaybe<UserNullableRelationFilter>
  userId?: InputMaybe<IntNullableFilter>
  workspaceId?: InputMaybe<StringFilter>
}

export type ClockifyUser = {
  __typename?: 'ClockifyUser'
  _count?: Maybe<ClockifyUserCount>
  email: Scalars['String']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  status: Scalars['String']['output']
  timeEntries: Array<ClockifyTimeEntry>
  user?: Maybe<User>
}

export type ClockifyUserTimeEntriesArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClockifyUserUserArgs = {
  where?: InputMaybe<UserWhereInput>
}

export type ClockifyUserCount = {
  __typename?: 'ClockifyUserCount'
  timeEntries: Scalars['Int']['output']
}

export type ClockifyUserCountTimeEntriesArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type ClockifyUserCountAggregate = {
  __typename?: 'ClockifyUserCountAggregate'
  _all: Scalars['Int']['output']
  email: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
  status: Scalars['Int']['output']
}

export type ClockifyUserCreateInput = {
  email: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  status: Scalars['String']['input']
  timeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClockifyUserInput>
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyUserInput>
}

export type ClockifyUserCreateManyInput = {
  email: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  status: Scalars['String']['input']
}

export type ClockifyUserCreateNestedOneWithoutTimeEntriesInput = {
  connect?: InputMaybe<ClockifyUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyUserCreateOrConnectWithoutTimeEntriesInput>
  create?: InputMaybe<ClockifyUserCreateWithoutTimeEntriesInput>
}

export type ClockifyUserCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ClockifyUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyUserCreateOrConnectWithoutUserInput>
  create?: InputMaybe<ClockifyUserCreateWithoutUserInput>
}

export type ClockifyUserCreateOrConnectWithoutTimeEntriesInput = {
  create: ClockifyUserCreateWithoutTimeEntriesInput
  where: ClockifyUserWhereUniqueInput
}

export type ClockifyUserCreateOrConnectWithoutUserInput = {
  create: ClockifyUserCreateWithoutUserInput
  where: ClockifyUserWhereUniqueInput
}

export type ClockifyUserCreateWithoutTimeEntriesInput = {
  email: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  status: Scalars['String']['input']
  user?: InputMaybe<UserCreateNestedOneWithoutClockifyUserInput>
}

export type ClockifyUserCreateWithoutUserInput = {
  email: Scalars['String']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  status: Scalars['String']['input']
  timeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutClockifyUserInput>
}

export type ClockifyUserMaxAggregate = {
  __typename?: 'ClockifyUserMaxAggregate'
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
}

export type ClockifyUserMinAggregate = {
  __typename?: 'ClockifyUserMinAggregate'
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
}

export type ClockifyUserNullableRelationFilter = {
  is?: InputMaybe<ClockifyUserWhereInput>
  isNot?: InputMaybe<ClockifyUserWhereInput>
}

export type ClockifyUserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  timeEntries?: InputMaybe<ClockifyTimeEntryOrderByRelationAggregateInput>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type ClockifyUserRelationFilter = {
  is?: InputMaybe<ClockifyUserWhereInput>
  isNot?: InputMaybe<ClockifyUserWhereInput>
}

export enum ClockifyUserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Status = 'status',
}

export type ClockifyUserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  status?: InputMaybe<StringFieldUpdateOperationsInput>
  timeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClockifyUserNestedInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyUserNestedInput>
}

export type ClockifyUserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  status?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type ClockifyUserUpdateOneRequiredWithoutTimeEntriesNestedInput = {
  connect?: InputMaybe<ClockifyUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyUserCreateOrConnectWithoutTimeEntriesInput>
  create?: InputMaybe<ClockifyUserCreateWithoutTimeEntriesInput>
  update?: InputMaybe<ClockifyUserUpdateToOneWithWhereWithoutTimeEntriesInput>
  upsert?: InputMaybe<ClockifyUserUpsertWithoutTimeEntriesInput>
}

export type ClockifyUserUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ClockifyUserWhereUniqueInput>
  connectOrCreate?: InputMaybe<ClockifyUserCreateOrConnectWithoutUserInput>
  create?: InputMaybe<ClockifyUserCreateWithoutUserInput>
  delete?: InputMaybe<ClockifyUserWhereInput>
  disconnect?: InputMaybe<ClockifyUserWhereInput>
  update?: InputMaybe<ClockifyUserUpdateToOneWithWhereWithoutUserInput>
  upsert?: InputMaybe<ClockifyUserUpsertWithoutUserInput>
}

export type ClockifyUserUpdateToOneWithWhereWithoutTimeEntriesInput = {
  data: ClockifyUserUpdateWithoutTimeEntriesInput
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type ClockifyUserUpdateToOneWithWhereWithoutUserInput = {
  data: ClockifyUserUpdateWithoutUserInput
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type ClockifyUserUpdateWithoutTimeEntriesInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  status?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneWithoutClockifyUserNestedInput>
}

export type ClockifyUserUpdateWithoutUserInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  id?: InputMaybe<StringFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  status?: InputMaybe<StringFieldUpdateOperationsInput>
  timeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutClockifyUserNestedInput>
}

export type ClockifyUserUpsertWithoutTimeEntriesInput = {
  create: ClockifyUserCreateWithoutTimeEntriesInput
  update: ClockifyUserUpdateWithoutTimeEntriesInput
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type ClockifyUserUpsertWithoutUserInput = {
  create: ClockifyUserCreateWithoutUserInput
  update: ClockifyUserUpdateWithoutUserInput
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type ClockifyUserWhereInput = {
  AND?: InputMaybe<Array<ClockifyUserWhereInput>>
  NOT?: InputMaybe<Array<ClockifyUserWhereInput>>
  OR?: InputMaybe<Array<ClockifyUserWhereInput>>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  status?: InputMaybe<StringFilter>
  timeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  user?: InputMaybe<UserNullableRelationFilter>
}

export type ClockifyUserWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyUserWhereInput>>
  NOT?: InputMaybe<Array<ClockifyUserWhereInput>>
  OR?: InputMaybe<Array<ClockifyUserWhereInput>>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<StringFilter>
  status?: InputMaybe<StringFilter>
  timeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  user?: InputMaybe<UserNullableRelationFilter>
}

export type ClockifyWebhook = {
  __typename?: 'ClockifyWebhook'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  secret: Scalars['String']['output']
  webhookEvent: Scalars['String']['output']
  webhookId: Scalars['String']['output']
}

export type ClockifyWebhookAvgAggregate = {
  __typename?: 'ClockifyWebhookAvgAggregate'
  id?: Maybe<Scalars['Float']['output']>
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
  secret: Scalars['String']['input']
  webhookEvent: Scalars['String']['input']
  webhookId: Scalars['String']['input']
}

export type ClockifyWebhookCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  secret: Scalars['String']['input']
  webhookEvent: Scalars['String']['input']
  webhookId: Scalars['String']['input']
}

export type ClockifyWebhookMaxAggregate = {
  __typename?: 'ClockifyWebhookMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
  secret?: Maybe<Scalars['String']['output']>
  webhookEvent?: Maybe<Scalars['String']['output']>
  webhookId?: Maybe<Scalars['String']['output']>
}

export type ClockifyWebhookMinAggregate = {
  __typename?: 'ClockifyWebhookMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['Int']['output']>
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

export type ClockifyWebhookSumAggregate = {
  __typename?: 'ClockifyWebhookSumAggregate'
  id?: Maybe<Scalars['Int']['output']>
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
  id?: InputMaybe<IntFilter>
  secret?: InputMaybe<StringFilter>
  webhookEvent?: InputMaybe<StringFilter>
  webhookId?: InputMaybe<StringFilter>
}

export type ClockifyWebhookWhereUniqueInput = {
  AND?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  NOT?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  OR?: InputMaybe<Array<ClockifyWebhookWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  secret?: InputMaybe<StringFilter>
  webhookEvent?: InputMaybe<Scalars['String']['input']>
  webhookId?: InputMaybe<Scalars['String']['input']>
}

export type CreateUserInput = {
  clickupUserId?: InputMaybe<Scalars['Float']['input']>
  clockifyUserId?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  roleId: Scalars['Float']['input']
  username: Scalars['String']['input']
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

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>
  divide?: InputMaybe<Scalars['Float']['input']>
  increment?: InputMaybe<Scalars['Float']['input']>
  multiply?: InputMaybe<Scalars['Float']['input']>
  set?: InputMaybe<Scalars['Float']['input']>
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<Scalars['Float']['input']>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<NestedFloatFilter>
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>
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
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<NestedIntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<Scalars['JSON']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  string_contains?: InputMaybe<Scalars['String']['input']>
  string_ends_with?: InputMaybe<Scalars['String']['input']>
  string_starts_with?: InputMaybe<Scalars['String']['input']>
}

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<Scalars['JSON']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  string_contains?: InputMaybe<Scalars['String']['input']>
  string_ends_with?: InputMaybe<Scalars['String']['input']>
  string_starts_with?: InputMaybe<Scalars['String']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createManyClickupClockifyProject: AffectedRowsOutput
  createManyClickupCustomField: AffectedRowsOutput
  createManyClickupFolder: AffectedRowsOutput
  createManyClickupList: AffectedRowsOutput
  createManyClickupProject: AffectedRowsOutput
  createManyClickupTask: AffectedRowsOutput
  createManyClickupTaskAttachment: AffectedRowsOutput
  createManyClickupTaskChecklist: AffectedRowsOutput
  createManyClickupTaskChecklistItem: AffectedRowsOutput
  createManyClickupTaskCustomField: AffectedRowsOutput
  createManyClickupTaskDependency: AffectedRowsOutput
  createManyClickupTaskDueDate: AffectedRowsOutput
  createManyClickupTaskFolder: AffectedRowsOutput
  createManyClickupTaskList: AffectedRowsOutput
  createManyClickupTaskLocationHistory: AffectedRowsOutput
  createManyClickupTaskPriority: AffectedRowsOutput
  createManyClickupTaskProject: AffectedRowsOutput
  createManyClickupTaskQueue: AffectedRowsOutput
  createManyClickupTaskSpace: AffectedRowsOutput
  createManyClickupTaskStatus: AffectedRowsOutput
  createManyClickupTaskStatusOnTask: AffectedRowsOutput
  createManyClickupTaskTag: AffectedRowsOutput
  createManyClickupTaskTimeEstimate: AffectedRowsOutput
  createManyClickupUser: AffectedRowsOutput
  createManyClickupUserTaskAssignee: AffectedRowsOutput
  createManyClickupUserTaskWatchers: AffectedRowsOutput
  createManyClickupWebhook: AffectedRowsOutput
  createManyClockifyTagOnTimeEntry: AffectedRowsOutput
  createManyClockifyTimeEntry: AffectedRowsOutput
  createManyClockifyTimeEntryProject: AffectedRowsOutput
  createManyClockifyTimeEntryTag: AffectedRowsOutput
  createManyClockifyUser: AffectedRowsOutput
  createManyClockifyWebhook: AffectedRowsOutput
  createManyRole: AffectedRowsOutput
  createManyTaskPeriodData: AffectedRowsOutput
  createManyUser: Array<User>
  createOneClickupClockifyProject: ClickupClockifyProject
  createOneClickupCustomField: ClickupCustomField
  createOneClickupFolder: ClickupFolder
  createOneClickupList: ClickupList
  createOneClickupProject: ClickupProject
  createOneClickupTask: ClickupTask
  createOneClickupTaskAttachment: ClickupTaskAttachment
  createOneClickupTaskChecklist: ClickupTaskChecklist
  createOneClickupTaskChecklistItem: ClickupTaskChecklistItem
  createOneClickupTaskCustomField: ClickupTaskCustomField
  createOneClickupTaskDependency: ClickupTaskDependency
  createOneClickupTaskDueDate: ClickupTaskDueDate
  createOneClickupTaskFolder: ClickupTaskFolder
  createOneClickupTaskList: ClickupTaskList
  createOneClickupTaskLocationHistory: ClickupTaskLocationHistory
  createOneClickupTaskPriority: ClickupTaskPriority
  createOneClickupTaskProject: ClickupTaskProject
  createOneClickupTaskQueue: ClickupTaskQueue
  createOneClickupTaskSpace: ClickupTaskSpace
  createOneClickupTaskStatus: ClickupTaskStatus
  createOneClickupTaskStatusOnTask: ClickupTaskStatusOnTask
  createOneClickupTaskTag: ClickupTaskTag
  createOneClickupTaskTimeEstimate: ClickupTaskTimeEstimate
  createOneClickupUser: ClickupUser
  createOneClickupUserTaskAssignee: ClickupUserTaskAssignee
  createOneClickupUserTaskWatchers: ClickupUserTaskWatchers
  createOneClickupWebhook: ClickupWebhook
  createOneClockifyTagOnTimeEntry: ClockifyTagOnTimeEntry
  createOneClockifyTimeEntry: ClockifyTimeEntry
  createOneClockifyTimeEntryProject: ClockifyTimeEntryProject
  createOneClockifyTimeEntryTag: ClockifyTimeEntryTag
  createOneClockifyUser: ClockifyUser
  createOneClockifyWebhook: ClockifyWebhook
  createOneRole: Role
  createOneTaskPeriodData: TaskPeriodData
  createOneUser: User
  deleteManyClickupClockifyProject: AffectedRowsOutput
  deleteManyClickupCustomField: AffectedRowsOutput
  deleteManyClickupFolder: AffectedRowsOutput
  deleteManyClickupList: AffectedRowsOutput
  deleteManyClickupProject: AffectedRowsOutput
  deleteManyClickupTask: AffectedRowsOutput
  deleteManyClickupTaskAttachment: AffectedRowsOutput
  deleteManyClickupTaskChecklist: AffectedRowsOutput
  deleteManyClickupTaskChecklistItem: AffectedRowsOutput
  deleteManyClickupTaskCustomField: AffectedRowsOutput
  deleteManyClickupTaskDependency: AffectedRowsOutput
  deleteManyClickupTaskDueDate: AffectedRowsOutput
  deleteManyClickupTaskFolder: AffectedRowsOutput
  deleteManyClickupTaskList: AffectedRowsOutput
  deleteManyClickupTaskLocationHistory: AffectedRowsOutput
  deleteManyClickupTaskPriority: AffectedRowsOutput
  deleteManyClickupTaskProject: AffectedRowsOutput
  deleteManyClickupTaskQueue: AffectedRowsOutput
  deleteManyClickupTaskSpace: AffectedRowsOutput
  deleteManyClickupTaskStatus: AffectedRowsOutput
  deleteManyClickupTaskStatusOnTask: AffectedRowsOutput
  deleteManyClickupTaskTag: AffectedRowsOutput
  deleteManyClickupTaskTimeEstimate: AffectedRowsOutput
  deleteManyClickupUser: AffectedRowsOutput
  deleteManyClickupUserTaskAssignee: AffectedRowsOutput
  deleteManyClickupUserTaskWatchers: AffectedRowsOutput
  deleteManyClickupWebhook: AffectedRowsOutput
  deleteManyClockifyTagOnTimeEntry: AffectedRowsOutput
  deleteManyClockifyTimeEntry: AffectedRowsOutput
  deleteManyClockifyTimeEntryProject: AffectedRowsOutput
  deleteManyClockifyTimeEntryTag: AffectedRowsOutput
  deleteManyClockifyUser: AffectedRowsOutput
  deleteManyClockifyWebhook: AffectedRowsOutput
  deleteManyRole: AffectedRowsOutput
  deleteManyTaskPeriodData: AffectedRowsOutput
  deleteManyUser: AffectedRowsOutput
  deleteOneClickupClockifyProject?: Maybe<ClickupClockifyProject>
  deleteOneClickupCustomField?: Maybe<ClickupCustomField>
  deleteOneClickupFolder?: Maybe<ClickupFolder>
  deleteOneClickupList?: Maybe<ClickupList>
  deleteOneClickupProject?: Maybe<ClickupProject>
  deleteOneClickupTask?: Maybe<ClickupTask>
  deleteOneClickupTaskAttachment?: Maybe<ClickupTaskAttachment>
  deleteOneClickupTaskChecklist?: Maybe<ClickupTaskChecklist>
  deleteOneClickupTaskChecklistItem?: Maybe<ClickupTaskChecklistItem>
  deleteOneClickupTaskCustomField?: Maybe<ClickupTaskCustomField>
  deleteOneClickupTaskDependency?: Maybe<ClickupTaskDependency>
  deleteOneClickupTaskDueDate?: Maybe<ClickupTaskDueDate>
  deleteOneClickupTaskFolder?: Maybe<ClickupTaskFolder>
  deleteOneClickupTaskList?: Maybe<ClickupTaskList>
  deleteOneClickupTaskLocationHistory?: Maybe<ClickupTaskLocationHistory>
  deleteOneClickupTaskPriority?: Maybe<ClickupTaskPriority>
  deleteOneClickupTaskProject?: Maybe<ClickupTaskProject>
  deleteOneClickupTaskQueue?: Maybe<ClickupTaskQueue>
  deleteOneClickupTaskSpace?: Maybe<ClickupTaskSpace>
  deleteOneClickupTaskStatus?: Maybe<ClickupTaskStatus>
  deleteOneClickupTaskStatusOnTask?: Maybe<ClickupTaskStatusOnTask>
  deleteOneClickupTaskTag?: Maybe<ClickupTaskTag>
  deleteOneClickupTaskTimeEstimate?: Maybe<ClickupTaskTimeEstimate>
  deleteOneClickupUser?: Maybe<ClickupUser>
  deleteOneClickupUserTaskAssignee?: Maybe<ClickupUserTaskAssignee>
  deleteOneClickupUserTaskWatchers?: Maybe<ClickupUserTaskWatchers>
  deleteOneClickupWebhook?: Maybe<ClickupWebhook>
  deleteOneClockifyTagOnTimeEntry?: Maybe<ClockifyTagOnTimeEntry>
  deleteOneClockifyTimeEntry?: Maybe<ClockifyTimeEntry>
  deleteOneClockifyTimeEntryProject?: Maybe<ClockifyTimeEntryProject>
  deleteOneClockifyTimeEntryTag?: Maybe<ClockifyTimeEntryTag>
  deleteOneClockifyUser?: Maybe<ClockifyUser>
  deleteOneClockifyWebhook?: Maybe<ClockifyWebhook>
  deleteOneRole?: Maybe<Role>
  deleteOneTaskPeriodData?: Maybe<TaskPeriodData>
  deleteOneUser?: Maybe<User>
  signin: SigninInfo
  updateManyClickupClockifyProject: AffectedRowsOutput
  updateManyClickupCustomField: AffectedRowsOutput
  updateManyClickupFolder: AffectedRowsOutput
  updateManyClickupList: AffectedRowsOutput
  updateManyClickupProject: AffectedRowsOutput
  updateManyClickupTask: AffectedRowsOutput
  updateManyClickupTaskAttachment: AffectedRowsOutput
  updateManyClickupTaskChecklist: AffectedRowsOutput
  updateManyClickupTaskChecklistItem: AffectedRowsOutput
  updateManyClickupTaskCustomField: AffectedRowsOutput
  updateManyClickupTaskDependency: AffectedRowsOutput
  updateManyClickupTaskDueDate: AffectedRowsOutput
  updateManyClickupTaskFolder: AffectedRowsOutput
  updateManyClickupTaskList: AffectedRowsOutput
  updateManyClickupTaskLocationHistory: AffectedRowsOutput
  updateManyClickupTaskPriority: AffectedRowsOutput
  updateManyClickupTaskProject: AffectedRowsOutput
  updateManyClickupTaskQueue: AffectedRowsOutput
  updateManyClickupTaskSpace: AffectedRowsOutput
  updateManyClickupTaskStatus: AffectedRowsOutput
  updateManyClickupTaskStatusOnTask: AffectedRowsOutput
  updateManyClickupTaskTag: AffectedRowsOutput
  updateManyClickupTaskTimeEstimate: AffectedRowsOutput
  updateManyClickupUser: AffectedRowsOutput
  updateManyClickupUserTaskAssignee: AffectedRowsOutput
  updateManyClickupUserTaskWatchers: AffectedRowsOutput
  updateManyClickupWebhook: AffectedRowsOutput
  updateManyClockifyTagOnTimeEntry: AffectedRowsOutput
  updateManyClockifyTimeEntry: AffectedRowsOutput
  updateManyClockifyTimeEntryProject: AffectedRowsOutput
  updateManyClockifyTimeEntryTag: AffectedRowsOutput
  updateManyClockifyUser: AffectedRowsOutput
  updateManyClockifyWebhook: AffectedRowsOutput
  updateManyRole: AffectedRowsOutput
  updateManyTaskPeriodData: AffectedRowsOutput
  updateManyUser: AffectedRowsOutput
  updateOneClickupClockifyProject?: Maybe<ClickupClockifyProject>
  updateOneClickupCustomField?: Maybe<ClickupCustomField>
  updateOneClickupFolder?: Maybe<ClickupFolder>
  updateOneClickupList?: Maybe<ClickupList>
  updateOneClickupProject?: Maybe<ClickupProject>
  updateOneClickupTask?: Maybe<ClickupTask>
  updateOneClickupTaskAttachment?: Maybe<ClickupTaskAttachment>
  updateOneClickupTaskChecklist?: Maybe<ClickupTaskChecklist>
  updateOneClickupTaskChecklistItem?: Maybe<ClickupTaskChecklistItem>
  updateOneClickupTaskCustomField?: Maybe<ClickupTaskCustomField>
  updateOneClickupTaskDependency?: Maybe<ClickupTaskDependency>
  updateOneClickupTaskDueDate?: Maybe<ClickupTaskDueDate>
  updateOneClickupTaskFolder?: Maybe<ClickupTaskFolder>
  updateOneClickupTaskList?: Maybe<ClickupTaskList>
  updateOneClickupTaskLocationHistory?: Maybe<ClickupTaskLocationHistory>
  updateOneClickupTaskPriority?: Maybe<ClickupTaskPriority>
  updateOneClickupTaskProject?: Maybe<ClickupTaskProject>
  updateOneClickupTaskQueue?: Maybe<ClickupTaskQueue>
  updateOneClickupTaskSpace?: Maybe<ClickupTaskSpace>
  updateOneClickupTaskStatus?: Maybe<ClickupTaskStatus>
  updateOneClickupTaskStatusOnTask?: Maybe<ClickupTaskStatusOnTask>
  updateOneClickupTaskTag?: Maybe<ClickupTaskTag>
  updateOneClickupTaskTimeEstimate?: Maybe<ClickupTaskTimeEstimate>
  updateOneClickupUser?: Maybe<ClickupUser>
  updateOneClickupUserTaskAssignee?: Maybe<ClickupUserTaskAssignee>
  updateOneClickupUserTaskWatchers?: Maybe<ClickupUserTaskWatchers>
  updateOneClickupWebhook?: Maybe<ClickupWebhook>
  updateOneClockifyTagOnTimeEntry?: Maybe<ClockifyTagOnTimeEntry>
  updateOneClockifyTimeEntry?: Maybe<ClockifyTimeEntry>
  updateOneClockifyTimeEntryProject?: Maybe<ClockifyTimeEntryProject>
  updateOneClockifyTimeEntryTag?: Maybe<ClockifyTimeEntryTag>
  updateOneClockifyUser?: Maybe<ClockifyUser>
  updateOneClockifyWebhook?: Maybe<ClockifyWebhook>
  updateOneRole?: Maybe<Role>
  updateOneTaskPeriodData?: Maybe<TaskPeriodData>
  updateOneUser?: Maybe<User>
}

export type MutationCreateManyClickupClockifyProjectArgs = {
  data: Array<ClickupClockifyProjectCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupCustomFieldArgs = {
  data: Array<ClickupCustomFieldCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupFolderArgs = {
  data: Array<ClickupFolderCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupListArgs = {
  data: Array<ClickupListCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupProjectArgs = {
  data: Array<ClickupProjectCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskArgs = {
  data: Array<ClickupTaskCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskAttachmentArgs = {
  data: Array<ClickupTaskAttachmentCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskChecklistArgs = {
  data: Array<ClickupTaskChecklistCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskChecklistItemArgs = {
  data: Array<ClickupTaskChecklistItemCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskCustomFieldArgs = {
  data: Array<ClickupTaskCustomFieldCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskDependencyArgs = {
  data: Array<ClickupTaskDependencyCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskDueDateArgs = {
  data: Array<ClickupTaskDueDateCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskFolderArgs = {
  data: Array<ClickupTaskFolderCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskListArgs = {
  data: Array<ClickupTaskListCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskLocationHistoryArgs = {
  data: Array<ClickupTaskLocationHistoryCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskPriorityArgs = {
  data: Array<ClickupTaskPriorityCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskProjectArgs = {
  data: Array<ClickupTaskProjectCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskQueueArgs = {
  data: Array<ClickupTaskQueueCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskSpaceArgs = {
  data: Array<ClickupTaskSpaceCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskStatusArgs = {
  data: Array<ClickupTaskStatusCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskStatusOnTaskArgs = {
  data: Array<ClickupTaskStatusOnTaskCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskTagArgs = {
  data: Array<ClickupTaskTagCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupTaskTimeEstimateArgs = {
  data: Array<ClickupTaskTimeEstimateCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupUserArgs = {
  data: Array<ClickupUserCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupUserTaskAssigneeArgs = {
  data: Array<ClickupUserTaskAssigneeCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupUserTaskWatchersArgs = {
  data: Array<ClickupUserTaskWatchersCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClickupWebhookArgs = {
  data: Array<ClickupWebhookCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClockifyTagOnTimeEntryArgs = {
  data: Array<ClockifyTagOnTimeEntryCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClockifyTimeEntryArgs = {
  data: Array<ClockifyTimeEntryCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClockifyTimeEntryProjectArgs = {
  data: Array<ClockifyTimeEntryProjectCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClockifyTimeEntryTagArgs = {
  data: Array<ClockifyTimeEntryTagCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClockifyUserArgs = {
  data: Array<ClockifyUserCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyClockifyWebhookArgs = {
  data: Array<ClockifyWebhookCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyRoleArgs = {
  data: Array<RoleCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyTaskPeriodDataArgs = {
  data: Array<TaskPeriodDataCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateManyUserArgs = {
  users: Array<CreateUserInput>
}

export type MutationCreateOneClickupClockifyProjectArgs = {
  data: ClickupClockifyProjectCreateInput
}

export type MutationCreateOneClickupCustomFieldArgs = {
  data: ClickupCustomFieldCreateInput
}

export type MutationCreateOneClickupFolderArgs = {
  data: ClickupFolderCreateInput
}

export type MutationCreateOneClickupListArgs = {
  data: ClickupListCreateInput
}

export type MutationCreateOneClickupProjectArgs = {
  data: ClickupProjectCreateInput
}

export type MutationCreateOneClickupTaskArgs = {
  data: ClickupTaskCreateInput
}

export type MutationCreateOneClickupTaskAttachmentArgs = {
  data: ClickupTaskAttachmentCreateInput
}

export type MutationCreateOneClickupTaskChecklistArgs = {
  data: ClickupTaskChecklistCreateInput
}

export type MutationCreateOneClickupTaskChecklistItemArgs = {
  data: ClickupTaskChecklistItemCreateInput
}

export type MutationCreateOneClickupTaskCustomFieldArgs = {
  data: ClickupTaskCustomFieldCreateInput
}

export type MutationCreateOneClickupTaskDependencyArgs = {
  data: ClickupTaskDependencyCreateInput
}

export type MutationCreateOneClickupTaskDueDateArgs = {
  data: ClickupTaskDueDateCreateInput
}

export type MutationCreateOneClickupTaskFolderArgs = {
  data: ClickupTaskFolderCreateInput
}

export type MutationCreateOneClickupTaskListArgs = {
  data: ClickupTaskListCreateInput
}

export type MutationCreateOneClickupTaskLocationHistoryArgs = {
  data: ClickupTaskLocationHistoryCreateInput
}

export type MutationCreateOneClickupTaskPriorityArgs = {
  data: ClickupTaskPriorityCreateInput
}

export type MutationCreateOneClickupTaskProjectArgs = {
  data: ClickupTaskProjectCreateInput
}

export type MutationCreateOneClickupTaskQueueArgs = {
  data: ClickupTaskQueueCreateInput
}

export type MutationCreateOneClickupTaskSpaceArgs = {
  data: ClickupTaskSpaceCreateInput
}

export type MutationCreateOneClickupTaskStatusArgs = {
  data: ClickupTaskStatusCreateInput
}

export type MutationCreateOneClickupTaskStatusOnTaskArgs = {
  data: ClickupTaskStatusOnTaskCreateInput
}

export type MutationCreateOneClickupTaskTagArgs = {
  data: ClickupTaskTagCreateInput
}

export type MutationCreateOneClickupTaskTimeEstimateArgs = {
  data: ClickupTaskTimeEstimateCreateInput
}

export type MutationCreateOneClickupUserArgs = {
  data: ClickupUserCreateInput
}

export type MutationCreateOneClickupUserTaskAssigneeArgs = {
  data: ClickupUserTaskAssigneeCreateInput
}

export type MutationCreateOneClickupUserTaskWatchersArgs = {
  data: ClickupUserTaskWatchersCreateInput
}

export type MutationCreateOneClickupWebhookArgs = {
  data: ClickupWebhookCreateInput
}

export type MutationCreateOneClockifyTagOnTimeEntryArgs = {
  data: ClockifyTagOnTimeEntryCreateInput
}

export type MutationCreateOneClockifyTimeEntryArgs = {
  data: ClockifyTimeEntryCreateInput
}

export type MutationCreateOneClockifyTimeEntryProjectArgs = {
  data: ClockifyTimeEntryProjectCreateInput
}

export type MutationCreateOneClockifyTimeEntryTagArgs = {
  data: ClockifyTimeEntryTagCreateInput
}

export type MutationCreateOneClockifyUserArgs = {
  data: ClockifyUserCreateInput
}

export type MutationCreateOneClockifyWebhookArgs = {
  data: ClockifyWebhookCreateInput
}

export type MutationCreateOneRoleArgs = {
  data: RoleCreateInput
}

export type MutationCreateOneTaskPeriodDataArgs = {
  data: TaskPeriodDataCreateInput
}

export type MutationCreateOneUserArgs = {
  user: CreateUserInput
}

export type MutationDeleteManyClickupClockifyProjectArgs = {
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type MutationDeleteManyClickupCustomFieldArgs = {
  where?: InputMaybe<ClickupCustomFieldWhereInput>
}

export type MutationDeleteManyClickupFolderArgs = {
  where?: InputMaybe<ClickupFolderWhereInput>
}

export type MutationDeleteManyClickupListArgs = {
  where?: InputMaybe<ClickupListWhereInput>
}

export type MutationDeleteManyClickupProjectArgs = {
  where?: InputMaybe<ClickupProjectWhereInput>
}

export type MutationDeleteManyClickupTaskArgs = {
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type MutationDeleteManyClickupTaskAttachmentArgs = {
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type MutationDeleteManyClickupTaskChecklistArgs = {
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type MutationDeleteManyClickupTaskChecklistItemArgs = {
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type MutationDeleteManyClickupTaskCustomFieldArgs = {
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type MutationDeleteManyClickupTaskDependencyArgs = {
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type MutationDeleteManyClickupTaskDueDateArgs = {
  where?: InputMaybe<ClickupTaskDueDateWhereInput>
}

export type MutationDeleteManyClickupTaskFolderArgs = {
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type MutationDeleteManyClickupTaskListArgs = {
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type MutationDeleteManyClickupTaskLocationHistoryArgs = {
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type MutationDeleteManyClickupTaskPriorityArgs = {
  where?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type MutationDeleteManyClickupTaskProjectArgs = {
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type MutationDeleteManyClickupTaskQueueArgs = {
  where?: InputMaybe<ClickupTaskQueueWhereInput>
}

export type MutationDeleteManyClickupTaskSpaceArgs = {
  where?: InputMaybe<ClickupTaskSpaceWhereInput>
}

export type MutationDeleteManyClickupTaskStatusArgs = {
  where?: InputMaybe<ClickupTaskStatusWhereInput>
}

export type MutationDeleteManyClickupTaskStatusOnTaskArgs = {
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type MutationDeleteManyClickupTaskTagArgs = {
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type MutationDeleteManyClickupTaskTimeEstimateArgs = {
  where?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
}

export type MutationDeleteManyClickupUserArgs = {
  where?: InputMaybe<ClickupUserWhereInput>
}

export type MutationDeleteManyClickupUserTaskAssigneeArgs = {
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type MutationDeleteManyClickupUserTaskWatchersArgs = {
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type MutationDeleteManyClickupWebhookArgs = {
  where?: InputMaybe<ClickupWebhookWhereInput>
}

export type MutationDeleteManyClockifyTagOnTimeEntryArgs = {
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type MutationDeleteManyClockifyTimeEntryArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type MutationDeleteManyClockifyTimeEntryProjectArgs = {
  where?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type MutationDeleteManyClockifyTimeEntryTagArgs = {
  where?: InputMaybe<ClockifyTimeEntryTagWhereInput>
}

export type MutationDeleteManyClockifyUserArgs = {
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type MutationDeleteManyClockifyWebhookArgs = {
  where?: InputMaybe<ClockifyWebhookWhereInput>
}

export type MutationDeleteManyRoleArgs = {
  where?: InputMaybe<RoleWhereInput>
}

export type MutationDeleteManyTaskPeriodDataArgs = {
  where?: InputMaybe<TaskPeriodDataWhereInput>
}

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>
}

export type MutationDeleteOneClickupClockifyProjectArgs = {
  where: ClickupClockifyProjectWhereUniqueInput
}

export type MutationDeleteOneClickupCustomFieldArgs = {
  where: ClickupCustomFieldWhereUniqueInput
}

export type MutationDeleteOneClickupFolderArgs = {
  where: ClickupFolderWhereUniqueInput
}

export type MutationDeleteOneClickupListArgs = {
  where: ClickupListWhereUniqueInput
}

export type MutationDeleteOneClickupProjectArgs = {
  where: ClickupProjectWhereUniqueInput
}

export type MutationDeleteOneClickupTaskArgs = {
  where: ClickupTaskWhereUniqueInput
}

export type MutationDeleteOneClickupTaskAttachmentArgs = {
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type MutationDeleteOneClickupTaskChecklistArgs = {
  where: ClickupTaskChecklistWhereUniqueInput
}

export type MutationDeleteOneClickupTaskChecklistItemArgs = {
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type MutationDeleteOneClickupTaskCustomFieldArgs = {
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type MutationDeleteOneClickupTaskDependencyArgs = {
  where: ClickupTaskDependencyWhereUniqueInput
}

export type MutationDeleteOneClickupTaskDueDateArgs = {
  where: ClickupTaskDueDateWhereUniqueInput
}

export type MutationDeleteOneClickupTaskFolderArgs = {
  where: ClickupTaskFolderWhereUniqueInput
}

export type MutationDeleteOneClickupTaskListArgs = {
  where: ClickupTaskListWhereUniqueInput
}

export type MutationDeleteOneClickupTaskLocationHistoryArgs = {
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type MutationDeleteOneClickupTaskPriorityArgs = {
  where: ClickupTaskPriorityWhereUniqueInput
}

export type MutationDeleteOneClickupTaskProjectArgs = {
  where: ClickupTaskProjectWhereUniqueInput
}

export type MutationDeleteOneClickupTaskQueueArgs = {
  where: ClickupTaskQueueWhereUniqueInput
}

export type MutationDeleteOneClickupTaskSpaceArgs = {
  where: ClickupTaskSpaceWhereUniqueInput
}

export type MutationDeleteOneClickupTaskStatusArgs = {
  where: ClickupTaskStatusWhereUniqueInput
}

export type MutationDeleteOneClickupTaskStatusOnTaskArgs = {
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type MutationDeleteOneClickupTaskTagArgs = {
  where: ClickupTaskTagWhereUniqueInput
}

export type MutationDeleteOneClickupTaskTimeEstimateArgs = {
  where: ClickupTaskTimeEstimateWhereUniqueInput
}

export type MutationDeleteOneClickupUserArgs = {
  where: ClickupUserWhereUniqueInput
}

export type MutationDeleteOneClickupUserTaskAssigneeArgs = {
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type MutationDeleteOneClickupUserTaskWatchersArgs = {
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type MutationDeleteOneClickupWebhookArgs = {
  where: ClickupWebhookWhereUniqueInput
}

export type MutationDeleteOneClockifyTagOnTimeEntryArgs = {
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type MutationDeleteOneClockifyTimeEntryArgs = {
  where: ClockifyTimeEntryWhereUniqueInput
}

export type MutationDeleteOneClockifyTimeEntryProjectArgs = {
  where: ClockifyTimeEntryProjectWhereUniqueInput
}

export type MutationDeleteOneClockifyTimeEntryTagArgs = {
  where: ClockifyTimeEntryTagWhereUniqueInput
}

export type MutationDeleteOneClockifyUserArgs = {
  where: ClockifyUserWhereUniqueInput
}

export type MutationDeleteOneClockifyWebhookArgs = {
  where: ClockifyWebhookWhereUniqueInput
}

export type MutationDeleteOneRoleArgs = {
  where: RoleWhereUniqueInput
}

export type MutationDeleteOneTaskPeriodDataArgs = {
  where: TaskPeriodDataWhereUniqueInput
}

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationSigninArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationUpdateManyClickupClockifyProjectArgs = {
  data: ClickupClockifyProjectUpdateManyMutationInput
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type MutationUpdateManyClickupCustomFieldArgs = {
  data: ClickupCustomFieldUpdateManyMutationInput
  where?: InputMaybe<ClickupCustomFieldWhereInput>
}

export type MutationUpdateManyClickupFolderArgs = {
  data: ClickupFolderUpdateManyMutationInput
  where?: InputMaybe<ClickupFolderWhereInput>
}

export type MutationUpdateManyClickupListArgs = {
  data: ClickupListUpdateManyMutationInput
  where?: InputMaybe<ClickupListWhereInput>
}

export type MutationUpdateManyClickupProjectArgs = {
  data: ClickupProjectUpdateManyMutationInput
  where?: InputMaybe<ClickupProjectWhereInput>
}

export type MutationUpdateManyClickupTaskArgs = {
  data: ClickupTaskUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type MutationUpdateManyClickupTaskAttachmentArgs = {
  data: ClickupTaskAttachmentUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type MutationUpdateManyClickupTaskChecklistArgs = {
  data: ClickupTaskChecklistUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type MutationUpdateManyClickupTaskChecklistItemArgs = {
  data: ClickupTaskChecklistItemUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type MutationUpdateManyClickupTaskCustomFieldArgs = {
  data: ClickupTaskCustomFieldUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type MutationUpdateManyClickupTaskDependencyArgs = {
  data: ClickupTaskDependencyUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type MutationUpdateManyClickupTaskDueDateArgs = {
  data: ClickupTaskDueDateUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskDueDateWhereInput>
}

export type MutationUpdateManyClickupTaskFolderArgs = {
  data: ClickupTaskFolderUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type MutationUpdateManyClickupTaskListArgs = {
  data: ClickupTaskListUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type MutationUpdateManyClickupTaskLocationHistoryArgs = {
  data: ClickupTaskLocationHistoryUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type MutationUpdateManyClickupTaskPriorityArgs = {
  data: ClickupTaskPriorityUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type MutationUpdateManyClickupTaskProjectArgs = {
  data: ClickupTaskProjectUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type MutationUpdateManyClickupTaskQueueArgs = {
  data: ClickupTaskQueueUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskQueueWhereInput>
}

export type MutationUpdateManyClickupTaskSpaceArgs = {
  data: ClickupTaskSpaceUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskSpaceWhereInput>
}

export type MutationUpdateManyClickupTaskStatusArgs = {
  data: ClickupTaskStatusUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskStatusWhereInput>
}

export type MutationUpdateManyClickupTaskStatusOnTaskArgs = {
  data: ClickupTaskStatusOnTaskUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type MutationUpdateManyClickupTaskTagArgs = {
  data: ClickupTaskTagUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type MutationUpdateManyClickupTaskTimeEstimateArgs = {
  data: ClickupTaskTimeEstimateUpdateManyMutationInput
  where?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
}

export type MutationUpdateManyClickupUserArgs = {
  data: ClickupUserUpdateManyMutationInput
  where?: InputMaybe<ClickupUserWhereInput>
}

export type MutationUpdateManyClickupUserTaskAssigneeArgs = {
  data: ClickupUserTaskAssigneeUpdateManyMutationInput
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type MutationUpdateManyClickupUserTaskWatchersArgs = {
  data: ClickupUserTaskWatchersUpdateManyMutationInput
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type MutationUpdateManyClickupWebhookArgs = {
  data: ClickupWebhookUpdateManyMutationInput
  where?: InputMaybe<ClickupWebhookWhereInput>
}

export type MutationUpdateManyClockifyTagOnTimeEntryArgs = {
  data: ClockifyTagOnTimeEntryUpdateManyMutationInput
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type MutationUpdateManyClockifyTimeEntryArgs = {
  data: ClockifyTimeEntryUpdateManyMutationInput
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type MutationUpdateManyClockifyTimeEntryProjectArgs = {
  data: ClockifyTimeEntryProjectUpdateManyMutationInput
  where?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type MutationUpdateManyClockifyTimeEntryTagArgs = {
  data: ClockifyTimeEntryTagUpdateManyMutationInput
  where?: InputMaybe<ClockifyTimeEntryTagWhereInput>
}

export type MutationUpdateManyClockifyUserArgs = {
  data: ClockifyUserUpdateManyMutationInput
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type MutationUpdateManyClockifyWebhookArgs = {
  data: ClockifyWebhookUpdateManyMutationInput
  where?: InputMaybe<ClockifyWebhookWhereInput>
}

export type MutationUpdateManyRoleArgs = {
  data: RoleUpdateManyMutationInput
  where?: InputMaybe<RoleWhereInput>
}

export type MutationUpdateManyTaskPeriodDataArgs = {
  data: TaskPeriodDataUpdateManyMutationInput
  where?: InputMaybe<TaskPeriodDataWhereInput>
}

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: InputMaybe<UserWhereInput>
}

export type MutationUpdateOneClickupClockifyProjectArgs = {
  data: ClickupClockifyProjectUpdateInput
  where: ClickupClockifyProjectWhereUniqueInput
}

export type MutationUpdateOneClickupCustomFieldArgs = {
  data: ClickupCustomFieldUpdateInput
  where: ClickupCustomFieldWhereUniqueInput
}

export type MutationUpdateOneClickupFolderArgs = {
  data: ClickupFolderUpdateInput
  where: ClickupFolderWhereUniqueInput
}

export type MutationUpdateOneClickupListArgs = {
  data: ClickupListUpdateInput
  where: ClickupListWhereUniqueInput
}

export type MutationUpdateOneClickupProjectArgs = {
  data: ClickupProjectUpdateInput
  where: ClickupProjectWhereUniqueInput
}

export type MutationUpdateOneClickupTaskArgs = {
  data: ClickupTaskUpdateInput
  where: ClickupTaskWhereUniqueInput
}

export type MutationUpdateOneClickupTaskAttachmentArgs = {
  data: ClickupTaskAttachmentUpdateInput
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type MutationUpdateOneClickupTaskChecklistArgs = {
  data: ClickupTaskChecklistUpdateInput
  where: ClickupTaskChecklistWhereUniqueInput
}

export type MutationUpdateOneClickupTaskChecklistItemArgs = {
  data: ClickupTaskChecklistItemUpdateInput
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type MutationUpdateOneClickupTaskCustomFieldArgs = {
  data: ClickupTaskCustomFieldUpdateInput
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type MutationUpdateOneClickupTaskDependencyArgs = {
  data: ClickupTaskDependencyUpdateInput
  where: ClickupTaskDependencyWhereUniqueInput
}

export type MutationUpdateOneClickupTaskDueDateArgs = {
  data: ClickupTaskDueDateUpdateInput
  where: ClickupTaskDueDateWhereUniqueInput
}

export type MutationUpdateOneClickupTaskFolderArgs = {
  data: ClickupTaskFolderUpdateInput
  where: ClickupTaskFolderWhereUniqueInput
}

export type MutationUpdateOneClickupTaskListArgs = {
  data: ClickupTaskListUpdateInput
  where: ClickupTaskListWhereUniqueInput
}

export type MutationUpdateOneClickupTaskLocationHistoryArgs = {
  data: ClickupTaskLocationHistoryUpdateInput
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type MutationUpdateOneClickupTaskPriorityArgs = {
  data: ClickupTaskPriorityUpdateInput
  where: ClickupTaskPriorityWhereUniqueInput
}

export type MutationUpdateOneClickupTaskProjectArgs = {
  data: ClickupTaskProjectUpdateInput
  where: ClickupTaskProjectWhereUniqueInput
}

export type MutationUpdateOneClickupTaskQueueArgs = {
  data: ClickupTaskQueueUpdateInput
  where: ClickupTaskQueueWhereUniqueInput
}

export type MutationUpdateOneClickupTaskSpaceArgs = {
  data: ClickupTaskSpaceUpdateInput
  where: ClickupTaskSpaceWhereUniqueInput
}

export type MutationUpdateOneClickupTaskStatusArgs = {
  data: ClickupTaskStatusUpdateInput
  where: ClickupTaskStatusWhereUniqueInput
}

export type MutationUpdateOneClickupTaskStatusOnTaskArgs = {
  data: ClickupTaskStatusOnTaskUpdateInput
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type MutationUpdateOneClickupTaskTagArgs = {
  data: ClickupTaskTagUpdateInput
  where: ClickupTaskTagWhereUniqueInput
}

export type MutationUpdateOneClickupTaskTimeEstimateArgs = {
  data: ClickupTaskTimeEstimateUpdateInput
  where: ClickupTaskTimeEstimateWhereUniqueInput
}

export type MutationUpdateOneClickupUserArgs = {
  data: ClickupUserUpdateInput
  where: ClickupUserWhereUniqueInput
}

export type MutationUpdateOneClickupUserTaskAssigneeArgs = {
  data: ClickupUserTaskAssigneeUpdateInput
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type MutationUpdateOneClickupUserTaskWatchersArgs = {
  data: ClickupUserTaskWatchersUpdateInput
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type MutationUpdateOneClickupWebhookArgs = {
  data: ClickupWebhookUpdateInput
  where: ClickupWebhookWhereUniqueInput
}

export type MutationUpdateOneClockifyTagOnTimeEntryArgs = {
  data: ClockifyTagOnTimeEntryUpdateInput
  where: ClockifyTagOnTimeEntryWhereUniqueInput
}

export type MutationUpdateOneClockifyTimeEntryArgs = {
  data: ClockifyTimeEntryUpdateInput
  where: ClockifyTimeEntryWhereUniqueInput
}

export type MutationUpdateOneClockifyTimeEntryProjectArgs = {
  data: ClockifyTimeEntryProjectUpdateInput
  where: ClockifyTimeEntryProjectWhereUniqueInput
}

export type MutationUpdateOneClockifyTimeEntryTagArgs = {
  data: ClockifyTimeEntryTagUpdateInput
  where: ClockifyTimeEntryTagWhereUniqueInput
}

export type MutationUpdateOneClockifyUserArgs = {
  data: ClockifyUserUpdateInput
  where: ClockifyUserWhereUniqueInput
}

export type MutationUpdateOneClockifyWebhookArgs = {
  data: ClockifyWebhookUpdateInput
  where: ClockifyWebhookWhereUniqueInput
}

export type MutationUpdateOneRoleArgs = {
  data: RoleUpdateInput
  where: RoleWhereUniqueInput
}

export type MutationUpdateOneTaskPeriodDataArgs = {
  data: TaskPeriodDataUpdateInput
  where: TaskPeriodDataWhereUniqueInput
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

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<Scalars['Float']['input']>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<NestedFloatFilter>
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>
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
}

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>
}

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>
  divide?: InputMaybe<Scalars['Int']['input']>
  increment?: InputMaybe<Scalars['Int']['input']>
  multiply?: InputMaybe<Scalars['Int']['input']>
  set?: InputMaybe<Scalars['Int']['input']>
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>
}

export enum NullsOrder {
  First = 'first',
  Last = 'last',
}

export type Query = {
  __typename?: 'Query'
  aggregateClickupClockifyProject: AggregateClickupClockifyProject
  aggregateClickupCustomField: AggregateClickupCustomField
  aggregateClickupFolder: AggregateClickupFolder
  aggregateClickupList: AggregateClickupList
  aggregateClickupProject: AggregateClickupProject
  aggregateClickupTask: AggregateClickupTask
  aggregateClickupTaskAttachment: AggregateClickupTaskAttachment
  aggregateClickupTaskChecklist: AggregateClickupTaskChecklist
  aggregateClickupTaskChecklistItem: AggregateClickupTaskChecklistItem
  aggregateClickupTaskCustomField: AggregateClickupTaskCustomField
  aggregateClickupTaskDependency: AggregateClickupTaskDependency
  aggregateClickupTaskDueDate: AggregateClickupTaskDueDate
  aggregateClickupTaskFolder: AggregateClickupTaskFolder
  aggregateClickupTaskList: AggregateClickupTaskList
  aggregateClickupTaskLocationHistory: AggregateClickupTaskLocationHistory
  aggregateClickupTaskPriority: AggregateClickupTaskPriority
  aggregateClickupTaskProject: AggregateClickupTaskProject
  aggregateClickupTaskQueue: AggregateClickupTaskQueue
  aggregateClickupTaskSpace: AggregateClickupTaskSpace
  aggregateClickupTaskStatus: AggregateClickupTaskStatus
  aggregateClickupTaskStatusOnTask: AggregateClickupTaskStatusOnTask
  aggregateClickupTaskTag: AggregateClickupTaskTag
  aggregateClickupTaskTimeEstimate: AggregateClickupTaskTimeEstimate
  aggregateClickupUser: AggregateClickupUser
  aggregateClickupUserTaskAssignee: AggregateClickupUserTaskAssignee
  aggregateClickupUserTaskWatchers: AggregateClickupUserTaskWatchers
  aggregateClickupWebhook: AggregateClickupWebhook
  aggregateClockifyTagOnTimeEntry: AggregateClockifyTagOnTimeEntry
  aggregateClockifyTimeEntry: AggregateClockifyTimeEntry
  aggregateClockifyTimeEntryProject: AggregateClockifyTimeEntryProject
  aggregateClockifyTimeEntryTag: AggregateClockifyTimeEntryTag
  aggregateClockifyUser: AggregateClockifyUser
  aggregateClockifyWebhook: AggregateClockifyWebhook
  aggregateRole: AggregateRole
  aggregateTaskPeriodData: AggregateTaskPeriodData
  aggregateUser: AggregateUser
  clickupClockifyProject?: Maybe<ClickupClockifyProject>
  clickupClockifyProjects: Array<ClickupClockifyProject>
  clickupCustomField?: Maybe<ClickupCustomField>
  clickupCustomFields: Array<ClickupCustomField>
  clickupFolder?: Maybe<ClickupFolder>
  clickupFolders: Array<ClickupFolder>
  clickupList?: Maybe<ClickupList>
  clickupLists: Array<ClickupList>
  clickupProject?: Maybe<ClickupProject>
  clickupProjects: Array<ClickupProject>
  clickupTask?: Maybe<ClickupTask>
  clickupTaskAttachment?: Maybe<ClickupTaskAttachment>
  clickupTaskAttachments: Array<ClickupTaskAttachment>
  clickupTaskChecklist?: Maybe<ClickupTaskChecklist>
  clickupTaskChecklistItem?: Maybe<ClickupTaskChecklistItem>
  clickupTaskChecklistItems: Array<ClickupTaskChecklistItem>
  clickupTaskChecklists: Array<ClickupTaskChecklist>
  clickupTaskCustomField?: Maybe<ClickupTaskCustomField>
  clickupTaskCustomFields: Array<ClickupTaskCustomField>
  clickupTaskDependencies: Array<ClickupTaskDependency>
  clickupTaskDependency?: Maybe<ClickupTaskDependency>
  clickupTaskDueDate?: Maybe<ClickupTaskDueDate>
  clickupTaskDueDates: Array<ClickupTaskDueDate>
  clickupTaskFolder?: Maybe<ClickupTaskFolder>
  clickupTaskFolders: Array<ClickupTaskFolder>
  clickupTaskList?: Maybe<ClickupTaskList>
  clickupTaskLists: Array<ClickupTaskList>
  clickupTaskLocationHistories: Array<ClickupTaskLocationHistory>
  clickupTaskLocationHistory?: Maybe<ClickupTaskLocationHistory>
  clickupTaskPriorities: Array<ClickupTaskPriority>
  clickupTaskPriority?: Maybe<ClickupTaskPriority>
  clickupTaskProject?: Maybe<ClickupTaskProject>
  clickupTaskProjects: Array<ClickupTaskProject>
  clickupTaskQueue?: Maybe<ClickupTaskQueue>
  clickupTaskQueues: Array<ClickupTaskQueue>
  clickupTaskSpace?: Maybe<ClickupTaskSpace>
  clickupTaskSpaces: Array<ClickupTaskSpace>
  clickupTaskStatus?: Maybe<ClickupTaskStatus>
  clickupTaskStatusOnTask?: Maybe<ClickupTaskStatusOnTask>
  clickupTaskStatusOnTasks: Array<ClickupTaskStatusOnTask>
  clickupTaskStatuses: Array<ClickupTaskStatus>
  clickupTaskTag?: Maybe<ClickupTaskTag>
  clickupTaskTags: Array<ClickupTaskTag>
  clickupTaskTimeEstimate?: Maybe<ClickupTaskTimeEstimate>
  clickupTaskTimeEstimates: Array<ClickupTaskTimeEstimate>
  clickupTasks: Array<ClickupTask>
  clickupUser?: Maybe<ClickupUser>
  clickupUserTaskAssignee?: Maybe<ClickupUserTaskAssignee>
  clickupUserTaskAssignees: Array<ClickupUserTaskAssignee>
  clickupUsers: Array<ClickupUser>
  clickupWebhook?: Maybe<ClickupWebhook>
  clickupWebhooks: Array<ClickupWebhook>
  clockifyTagOnTimeEntries: Array<ClockifyTagOnTimeEntry>
  clockifyTagOnTimeEntry?: Maybe<ClockifyTagOnTimeEntry>
  clockifyTimeEntries: Array<ClockifyTimeEntry>
  clockifyTimeEntry?: Maybe<ClockifyTimeEntry>
  clockifyTimeEntryProject?: Maybe<ClockifyTimeEntryProject>
  clockifyTimeEntryProjects: Array<ClockifyTimeEntryProject>
  clockifyTimeEntryTag?: Maybe<ClockifyTimeEntryTag>
  clockifyTimeEntryTags: Array<ClockifyTimeEntryTag>
  clockifyUser?: Maybe<ClockifyUser>
  clockifyUsers: Array<ClockifyUser>
  clockifyWebhook?: Maybe<ClockifyWebhook>
  clockifyWebhooks: Array<ClockifyWebhook>
  findManyClickupUserTaskWatchers: Array<ClickupUserTaskWatchers>
  findManyTaskPeriodData: Array<TaskPeriodData>
  findUniqueClickupUserTaskWatchers?: Maybe<ClickupUserTaskWatchers>
  findUniqueTaskPeriodData?: Maybe<TaskPeriodData>
  role?: Maybe<Role>
  roles: Array<Role>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryAggregateClickupClockifyProjectArgs = {
  cursor?: InputMaybe<ClickupClockifyProjectWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupClockifyProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type QueryAggregateClickupCustomFieldArgs = {
  cursor?: InputMaybe<ClickupCustomFieldWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupCustomFieldOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupCustomFieldWhereInput>
}

export type QueryAggregateClickupFolderArgs = {
  cursor?: InputMaybe<ClickupFolderWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupFolderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupFolderWhereInput>
}

export type QueryAggregateClickupListArgs = {
  cursor?: InputMaybe<ClickupListWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupListOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupListWhereInput>
}

export type QueryAggregateClickupProjectArgs = {
  cursor?: InputMaybe<ClickupProjectWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupProjectWhereInput>
}

export type QueryAggregateClickupTaskArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type QueryAggregateClickupTaskAttachmentArgs = {
  cursor?: InputMaybe<ClickupTaskAttachmentWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskAttachmentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type QueryAggregateClickupTaskChecklistArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type QueryAggregateClickupTaskChecklistItemArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistItemWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistItemOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type QueryAggregateClickupTaskCustomFieldArgs = {
  cursor?: InputMaybe<ClickupTaskCustomFieldWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskCustomFieldOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type QueryAggregateClickupTaskDependencyArgs = {
  cursor?: InputMaybe<ClickupTaskDependencyWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskDependencyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type QueryAggregateClickupTaskDueDateArgs = {
  cursor?: InputMaybe<ClickupTaskDueDateWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskDueDateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDueDateWhereInput>
}

export type QueryAggregateClickupTaskFolderArgs = {
  cursor?: InputMaybe<ClickupTaskFolderWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskFolderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type QueryAggregateClickupTaskListArgs = {
  cursor?: InputMaybe<ClickupTaskListWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskListOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type QueryAggregateClickupTaskLocationHistoryArgs = {
  cursor?: InputMaybe<ClickupTaskLocationHistoryWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskLocationHistoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type QueryAggregateClickupTaskPriorityArgs = {
  cursor?: InputMaybe<ClickupTaskPriorityWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskPriorityOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type QueryAggregateClickupTaskProjectArgs = {
  cursor?: InputMaybe<ClickupTaskProjectWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type QueryAggregateClickupTaskQueueArgs = {
  cursor?: InputMaybe<ClickupTaskQueueWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskQueueOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskQueueWhereInput>
}

export type QueryAggregateClickupTaskSpaceArgs = {
  cursor?: InputMaybe<ClickupTaskSpaceWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskSpaceOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskSpaceWhereInput>
}

export type QueryAggregateClickupTaskStatusArgs = {
  cursor?: InputMaybe<ClickupTaskStatusWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskStatusWhereInput>
}

export type QueryAggregateClickupTaskStatusOnTaskArgs = {
  cursor?: InputMaybe<ClickupTaskStatusOnTaskWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskStatusOnTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type QueryAggregateClickupTaskTagArgs = {
  cursor?: InputMaybe<ClickupTaskTagWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskTagOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type QueryAggregateClickupTaskTimeEstimateArgs = {
  cursor?: InputMaybe<ClickupTaskTimeEstimateWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupTaskTimeEstimateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
}

export type QueryAggregateClickupUserArgs = {
  cursor?: InputMaybe<ClickupUserWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupUserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserWhereInput>
}

export type QueryAggregateClickupUserTaskAssigneeArgs = {
  cursor?: InputMaybe<ClickupUserTaskAssigneeWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupUserTaskAssigneeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type QueryAggregateClickupUserTaskWatchersArgs = {
  cursor?: InputMaybe<ClickupUserTaskWatchersWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupUserTaskWatchersOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type QueryAggregateClickupWebhookArgs = {
  cursor?: InputMaybe<ClickupWebhookWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClickupWebhookOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupWebhookWhereInput>
}

export type QueryAggregateClockifyTagOnTimeEntryArgs = {
  cursor?: InputMaybe<ClockifyTagOnTimeEntryWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyTagOnTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type QueryAggregateClockifyTimeEntryArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type QueryAggregateClockifyTimeEntryProjectArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryProjectWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type QueryAggregateClockifyTimeEntryTagArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryTagWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryTagOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryTagWhereInput>
}

export type QueryAggregateClockifyUserArgs = {
  cursor?: InputMaybe<ClockifyUserWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyUserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type QueryAggregateClockifyWebhookArgs = {
  cursor?: InputMaybe<ClockifyWebhookWhereUniqueInput>
  orderBy?: InputMaybe<Array<ClockifyWebhookOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyWebhookWhereInput>
}

export type QueryAggregateRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RoleWhereInput>
}

export type QueryAggregateTaskPeriodDataArgs = {
  cursor?: InputMaybe<TaskPeriodDataWhereUniqueInput>
  orderBy?: InputMaybe<Array<TaskPeriodDataOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TaskPeriodDataWhereInput>
}

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryClickupClockifyProjectArgs = {
  where: ClickupClockifyProjectWhereUniqueInput
}

export type QueryClickupClockifyProjectsArgs = {
  cursor?: InputMaybe<ClickupClockifyProjectWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupClockifyProjectScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupClockifyProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupClockifyProjectWhereInput>
}

export type QueryClickupCustomFieldArgs = {
  where: ClickupCustomFieldWhereUniqueInput
}

export type QueryClickupCustomFieldsArgs = {
  cursor?: InputMaybe<ClickupCustomFieldWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupCustomFieldScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupCustomFieldOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupCustomFieldWhereInput>
}

export type QueryClickupFolderArgs = {
  where: ClickupFolderWhereUniqueInput
}

export type QueryClickupFoldersArgs = {
  cursor?: InputMaybe<ClickupFolderWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupFolderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupFolderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupFolderWhereInput>
}

export type QueryClickupListArgs = {
  where: ClickupListWhereUniqueInput
}

export type QueryClickupListsArgs = {
  cursor?: InputMaybe<ClickupListWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupListScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupListOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupListWhereInput>
}

export type QueryClickupProjectArgs = {
  where: ClickupProjectWhereUniqueInput
}

export type QueryClickupProjectsArgs = {
  cursor?: InputMaybe<ClickupProjectWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupProjectScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupProjectWhereInput>
}

export type QueryClickupTaskArgs = {
  where: ClickupTaskWhereUniqueInput
}

export type QueryClickupTaskAttachmentArgs = {
  where: ClickupTaskAttachmentWhereUniqueInput
}

export type QueryClickupTaskAttachmentsArgs = {
  cursor?: InputMaybe<ClickupTaskAttachmentWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskAttachmentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskAttachmentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskAttachmentWhereInput>
}

export type QueryClickupTaskChecklistArgs = {
  where: ClickupTaskChecklistWhereUniqueInput
}

export type QueryClickupTaskChecklistItemArgs = {
  where: ClickupTaskChecklistItemWhereUniqueInput
}

export type QueryClickupTaskChecklistItemsArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistItemWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskChecklistItemScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistItemOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistItemWhereInput>
}

export type QueryClickupTaskChecklistsArgs = {
  cursor?: InputMaybe<ClickupTaskChecklistWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskChecklistScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskChecklistOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskChecklistWhereInput>
}

export type QueryClickupTaskCustomFieldArgs = {
  where: ClickupTaskCustomFieldWhereUniqueInput
}

export type QueryClickupTaskCustomFieldsArgs = {
  cursor?: InputMaybe<ClickupTaskCustomFieldWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskCustomFieldScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskCustomFieldOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskCustomFieldWhereInput>
}

export type QueryClickupTaskDependenciesArgs = {
  cursor?: InputMaybe<ClickupTaskDependencyWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskDependencyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskDependencyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDependencyWhereInput>
}

export type QueryClickupTaskDependencyArgs = {
  where: ClickupTaskDependencyWhereUniqueInput
}

export type QueryClickupTaskDueDateArgs = {
  where: ClickupTaskDueDateWhereUniqueInput
}

export type QueryClickupTaskDueDatesArgs = {
  cursor?: InputMaybe<ClickupTaskDueDateWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskDueDateScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskDueDateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskDueDateWhereInput>
}

export type QueryClickupTaskFolderArgs = {
  where: ClickupTaskFolderWhereUniqueInput
}

export type QueryClickupTaskFoldersArgs = {
  cursor?: InputMaybe<ClickupTaskFolderWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskFolderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskFolderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskFolderWhereInput>
}

export type QueryClickupTaskListArgs = {
  where: ClickupTaskListWhereUniqueInput
}

export type QueryClickupTaskListsArgs = {
  cursor?: InputMaybe<ClickupTaskListWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskListScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskListOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskListWhereInput>
}

export type QueryClickupTaskLocationHistoriesArgs = {
  cursor?: InputMaybe<ClickupTaskLocationHistoryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskLocationHistoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskLocationHistoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskLocationHistoryWhereInput>
}

export type QueryClickupTaskLocationHistoryArgs = {
  where: ClickupTaskLocationHistoryWhereUniqueInput
}

export type QueryClickupTaskPrioritiesArgs = {
  cursor?: InputMaybe<ClickupTaskPriorityWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskPriorityScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskPriorityOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskPriorityWhereInput>
}

export type QueryClickupTaskPriorityArgs = {
  where: ClickupTaskPriorityWhereUniqueInput
}

export type QueryClickupTaskProjectArgs = {
  where: ClickupTaskProjectWhereUniqueInput
}

export type QueryClickupTaskProjectsArgs = {
  cursor?: InputMaybe<ClickupTaskProjectWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskProjectScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskProjectWhereInput>
}

export type QueryClickupTaskQueueArgs = {
  where: ClickupTaskQueueWhereUniqueInput
}

export type QueryClickupTaskQueuesArgs = {
  cursor?: InputMaybe<ClickupTaskQueueWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskQueueScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskQueueOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskQueueWhereInput>
}

export type QueryClickupTaskSpaceArgs = {
  where: ClickupTaskSpaceWhereUniqueInput
}

export type QueryClickupTaskSpacesArgs = {
  cursor?: InputMaybe<ClickupTaskSpaceWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskSpaceScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskSpaceOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskSpaceWhereInput>
}

export type QueryClickupTaskStatusArgs = {
  where: ClickupTaskStatusWhereUniqueInput
}

export type QueryClickupTaskStatusOnTaskArgs = {
  where: ClickupTaskStatusOnTaskWhereUniqueInput
}

export type QueryClickupTaskStatusOnTasksArgs = {
  cursor?: InputMaybe<ClickupTaskStatusOnTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskStatusOnTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskStatusOnTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskStatusOnTaskWhereInput>
}

export type QueryClickupTaskStatusesArgs = {
  cursor?: InputMaybe<ClickupTaskStatusWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskStatusScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskStatusWhereInput>
}

export type QueryClickupTaskTagArgs = {
  where: ClickupTaskTagWhereUniqueInput
}

export type QueryClickupTaskTagsArgs = {
  cursor?: InputMaybe<ClickupTaskTagWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskTagScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskTagOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskTagWhereInput>
}

export type QueryClickupTaskTimeEstimateArgs = {
  where: ClickupTaskTimeEstimateWhereUniqueInput
}

export type QueryClickupTaskTimeEstimatesArgs = {
  cursor?: InputMaybe<ClickupTaskTimeEstimateWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskTimeEstimateScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskTimeEstimateOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskTimeEstimateWhereInput>
}

export type QueryClickupTasksArgs = {
  cursor?: InputMaybe<ClickupTaskWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupTaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupTaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupTaskWhereInput>
}

export type QueryClickupUserArgs = {
  where: ClickupUserWhereUniqueInput
}

export type QueryClickupUserTaskAssigneeArgs = {
  where: ClickupUserTaskAssigneeWhereUniqueInput
}

export type QueryClickupUserTaskAssigneesArgs = {
  cursor?: InputMaybe<ClickupUserTaskAssigneeWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupUserTaskAssigneeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupUserTaskAssigneeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskAssigneeWhereInput>
}

export type QueryClickupUsersArgs = {
  cursor?: InputMaybe<ClickupUserWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupUserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupUserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserWhereInput>
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

export type QueryClockifyTagOnTimeEntriesArgs = {
  cursor?: InputMaybe<ClockifyTagOnTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTagOnTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTagOnTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTagOnTimeEntryWhereInput>
}

export type QueryClockifyTagOnTimeEntryArgs = {
  where: ClockifyTagOnTimeEntryWhereUniqueInput
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

export type QueryClockifyTimeEntryProjectArgs = {
  where: ClockifyTimeEntryProjectWhereUniqueInput
}

export type QueryClockifyTimeEntryProjectsArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryProjectWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryProjectScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryProjectOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryProjectWhereInput>
}

export type QueryClockifyTimeEntryTagArgs = {
  where: ClockifyTimeEntryTagWhereUniqueInput
}

export type QueryClockifyTimeEntryTagsArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryTagWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryTagScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryTagOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryTagWhereInput>
}

export type QueryClockifyUserArgs = {
  where: ClockifyUserWhereUniqueInput
}

export type QueryClockifyUsersArgs = {
  cursor?: InputMaybe<ClockifyUserWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyUserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyUserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyUserWhereInput>
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

export type QueryFindManyClickupUserTaskWatchersArgs = {
  cursor?: InputMaybe<ClickupUserTaskWatchersWhereUniqueInput>
  distinct?: InputMaybe<Array<ClickupUserTaskWatchersScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClickupUserTaskWatchersOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClickupUserTaskWatchersWhereInput>
}

export type QueryFindManyTaskPeriodDataArgs = {
  cursor?: InputMaybe<TaskPeriodDataWhereUniqueInput>
  distinct?: InputMaybe<Array<TaskPeriodDataScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TaskPeriodDataOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TaskPeriodDataWhereInput>
}

export type QueryFindUniqueClickupUserTaskWatchersArgs = {
  where: ClickupUserTaskWatchersWhereUniqueInput
}

export type QueryFindUniqueTaskPeriodDataArgs = {
  where: TaskPeriodDataWhereUniqueInput
}

export type QueryRoleArgs = {
  where: RoleWhereUniqueInput
}

export type QueryRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RoleWhereInput>
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

export type Role = {
  __typename?: 'Role'
  _count?: Maybe<RoleCount>
  allowedToPersistData: Scalars['Boolean']['output']
  authority: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  users: Array<User>
}

export type RoleUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type RoleAvgAggregate = {
  __typename?: 'RoleAvgAggregate'
  authority?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type RoleCount = {
  __typename?: 'RoleCount'
  users: Scalars['Int']['output']
}

export type RoleCountUsersArgs = {
  where?: InputMaybe<UserWhereInput>
}

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate'
  _all: Scalars['Int']['output']
  allowedToPersistData: Scalars['Int']['output']
  authority: Scalars['Int']['output']
  id: Scalars['Int']['output']
  name: Scalars['Int']['output']
}

export type RoleCreateInput = {
  allowedToPersistData?: InputMaybe<Scalars['Boolean']['input']>
  authority: Scalars['Int']['input']
  name: Scalars['String']['input']
  users?: InputMaybe<UserCreateNestedManyWithoutRoleInput>
}

export type RoleCreateManyInput = {
  allowedToPersistData?: InputMaybe<Scalars['Boolean']['input']>
  authority: Scalars['Int']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  name: Scalars['String']['input']
}

export type RoleCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>
  create?: InputMaybe<RoleCreateWithoutUsersInput>
}

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput
  where: RoleWhereUniqueInput
}

export type RoleCreateWithoutUsersInput = {
  allowedToPersistData?: InputMaybe<Scalars['Boolean']['input']>
  authority: Scalars['Int']['input']
  name: Scalars['String']['input']
}

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate'
  allowedToPersistData?: Maybe<Scalars['Boolean']['output']>
  authority?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate'
  allowedToPersistData?: Maybe<Scalars['Boolean']['output']>
  authority?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type RoleOrderByWithRelationInput = {
  allowedToPersistData?: InputMaybe<SortOrder>
  authority?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  users?: InputMaybe<UserOrderByRelationAggregateInput>
}

export type RoleRelationFilter = {
  is?: InputMaybe<RoleWhereInput>
  isNot?: InputMaybe<RoleWhereInput>
}

export enum RoleScalarFieldEnum {
  AllowedToPersistData = 'allowedToPersistData',
  Authority = 'authority',
  Id = 'id',
  Name = 'name',
}

export type RoleSumAggregate = {
  __typename?: 'RoleSumAggregate'
  authority?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type RoleUpdateInput = {
  allowedToPersistData?: InputMaybe<BoolFieldUpdateOperationsInput>
  authority?: InputMaybe<IntFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
  users?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>
}

export type RoleUpdateManyMutationInput = {
  allowedToPersistData?: InputMaybe<BoolFieldUpdateOperationsInput>
  authority?: InputMaybe<IntFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>
  create?: InputMaybe<RoleCreateWithoutUsersInput>
  update?: InputMaybe<RoleUpdateToOneWithWhereWithoutUsersInput>
  upsert?: InputMaybe<RoleUpsertWithoutUsersInput>
}

export type RoleUpdateToOneWithWhereWithoutUsersInput = {
  data: RoleUpdateWithoutUsersInput
  where?: InputMaybe<RoleWhereInput>
}

export type RoleUpdateWithoutUsersInput = {
  allowedToPersistData?: InputMaybe<BoolFieldUpdateOperationsInput>
  authority?: InputMaybe<IntFieldUpdateOperationsInput>
  name?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type RoleUpsertWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput
  update: RoleUpdateWithoutUsersInput
  where?: InputMaybe<RoleWhereInput>
}

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>
  NOT?: InputMaybe<Array<RoleWhereInput>>
  OR?: InputMaybe<Array<RoleWhereInput>>
  allowedToPersistData?: InputMaybe<BoolFilter>
  authority?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  users?: InputMaybe<UserListRelationFilter>
}

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>
  NOT?: InputMaybe<Array<RoleWhereInput>>
  OR?: InputMaybe<Array<RoleWhereInput>>
  allowedToPersistData?: InputMaybe<BoolFilter>
  authority?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<UserListRelationFilter>
}

export type SigninInfo = {
  __typename?: 'SigninInfo'
  token: Scalars['String']['output']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>
  sort: SortOrder
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
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<NestedStringNullableFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type TaskPeriodData = {
  __typename?: 'TaskPeriodData'
  clickupTask: ClickupTask
  clickupTaskId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  endPeriod: Scalars['DateTime']['output']
  revisedTrackedTime: Scalars['Float']['output']
  startPeriod: Scalars['DateTime']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type TaskPeriodDataAvgAggregate = {
  __typename?: 'TaskPeriodDataAvgAggregate'
  revisedTrackedTime?: Maybe<Scalars['Float']['output']>
}

export type TaskPeriodDataClickupTaskIdStartPeriodEndPeriodCompoundUniqueInput = {
  clickupTaskId: Scalars['String']['input']
  endPeriod: Scalars['DateTime']['input']
  startPeriod: Scalars['DateTime']['input']
}

export type TaskPeriodDataCountAggregate = {
  __typename?: 'TaskPeriodDataCountAggregate'
  _all: Scalars['Int']['output']
  clickupTaskId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  endPeriod: Scalars['Int']['output']
  revisedTrackedTime: Scalars['Int']['output']
  startPeriod: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type TaskPeriodDataCreateInput = {
  clickupTask: ClickupTaskCreateNestedOneWithoutTaskPeriodDataInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  endPeriod: Scalars['DateTime']['input']
  revisedTrackedTime: Scalars['Float']['input']
  startPeriod: Scalars['DateTime']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TaskPeriodDataCreateManyClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  endPeriod: Scalars['DateTime']['input']
  revisedTrackedTime: Scalars['Float']['input']
  startPeriod: Scalars['DateTime']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TaskPeriodDataCreateManyClickupTaskInputEnvelope = {
  data: Array<TaskPeriodDataCreateManyClickupTaskInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type TaskPeriodDataCreateManyInput = {
  clickupTaskId: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  endPeriod: Scalars['DateTime']['input']
  revisedTrackedTime: Scalars['Float']['input']
  startPeriod: Scalars['DateTime']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TaskPeriodDataCreateNestedManyWithoutClickupTaskInput = {
  connect?: InputMaybe<Array<TaskPeriodDataWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<TaskPeriodDataCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<TaskPeriodDataCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<TaskPeriodDataCreateManyClickupTaskInputEnvelope>
}

export type TaskPeriodDataCreateOrConnectWithoutClickupTaskInput = {
  create: TaskPeriodDataCreateWithoutClickupTaskInput
  where: TaskPeriodDataWhereUniqueInput
}

export type TaskPeriodDataCreateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  endPeriod: Scalars['DateTime']['input']
  revisedTrackedTime: Scalars['Float']['input']
  startPeriod: Scalars['DateTime']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TaskPeriodDataListRelationFilter = {
  every?: InputMaybe<TaskPeriodDataWhereInput>
  none?: InputMaybe<TaskPeriodDataWhereInput>
  some?: InputMaybe<TaskPeriodDataWhereInput>
}

export type TaskPeriodDataMaxAggregate = {
  __typename?: 'TaskPeriodDataMaxAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  endPeriod?: Maybe<Scalars['DateTime']['output']>
  revisedTrackedTime?: Maybe<Scalars['Float']['output']>
  startPeriod?: Maybe<Scalars['DateTime']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type TaskPeriodDataMinAggregate = {
  __typename?: 'TaskPeriodDataMinAggregate'
  clickupTaskId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  endPeriod?: Maybe<Scalars['DateTime']['output']>
  revisedTrackedTime?: Maybe<Scalars['Float']['output']>
  startPeriod?: Maybe<Scalars['DateTime']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type TaskPeriodDataOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TaskPeriodDataOrderByWithRelationInput = {
  clickupTask?: InputMaybe<ClickupTaskOrderByWithRelationInput>
  clickupTaskId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  endPeriod?: InputMaybe<SortOrder>
  revisedTrackedTime?: InputMaybe<SortOrder>
  startPeriod?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum TaskPeriodDataScalarFieldEnum {
  ClickupTaskId = 'clickupTaskId',
  CreatedAt = 'createdAt',
  EndPeriod = 'endPeriod',
  RevisedTrackedTime = 'revisedTrackedTime',
  StartPeriod = 'startPeriod',
  UpdatedAt = 'updatedAt',
}

export type TaskPeriodDataScalarWhereInput = {
  AND?: InputMaybe<Array<TaskPeriodDataScalarWhereInput>>
  NOT?: InputMaybe<Array<TaskPeriodDataScalarWhereInput>>
  OR?: InputMaybe<Array<TaskPeriodDataScalarWhereInput>>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  endPeriod?: InputMaybe<DateTimeFilter>
  revisedTrackedTime?: InputMaybe<FloatFilter>
  startPeriod?: InputMaybe<DateTimeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type TaskPeriodDataSumAggregate = {
  __typename?: 'TaskPeriodDataSumAggregate'
  revisedTrackedTime?: Maybe<Scalars['Float']['output']>
}

export type TaskPeriodDataUpdateInput = {
  clickupTask?: InputMaybe<ClickupTaskUpdateOneRequiredWithoutTaskPeriodDataNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  endPeriod?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  revisedTrackedTime?: InputMaybe<FloatFieldUpdateOperationsInput>
  startPeriod?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type TaskPeriodDataUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  endPeriod?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  revisedTrackedTime?: InputMaybe<FloatFieldUpdateOperationsInput>
  startPeriod?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type TaskPeriodDataUpdateManyWithWhereWithoutClickupTaskInput = {
  data: TaskPeriodDataUpdateManyMutationInput
  where: TaskPeriodDataScalarWhereInput
}

export type TaskPeriodDataUpdateManyWithoutClickupTaskNestedInput = {
  connect?: InputMaybe<Array<TaskPeriodDataWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<TaskPeriodDataCreateOrConnectWithoutClickupTaskInput>>
  create?: InputMaybe<Array<TaskPeriodDataCreateWithoutClickupTaskInput>>
  createMany?: InputMaybe<TaskPeriodDataCreateManyClickupTaskInputEnvelope>
  delete?: InputMaybe<Array<TaskPeriodDataWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<TaskPeriodDataScalarWhereInput>>
  disconnect?: InputMaybe<Array<TaskPeriodDataWhereUniqueInput>>
  set?: InputMaybe<Array<TaskPeriodDataWhereUniqueInput>>
  update?: InputMaybe<Array<TaskPeriodDataUpdateWithWhereUniqueWithoutClickupTaskInput>>
  updateMany?: InputMaybe<Array<TaskPeriodDataUpdateManyWithWhereWithoutClickupTaskInput>>
  upsert?: InputMaybe<Array<TaskPeriodDataUpsertWithWhereUniqueWithoutClickupTaskInput>>
}

export type TaskPeriodDataUpdateWithWhereUniqueWithoutClickupTaskInput = {
  data: TaskPeriodDataUpdateWithoutClickupTaskInput
  where: TaskPeriodDataWhereUniqueInput
}

export type TaskPeriodDataUpdateWithoutClickupTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  endPeriod?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  revisedTrackedTime?: InputMaybe<FloatFieldUpdateOperationsInput>
  startPeriod?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type TaskPeriodDataUpsertWithWhereUniqueWithoutClickupTaskInput = {
  create: TaskPeriodDataCreateWithoutClickupTaskInput
  update: TaskPeriodDataUpdateWithoutClickupTaskInput
  where: TaskPeriodDataWhereUniqueInput
}

export type TaskPeriodDataWhereInput = {
  AND?: InputMaybe<Array<TaskPeriodDataWhereInput>>
  NOT?: InputMaybe<Array<TaskPeriodDataWhereInput>>
  OR?: InputMaybe<Array<TaskPeriodDataWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  endPeriod?: InputMaybe<DateTimeFilter>
  revisedTrackedTime?: InputMaybe<FloatFilter>
  startPeriod?: InputMaybe<DateTimeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type TaskPeriodDataWhereUniqueInput = {
  AND?: InputMaybe<Array<TaskPeriodDataWhereInput>>
  NOT?: InputMaybe<Array<TaskPeriodDataWhereInput>>
  OR?: InputMaybe<Array<TaskPeriodDataWhereInput>>
  clickupTask?: InputMaybe<ClickupTaskRelationFilter>
  clickupTaskId?: InputMaybe<StringFilter>
  clickupTaskId_startPeriod_endPeriod?: InputMaybe<TaskPeriodDataClickupTaskIdStartPeriodEndPeriodCompoundUniqueInput>
  createdAt?: InputMaybe<DateTimeFilter>
  endPeriod?: InputMaybe<DateTimeFilter>
  revisedTrackedTime?: InputMaybe<FloatFilter>
  startPeriod?: InputMaybe<DateTimeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type User = {
  __typename?: 'User'
  _count?: Maybe<UserCount>
  clickupUser?: Maybe<ClickupUser>
  clickupUserId?: Maybe<Scalars['Int']['output']>
  clockifyTimeEntries: Array<ClockifyTimeEntry>
  clockifyUser?: Maybe<ClockifyUser>
  clockifyUserId?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  githubId?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  password: Scalars['String']['output']
  role: Role
  roleId: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  username: Scalars['String']['output']
}

export type UserClickupUserArgs = {
  where?: InputMaybe<ClickupUserWhereInput>
}

export type UserClockifyTimeEntriesArgs = {
  cursor?: InputMaybe<ClockifyTimeEntryWhereUniqueInput>
  distinct?: InputMaybe<Array<ClockifyTimeEntryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ClockifyTimeEntryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type UserClockifyUserArgs = {
  where?: InputMaybe<ClockifyUserWhereInput>
}

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate'
  clickupUserId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  roleId?: Maybe<Scalars['Float']['output']>
}

export type UserCount = {
  __typename?: 'UserCount'
  clockifyTimeEntries: Scalars['Int']['output']
}

export type UserCountClockifyTimeEntriesArgs = {
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate'
  _all: Scalars['Int']['output']
  clickupUserId: Scalars['Int']['output']
  clockifyUserId: Scalars['Int']['output']
  createdAt: Scalars['Int']['output']
  email: Scalars['Int']['output']
  githubId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  password: Scalars['Int']['output']
  roleId: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
  username: Scalars['Int']['output']
}

export type UserCreateManyRoleInput = {
  clickupUserId?: InputMaybe<Scalars['Int']['input']>
  clockifyUserId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  password: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type UserCreateManyRoleInputEnvelope = {
  data: Array<UserCreateManyRoleInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type UserCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>
}

export type UserCreateNestedOneWithoutClickupUserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClickupUserInput>
  create?: InputMaybe<UserCreateWithoutClickupUserInput>
}

export type UserCreateNestedOneWithoutClockifyTimeEntriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClockifyTimeEntriesInput>
  create?: InputMaybe<UserCreateWithoutClockifyTimeEntriesInput>
}

export type UserCreateNestedOneWithoutClockifyUserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClockifyUserInput>
  create?: InputMaybe<UserCreateWithoutClockifyUserInput>
}

export type UserCreateOrConnectWithoutClickupUserInput = {
  create: UserCreateWithoutClickupUserInput
  where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutClockifyTimeEntriesInput = {
  create: UserCreateWithoutClockifyTimeEntriesInput
  where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutClockifyUserInput = {
  create: UserCreateWithoutClockifyUserInput
  where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutRoleInput = {
  create: UserCreateWithoutRoleInput
  where: UserWhereUniqueInput
}

export type UserCreateWithoutClickupUserInput = {
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutUserInput>
  clockifyUser?: InputMaybe<ClockifyUserCreateNestedOneWithoutUserInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  role: RoleCreateNestedOneWithoutUsersInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type UserCreateWithoutClockifyTimeEntriesInput = {
  clickupUser?: InputMaybe<ClickupUserCreateNestedOneWithoutUserInput>
  clockifyUser?: InputMaybe<ClockifyUserCreateNestedOneWithoutUserInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  role: RoleCreateNestedOneWithoutUsersInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type UserCreateWithoutClockifyUserInput = {
  clickupUser?: InputMaybe<ClickupUserCreateNestedOneWithoutUserInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutUserInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  role: RoleCreateNestedOneWithoutUsersInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type UserCreateWithoutRoleInput = {
  clickupUser?: InputMaybe<ClickupUserCreateNestedOneWithoutUserInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryCreateNestedManyWithoutUserInput>
  clockifyUser?: InputMaybe<ClockifyUserCreateNestedOneWithoutUserInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  githubId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>
  none?: InputMaybe<UserWhereInput>
  some?: InputMaybe<UserWhereInput>
}

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate'
  clickupUserId?: Maybe<Scalars['Int']['output']>
  clockifyUserId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  githubId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  password?: Maybe<Scalars['String']['output']>
  roleId?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate'
  clickupUserId?: Maybe<Scalars['Int']['output']>
  clockifyUserId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  githubId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  password?: Maybe<Scalars['String']['output']>
  roleId?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type UserOrderByWithRelationInput = {
  clickupUser?: InputMaybe<ClickupUserOrderByWithRelationInput>
  clickupUserId?: InputMaybe<SortOrderInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryOrderByRelationAggregateInput>
  clockifyUser?: InputMaybe<ClockifyUserOrderByWithRelationInput>
  clockifyUserId?: InputMaybe<SortOrderInput>
  createdAt?: InputMaybe<SortOrder>
  email?: InputMaybe<SortOrder>
  githubId?: InputMaybe<SortOrderInput>
  id?: InputMaybe<SortOrder>
  password?: InputMaybe<SortOrder>
  role?: InputMaybe<RoleOrderByWithRelationInput>
  roleId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  username?: InputMaybe<SortOrder>
}

export enum UserScalarFieldEnum {
  ClickupUserId = 'clickupUserId',
  ClockifyUserId = 'clockifyUserId',
  CreatedAt = 'createdAt',
  Email = 'email',
  GithubId = 'githubId',
  Id = 'id',
  Password = 'password',
  RoleId = 'roleId',
  UpdatedAt = 'updatedAt',
  Username = 'username',
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>
  NOT?: InputMaybe<Array<UserScalarWhereInput>>
  OR?: InputMaybe<Array<UserScalarWhereInput>>
  clickupUserId?: InputMaybe<IntNullableFilter>
  clockifyUserId?: InputMaybe<StringNullableFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  email?: InputMaybe<StringFilter>
  githubId?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<IntFilter>
  password?: InputMaybe<StringFilter>
  roleId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  username?: InputMaybe<StringFilter>
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate'
  clickupUserId?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  roleId?: Maybe<Scalars['Int']['output']>
}

export type UserUpdateInput = {
  clickupUser?: InputMaybe<ClickupUserUpdateOneWithoutUserNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutUserNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneWithoutUserNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateManyWithWhereWithoutRoleInput = {
  data: UserUpdateManyMutationInput
  where: UserScalarWhereInput
}

export type UserUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>
  delete?: InputMaybe<Array<UserWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  set?: InputMaybe<Array<UserWhereUniqueInput>>
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutRoleInput>>
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutRoleInput>>
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutRoleInput>>
}

export type UserUpdateOneWithoutClickupUserNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClickupUserInput>
  create?: InputMaybe<UserCreateWithoutClickupUserInput>
  delete?: InputMaybe<UserWhereInput>
  disconnect?: InputMaybe<UserWhereInput>
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutClickupUserInput>
  upsert?: InputMaybe<UserUpsertWithoutClickupUserInput>
}

export type UserUpdateOneWithoutClockifyTimeEntriesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClockifyTimeEntriesInput>
  create?: InputMaybe<UserCreateWithoutClockifyTimeEntriesInput>
  delete?: InputMaybe<UserWhereInput>
  disconnect?: InputMaybe<UserWhereInput>
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutClockifyTimeEntriesInput>
  upsert?: InputMaybe<UserUpsertWithoutClockifyTimeEntriesInput>
}

export type UserUpdateOneWithoutClockifyUserNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClockifyUserInput>
  create?: InputMaybe<UserCreateWithoutClockifyUserInput>
  delete?: InputMaybe<UserWhereInput>
  disconnect?: InputMaybe<UserWhereInput>
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutClockifyUserInput>
  upsert?: InputMaybe<UserUpsertWithoutClockifyUserInput>
}

export type UserUpdateToOneWithWhereWithoutClickupUserInput = {
  data: UserUpdateWithoutClickupUserInput
  where?: InputMaybe<UserWhereInput>
}

export type UserUpdateToOneWithWhereWithoutClockifyTimeEntriesInput = {
  data: UserUpdateWithoutClockifyTimeEntriesInput
  where?: InputMaybe<UserWhereInput>
}

export type UserUpdateToOneWithWhereWithoutClockifyUserInput = {
  data: UserUpdateWithoutClockifyUserInput
  where?: InputMaybe<UserWhereInput>
}

export type UserUpdateWithWhereUniqueWithoutRoleInput = {
  data: UserUpdateWithoutRoleInput
  where: UserWhereUniqueInput
}

export type UserUpdateWithoutClickupUserInput = {
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutUserNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneWithoutUserNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateWithoutClockifyTimeEntriesInput = {
  clickupUser?: InputMaybe<ClickupUserUpdateOneWithoutUserNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneWithoutUserNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateWithoutClockifyUserInput = {
  clickupUser?: InputMaybe<ClickupUserUpdateOneWithoutUserNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutUserNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateWithoutRoleInput = {
  clickupUser?: InputMaybe<ClickupUserUpdateOneWithoutUserNestedInput>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryUpdateManyWithoutUserNestedInput>
  clockifyUser?: InputMaybe<ClockifyUserUpdateOneWithoutUserNestedInput>
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  email?: InputMaybe<StringFieldUpdateOperationsInput>
  githubId?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  password?: InputMaybe<StringFieldUpdateOperationsInput>
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  username?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpsertWithWhereUniqueWithoutRoleInput = {
  create: UserCreateWithoutRoleInput
  update: UserUpdateWithoutRoleInput
  where: UserWhereUniqueInput
}

export type UserUpsertWithoutClickupUserInput = {
  create: UserCreateWithoutClickupUserInput
  update: UserUpdateWithoutClickupUserInput
  where?: InputMaybe<UserWhereInput>
}

export type UserUpsertWithoutClockifyTimeEntriesInput = {
  create: UserCreateWithoutClockifyTimeEntriesInput
  update: UserUpdateWithoutClockifyTimeEntriesInput
  where?: InputMaybe<UserWhereInput>
}

export type UserUpsertWithoutClockifyUserInput = {
  create: UserCreateWithoutClockifyUserInput
  update: UserUpdateWithoutClockifyUserInput
  where?: InputMaybe<UserWhereInput>
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  clickupUser?: InputMaybe<ClickupUserNullableRelationFilter>
  clickupUserId?: InputMaybe<IntNullableFilter>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  clockifyUser?: InputMaybe<ClockifyUserNullableRelationFilter>
  clockifyUserId?: InputMaybe<StringNullableFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  email?: InputMaybe<StringFilter>
  githubId?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<IntFilter>
  password?: InputMaybe<StringFilter>
  role?: InputMaybe<RoleRelationFilter>
  roleId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  username?: InputMaybe<StringFilter>
}

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  clickupUser?: InputMaybe<ClickupUserNullableRelationFilter>
  clickupUserId?: InputMaybe<Scalars['Int']['input']>
  clockifyTimeEntries?: InputMaybe<ClockifyTimeEntryListRelationFilter>
  clockifyUser?: InputMaybe<ClockifyUserNullableRelationFilter>
  clockifyUserId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<DateTimeFilter>
  email?: InputMaybe<Scalars['String']['input']>
  githubId?: InputMaybe<StringNullableFilter>
  id?: InputMaybe<Scalars['Int']['input']>
  password?: InputMaybe<StringFilter>
  role?: InputMaybe<RoleRelationFilter>
  roleId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  username?: InputMaybe<StringFilter>
}

export type ClockifyTimeEntriesQueryVariables = Exact<{
  where?: InputMaybe<ClockifyTimeEntryWhereInput>
}>

export type ClockifyTimeEntriesQuery = {
  __typename?: 'Query'
  clockifyTimeEntries: Array<{
    __typename?: 'ClockifyTimeEntry'
    id: string
    description: string
    start: string
    end?: string | null
    duration?: string | null
    currentlyRunning: boolean
    tags: Array<{
      __typename?: 'ClockifyTagOnTimeEntry'
      createdAt: any
      clockifyTag: { __typename?: 'ClockifyTimeEntryTag'; name: string }
    }>
    clockifyProject?: { __typename?: 'ClockifyTimeEntryProject'; name: string; color: string } | null
    clockifyUser: { __typename?: 'ClockifyUser'; name: string }
    user?: { __typename?: 'User'; username: string; email: string } | null
    clickupTask?: {
      __typename?: 'ClickupTask'
      id: string
      name: string
      description?: string | null
      url: string
      assignees: Array<{
        __typename?: 'ClickupUserTaskAssignee'
        clickupUser: { __typename?: 'ClickupUser'; id: number; email?: string | null; username?: string | null }
      }>
      list: Array<{ __typename?: 'ClickupTaskList'; clickupList: { __typename?: 'ClickupList'; name: string } }>
      tags: Array<{ __typename?: 'ClickupTaskTag'; name: string; tagBg: string; tagFg: string }>
      timeEstimates: Array<{ __typename?: 'ClickupTaskTimeEstimate'; createdAt: any; updatedAt: any; estimate: number }>
      dueDates: Array<{ __typename?: 'ClickupTaskDueDate'; createdAt: any; updatedAt: any; dueDate: any }>
      status: Array<{ __typename?: 'ClickupTaskStatusOnTask'; createdAt: any; statusColor: string; statusName: string }>
    } | null
  }>
}

export type UsersQueryVariables = Exact<{
  where: UserWhereInput
}>

export type UsersQuery = { __typename?: 'Query'; users: Array<{ __typename?: 'User'; id: number }> }

export type SigninMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type SigninMutation = { __typename?: 'Mutation'; signin: { __typename?: 'SigninInfo'; token: string } }

export const ClockifyTimeEntriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'clockifyTimeEntries' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ClockifyTimeEntryWhereInput' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clockifyTimeEntries' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'start' } },
                { kind: 'Field', name: { kind: 'Name', value: 'end' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currentlyRunning' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'clockifyTag' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clockifyProject' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clockifyUser' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clickupTask' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assignees' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'clickupUser' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'list' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'clickupList' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'tagBg' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'tagFg' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timeEstimates' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'estimate' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dueDates' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'dueDate' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'statusColor' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'statusName' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ClockifyTimeEntriesQuery, ClockifyTimeEntriesQueryVariables>
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
