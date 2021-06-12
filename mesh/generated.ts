import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: any
  BigInt: bigint
  Bytes: any
}

export type Query = {
  account?: Maybe<Account>
  accounts: Array<Account>
  tokenRegistry?: Maybe<TokenRegistry>
  tokenRegistries: Array<TokenRegistry>
  token?: Maybe<Token>
  tokens: Array<Token>
  balance?: Maybe<Balance>
  balances: Array<Balance>
  transfer?: Maybe<Transfer>
  transfers: Array<Transfer>
  approval?: Maybe<Approval>
  approvals: Array<Approval>
  decimalValue?: Maybe<DecimalValue>
  decimalValues: Array<DecimalValue>
  transaction?: Maybe<Transaction>
  transactions: Array<Transaction>
  persistentStringArray?: Maybe<PersistentStringArray>
  persistentStringArrays: Array<PersistentStringArray>
  persistentString?: Maybe<PersistentString>
  persistentStrings: Array<PersistentString>
  event?: Maybe<Event>
  events: Array<Event>
  /** Access to subgraph metadata */
  meta?: Maybe<Meta>
  contract?: Maybe<Contract>
  contracts: Array<Contract>
  operatorDelegation?: Maybe<OperatorDelegation>
  operatorDelegations: Array<OperatorDelegation>
  approvalForAll?: Maybe<ApprovalForAll>
  approvalForAlls: Array<ApprovalForAll>
}

export type QueryAccountArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryAccountsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<AccountOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<AccountFilter>
  block?: Maybe<BlockHeight>
}

export type QueryTokenRegistryArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryTokenRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenRegistryOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TokenRegistryFilter>
  block?: Maybe<BlockHeight>
}

export type QueryTokenArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TokenFilter>
  block?: Maybe<BlockHeight>
}

export type QueryBalanceArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryBalancesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BalanceOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<BalanceFilter>
  block?: Maybe<BlockHeight>
}

export type QueryTransferArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryTransfersArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
  block?: Maybe<BlockHeight>
}

export type QueryApprovalArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryApprovalsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalFilter>
  block?: Maybe<BlockHeight>
}

export type QueryDecimalValueArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryDecimalValuesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<DecimalValueOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<DecimalValueFilter>
  block?: Maybe<BlockHeight>
}

export type QueryTransactionArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransactionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransactionFilter>
  block?: Maybe<BlockHeight>
}

export type QueryPersistentStringArrayArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryPersistentStringArraysArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PersistentStringArrayOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<PersistentStringArrayFilter>
  block?: Maybe<BlockHeight>
}

export type QueryPersistentStringArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryPersistentStringsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PersistentStringOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<PersistentStringFilter>
  block?: Maybe<BlockHeight>
}

export type QueryEventArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryEventsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<EventOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<EventFilter>
  block?: Maybe<BlockHeight>
}

export type QueryMetaArgs = {
  block?: Maybe<BlockHeight>
}

export type QueryContractArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryContractsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ContractOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ContractFilter>
  block?: Maybe<BlockHeight>
}

export type QueryOperatorDelegationArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryOperatorDelegationsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<OperatorDelegationOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<OperatorDelegationFilter>
  block?: Maybe<BlockHeight>
}

export type QueryApprovalForAllArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type QueryApprovalForAllsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalForAllOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalForAllFilter>
  block?: Maybe<BlockHeight>
}

export type Subscription = {
  account?: Maybe<Account>
  accounts: Array<Account>
  tokenRegistry?: Maybe<TokenRegistry>
  tokenRegistries: Array<TokenRegistry>
  token?: Maybe<Token>
  tokens: Array<Token>
  balance?: Maybe<Balance>
  balances: Array<Balance>
  transfer?: Maybe<Transfer>
  transfers: Array<Transfer>
  approval?: Maybe<Approval>
  approvals: Array<Approval>
  decimalValue?: Maybe<DecimalValue>
  decimalValues: Array<DecimalValue>
  transaction?: Maybe<Transaction>
  transactions: Array<Transaction>
  persistentStringArray?: Maybe<PersistentStringArray>
  persistentStringArrays: Array<PersistentStringArray>
  persistentString?: Maybe<PersistentString>
  persistentStrings: Array<PersistentString>
  event?: Maybe<Event>
  events: Array<Event>
  /** Access to subgraph metadata */
  meta?: Maybe<Meta>
  contract?: Maybe<Contract>
  contracts: Array<Contract>
  operatorDelegation?: Maybe<OperatorDelegation>
  operatorDelegations: Array<OperatorDelegation>
  approvalForAll?: Maybe<ApprovalForAll>
  approvalForAlls: Array<ApprovalForAll>
}

export type SubscriptionAccountArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionAccountsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<AccountOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<AccountFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionTokenRegistryArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionTokenRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenRegistryOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TokenRegistryFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionTokenArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TokenFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionBalanceArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionBalancesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BalanceOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<BalanceFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionTransferArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionApprovalArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionApprovalsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionDecimalValueArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionDecimalValuesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<DecimalValueOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<DecimalValueFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionTransactionArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransactionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransactionFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionPersistentStringArrayArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionPersistentStringArraysArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PersistentStringArrayOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<PersistentStringArrayFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionPersistentStringArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionPersistentStringsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PersistentStringOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<PersistentStringFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionEventArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionEventsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<EventOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<EventFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionMetaArgs = {
  block?: Maybe<BlockHeight>
}

export type SubscriptionContractArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionContractsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ContractOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ContractFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionOperatorDelegationArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionOperatorDelegationsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<OperatorDelegationOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<OperatorDelegationFilter>
  block?: Maybe<BlockHeight>
}

export type SubscriptionApprovalForAllArgs = {
  id: Scalars['ID']
  block?: Maybe<BlockHeight>
}

export type SubscriptionApprovalForAllsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalForAllOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalForAllFilter>
  block?: Maybe<BlockHeight>
}

export type Account = {
  id: Scalars['ID']
  balances: Array<Balance>
  transfersOperator: Array<Transfer>
  transfersFrom: Array<Transfer>
  transfersTo: Array<Transfer>
  approvalsOwner: Array<Approval>
  approvalsSpender: Array<Approval>
  tokens: Array<Token>
  delegationsOwner: Array<OperatorDelegation>
  delegationsOperator: Array<OperatorDelegation>
  approvalsApproved: Array<Approval>
  approvalsForAllOwner: Array<ApprovalForAll>
  approvalsForAllOperator: Array<ApprovalForAll>
}

export type AccountBalancesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BalanceOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<BalanceFilter>
}

export type AccountTransfersOperatorArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
}

export type AccountTransfersFromArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
}

export type AccountTransfersToArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
}

export type AccountApprovalsOwnerArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalFilter>
}

export type AccountApprovalsSpenderArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalFilter>
}

export type AccountTokensArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TokenFilter>
}

export type AccountDelegationsOwnerArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<OperatorDelegationOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<OperatorDelegationFilter>
}

export type AccountDelegationsOperatorArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<OperatorDelegationOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<OperatorDelegationFilter>
}

export type AccountApprovalsApprovedArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalFilter>
}

export type AccountApprovalsForAllOwnerArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalForAllOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalForAllFilter>
}

export type AccountApprovalsForAllOperatorArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalForAllOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalForAllFilter>
}

export type AccountFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
}

export enum AccountOrderBy {
  id = 'id',
  balances = 'balances',
  transfersOperator = 'transfersOperator',
  transfersFrom = 'transfersFrom',
  transfersTo = 'transfersTo',
  approvalsOwner = 'approvalsOwner',
  approvalsSpender = 'approvalsSpender',
  tokens = 'tokens',
  delegationsOwner = 'delegationsOwner',
  delegationsOperator = 'delegationsOperator',
  approvalsApproved = 'approvalsApproved',
  approvalsForAllOwner = 'approvalsForAllOwner',
  approvalsForAllOperator = 'approvalsForAllOperator',
}

export type Approval = Event & {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  token: Token
  owner: Account
  spender: Account
  value: Scalars['BigInt']
  approved: Account
}

