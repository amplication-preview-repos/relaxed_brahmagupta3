import { Module } from "@nestjs/common";
import { ErrorModelModuleBase } from "./base/errorModel.module.base";
import { ErrorModelService } from "./errorModel.service";
import { ErrorModelController } from "./errorModel.controller";
import { ErrorModelResolver } from "./errorModel.resolver";

@Module({
  imports: [ErrorModelModuleBase],
  controllers: [ErrorModelController],
  providers: [ErrorModelService, ErrorModelResolver],
  exports: [ErrorModelService],
})
export class ErrorModelModule {}
