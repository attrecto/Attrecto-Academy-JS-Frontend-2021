import React, { FC } from "react";
import classNames from "classnames";

interface PageProps {
  title?: string;
  noCard?: boolean;
}

const Page: FC<PageProps> = (props) => {
  const { title, children, noCard } = props;
  return (
    <div className="container pt-3">
      {title ? <h5>{title}</h5> : null}
      <div className={classNames({ "card bg-white shadow p-3": !noCard })}>
        {children}
      </div>
    </div>
  );
};

export default Page;