export type ApprovalFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  transaction?: Maybe<Scalars['String']>
  transactionNot?: Maybe<Scalars['String']>
  transactionGt?: Maybe<Scalars['String']>
  transactionLt?: Maybe<Scalars['String']>
  transactionGte?: Maybe<Scalars['String']>
  transactionLte?: Maybe<Scalars['String']>
  transactionIn?: Maybe<Array<Scalars['String']>>
  transactionNotIn?: Maybe<Array<Scalars['String']>>
  transactionContains?: Maybe<Scalars['String']>
  transactionNotContains?: Maybe<Scalars['String']>
  transactionStartsWith?: Maybe<Scalars['String']>
  transactionNotStartsWith?: Maybe<Scalars['String']>
  transactionEndsWith?: Maybe<Scalars['String']>
  transactionNotEndsWith?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['BigInt']>
  timestampNot?: Maybe<Scalars['BigInt']>
  timestampGt?: Maybe<Scalars['BigInt']>
  timestampLt?: Maybe<Scalars['BigInt']>
  timestampGte?: Maybe<Scalars['BigInt']>
  timestampLte?: Maybe<Scalars['BigInt']>
  timestampIn?: Maybe<Array<Scalars['BigInt']>>
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>
  token?: Maybe<Scalars['String']>
  tokenNot?: Maybe<Scalars['String']>
  tokenGt?: Maybe<Scalars['String']>
  tokenLt?: Maybe<Scalars['String']>
  tokenGte?: Maybe<Scalars['String']>
  tokenLte?: Maybe<Scalars['String']>
  tokenIn?: Maybe<Array<Scalars['String']>>
  tokenNotIn?: Maybe<Array<Scalars['String']>>
  tokenContains?: Maybe<Scalars['String']>
  tokenNotContains?: Maybe<Scalars['String']>
  tokenStartsWith?: Maybe<Scalars['String']>
  tokenNotStartsWith?: Maybe<Scalars['String']>
  tokenEndsWith?: Maybe<Scalars['String']>
  tokenNotEndsWith?: Maybe<Scalars['String']>
  owner?: Maybe<Scalars['String']>
  ownerNot?: Maybe<Scalars['String']>
  ownerGt?: Maybe<Scalars['String']>
  ownerLt?: Maybe<Scalars['String']>
  ownerGte?: Maybe<Scalars['String']>
  ownerLte?: Maybe<Scalars['String']>
  ownerIn?: Maybe<Array<Scalars['String']>>
  ownerNotIn?: Maybe<Array<Scalars['String']>>
  ownerContains?: Maybe<Scalars['String']>
  ownerNotContains?: Maybe<Scalars['String']>
  ownerStartsWith?: Maybe<Scalars['String']>
  ownerNotStartsWith?: Maybe<Scalars['String']>
  ownerEndsWith?: Maybe<Scalars['String']>
  ownerNotEndsWith?: Maybe<Scalars['String']>
  spender?: Maybe<Scalars['String']>
  spenderNot?: Maybe<Scalars['String']>
  spenderGt?: Maybe<Scalars['String']>
  spenderLt?: Maybe<Scalars['String']>
  spenderGte?: Maybe<Scalars['String']>
  spenderLte?: Maybe<Scalars['String']>
  spenderIn?: Maybe<Array<Scalars['String']>>
  spenderNotIn?: Maybe<Array<Scalars['String']>>
  spenderContains?: Maybe<Scalars['String']>
  spenderNotContains?: Maybe<Scalars['String']>
  spenderStartsWith?: Maybe<Scalars['String']>
  spenderNotStartsWith?: Maybe<Scalars['String']>
  spenderEndsWith?: Maybe<Scalars['String']>
  spenderNotEndsWith?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['BigInt']>
  valueNot?: Maybe<Scalars['BigInt']>
  valueGt?: Maybe<Scalars['BigInt']>
  valueLt?: Maybe<Scalars['BigInt']>
  valueGte?: Maybe<Scalars['BigInt']>
  valueLte?: Maybe<Scalars['BigInt']>
  valueIn?: Maybe<Array<Scalars['BigInt']>>
  valueNotIn?: Maybe<Array<Scalars['BigInt']>>
  approved?: Maybe<Scalars['String']>
  approvedNot?: Maybe<Scalars['String']>
  approvedGt?: Maybe<Scalars['String']>
  approvedLt?: Maybe<Scalars['String']>
  approvedGte?: Maybe<Scalars['String']>
  approvedLte?: Maybe<Scalars['String']>
  approvedIn?: Maybe<Array<Scalars['String']>>
  approvedNotIn?: Maybe<Array<Scalars['String']>>
  approvedContains?: Maybe<Scalars['String']>
  approvedNotContains?: Maybe<Scalars['String']>
  approvedStartsWith?: Maybe<Scalars['String']>
  approvedNotStartsWith?: Maybe<Scalars['String']>
  approvedEndsWith?: Maybe<Scalars['String']>
  approvedNotEndsWith?: Maybe<Scalars['String']>
}

export enum ApprovalOrderBy {
  id = 'id',
  transaction = 'transaction',
  timestamp = 'timestamp',
  token = 'token',
  owner = 'owner',
  spender = 'spender',
  value = 'value',
  approved = 'approved',
}

export type Balance = {
  id: Scalars['ID']
  token: Token
  account: Account
  value: Scalars['BigInt']
  transfersFrom: Array<Transfer>
  transfersTo: Array<Transfer>
}

export type BalanceTransfersFromArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
}

export type BalanceTransfersToArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
}

export type BalanceFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  token?: Maybe<Scalars['String']>
  tokenNot?: Maybe<Scalars['String']>
  tokenGt?: Maybe<Scalars['String']>
  tokenLt?: Maybe<Scalars['String']>
  tokenGte?: Maybe<Scalars['String']>
  tokenLte?: Maybe<Scalars['String']>
  tokenIn?: Maybe<Array<Scalars['String']>>
  tokenNotIn?: Maybe<Array<Scalars['String']>>
  tokenContains?: Maybe<Scalars['String']>
  tokenNotContains?: Maybe<Scalars['String']>
  tokenStartsWith?: Maybe<Scalars['String']>
  tokenNotStartsWith?: Maybe<Scalars['String']>
  tokenEndsWith?: Maybe<Scalars['String']>
  tokenNotEndsWith?: Maybe<Scalars['String']>
  account?: Maybe<Scalars['String']>
  accountNot?: Maybe<Scalars['String']>
  accountGt?: Maybe<Scalars['String']>
  accountLt?: Maybe<Scalars['String']>
  accountGte?: Maybe<Scalars['String']>
  accountLte?: Maybe<Scalars['String']>
  accountIn?: Maybe<Array<Scalars['String']>>
  accountNotIn?: Maybe<Array<Scalars['String']>>
  accountContains?: Maybe<Scalars['String']>
  accountNotContains?: Maybe<Scalars['String']>
  accountStartsWith?: Maybe<Scalars['String']>
  accountNotStartsWith?: Maybe<Scalars['String']>
  accountEndsWith?: Maybe<Scalars['String']>
  accountNotEndsWith?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['BigInt']>
  valueNot?: Maybe<Scalars['BigInt']>
  valueGt?: Maybe<Scalars['BigInt']>
  valueLt?: Maybe<Scalars['BigInt']>
  valueGte?: Maybe<Scalars['BigInt']>
  valueLte?: Maybe<Scalars['BigInt']>
  valueIn?: Maybe<Array<Scalars['BigInt']>>
  valueNotIn?: Maybe<Array<Scalars['BigInt']>>
}

export enum BalanceOrderBy {
  id = 'id',
  token = 'token',
  account = 'account',
  value = 'value',
  transfersFrom = 'transfersFrom',
  transfersTo = 'transfersTo',
}

export type BlockHeight = {
  hash?: Maybe<Scalars['Bytes']>
  number?: Maybe<Scalars['Int']>
}

export type DecimalValue = {
  id: Scalars['ID']
  value: Scalars['BigDecimal']
  exact: Scalars['BigInt']
  decimals: Scalars['Int']
}

export type DecimalValueFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  value?: Maybe<Scalars['BigDecimal']>
  valueNot?: Maybe<Scalars['BigDecimal']>
  valueGt?: Maybe<Scalars['BigDecimal']>
  valueLt?: Maybe<Scalars['BigDecimal']>
  valueGte?: Maybe<Scalars['BigDecimal']>
  valueLte?: Maybe<Scalars['BigDecimal']>
  valueIn?: Maybe<Array<Scalars['BigDecimal']>>
  valueNotIn?: Maybe<Array<Scalars['BigDecimal']>>
  exact?: Maybe<Scalars['BigInt']>
  exactNot?: Maybe<Scalars['BigInt']>
  exactGt?: Maybe<Scalars['BigInt']>
  exactLt?: Maybe<Scalars['BigInt']>
  exactGte?: Maybe<Scalars['BigInt']>
  exactLte?: Maybe<Scalars['BigInt']>
  exactIn?: Maybe<Array<Scalars['BigInt']>>
  exactNotIn?: Maybe<Array<Scalars['BigInt']>>
  decimals?: Maybe<Scalars['Int']>
  decimalsNot?: Maybe<Scalars['Int']>
  decimalsGt?: Maybe<Scalars['Int']>
  decimalsLt?: Maybe<Scalars['Int']>
  decimalsGte?: Maybe<Scalars['Int']>
  decimalsLte?: Maybe<Scalars['Int']>
  decimalsIn?: Maybe<Array<Scalars['Int']>>
  decimalsNotIn?: Maybe<Array<Scalars['Int']>>
}

export enum DecimalValueOrderBy {
  id = 'id',
  value = 'value',
  exact = 'exact',
  decimals = 'decimals',
}

export type Event = {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
}

export type EventFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  transaction?: Maybe<Scalars['String']>
  transactionNot?: Maybe<Scalars['String']>
  transactionGt?: Maybe<Scalars['String']>
  transactionLt?: Maybe<Scalars['String']>
  transactionGte?: Maybe<Scalars['String']>
  transactionLte?: Maybe<Scalars['String']>
  transactionIn?: Maybe<Array<Scalars['String']>>
  transactionNotIn?: Maybe<Array<Scalars['String']>>
  transactionContains?: Maybe<Scalars['String']>
  transactionNotContains?: Maybe<Scalars['String']>
  transactionStartsWith?: Maybe<Scalars['String']>
  transactionNotStartsWith?: Maybe<Scalars['String']>
  transactionEndsWith?: Maybe<Scalars['String']>
  transactionNotEndsWith?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['BigInt']>
  timestampNot?: Maybe<Scalars['BigInt']>
  timestampGt?: Maybe<Scalars['BigInt']>
  timestampLt?: Maybe<Scalars['BigInt']>
  timestampGte?: Maybe<Scalars['BigInt']>
  timestampLte?: Maybe<Scalars['BigInt']>
  timestampIn?: Maybe<Array<Scalars['BigInt']>>
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>
}

export enum EventOrderBy {
  id = 'id',
  transaction = 'transaction',
  timestamp = 'timestamp',
}

export enum OrderDirection {
  asc = 'asc',
  desc = 'desc',
}

export type PersistentString = {
  id: Scalars['ID']
  value: Scalars['String']
}

