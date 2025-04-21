import * as grpc from "@grpc/grpc-js";
import { ROLE } from "../utils/enum.utils";

/**
 * Interface for audit logging functionality
 */
export interface IAuditLog {
  /**
   * User ID associated with the request
   */
  userId: string;

  /**
   * User role performing the action
   */
  userRole: ROLE;

  /**
   * Timestamp when the action was performed
   */
  timestamp: Date;

  /**
   * Service name being accessed
   */
  service: string;

  /**
   * Method/operation being performed
   */
  method: string;

  /**
   * Request payload (input parameters)
   */
  request: any;

  /**
   * Response payload (output data)
   */
  response?: any;

  /**
   * Error information if the operation failed
   */
  error?: Error | grpc.ServiceError;

  /**
   * IP address of the client
   */
  clientIp?: string;

  /**
   * Additional metadata about the operation
   */
  metadata?: Record<string, any>;

  /**
   * Log the audit information
   */
  log(): Promise<void>;
}
