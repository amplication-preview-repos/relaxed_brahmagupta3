import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ErrorModelService } from "./errorModel.service";
import { ErrorModelControllerBase } from "./base/errorModel.controller.base";

@swagger.ApiTags("errorModels")
@common.Controller("errorModels")
export class ErrorModelController extends ErrorModelControllerBase {
  constructor(protected readonly service: ErrorModelService) {
    super(service);
  }
}