export type PersistentStringArray = {
  id: Scalars['ID']
  values: Array<Scalars['String']>
}

export type PersistentStringArrayFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  values?: Maybe<Array<Scalars['String']>>
  valuesNot?: Maybe<Array<Scalars['String']>>
  valuesContains?: Maybe<Array<Scalars['String']>>
  valuesNotContains?: Maybe<Array<Scalars['String']>>
}

export enum PersistentStringArrayOrderBy {
  id = 'id',
  values = 'values',
}

export type PersistentStringFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  value?: Maybe<Scalars['String']>
  valueNot?: Maybe<Scalars['String']>
  valueGt?: Maybe<Scalars['String']>
  valueLt?: Maybe<Scalars['String']>
  valueGte?: Maybe<Scalars['String']>
  valueLte?: Maybe<Scalars['String']>
  valueIn?: Maybe<Array<Scalars['String']>>
  valueNotIn?: Maybe<Array<Scalars['String']>>
  valueContains?: Maybe<Scalars['String']>
  valueNotContains?: Maybe<Scalars['String']>
  valueStartsWith?: Maybe<Scalars['String']>
  valueNotStartsWith?: Maybe<Scalars['String']>
  valueEndsWith?: Maybe<Scalars['String']>
  valueNotEndsWith?: Maybe<Scalars['String']>
}

export enum PersistentStringOrderBy {
  id = 'id',
  value = 'value',
}

export type Token = {
  id: Scalars['ID']
  registry: TokenRegistry
  identifier: Scalars['BigInt']
  uri?: Maybe<Scalars['String']>
  totalSupply: Scalars['BigInt']
  balances: Array<Balance>
  transfers: Array<Transfer>
  approvals: Array<Approval>
  owner: Account
  approval: Account
  standard: Standard
}

export type TokenBalancesArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BalanceOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<BalanceFilter>
}

export type TokenTransfersArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransferOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TransferFilter>
}

export type TokenApprovalsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalFilter>
}

export type TokenRegistry = {
  id: Scalars['ID']
  tokens: Array<Token>
  supportsMetadata?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
}

export type TokenRegistryTokensArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<TokenFilter>
}

export type TokenRegistryFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  supportsMetadata?: Maybe<Scalars['Boolean']>
  supportsMetadataNot?: Maybe<Scalars['Boolean']>
  supportsMetadataIn?: Maybe<Array<Scalars['Boolean']>>
  supportsMetadataNotIn?: Maybe<Array<Scalars['Boolean']>>
  name?: Maybe<Scalars['String']>
  nameNot?: Maybe<Scalars['String']>
  nameGt?: Maybe<Scalars['String']>
  nameLt?: Maybe<Scalars['String']>
  nameGte?: Maybe<Scalars['String']>
  nameLte?: Maybe<Scalars['String']>
  nameIn?: Maybe<Array<Scalars['String']>>
  nameNotIn?: Maybe<Array<Scalars['String']>>
  nameContains?: Maybe<Scalars['String']>
  nameNotContains?: Maybe<Scalars['String']>
  nameStartsWith?: Maybe<Scalars['String']>
  nameNotStartsWith?: Maybe<Scalars['String']>
  nameEndsWith?: Maybe<Scalars['String']>
  nameNotEndsWith?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  symbolNot?: Maybe<Scalars['String']>
  symbolGt?: Maybe<Scalars['String']>
  symbolLt?: Maybe<Scalars['String']>
  symbolGte?: Maybe<Scalars['String']>
  symbolLte?: Maybe<Scalars['String']>
  symbolIn?: Maybe<Array<Scalars['String']>>
  symbolNotIn?: Maybe<Array<Scalars['String']>>
  symbolContains?: Maybe<Scalars['String']>
  symbolNotContains?: Maybe<Scalars['String']>
  symbolStartsWith?: Maybe<Scalars['String']>
  symbolNotStartsWith?: Maybe<Scalars['String']>
  symbolEndsWith?: Maybe<Scalars['String']>
  symbolNotEndsWith?: Maybe<Scalars['String']>
}

export enum TokenRegistryOrderBy {
  id = 'id',
  tokens = 'tokens',
  supportsMetadata = 'supportsMetadata',
  name = 'name',
  symbol = 'symbol',
}

export type TokenFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  registry?: Maybe<Scalars['String']>
  registryNot?: Maybe<Scalars['String']>
  registryGt?: Maybe<Scalars['String']>
  registryLt?: Maybe<Scalars['String']>
  registryGte?: Maybe<Scalars['String']>
  registryLte?: Maybe<Scalars['String']>
  registryIn?: Maybe<Array<Scalars['String']>>
  registryNotIn?: Maybe<Array<Scalars['String']>>
  registryContains?: Maybe<Scalars['String']>
  registryNotContains?: Maybe<Scalars['String']>
  registryStartsWith?: Maybe<Scalars['String']>
  registryNotStartsWith?: Maybe<Scalars['String']>
  registryEndsWith?: Maybe<Scalars['String']>
  registryNotEndsWith?: Maybe<Scalars['String']>
  identifier?: Maybe<Scalars['BigInt']>
  identifierNot?: Maybe<Scalars['BigInt']>
  identifierGt?: Maybe<Scalars['BigInt']>
  identifierLt?: Maybe<Scalars['BigInt']>
  identifierGte?: Maybe<Scalars['BigInt']>
  identifierLte?: Maybe<Scalars['BigInt']>
  identifierIn?: Maybe<Array<Scalars['BigInt']>>
  identifierNotIn?: Maybe<Array<Scalars['BigInt']>>
  uri?: Maybe<Scalars['String']>
  uriNot?: Maybe<Scalars['String']>
  uriGt?: Maybe<Scalars['String']>
  uriLt?: Maybe<Scalars['String']>
  uriGte?: Maybe<Scalars['String']>
  uriLte?: Maybe<Scalars['String']>
  uriIn?: Maybe<Array<Scalars['String']>>
  uriNotIn?: Maybe<Array<Scalars['String']>>
  uriContains?: Maybe<Scalars['String']>
  uriNotContains?: Maybe<Scalars['String']>
  uriStartsWith?: Maybe<Scalars['String']>
  uriNotStartsWith?: Maybe<Scalars['String']>
  uriEndsWith?: Maybe<Scalars['String']>
  uriNotEndsWith?: Maybe<Scalars['String']>
  totalSupply?: Maybe<Scalars['BigInt']>
  totalSupplyNot?: Maybe<Scalars['BigInt']>
  totalSupplyGt?: Maybe<Scalars['BigInt']>
  totalSupplyLt?: Maybe<Scalars['BigInt']>
  totalSupplyGte?: Maybe<Scalars['BigInt']>
  totalSupplyLte?: Maybe<Scalars['BigInt']>
  totalSupplyIn?: Maybe<Array<Scalars['BigInt']>>
  totalSupplyNotIn?: Maybe<Array<Scalars['BigInt']>>
  owner?: Maybe<Scalars['String']>
  ownerNot?: Maybe<Scalars['String']>
  ownerGt?: Maybe<Scalars['String']>
  ownerLt?: Maybe<Scalars['String']>
  ownerGte?: Maybe<Scalars['String']>
  ownerLte?: Maybe<Scalars['String']>
  ownerIn?: Maybe<Array<Scalars['String']>>
  ownerNotIn?: Maybe<Array<Scalars['String']>>
  ownerContains?: Maybe<Scalars['String']>
  ownerNotContains?: Maybe<Scalars['String']>
  ownerStartsWith?: Maybe<Scalars['String']>
  ownerNotStartsWith?: Maybe<Scalars['String']>
  ownerEndsWith?: Maybe<Scalars['String']>
  ownerNotEndsWith?: Maybe<Scalars['String']>
  approval?: Maybe<Scalars['String']>
  approvalNot?: Maybe<Scalars['String']>
  approvalGt?: Maybe<Scalars['String']>
  approvalLt?: Maybe<Scalars['String']>
  approvalGte?: Maybe<Scalars['String']>
  approvalLte?: Maybe<Scalars['String']>
  approvalIn?: Maybe<Array<Scalars['String']>>
  approvalNotIn?: Maybe<Array<Scalars['String']>>
  approvalContains?: Maybe<Scalars['String']>
  approvalNotContains?: Maybe<Scalars['String']>
  approvalStartsWith?: Maybe<Scalars['String']>
  approvalNotStartsWith?: Maybe<Scalars['String']>
  approvalEndsWith?: Maybe<Scalars['String']>
  approvalNotEndsWith?: Maybe<Scalars['String']>
}

export enum TokenOrderBy {
  id = 'id',
  registry = 'registry',
  identifier = 'identifier',
  uri = 'uri',
  totalSupply = 'totalSupply',
  balances = 'balances',
  transfers = 'transfers',
  approvals = 'approvals',
  owner = 'owner',
  approval = 'approval',
}

export type Transaction = {
  id: Scalars['ID']
  timestamp: Scalars['BigInt']
  blockNumber: Scalars['BigInt']
  events: Array<Event>
}

export type TransactionEventsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<EventOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<EventFilter>
}

export type TransactionFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  timestamp?: Maybe<Scalars['BigInt']>
  timestampNot?: Maybe<Scalars['BigInt']>
  timestampGt?: Maybe<Scalars['BigInt']>
  timestampLt?: Maybe<Scalars['BigInt']>
  timestampGte?: Maybe<Scalars['BigInt']>
  timestampLte?: Maybe<Scalars['BigInt']>
  timestampIn?: Maybe<Array<Scalars['BigInt']>>
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>
  blockNumber?: Maybe<Scalars['BigInt']>
  blockNumberNot?: Maybe<Scalars['BigInt']>
  blockNumberGt?: Maybe<Scalars['BigInt']>
  blockNumberLt?: Maybe<Scalars['BigInt']>
  blockNumberGte?: Maybe<Scalars['BigInt']>
  blockNumberLte?: Maybe<Scalars['BigInt']>
  blockNumberIn?: Maybe<Array<Scalars['BigInt']>>
  blockNumberNotIn?: Maybe<Array<Scalars['BigInt']>>
}

