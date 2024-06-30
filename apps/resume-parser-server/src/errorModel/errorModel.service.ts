import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErrorModelServiceBase } from "./base/errorModel.service.base";

@Injectable()
export class ErrorModelService extends ErrorModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
