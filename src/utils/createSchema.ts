import { buildSchema } from "type-graphql";
import { ChangePasswordResolver } from "../module/user/ChangePassword";
import { ConfirmUserResolver } from "../module/user/ConfirmUser";
import { ForgotPasswordResolver } from "../module/user/ForgotPassword";
import { LoginResolver } from "../module/user/Login";
import { LogoutResolver } from "../module/user/Logout";
import { MeResolver } from "../module/user/Me";
import { RegisterResolver } from "../module/user/Register";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      ChangePasswordResolver,
      ConfirmUserResolver,
      ForgotPasswordResolver,
      LoginResolver,
      LogoutResolver,
      MeResolver,
      RegisterResolver
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    }
  });