export enum TransactionOrderBy {
  id = 'id',
  timestamp = 'timestamp',
  blockNumber = 'blockNumber',
  events = 'events',
}

export type Transfer = Event & {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  token: Token
  operator: Account
  from: Account
  fromBalance?: Maybe<Balance>
  to: Account
  toBalance?: Maybe<Balance>
  value: Scalars['BigInt']
}

export type TransferFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  transaction?: Maybe<Scalars['String']>
  transactionNot?: Maybe<Scalars['String']>
  transactionGt?: Maybe<Scalars['String']>
  transactionLt?: Maybe<Scalars['String']>
  transactionGte?: Maybe<Scalars['String']>
  transactionLte?: Maybe<Scalars['String']>
  transactionIn?: Maybe<Array<Scalars['String']>>
  transactionNotIn?: Maybe<Array<Scalars['String']>>
  transactionContains?: Maybe<Scalars['String']>
  transactionNotContains?: Maybe<Scalars['String']>
  transactionStartsWith?: Maybe<Scalars['String']>
  transactionNotStartsWith?: Maybe<Scalars['String']>
  transactionEndsWith?: Maybe<Scalars['String']>
  transactionNotEndsWith?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['BigInt']>
  timestampNot?: Maybe<Scalars['BigInt']>
  timestampGt?: Maybe<Scalars['BigInt']>
  timestampLt?: Maybe<Scalars['BigInt']>
  timestampGte?: Maybe<Scalars['BigInt']>
  timestampLte?: Maybe<Scalars['BigInt']>
  timestampIn?: Maybe<Array<Scalars['BigInt']>>
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>
  token?: Maybe<Scalars['String']>
  tokenNot?: Maybe<Scalars['String']>
  tokenGt?: Maybe<Scalars['String']>
  tokenLt?: Maybe<Scalars['String']>
  tokenGte?: Maybe<Scalars['String']>
  tokenLte?: Maybe<Scalars['String']>
  tokenIn?: Maybe<Array<Scalars['String']>>
  tokenNotIn?: Maybe<Array<Scalars['String']>>
  tokenContains?: Maybe<Scalars['String']>
  tokenNotContains?: Maybe<Scalars['String']>
  tokenStartsWith?: Maybe<Scalars['String']>
  tokenNotStartsWith?: Maybe<Scalars['String']>
  tokenEndsWith?: Maybe<Scalars['String']>
  tokenNotEndsWith?: Maybe<Scalars['String']>
  operator?: Maybe<Scalars['String']>
  operatorNot?: Maybe<Scalars['String']>
  operatorGt?: Maybe<Scalars['String']>
  operatorLt?: Maybe<Scalars['String']>
  operatorGte?: Maybe<Scalars['String']>
  operatorLte?: Maybe<Scalars['String']>
  operatorIn?: Maybe<Array<Scalars['String']>>
  operatorNotIn?: Maybe<Array<Scalars['String']>>
  operatorContains?: Maybe<Scalars['String']>
  operatorNotContains?: Maybe<Scalars['String']>
  operatorStartsWith?: Maybe<Scalars['String']>
  operatorNotStartsWith?: Maybe<Scalars['String']>
  operatorEndsWith?: Maybe<Scalars['String']>
  operatorNotEndsWith?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['String']>
  fromNot?: Maybe<Scalars['String']>
  fromGt?: Maybe<Scalars['String']>
  fromLt?: Maybe<Scalars['String']>
  fromGte?: Maybe<Scalars['String']>
  fromLte?: Maybe<Scalars['String']>
  fromIn?: Maybe<Array<Scalars['String']>>
  fromNotIn?: Maybe<Array<Scalars['String']>>
  fromContains?: Maybe<Scalars['String']>
  fromNotContains?: Maybe<Scalars['String']>
  fromStartsWith?: Maybe<Scalars['String']>
  fromNotStartsWith?: Maybe<Scalars['String']>
  fromEndsWith?: Maybe<Scalars['String']>
  fromNotEndsWith?: Maybe<Scalars['String']>
  fromBalance?: Maybe<Scalars['String']>
  fromBalanceNot?: Maybe<Scalars['String']>
  fromBalanceGt?: Maybe<Scalars['String']>
  fromBalanceLt?: Maybe<Scalars['String']>
  fromBalanceGte?: Maybe<Scalars['String']>
  fromBalanceLte?: Maybe<Scalars['String']>
  fromBalanceIn?: Maybe<Array<Scalars['String']>>
  fromBalanceNotIn?: Maybe<Array<Scalars['String']>>
  fromBalanceContains?: Maybe<Scalars['String']>
  fromBalanceNotContains?: Maybe<Scalars['String']>
  fromBalanceStartsWith?: Maybe<Scalars['String']>
  fromBalanceNotStartsWith?: Maybe<Scalars['String']>
  fromBalanceEndsWith?: Maybe<Scalars['String']>
  fromBalanceNotEndsWith?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
  toNot?: Maybe<Scalars['String']>
  toGt?: Maybe<Scalars['String']>
  toLt?: Maybe<Scalars['String']>
  toGte?: Maybe<Scalars['String']>
  toLte?: Maybe<Scalars['String']>
  toIn?: Maybe<Array<Scalars['String']>>
  toNotIn?: Maybe<Array<Scalars['String']>>
  toContains?: Maybe<Scalars['String']>
  toNotContains?: Maybe<Scalars['String']>
  toStartsWith?: Maybe<Scalars['String']>
  toNotStartsWith?: Maybe<Scalars['String']>
  toEndsWith?: Maybe<Scalars['String']>
  toNotEndsWith?: Maybe<Scalars['String']>
  toBalance?: Maybe<Scalars['String']>
  toBalanceNot?: Maybe<Scalars['String']>
  toBalanceGt?: Maybe<Scalars['String']>
  toBalanceLt?: Maybe<Scalars['String']>
  toBalanceGte?: Maybe<Scalars['String']>
  toBalanceLte?: Maybe<Scalars['String']>
  toBalanceIn?: Maybe<Array<Scalars['String']>>
  toBalanceNotIn?: Maybe<Array<Scalars['String']>>
  toBalanceContains?: Maybe<Scalars['String']>
  toBalanceNotContains?: Maybe<Scalars['String']>
  toBalanceStartsWith?: Maybe<Scalars['String']>
  toBalanceNotStartsWith?: Maybe<Scalars['String']>
  toBalanceEndsWith?: Maybe<Scalars['String']>
  toBalanceNotEndsWith?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['BigInt']>
  valueNot?: Maybe<Scalars['BigInt']>
  valueGt?: Maybe<Scalars['BigInt']>
  valueLt?: Maybe<Scalars['BigInt']>
  valueGte?: Maybe<Scalars['BigInt']>
  valueLte?: Maybe<Scalars['BigInt']>
  valueIn?: Maybe<Array<Scalars['BigInt']>>
  valueNotIn?: Maybe<Array<Scalars['BigInt']>>
}

export enum TransferOrderBy {
  id = 'id',
  transaction = 'transaction',
  timestamp = 'timestamp',
  token = 'token',
  operator = 'operator',
  from = 'from',
  fromBalance = 'fromBalance',
  to = 'to',
  toBalance = 'toBalance',
  value = 'value',
}

export type Block = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>
  /** The block number */
  number: Scalars['Int']
}

/** The type for the top-level _meta field */
export type Meta = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Block
  /** The deployment ID */
  deployment: Scalars['String']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']
}

export enum SubgraphErrorPolicy {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = 'deny',
}

export type ApprovalForAll = Event & {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  delegation: OperatorDelegation
  owner: Account
  operator: Account
  approved: Scalars['Boolean']
}

