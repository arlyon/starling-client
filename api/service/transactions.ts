/**
 * Generated by orval v6.6.4 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import {
  useQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type { Transaction, HTTPValidationError } from "./models";
import { useAxios } from "../useAxios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

/**
 * @summary Get Settled Transactions For Account
 */
export const useGetSettledTransactionsForAccountAccountNameTransactionsGetHook =
  () => {
    const getSettledTransactionsForAccountAccountNameTransactionsGet =
      useAxios<Transaction[]>();

    return (name: string) => {
      return getSettledTransactionsForAccountAccountNameTransactionsGet({
        url: `/account/${name}/transactions`,
        method: "get",
      });
    };
  };

export const getGetSettledTransactionsForAccountAccountNameTransactionsGetQueryKey =
  (name: string) => [`/account/${name}/transactions`];

export const useGetSettledTransactionsForAccountAccountNameTransactionsGet = <
  TData = AsyncReturnType<
    ReturnType<
      typeof useGetSettledTransactionsForAccountAccountNameTransactionsGetHook
    >
  >,
  TError = HTTPValidationError
>(
  name: string,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<
        ReturnType<
          typeof useGetSettledTransactionsForAccountAccountNameTransactionsGetHook
        >
      >,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetSettledTransactionsForAccountAccountNameTransactionsGetQueryKey(name);

  const getSettledTransactionsForAccountAccountNameTransactionsGet =
    useGetSettledTransactionsForAccountAccountNameTransactionsGetHook();

  const queryFn: QueryFunction<
    AsyncReturnType<
      ReturnType<
        typeof useGetSettledTransactionsForAccountAccountNameTransactionsGetHook
      >
    >
  > = () => getSettledTransactionsForAccountAccountNameTransactionsGet(name);

  const query = useQuery<
    AsyncReturnType<
      ReturnType<
        typeof useGetSettledTransactionsForAccountAccountNameTransactionsGetHook
      >
    >,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!name, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Get Settled Transactions For Account Days
 */
export const useGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetHook =
  () => {
    const getSettledTransactionsForAccountDaysAccountNameTransactionsDaysGet =
      useAxios<Transaction[]>();

    return (name: string, days: number) => {
      return getSettledTransactionsForAccountDaysAccountNameTransactionsDaysGet(
        { url: `/account/${name}/transactions/${days}`, method: "get" }
      );
    };
  };

export const getGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetQueryKey =
  (name: string, days: number) => [`/account/${name}/transactions/${days}`];

export const useGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGet =
  <
    TData = AsyncReturnType<
      ReturnType<
        typeof useGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetHook
      >
    >,
    TError = HTTPValidationError
  >(
    name: string,
    days: number,
    options?: {
      query?: UseQueryOptions<
        AsyncReturnType<
          ReturnType<
            typeof useGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetHook
          >
        >,
        TError,
        TData
      >;
    }
  ): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const { query: queryOptions } = options || {};

    const queryKey =
      queryOptions?.queryKey ??
      getGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetQueryKey(
        name,
        days
      );

    const getSettledTransactionsForAccountDaysAccountNameTransactionsDaysGet =
      useGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetHook();

    const queryFn: QueryFunction<
      AsyncReturnType<
        ReturnType<
          typeof useGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetHook
        >
      >
    > = () =>
      getSettledTransactionsForAccountDaysAccountNameTransactionsDaysGet(
        name,
        days
      );

    const query = useQuery<
      AsyncReturnType<
        ReturnType<
          typeof useGetSettledTransactionsForAccountDaysAccountNameTransactionsDaysGetHook
        >
      >,
      TError,
      TData
    >(queryKey, queryFn, { enabled: !!(name && days), ...queryOptions });

    return {
      queryKey,
      ...query,
    };
  };
