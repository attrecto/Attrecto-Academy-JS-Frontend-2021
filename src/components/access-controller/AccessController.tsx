import React, { FC } from "react";
import { getDataFromTokenModel } from "../../util/token";

interface AccessControllerProps {
  allowedFor: Role;
}

export const AccessController: FC<AccessControllerProps> = ({
  allowedFor,
  children,
}) => {
  const role = getDataFromTokenModel("role");

  const hasPermission = () => {
    if (!role) {
      return false;
    }
    return allowedFor === role;
  };

  if (!hasPermission()) {
    return null;
  }

  return <>{children}</>;
};