export type ApprovalForAllFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  transaction?: Maybe<Scalars['String']>
  transactionNot?: Maybe<Scalars['String']>
  transactionGt?: Maybe<Scalars['String']>
  transactionLt?: Maybe<Scalars['String']>
  transactionGte?: Maybe<Scalars['String']>
  transactionLte?: Maybe<Scalars['String']>
  transactionIn?: Maybe<Array<Scalars['String']>>
  transactionNotIn?: Maybe<Array<Scalars['String']>>
  transactionContains?: Maybe<Scalars['String']>
  transactionNotContains?: Maybe<Scalars['String']>
  transactionStartsWith?: Maybe<Scalars['String']>
  transactionNotStartsWith?: Maybe<Scalars['String']>
  transactionEndsWith?: Maybe<Scalars['String']>
  transactionNotEndsWith?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['BigInt']>
  timestampNot?: Maybe<Scalars['BigInt']>
  timestampGt?: Maybe<Scalars['BigInt']>
  timestampLt?: Maybe<Scalars['BigInt']>
  timestampGte?: Maybe<Scalars['BigInt']>
  timestampLte?: Maybe<Scalars['BigInt']>
  timestampIn?: Maybe<Array<Scalars['BigInt']>>
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>
  delegation?: Maybe<Scalars['String']>
  delegationNot?: Maybe<Scalars['String']>
  delegationGt?: Maybe<Scalars['String']>
  delegationLt?: Maybe<Scalars['String']>
  delegationGte?: Maybe<Scalars['String']>
  delegationLte?: Maybe<Scalars['String']>
  delegationIn?: Maybe<Array<Scalars['String']>>
  delegationNotIn?: Maybe<Array<Scalars['String']>>
  delegationContains?: Maybe<Scalars['String']>
  delegationNotContains?: Maybe<Scalars['String']>
  delegationStartsWith?: Maybe<Scalars['String']>
  delegationNotStartsWith?: Maybe<Scalars['String']>
  delegationEndsWith?: Maybe<Scalars['String']>
  delegationNotEndsWith?: Maybe<Scalars['String']>
  owner?: Maybe<Scalars['String']>
  ownerNot?: Maybe<Scalars['String']>
  ownerGt?: Maybe<Scalars['String']>
  ownerLt?: Maybe<Scalars['String']>
  ownerGte?: Maybe<Scalars['String']>
  ownerLte?: Maybe<Scalars['String']>
  ownerIn?: Maybe<Array<Scalars['String']>>
  ownerNotIn?: Maybe<Array<Scalars['String']>>
  ownerContains?: Maybe<Scalars['String']>
  ownerNotContains?: Maybe<Scalars['String']>
  ownerStartsWith?: Maybe<Scalars['String']>
  ownerNotStartsWith?: Maybe<Scalars['String']>
  ownerEndsWith?: Maybe<Scalars['String']>
  ownerNotEndsWith?: Maybe<Scalars['String']>
  operator?: Maybe<Scalars['String']>
  operatorNot?: Maybe<Scalars['String']>
  operatorGt?: Maybe<Scalars['String']>
  operatorLt?: Maybe<Scalars['String']>
  operatorGte?: Maybe<Scalars['String']>
  operatorLte?: Maybe<Scalars['String']>
  operatorIn?: Maybe<Array<Scalars['String']>>
  operatorNotIn?: Maybe<Array<Scalars['String']>>
  operatorContains?: Maybe<Scalars['String']>
  operatorNotContains?: Maybe<Scalars['String']>
  operatorStartsWith?: Maybe<Scalars['String']>
  operatorNotStartsWith?: Maybe<Scalars['String']>
  operatorEndsWith?: Maybe<Scalars['String']>
  operatorNotEndsWith?: Maybe<Scalars['String']>
  approved?: Maybe<Scalars['Boolean']>
  approvedNot?: Maybe<Scalars['Boolean']>
  approvedIn?: Maybe<Array<Scalars['Boolean']>>
  approvedNotIn?: Maybe<Array<Scalars['Boolean']>>
}

export enum ApprovalForAllOrderBy {
  id = 'id',
  transaction = 'transaction',
  timestamp = 'timestamp',
  delegation = 'delegation',
  owner = 'owner',
  operator = 'operator',
  approved = 'approved',
}

export type Contract = {
  id: Scalars['ID']
  asErc721?: Maybe<TokenRegistry>
}

export type ContractFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  asErc721?: Maybe<Scalars['String']>
  asErc721Not?: Maybe<Scalars['String']>
  asErc721Gt?: Maybe<Scalars['String']>
  asErc721Lt?: Maybe<Scalars['String']>
  asErc721Gte?: Maybe<Scalars['String']>
  asErc721Lte?: Maybe<Scalars['String']>
  asErc721In?: Maybe<Array<Scalars['String']>>
  asErc721NotIn?: Maybe<Array<Scalars['String']>>
  asErc721Contains?: Maybe<Scalars['String']>
  asErc721NotContains?: Maybe<Scalars['String']>
  asErc721StartsWith?: Maybe<Scalars['String']>
  asErc721NotStartsWith?: Maybe<Scalars['String']>
  asErc721EndsWith?: Maybe<Scalars['String']>
  asErc721NotEndsWith?: Maybe<Scalars['String']>
}

export enum ContractOrderBy {
  id = 'id',
  asErc721 = 'asERC721',
}

export type OperatorDelegation = {
  id: Scalars['ID']
  registry: TokenRegistry
  owner: Account
  operator: Account
  approved: Scalars['Boolean']
  events: Array<ApprovalForAll>
}

export type OperatorDelegationEventsArgs = {
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ApprovalForAllOrderBy>
  orderDirection?: Maybe<OrderDirection>
  where?: Maybe<ApprovalForAllFilter>
}

export type OperatorDelegationFilter = {
  id?: Maybe<Scalars['ID']>
  idNot?: Maybe<Scalars['ID']>
  idGt?: Maybe<Scalars['ID']>
  idLt?: Maybe<Scalars['ID']>
  idGte?: Maybe<Scalars['ID']>
  idLte?: Maybe<Scalars['ID']>
  idIn?: Maybe<Array<Scalars['ID']>>
  idNotIn?: Maybe<Array<Scalars['ID']>>
  registry?: Maybe<Scalars['String']>
  registryNot?: Maybe<Scalars['String']>
  registryGt?: Maybe<Scalars['String']>
  registryLt?: Maybe<Scalars['String']>
  registryGte?: Maybe<Scalars['String']>
  registryLte?: Maybe<Scalars['String']>
  registryIn?: Maybe<Array<Scalars['String']>>
  registryNotIn?: Maybe<Array<Scalars['String']>>
  registryContains?: Maybe<Scalars['String']>
  registryNotContains?: Maybe<Scalars['String']>
  registryStartsWith?: Maybe<Scalars['String']>
  registryNotStartsWith?: Maybe<Scalars['String']>
  registryEndsWith?: Maybe<Scalars['String']>
  registryNotEndsWith?: Maybe<Scalars['String']>
  owner?: Maybe<Scalars['String']>
  ownerNot?: Maybe<Scalars['String']>
  ownerGt?: Maybe<Scalars['String']>
  ownerLt?: Maybe<Scalars['String']>
  ownerGte?: Maybe<Scalars['String']>
  ownerLte?: Maybe<Scalars['String']>
  ownerIn?: Maybe<Array<Scalars['String']>>
  ownerNotIn?: Maybe<Array<Scalars['String']>>
  ownerContains?: Maybe<Scalars['String']>
  ownerNotContains?: Maybe<Scalars['String']>
  ownerStartsWith?: Maybe<Scalars['String']>
  ownerNotStartsWith?: Maybe<Scalars['String']>
  ownerEndsWith?: Maybe<Scalars['String']>
  ownerNotEndsWith?: Maybe<Scalars['String']>
  operator?: Maybe<Scalars['String']>
  operatorNot?: Maybe<Scalars['String']>
  operatorGt?: Maybe<Scalars['String']>
  operatorLt?: Maybe<Scalars['String']>
  operatorGte?: Maybe<Scalars['String']>
  operatorLte?: Maybe<Scalars['String']>
  operatorIn?: Maybe<Array<Scalars['String']>>
  operatorNotIn?: Maybe<Array<Scalars['String']>>
  operatorContains?: Maybe<Scalars['String']>
  operatorNotContains?: Maybe<Scalars['String']>
  operatorStartsWith?: Maybe<Scalars['String']>
  operatorNotStartsWith?: Maybe<Scalars['String']>
  operatorEndsWith?: Maybe<Scalars['String']>
  operatorNotEndsWith?: Maybe<Scalars['String']>
  approved?: Maybe<Scalars['Boolean']>
  approvedNot?: Maybe<Scalars['Boolean']>
  approvedIn?: Maybe<Array<Scalars['Boolean']>>
  approvedNotIn?: Maybe<Array<Scalars['Boolean']>>
}

export enum OperatorDelegationOrderBy {
  id = 'id',
  registry = 'registry',
  owner = 'owner',
  operator = 'operator',
  approved = 'approved',
  events = 'events',
}

