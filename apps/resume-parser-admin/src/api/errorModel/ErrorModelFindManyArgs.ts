import { ErrorModelWhereInput } from "./ErrorModelWhereInput";
import { ErrorModelOrderByInput } from "./ErrorModelOrderByInput";

export type ErrorModelFindManyArgs = {
  where?: ErrorModelWhereInput;
  orderBy?: Array<ErrorModelOrderByInput>;
  skip?: number;
  take?: number;
};
