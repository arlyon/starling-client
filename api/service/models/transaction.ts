/**
 * Generated by orval v6.6.4 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */

/**
 * Represents a transaction.
 */
export interface Transaction {
  uuid: string;
  time: string;
  counterparty_name: string;
  amount: number;
  reference?: string;
  status: string;
}