export enum Standard {
  erc721 = 'erc721',
  erc1155 = 'erc1155',
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>
  Subscription: ResolverTypeWrapper<{}>
  Account: ResolverTypeWrapper<Account>
  AccountFilter: AccountFilter
  AccountOrderBy: AccountOrderBy
  Approval: ResolverTypeWrapper<Approval>
  ApprovalFilter: ApprovalFilter
  ApprovalOrderBy: ApprovalOrderBy
  Balance: ResolverTypeWrapper<Balance>
  BalanceFilter: BalanceFilter
  BalanceOrderBy: BalanceOrderBy
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>
  BlockHeight: BlockHeight
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>
  DecimalValue: ResolverTypeWrapper<DecimalValue>
  DecimalValueFilter: DecimalValueFilter
  DecimalValueOrderBy: DecimalValueOrderBy
  Event:
    | ResolversTypes['Approval']
    | ResolversTypes['Transfer']
    | ResolversTypes['ApprovalForAll']
  EventFilter: EventFilter
  EventOrderBy: EventOrderBy
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  OrderDirection: OrderDirection
  PersistentString: ResolverTypeWrapper<PersistentString>
  PersistentStringArray: ResolverTypeWrapper<PersistentStringArray>
  PersistentStringArrayFilter: PersistentStringArrayFilter
  PersistentStringArrayOrderBy: PersistentStringArrayOrderBy
  PersistentStringFilter: PersistentStringFilter
  PersistentStringOrderBy: PersistentStringOrderBy
  String: ResolverTypeWrapper<Scalars['String']>
  Token: ResolverTypeWrapper<Token>
  TokenRegistry: ResolverTypeWrapper<TokenRegistry>
  TokenRegistryFilter: TokenRegistryFilter
  TokenRegistryOrderBy: TokenRegistryOrderBy
  TokenFilter: TokenFilter
  TokenOrderBy: TokenOrderBy
  Transaction: ResolverTypeWrapper<Transaction>
  TransactionFilter: TransactionFilter
  TransactionOrderBy: TransactionOrderBy
  Transfer: ResolverTypeWrapper<Transfer>
  TransferFilter: TransferFilter
  TransferOrderBy: TransferOrderBy
  Block: ResolverTypeWrapper<Block>
  Meta: ResolverTypeWrapper<Meta>
  SubgraphErrorPolicy: SubgraphErrorPolicy
  ApprovalForAll: ResolverTypeWrapper<ApprovalForAll>
  ApprovalForAllFilter: ApprovalForAllFilter
  ApprovalForAllOrderBy: ApprovalForAllOrderBy
  Contract: ResolverTypeWrapper<Contract>
  ContractFilter: ContractFilter
  ContractOrderBy: ContractOrderBy
  OperatorDelegation: ResolverTypeWrapper<OperatorDelegation>
  OperatorDelegationFilter: OperatorDelegationFilter
  OperatorDelegationOrderBy: OperatorDelegationOrderBy
  Standard: Standard
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  Subscription: {}
  Account: Account
  AccountFilter: AccountFilter
  Approval: Approval
  ApprovalFilter: ApprovalFilter
  Balance: Balance
  BalanceFilter: BalanceFilter
  BigDecimal: Scalars['BigDecimal']
  BigInt: Scalars['BigInt']
  BlockHeight: BlockHeight
  Boolean: Scalars['Boolean']
  Bytes: Scalars['Bytes']
  DecimalValue: DecimalValue
  DecimalValueFilter: DecimalValueFilter
  Event:
    | ResolversParentTypes['Approval']
    | ResolversParentTypes['Transfer']
    | ResolversParentTypes['ApprovalForAll']
  EventFilter: EventFilter
  ID: Scalars['ID']
  Int: Scalars['Int']
  PersistentString: PersistentString
  PersistentStringArray: PersistentStringArray
  PersistentStringArrayFilter: PersistentStringArrayFilter
  PersistentStringFilter: PersistentStringFilter
  String: Scalars['String']
  Token: Token
  TokenRegistry: TokenRegistry
  TokenRegistryFilter: TokenRegistryFilter
  TokenFilter: TokenFilter
  Transaction: Transaction
  TransactionFilter: TransactionFilter
  Transfer: Transfer
  TransferFilter: TransferFilter
  Block: Block
  Meta: Meta
  ApprovalForAll: ApprovalForAll
  ApprovalForAllFilter: ApprovalForAllFilter
  Contract: Contract
  ContractFilter: ContractFilter
  OperatorDelegation: OperatorDelegation
  OperatorDelegationFilter: OperatorDelegationFilter
}>

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  account?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountArgs, 'id'>
  >
  accounts?: Resolver<
    Array<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountsArgs, 'skip' | 'first'>
  >
  tokenRegistry?: Resolver<
    Maybe<ResolversTypes['TokenRegistry']>,
    ParentType,
    ContextType,
    RequireFields<QueryTokenRegistryArgs, 'id'>
  >
  tokenRegistries?: Resolver<
    Array<ResolversTypes['TokenRegistry']>,
    ParentType,
    ContextType,
    RequireFields<QueryTokenRegistriesArgs, 'skip' | 'first'>
  >
  token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QueryTokenArgs, 'id'>
  >
  tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QueryTokensArgs, 'skip' | 'first'>
  >
  balance?: Resolver<
    Maybe<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<QueryBalanceArgs, 'id'>
  >
  balances?: Resolver<
    Array<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<QueryBalancesArgs, 'skip' | 'first'>
  >
  transfer?: Resolver<
    Maybe<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransferArgs, 'id'>
  >
  transfers?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransfersArgs, 'skip' | 'first'>
  >
  approval?: Resolver<
    Maybe<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalArgs, 'id'>
  >
  approvals?: Resolver<
    Array<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalsArgs, 'skip' | 'first'>
  >
  decimalValue?: Resolver<
    Maybe<ResolversTypes['DecimalValue']>,
    ParentType,
    ContextType,
    RequireFields<QueryDecimalValueArgs, 'id'>
  >
  decimalValues?: Resolver<
    Array<ResolversTypes['DecimalValue']>,
    ParentType,
    ContextType,
    RequireFields<QueryDecimalValuesArgs, 'skip' | 'first'>
  >
  transaction?: Resolver<
    Maybe<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransactionArgs, 'id'>
  >
  transactions?: Resolver<
    Array<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransactionsArgs, 'skip' | 'first'>
  >
  persistentStringArray?: Resolver<
    Maybe<ResolversTypes['PersistentStringArray']>,
    ParentType,
    ContextType,
    RequireFields<QueryPersistentStringArrayArgs, 'id'>
  >
  persistentStringArrays?: Resolver<
    Array<ResolversTypes['PersistentStringArray']>,
    ParentType,
    ContextType,
    RequireFields<QueryPersistentStringArraysArgs, 'skip' | 'first'>
  >
  persistentString?: Resolver<
    Maybe<ResolversTypes['PersistentString']>,
    ParentType,
    ContextType,
    RequireFields<QueryPersistentStringArgs, 'id'>
  >
  persistentStrings?: Resolver<
    Array<ResolversTypes['PersistentString']>,
    ParentType,
    ContextType,
    RequireFields<QueryPersistentStringsArgs, 'skip' | 'first'>
  >
  event?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<QueryEventArgs, 'id'>
  >
  events?: Resolver<
    Array<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<QueryEventsArgs, 'skip' | 'first'>
  >
  meta?: Resolver<
    Maybe<ResolversTypes['Meta']>,
    ParentType,
    ContextType,
    RequireFields<QueryMetaArgs, never>
  >
  contract?: Resolver<
    Maybe<ResolversTypes['Contract']>,
    ParentType,
    ContextType,
    RequireFields<QueryContractArgs, 'id'>
  >
  contracts?: Resolver<
    Array<ResolversTypes['Contract']>,
    ParentType,
    ContextType,
    RequireFields<QueryContractsArgs, 'skip' | 'first'>
  >
  operatorDelegation?: Resolver<
    Maybe<ResolversTypes['OperatorDelegation']>,
    ParentType,
    ContextType,
    RequireFields<QueryOperatorDelegationArgs, 'id'>
  >
  operatorDelegations?: Resolver<
    Array<ResolversTypes['OperatorDelegation']>,
    ParentType,
    ContextType,
    RequireFields<QueryOperatorDelegationsArgs, 'skip' | 'first'>
  >
  approvalForAll?: Resolver<
    Maybe<ResolversTypes['ApprovalForAll']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalForAllArgs, 'id'>
  >
  approvalForAlls?: Resolver<
    Array<ResolversTypes['ApprovalForAll']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalForAllsArgs, 'skip' | 'first'>
  >
}>

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
  account?: SubscriptionResolver<
    Maybe<ResolversTypes['Account']>,
    'account',
    ParentType,
    ContextType,
    RequireFields<SubscriptionAccountArgs, 'id'>
  >
  accounts?: SubscriptionResolver<
    Array<ResolversTypes['Account']>,
    'accounts',
    ParentType,
    ContextType,
    RequireFields<SubscriptionAccountsArgs, 'skip' | 'first'>
  >
  tokenRegistry?: SubscriptionResolver<
    Maybe<ResolversTypes['TokenRegistry']>,
    'tokenRegistry',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTokenRegistryArgs, 'id'>
  >
  tokenRegistries?: SubscriptionResolver<
    Array<ResolversTypes['TokenRegistry']>,
    'tokenRegistries',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTokenRegistriesArgs, 'skip' | 'first'>
  >
  token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'token',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTokenArgs, 'id'>
  >
  tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'tokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTokensArgs, 'skip' | 'first'>
  >
  balance?: SubscriptionResolver<
    Maybe<ResolversTypes['Balance']>,
    'balance',
    ParentType,
    ContextType,
    RequireFields<SubscriptionBalanceArgs, 'id'>
  >
  balances?: SubscriptionResolver<
    Array<ResolversTypes['Balance']>,
    'balances',
    ParentType,
    ContextType,
    RequireFields<SubscriptionBalancesArgs, 'skip' | 'first'>
  >
  transfer?: SubscriptionResolver<
    Maybe<ResolversTypes['Transfer']>,
    'transfer',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTransferArgs, 'id'>
  >
  transfers?: SubscriptionResolver<
    Array<ResolversTypes['Transfer']>,
    'transfers',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTransfersArgs, 'skip' | 'first'>
  >
  approval?: SubscriptionResolver<
    Maybe<ResolversTypes['Approval']>,
    'approval',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalArgs, 'id'>
  >
  approvals?: SubscriptionResolver<
    Array<ResolversTypes['Approval']>,
    'approvals',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalsArgs, 'skip' | 'first'>
  >
  decimalValue?: SubscriptionResolver<
    Maybe<ResolversTypes['DecimalValue']>,
    'decimalValue',
    ParentType,
    ContextType,
    RequireFields<SubscriptionDecimalValueArgs, 'id'>
  >
  decimalValues?: SubscriptionResolver<
    Array<ResolversTypes['DecimalValue']>,
    'decimalValues',
    ParentType,
    ContextType,
    RequireFields<SubscriptionDecimalValuesArgs, 'skip' | 'first'>
  >
  transaction?: SubscriptionResolver<
    Maybe<ResolversTypes['Transaction']>,
    'transaction',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTransactionArgs, 'id'>
  >
  transactions?: SubscriptionResolver<
    Array<ResolversTypes['Transaction']>,
    'transactions',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTransactionsArgs, 'skip' | 'first'>
  >
  persistentStringArray?: SubscriptionResolver<
    Maybe<ResolversTypes['PersistentStringArray']>,
    'persistentStringArray',
    ParentType,
    ContextType,
    RequireFields<SubscriptionPersistentStringArrayArgs, 'id'>
  >
  persistentStringArrays?: SubscriptionResolver<
    Array<ResolversTypes['PersistentStringArray']>,
    'persistentStringArrays',
    ParentType,
    ContextType,
    RequireFields<SubscriptionPersistentStringArraysArgs, 'skip' | 'first'>
  >
  persistentString?: SubscriptionResolver<
    Maybe<ResolversTypes['PersistentString']>,
    'persistentString',
    ParentType,
    ContextType,
    RequireFields<SubscriptionPersistentStringArgs, 'id'>
  >
  persistentStrings?: SubscriptionResolver<
    Array<ResolversTypes['PersistentString']>,
    'persistentStrings',
    ParentType,
    ContextType,
    RequireFields<SubscriptionPersistentStringsArgs, 'skip' | 'first'>
  >
  event?: SubscriptionResolver<
    Maybe<ResolversTypes['Event']>,
    'event',
    ParentType,
    ContextType,
    RequireFields<SubscriptionEventArgs, 'id'>
  >
  events?: SubscriptionResolver<
    Array<ResolversTypes['Event']>,
    'events',
    ParentType,
    ContextType,
    RequireFields<SubscriptionEventsArgs, 'skip' | 'first'>
  >
  meta?: SubscriptionResolver<
    Maybe<ResolversTypes['Meta']>,
    'meta',
    ParentType,
    ContextType,
    RequireFields<SubscriptionMetaArgs, never>
  >
  contract?: SubscriptionResolver<
    Maybe<ResolversTypes['Contract']>,
    'contract',
    ParentType,
    ContextType,
    RequireFields<SubscriptionContractArgs, 'id'>
  >
  contracts?: SubscriptionResolver<
    Array<ResolversTypes['Contract']>,
    'contracts',
    ParentType,
    ContextType,
    RequireFields<SubscriptionContractsArgs, 'skip' | 'first'>
  >
  operatorDelegation?: SubscriptionResolver<
    Maybe<ResolversTypes['OperatorDelegation']>,
    'operatorDelegation',
    ParentType,
    ContextType,
    RequireFields<SubscriptionOperatorDelegationArgs, 'id'>
  >
  operatorDelegations?: SubscriptionResolver<
    Array<ResolversTypes['OperatorDelegation']>,
    'operatorDelegations',
    ParentType,
    ContextType,
    RequireFields<SubscriptionOperatorDelegationsArgs, 'skip' | 'first'>
  >
  approvalForAll?: SubscriptionResolver<
    Maybe<ResolversTypes['ApprovalForAll']>,
    'approvalForAll',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalForAllArgs, 'id'>
  >
  approvalForAlls?: SubscriptionResolver<
    Array<ResolversTypes['ApprovalForAll']>,
    'approvalForAlls',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalForAllsArgs, 'skip' | 'first'>
  >
}>

