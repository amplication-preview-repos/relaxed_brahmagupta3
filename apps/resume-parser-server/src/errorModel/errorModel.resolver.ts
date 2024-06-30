import * as graphql from "@nestjs/graphql";
import { ErrorModelResolverBase } from "./base/errorModel.resolver.base";
import { ErrorModel } from "./base/ErrorModel";
import { ErrorModelService } from "./errorModel.service";

@graphql.Resolver(() => ErrorModel)
export class ErrorModelResolver extends ErrorModelResolverBase {
  constructor(protected readonly service: ErrorModelService) {
    super(service);
  }
}
