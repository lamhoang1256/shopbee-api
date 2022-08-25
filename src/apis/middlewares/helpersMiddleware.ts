import { Request, Response, NextFunction } from "express";
import { validationResult, check, body } from "express-validator";
import { ApiError } from "../utils/api-error";
import { responseError } from "../utils/response";
import { isMongoId } from "../utils/validate";

const idRule = (...id: string[]) => {
  return id.map((item) => {
    return check(item).isMongoId().withMessage(`${item} không đúng định dạng`);
  });
};

const listIdRule = (list_id: string) => {
  return body(list_id)
    .custom((value: string[]) => value.findIndex((item) => !isMongoId(item)))
    .withMessage(`${list_id} không đúng định dạng`);
};

const idValidator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const error: [key: string] = errors.array().reduce((result: any, item, index) => {
    result[item.param] = item.msg;
    return result;
  }, {});
  const response: ApiError = {
    status: 400,
    error,
    name: "",
    message: Object.values(error)[0] || "Lỗi",
  };
  return responseError(response, res);
};

const entityValidator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const error: [key: string] = errors
    .array({ onlyFirstError: true })
    .reduce((result: any, item, index) => {
      result[item.param] = item.msg;
      return result;
    }, {});
  const response: ApiError = {
    status: 422,
    error,
    name: "",
    message: Object.values(error)[0] || "Lỗi",
  };
  return responseError(response, res);
};

const helpersMiddleware = {
  idRule,
  idValidator,
  entityValidator,
  listIdRule,
};
export default helpersMiddleware;