export type AccountResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  balances?: Resolver<
    Array<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<AccountBalancesArgs, 'skip' | 'first'>
  >
  transfersOperator?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<AccountTransfersOperatorArgs, 'skip' | 'first'>
  >
  transfersFrom?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<AccountTransfersFromArgs, 'skip' | 'first'>
  >
  transfersTo?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<AccountTransfersToArgs, 'skip' | 'first'>
  >
  approvalsOwner?: Resolver<
    Array<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<AccountApprovalsOwnerArgs, 'skip' | 'first'>
  >
  approvalsSpender?: Resolver<
    Array<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<AccountApprovalsSpenderArgs, 'skip' | 'first'>
  >
  tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<AccountTokensArgs, 'skip' | 'first'>
  >
  delegationsOwner?: Resolver<
    Array<ResolversTypes['OperatorDelegation']>,
    ParentType,
    ContextType,
    RequireFields<AccountDelegationsOwnerArgs, 'skip' | 'first'>
  >
  delegationsOperator?: Resolver<
    Array<ResolversTypes['OperatorDelegation']>,
    ParentType,
    ContextType,
    RequireFields<AccountDelegationsOperatorArgs, 'skip' | 'first'>
  >
  approvalsApproved?: Resolver<
    Array<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<AccountApprovalsApprovedArgs, 'skip' | 'first'>
  >
  approvalsForAllOwner?: Resolver<
    Array<ResolversTypes['ApprovalForAll']>,
    ParentType,
    ContextType,
    RequireFields<AccountApprovalsForAllOwnerArgs, 'skip' | 'first'>
  >
  approvalsForAllOperator?: Resolver<
    Array<ResolversTypes['ApprovalForAll']>,
    ParentType,
    ContextType,
    RequireFields<AccountApprovalsForAllOperatorArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ApprovalResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Approval'] = ResolversParentTypes['Approval'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  spender?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  approved?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Balance'] = ResolversParentTypes['Balance'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transfersFrom?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<BalanceTransfersFromArgs, 'skip' | 'first'>
  >
  transfersTo?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<BalanceTransfersToArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal'
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export type DecimalValueResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['DecimalValue'] = ResolversParentTypes['DecimalValue'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  exact?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type EventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Approval' | 'Transfer' | 'ApprovalForAll',
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
}>

export type PersistentStringResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['PersistentString'] = ResolversParentTypes['PersistentString'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PersistentStringArrayResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['PersistentStringArray'] = ResolversParentTypes['PersistentStringArray'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  values?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  registry?: Resolver<ResolversTypes['TokenRegistry'], ParentType, ContextType>
  identifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  balances?: Resolver<
    Array<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<TokenBalancesArgs, 'skip' | 'first'>
  >
  transfers?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<TokenTransfersArgs, 'skip' | 'first'>
  >
  approvals?: Resolver<
    Array<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<TokenApprovalsArgs, 'skip' | 'first'>
  >
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  approval?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  standard?: Resolver<ResolversTypes['Standard'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenRegistryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['TokenRegistry'] = ResolversParentTypes['TokenRegistry'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<TokenRegistryTokensArgs, 'skip' | 'first'>
  >
  supportsMetadata?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TransactionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  events?: Resolver<
    Array<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<TransactionEventsArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  operator?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  fromBalance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType>
  to?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  toBalance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType>
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BlockResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block'],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MetaResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta'],
> = ResolversObject<{
  block?: Resolver<ResolversTypes['Block'], ParentType, ContextType>
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ApprovalForAllResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['ApprovalForAll'] = ResolversParentTypes['ApprovalForAll'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  delegation?: Resolver<ResolversTypes['OperatorDelegation'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  operator?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ContractResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  asErc721?: Resolver<Maybe<ResolversTypes['TokenRegistry']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ContractOrderByResolvers = { id: 'undefined'; asErc721: 'asERC721' }

export type OperatorDelegationResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['OperatorDelegation'] = ResolversParentTypes['OperatorDelegation'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  registry?: Resolver<ResolversTypes['TokenRegistry'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  operator?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  events?: Resolver<
    Array<ResolversTypes['ApprovalForAll']>,
    ParentType,
    ContextType,
    RequireFields<OperatorDelegationEventsArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  Account?: AccountResolvers<ContextType>
  Approval?: ApprovalResolvers<ContextType>
  Balance?: BalanceResolvers<ContextType>
  BigDecimal?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bytes?: GraphQLScalarType
  DecimalValue?: DecimalValueResolvers<ContextType>
  Event?: EventResolvers<ContextType>
  PersistentString?: PersistentStringResolvers<ContextType>
  PersistentStringArray?: PersistentStringArrayResolvers<ContextType>
  Token?: TokenResolvers<ContextType>
  TokenRegistry?: TokenRegistryResolvers<ContextType>
  Transaction?: TransactionResolvers<ContextType>
  Transfer?: TransferResolvers<ContextType>
  Block?: BlockResolvers<ContextType>
  Meta?: MetaResolvers<ContextType>
  ApprovalForAll?: ApprovalForAllResolvers<ContextType>
  Contract?: ContractResolvers<ContextType>
  ContractOrderBy?: ContractOrderByResolvers
  OperatorDelegation?: OperatorDelegationResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>

import { MeshContext as BaseMeshContext, ProjectionOptions } from '@graphql-mesh/runtime'

export type Eip1155Sdk = {
  account: (
    args: QueryAccountArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['account']>
  accounts: (
    args: QueryAccountsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['accounts']>
  tokenRegistry: (
    args: QueryTokenRegistryArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistry']>
  tokenRegistries: (
    args: QueryTokenRegistriesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistries']>
  token: (
    args: QueryTokenArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['token']>
  tokens: (
    args: QueryTokensArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokens']>
  balance: (
    args: QueryBalanceArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['balance']>
  balances: (
    args: QueryBalancesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['balances']>
  transfer: (
    args: QueryTransferArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfer']>
  transfers: (
    args: QueryTransfersArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfers']>
  approval: (
    args: QueryApprovalArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approval']>
  approvals: (
    args: QueryApprovalsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvals']>
  decimalValue: (
    args: QueryDecimalValueArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValue']>
  decimalValues: (
    args: QueryDecimalValuesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValues']>
  transaction: (
    args: QueryTransactionArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transaction']>
  transactions: (
    args: QueryTransactionsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transactions']>
  persistentStringArray: (
    args: QueryPersistentStringArrayArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArray']>
  persistentStringArrays: (
    args: QueryPersistentStringArraysArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArrays']>
  persistentString: (
    args: QueryPersistentStringArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentString']>
  persistentStrings: (
    args: QueryPersistentStringsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStrings']>
  event: (
    args: QueryEventArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['event']>
  events: (
    args: QueryEventsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['events']>
  // _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
}

export type QueryEip1155Sdk = {
  account: (
    args: QueryAccountArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['account']>
  accounts: (
    args: QueryAccountsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['accounts']>
  tokenRegistry: (
    args: QueryTokenRegistryArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistry']>
  tokenRegistries: (
    args: QueryTokenRegistriesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistries']>
  token: (
    args: QueryTokenArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['token']>
  tokens: (
    args: QueryTokensArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokens']>
  balance: (
    args: QueryBalanceArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['balance']>
  balances: (
    args: QueryBalancesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['balances']>
  transfer: (
    args: QueryTransferArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfer']>
  transfers: (
    args: QueryTransfersArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfers']>
  approval: (
    args: QueryApprovalArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approval']>
  approvals: (
    args: QueryApprovalsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvals']>
  decimalValue: (
    args: QueryDecimalValueArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValue']>
  decimalValues: (
    args: QueryDecimalValuesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValues']>
  transaction: (
    args: QueryTransactionArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transaction']>
  transactions: (
    args: QueryTransactionsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transactions']>
  persistentStringArray: (
    args: QueryPersistentStringArrayArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArray']>
  persistentStringArrays: (
    args: QueryPersistentStringArraysArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArrays']>
  persistentString: (
    args: QueryPersistentStringArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentString']>
  persistentStrings: (
    args: QueryPersistentStringsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStrings']>
  event: (
    args: QueryEventArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['event']>
  events: (
    args: QueryEventsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['events']>
  // _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
}

export type MutationEip1155Sdk = {}

export type SubscriptionEip1155Sdk = {
  account: (
    args: SubscriptionAccountArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['account']>
  accounts: (
    args: SubscriptionAccountsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['accounts']>
  tokenRegistry: (
    args: SubscriptionTokenRegistryArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['tokenRegistry']>
  tokenRegistries: (
    args: SubscriptionTokenRegistriesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['tokenRegistries']>
  token: (
    args: SubscriptionTokenArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['token']>
  tokens: (
    args: SubscriptionTokensArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['tokens']>
  balance: (
    args: SubscriptionBalanceArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['balance']>
  balances: (
    args: SubscriptionBalancesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['balances']>
  transfer: (
    args: SubscriptionTransferArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transfer']>
  transfers: (
    args: SubscriptionTransfersArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transfers']>
  approval: (
    args: SubscriptionApprovalArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['approval']>
  approvals: (
    args: SubscriptionApprovalsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['approvals']>
  decimalValue: (
    args: SubscriptionDecimalValueArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['decimalValue']>
  decimalValues: (
    args: SubscriptionDecimalValuesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['decimalValues']>
  transaction: (
    args: SubscriptionTransactionArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transaction']>
  transactions: (
    args: SubscriptionTransactionsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transactions']>
  persistentStringArray: (
    args: SubscriptionPersistentStringArrayArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentStringArray']>
  persistentStringArrays: (
    args: SubscriptionPersistentStringArraysArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentStringArrays']>
  persistentString: (
    args: SubscriptionPersistentStringArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentString']>
  persistentStrings: (
    args: SubscriptionPersistentStringsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentStrings']>
  event: (
    args: SubscriptionEventArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['event']>
  events: (
    args: SubscriptionEventsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['events']>
  // _meta: (
  //   args: Subscription_MetaArgs,
  //   projectionOptions?: ProjectionOptions,
  // ) => Promise<Subscription['_meta']>
}

export type Eip721Sdk = {
  contract: (
    args: QueryContractArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['contract']>
  contracts: (
    args: QueryContractsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['contracts']>
  account: (
    args: QueryAccountArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['account']>
  accounts: (
    args: QueryAccountsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['accounts']>
  tokenRegistry: (
    args: QueryTokenRegistryArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistry']>
  tokenRegistries: (
    args: QueryTokenRegistriesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistries']>
  token: (
    args: QueryTokenArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['token']>
  tokens: (
    args: QueryTokensArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokens']>
  operatorDelegation: (
    args: QueryOperatorDelegationArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['operatorDelegation']>
  operatorDelegations: (
    args: QueryOperatorDelegationsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['operatorDelegations']>
  transfer: (
    args: QueryTransferArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfer']>
  transfers: (
    args: QueryTransfersArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfers']>
  approval: (
    args: QueryApprovalArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approval']>
  approvals: (
    args: QueryApprovalsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvals']>
  approvalForAll: (
    args: QueryApprovalForAllArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvalForAll']>
  approvalForAlls: (
    args: QueryApprovalForAllsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvalForAlls']>
  decimalValue: (
    args: QueryDecimalValueArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValue']>
  decimalValues: (
    args: QueryDecimalValuesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValues']>
  transaction: (
    args: QueryTransactionArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transaction']>
  transactions: (
    args: QueryTransactionsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transactions']>
  persistentStringArray: (
    args: QueryPersistentStringArrayArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArray']>
  persistentStringArrays: (
    args: QueryPersistentStringArraysArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArrays']>
  persistentString: (
    args: QueryPersistentStringArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentString']>
  persistentStrings: (
    args: QueryPersistentStringsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStrings']>
  event: (
    args: QueryEventArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['event']>
  events: (
    args: QueryEventsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['events']>
  // _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
}

export type QueryEip721Sdk = {
  contract: (
    args: QueryContractArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['contract']>
  contracts: (
    args: QueryContractsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['contracts']>
  account: (
    args: QueryAccountArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['account']>
  accounts: (
    args: QueryAccountsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['accounts']>
  tokenRegistry: (
    args: QueryTokenRegistryArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistry']>
  tokenRegistries: (
    args: QueryTokenRegistriesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokenRegistries']>
  token: (
    args: QueryTokenArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['token']>
  tokens: (
    args: QueryTokensArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['tokens']>
  operatorDelegation: (
    args: QueryOperatorDelegationArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['operatorDelegation']>
  operatorDelegations: (
    args: QueryOperatorDelegationsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['operatorDelegations']>
  transfer: (
    args: QueryTransferArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfer']>
  transfers: (
    args: QueryTransfersArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transfers']>
  approval: (
    args: QueryApprovalArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approval']>
  approvals: (
    args: QueryApprovalsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvals']>
  approvalForAll: (
    args: QueryApprovalForAllArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvalForAll']>
  approvalForAlls: (
    args: QueryApprovalForAllsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['approvalForAlls']>
  decimalValue: (
    args: QueryDecimalValueArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValue']>
  decimalValues: (
    args: QueryDecimalValuesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['decimalValues']>
  transaction: (
    args: QueryTransactionArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transaction']>
  transactions: (
    args: QueryTransactionsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['transactions']>
  persistentStringArray: (
    args: QueryPersistentStringArrayArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArray']>
  persistentStringArrays: (
    args: QueryPersistentStringArraysArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStringArrays']>
  persistentString: (
    args: QueryPersistentStringArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentString']>
  persistentStrings: (
    args: QueryPersistentStringsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['persistentStrings']>
  event: (
    args: QueryEventArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['event']>
  events: (
    args: QueryEventsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Query['events']>
  // _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
}

export type MutationEip721Sdk = {}

export type SubscriptionEip721Sdk = {
  contract: (
    args: SubscriptionContractArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['contract']>
  contracts: (
    args: SubscriptionContractsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['contracts']>
  account: (
    args: SubscriptionAccountArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['account']>
  accounts: (
    args: SubscriptionAccountsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['accounts']>
  tokenRegistry: (
    args: SubscriptionTokenRegistryArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['tokenRegistry']>
  tokenRegistries: (
    args: SubscriptionTokenRegistriesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['tokenRegistries']>
  token: (
    args: SubscriptionTokenArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['token']>
  tokens: (
    args: SubscriptionTokensArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['tokens']>
  operatorDelegation: (
    args: SubscriptionOperatorDelegationArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['operatorDelegation']>
  operatorDelegations: (
    args: SubscriptionOperatorDelegationsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['operatorDelegations']>
  transfer: (
    args: SubscriptionTransferArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transfer']>
  transfers: (
    args: SubscriptionTransfersArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transfers']>
  approval: (
    args: SubscriptionApprovalArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['approval']>
  approvals: (
    args: SubscriptionApprovalsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['approvals']>
  approvalForAll: (
    args: SubscriptionApprovalForAllArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['approvalForAll']>
  approvalForAlls: (
    args: SubscriptionApprovalForAllsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['approvalForAlls']>
  decimalValue: (
    args: SubscriptionDecimalValueArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['decimalValue']>
  decimalValues: (
    args: SubscriptionDecimalValuesArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['decimalValues']>
  transaction: (
    args: SubscriptionTransactionArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transaction']>
  transactions: (
    args: SubscriptionTransactionsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['transactions']>
  persistentStringArray: (
    args: SubscriptionPersistentStringArrayArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentStringArray']>
  persistentStringArrays: (
    args: SubscriptionPersistentStringArraysArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentStringArrays']>
  persistentString: (
    args: SubscriptionPersistentStringArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentString']>
  persistentStrings: (
    args: SubscriptionPersistentStringsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['persistentStrings']>
  event: (
    args: SubscriptionEventArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['event']>
  events: (
    args: SubscriptionEventsArgs,
    projectionOptions?: ProjectionOptions,
  ) => Promise<Subscription['events']>
  // _meta: (
  //   args: Subscription_MetaArgs,
  //   projectionOptions?: ProjectionOptions,
  // ) => Promise<Subscription['_meta']>
}

export type Eip1155Context = {
  ['EIP1155']: {
    api: Eip1155Sdk
    apiQuery: QueryEip1155Sdk
    apiMutation: MutationEip1155Sdk
    apiSubscription: SubscriptionEip1155Sdk
  }
}

export type Eip721Context = {
  ['EIP721']: {
    api: Eip721Sdk
    apiQuery: QueryEip721Sdk
    apiMutation: MutationEip721Sdk
    apiSubscription: SubscriptionEip721Sdk
  }
}

export type MeshContext = Eip1155Context & Eip721Context & BaseMeshContext
