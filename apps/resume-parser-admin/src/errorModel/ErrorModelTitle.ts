import { ErrorModel as TErrorModel } from "../api/errorModel/ErrorModel";

export const ERRORMODEL_TITLE_FIELD = "message";

export const ErrorModelTitle = (record: TErrorModel): string => {
  return record.message?.toString() || String(record.id);
};
